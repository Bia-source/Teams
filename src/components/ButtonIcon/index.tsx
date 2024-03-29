import * as S from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest}: Props){
    return(
        <>
         <S.Container {...rest}>
             <S.Icon
               name={icon}
               type={type}
             />
         </S.Container>
        </>
    )
}