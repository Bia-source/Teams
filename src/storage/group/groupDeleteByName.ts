import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION, GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupDeleteByName(groupDeleted: string){
    try {
        const storageGroups = await groupsGetAll();
        const groups = storageGroups.filter(group => group !== groupDeleted);
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
    } catch (error) {
        throw error;
    }

}