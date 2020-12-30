import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AssignmentDetailScreen from "../screens/AssignmentDetailScreen";
import Header from "../shared/header"

const screens = {
    MainScreen : {
        screen : MainScreen,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Tasks' navigation={navigation} />
            }
        },
    },
    AssignmentDetailScreen : {
        screen : AssignmentDetailScreen,
        navigationOptions: {
            title: "Details"
        }
    }
}

const MainStack = createStackNavigator(screens)
export default MainStack