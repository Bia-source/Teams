import * as S from "./style";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
   inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
    const { COLORS } = useTheme();
    return (
        <>
            <S.Container
                {...rest}
                placeholderTextColor={COLORS.GRAY_300}
                ref={inputRef}
            />
        </>
    )
}