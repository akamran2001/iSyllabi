import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

import React from 'react';
import Navigator from "./app/routes/Drawer";

export default function App() {
  return <Navigator/>;
}