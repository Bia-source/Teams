import React, { Text } from "react-native";
import * as S from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
    return (
        <S.Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            <GroupCard title="Galera do Ignite"/> 
        </S.Container>
    )
}

