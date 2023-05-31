import { Header } from "@components/Header";
import * as S from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

type Props = {
    title: string;
}

export function NewGroups({ title }: Props) {
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
                    <Button title="Criar" style={{marginTop: 20}} />
                </S.Content>
            </S.Container>
        </>
    )

}