import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, GROUPS_OFFLINE_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

        const groups: string[] = storage ? JSON.parse(storage) : [];

        return groups;
    } catch (error) {
        throw error;
    }
}

export async function groupsGetAllOffline() {
    try {
        const storage = await AsyncStorage.getItem(GROUPS_OFFLINE_COLLECTION);

        const groups: string[] = storage ? JSON.parse(storage) : [];

        return groups;
    } catch (error) {
        throw error;
    }
}