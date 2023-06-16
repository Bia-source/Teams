import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";
import App from "App";

type AddNewPlayerProps = {
    newPlayer: PlayerStorageDTO,
    group: string
}

export async function playerAddByGroup({ newPlayer, group }: AddNewPlayerProps) {
    try {

        const storagePlayers = await playersGetByGroup(group);
        const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name);
        if(playerAlreadyExists.length > 0){
            throw new AppError('Esse jogador já está adicionada em um time aqui')
        }
        const storage = JSON.stringify([...storagePlayers, newPlayer]);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch (error) {
        throw (error);
    }
}