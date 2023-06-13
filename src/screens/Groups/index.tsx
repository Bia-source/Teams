import React, { FlatList, Text } from "react-native";
import * as S from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
    const [group, setGroup] = useState<string[]>([]);

    const navigation = useNavigation();
    
    function handleNewGroup(){
      navigation.navigate('new')
    }

    return (
        <S.Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />

            <FlatList
                data={group}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={group.length === 0 && { flex: 1}}
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

