import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from "../screens/SettingsScreen";
import Header from "../shared/header"

const screens = {
    SettingsScreen : {
        screen : SettingsScreen,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Settings' navigation={navigation} />
            }
        },
    }
}

const SettingsStack = createStackNavigator(screens)
export default SettingsStack