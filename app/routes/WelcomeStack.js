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
    },
    SignupScreen: {
        screen: SignupScreen,
    },
    LoginScreen : {
        screen: LoginScreen,
    }
}

const WelcomeStack = createStackNavigator(screens)
export default createAppContainer(WelcomeStack)