import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

import React from 'react';
import Navigator from "./app/routes/Drawer";
import Main from "./app/screens/MainScreen"

export default function App() {
  return <Navigator/>;
}