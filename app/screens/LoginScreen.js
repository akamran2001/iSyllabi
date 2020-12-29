import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title = "Main"
                    onPress = {() => props.navigation.navigate("Drawer")}
                />
            </View>
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

export default LoginScreen;