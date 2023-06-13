import { Header } from "@components/Header";
import * as S from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
}

export function NewGroups() {

    const navigation = useNavigation();

    function handleNew(){
       navigation.navigate('players', { group: 'Rocket'});
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