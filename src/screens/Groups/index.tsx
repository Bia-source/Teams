import React, { FlatList, Text } from "react-native";
import * as S from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
    const [group, setGroup] = useState<string[]>(['Grupo rocket', 'Amigos bons de bola']);

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


        </S.Container>
    )
}

