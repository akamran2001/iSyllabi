import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';

function AssignmentDetailScreen(props){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Assignment Detail Screen</Text>
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

export default AssignmentDetailScreen;