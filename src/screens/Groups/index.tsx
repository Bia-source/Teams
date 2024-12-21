import React, { FlatList, Text } from "react-native";
import * as S from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useCallback, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupGetAll";
import { Loading } from "@components/Loading";

export function Groups() {
    const [groups, setGroup] = useState<any[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(true);
    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new')
    }

    async function fetchGroups() {
        try {
            setIsLoading(true);
            const data = await groupsGetAll();
            setGroup(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group });
    }

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []))

    return (
        <S.Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            {isloading ?
                <Loading />
                :
                <FlatList
                    data={groups}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <GroupCard
                            title={item.squad.name_squad}
                            onPress={() => handleOpenGroup(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        groups.length === 0 && { flex: 1 }
                    ]}
                    ListEmptyComponent={(
                        <ListEmpty message="Você não possui nenhuma turma cadastrada" />
                    )}

                />
            }


            <Button
                style={{ marginTop: 30 }}
                title="Criar nova turma"
                onPress={handleNewGroup}
            />
        </S.Container>
    )
}

