import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import SettingsStack from './SettingsStack'
import MainStack from "./MainStack"
import CreateTaskStack from "./CreateTaskStack";

const DrawerNavigator = createDrawerNavigator({
    MainStack : {
        screen : MainStack,
        navigationOptions:{
            title: "Tasks"
        }
    },
    // CreateTaskStack : {
    //     screen : CreateTaskStack,
    //     navigationOptions: {
    //         title: "Create Task"
    //     }
    // },
    SettingsStack : {
        screen: SettingsStack,
        navigationOptions:{
            title: "Settings"
        }
    },
});

export default createAppContainer(DrawerNavigator)