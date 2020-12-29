import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';

function SettingsScreen(props){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings Screen</Text>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      color:'#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SettingsScreen;