import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MainScreen from "../screens/MainScreen";
import AssignmentDetailScreen from "../screens/AssignmentDetailScreen";

const screens = {
    MainScreen : {
        screen : MainScreen,
        navigationOptions: {
            headerShown: false
          },
    },
    AssignmentDetailScreen : {
        screen : AssignmentDetailScreen,
        navigationOptions: {
            title: null
        },
    }
}

const MainStack = createStackNavigator(screens)
export default MainStack