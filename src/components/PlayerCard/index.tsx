import { TouchableOpacityProps } from "react-native";
import * as S from "./style";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = TouchableOpacityProps & {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
        <>
            <S.Container>
                <S.Icon name="person" />
                <S.Name>
                    {name}
                </S.Name>
                <ButtonIcon
                    icon="close"
                    type="SECONDARY"
                    onPress={onRemove}
                />
            </S.Container>
        </>
    )
}