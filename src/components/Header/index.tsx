import { useNavigation } from "@react-navigation/native";
import * as S from "./style";

import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    
    const navigation = useNavigation();

    function handleGoHome(){
       navigation.navigate('groups');
    }
    
    return (
        <S.Container>
            {showBackButton &&
                <S.Backbutton onPress={handleGoHome}>
                    <S.BackIcon />
                </S.Backbutton>
            }

            <S.Logo source={logoImg} />
        </S.Container>
    )
}