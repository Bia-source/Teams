import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, GROUPS_OFFLINE_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll, groupsGetAllOffline } from "./groupGetAll";
import { AppError } from "@utils/AppError";
import NetInfo from "@react-native-community/netinfo";
import { createSquadService } from "@services/squad.service";

interface CreateGroupsResult {
    message: string;
}

export async function groupCreate(newGroupName: string): Promise<CreateGroupsResult> {
    try {
        // verificando conexão com internet
        const stateNetInfo = await NetInfo.fetch();

        if (stateNetInfo.isConnected) {
            const group = await createSquadService(newGroupName);
            console.log("create group db", group);
        } else {
            let storedGroupsOffline = await groupsGetAllOffline();
            let groupAlreadyExists = storedGroupsOffline.includes(newGroupName);
            if (groupAlreadyExists) {
                throw new AppError("Já existe um grupo cadastrado com esse nome!");
            }
            const storage = JSON.stringify([...storedGroupsOffline, newGroupName]);
            await AsyncStorage.setItem(GROUPS_OFFLINE_COLLECTION, storage);
            return { message: "Grupo criado com sucesso! Assim que a conexão for restabelecida, salvaremos as informações no servidor."}
        }

        return { message: "Grupo criado com sucesso no servidor!" }
    } catch (error) {
        throw error;
    }
}

async function syncOfflineGroups(): Promise<CreateGroupsResult> {
    try {
        const storedGroupsOffline = await groupsGetAllOffline();
        if (storedGroupsOffline.length === 0) {
            return { message: "Nenhum grupo para sincronizar!" }
        }

        for (const group of storedGroupsOffline) {
            await createSquadService(group);
        }

        await AsyncStorage.removeItem(GROUPS_OFFLINE_COLLECTION)
        return { message: "Grupos sincronizados com sucesso!" };
    } catch (error) {
        throw new AppError('Erro ao sincronizar grupos offline!');
    }
}

NetInfo.addEventListener((state) => {
    if (state.isConnected) {
        syncOfflineGroups();
    }
})