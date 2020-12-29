import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import MainStack from "./MainStack";
import Drawer from "./Drawer";

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    SignupScreen: {
        screen: SignupScreen,
        navigationOptions: {
            title: null
        },
    },
    LoginScreen : {
        screen: LoginScreen,
        navigationOptions: {
            title: null
        },
    },
    Drawer : {
        screen : Drawer,
        navigationOptions: {
            headerShown: false
          }
    }
}

const WelcomeStack = createStackNavigator(screens)
export default createAppContainer(WelcomeStack)