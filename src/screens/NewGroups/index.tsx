import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import * as S from "./style";

type Props = {
    title: string;
}

export function NewGroups() {
    const navigation = useNavigation();

    const [group, setGroup] = useState('');

    async function handleNew(){
        try {
            if(group.trim().length == 0){
                return Alert.alert('Novo Grupo', 'Informe o nome da turma')
            }
            
            await groupCreate(group);
            navigation.navigate('players', { group });
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Novo Grupo', error.message);
            }else{
                Alert.alert('Novo Grupo','Não foi possivel criar um novo grupo');
                console.log(error);
            }
            
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
                        subtitle="Crie a turma para adicionar os jogadores"
                    />

                     <Input
                       placeholder="Nome da turma"
                       onChangeText={setGroup}
                       onSubmitEditing={handleNew}
                       returnKeyType="default"
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