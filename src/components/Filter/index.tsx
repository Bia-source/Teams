import { TouchableOpacityProps } from "react-native";
import * as S from "./style";

type Props = TouchableOpacityProps & S.FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest}: Props){
    console.log(isActive)
    return(
        <>
          <S.Container isActive={isActive} {...rest}>
            <S.Title>
                {title}
            </S.Title>
          </S.Container>
        </>
    )
}