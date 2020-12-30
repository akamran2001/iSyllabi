import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import SettingsStack from './SettingsStack'
import MainStack from "./MainStack"

const DrawerNavigator = createDrawerNavigator({
    MainStack : {
        screen : MainStack,
        navigationOptions:{
            title: "Tasks"
        }
    },
    SettingsStack : {
        screen: SettingsStack,
        navigationOptions:{
            title: "Settings"
        }
    },
})

export default createAppContainer(DrawerNavigator)