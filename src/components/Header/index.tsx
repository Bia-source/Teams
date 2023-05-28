import { BackIcon, Backbutton, Container, Logo } from "./style";

import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {showBackButton &&
                <Backbutton>
                    <BackIcon />
                </Backbutton>
            }

            <Logo source={logoImg} />
        </Container>
    )
}