import { useEffect } from "react";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: {
      name_squad: string
    };
}

export function GroupCard({ title, ...rest }: Props){
    return(
        <>
          <S.Container {...rest}>
            <S.Icon/>
            <S.Title> {title} </S.Title>
          </S.Container>
        </>
    )
}