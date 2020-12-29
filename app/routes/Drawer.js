import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Settings from '../screens/SettingsScreen'
import MainStack from "./MainStack"

const DrawerNavigator = createDrawerNavigator({
    MainStack : {
        screen : MainStack,
    },
    Settings : {
        screen: Settings,
    },
})

export default DrawerNavigator