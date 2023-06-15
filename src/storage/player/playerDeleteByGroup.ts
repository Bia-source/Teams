import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
    group: string;
    playerName: string;
}

export async function playersDeleteByGroup({ group, playerName}: Props ){
   try {
      const storage = await playersGetByGroup(group);
      const filtered = storage.filter(player => player.name !== playerName);
      const players = JSON.stringify(filtered);
      AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
   } catch (error) {
     throw error;
   }
}