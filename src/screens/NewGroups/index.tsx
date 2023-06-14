import { Header } from "@components/Header";
import * as S from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { groupsGetAll } from "@storage/group/groupGetAll";
import { groupCreate } from "@storage/group/groupCreate";

type Props = {
    title: string;
}

export function NewGroups() {
    const navigation = useNavigation();

    const [group, setGroup] = useState('');

    async function handleNew(){
        try {
            await groupCreate(group);
            navigation.navigate('players', { group });
        } catch (error) {
            console.log(error);
        }
       
    }


    return (
        <>
            <S.Container>
                <Header showBackButton />
                <S.Content>
                    <S.Icon />
                    <Highlight
                        title="Nova Turma"
                        subtitle="Crie a turma para adicionar as pessoas"
                    />

                     <Input
                       placeholder="Nome da turma"
                       onChangeText={setGroup}
                      />
                    <Button 
                    title="Criar" 
                    style={{marginTop: 20}} 
                    onPress={handleNew}
                    />
                </S.Content>
            </S.Container>
        </>
    )

}