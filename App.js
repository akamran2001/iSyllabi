import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

import React from 'react';
import Navigator from "./app/routes/Drawer";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen"

export default function App() {
  return <Navigator/>;
}