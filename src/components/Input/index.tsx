import * as S from "./style";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
    const { COLORS } = useTheme();
    return (
        <>
            <S.Container
                {...rest}
                placeholderTextColor={COLORS.GRAY_300}
            />
        </>
    )
}