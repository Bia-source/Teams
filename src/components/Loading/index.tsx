import React, { } from "react-native";
import * as S from "./style";

export function Loading(){
    return (
        <>
         <S.Container>
            <S.LoadingIndicator color="red"/>
         </S.Container>
        </>
    )
}