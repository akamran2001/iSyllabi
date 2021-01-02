import React from "react";
import {StyleSheet,Text,View,SafeAreaView,StatusBar} from 'react-native'

function CreateTaskScreen (props) {
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <Text> CreateTask </Text>
                <StatusBar style = "auto"/>
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
    }
});

export default CreateTaskScreen;