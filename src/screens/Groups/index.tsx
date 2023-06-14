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

export function Groups() {
    const [groups, setGroup] = useState<string[]>([]);

    const navigation = useNavigation();
    
    function handleNewGroup(){
      navigation.navigate('new')
    }

    async function fetchGroups(){
        try {
            const data = await groupsGetAll();
            setGroup(data);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(()=> {
        console.log("useFocusEffect");
      fetchGroups();
    }, []))

    return (
        <S.Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1}}
                ListEmptyComponent={(
                    <ListEmpty message="Você não possui nenhuma turma cadastrada"/>
                )}
            />

           <Button 
             title="Criar nova turma"
             onPress={handleNewGroup}
           />
        </S.Container>
    )
}

