import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { NewGroups } from "@screens/NewGroups";
import { Players } from "@screens/Players";

const { Navigator, Screen } = createNativeStackNavigator();

// type Props = {
//   name: string;
// }

export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
              name="groups"
              component={Groups}
            />
            <Screen 
              name="new"
              component={NewGroups}
            />
            <Screen 
              name="players"
              component={Players}
            />
        </Navigator>
    )
}