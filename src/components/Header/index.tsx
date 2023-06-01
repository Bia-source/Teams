import * as S from "./style";

import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <S.Container>
            {showBackButton &&
                <S.Backbutton>
                    <S.BackIcon />
                </S.Backbutton>
            }

            <S.Logo source={logoImg} />
        </S.Container>
    )
}