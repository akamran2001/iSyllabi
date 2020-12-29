import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import * as React from 'react';

function WelcomeScreen(props) {
    return (
      <SafeAreaView style = {styles.container}>
          <View style = {styles.imagecontainer}>
            <Image
              style = {styles.logo}
              source = {require('../assets/logo.jpg')}
            />
          </View>
        <View style = {styles.button}>
          <Button
              title="Sign Up"
              onPress={() => props.navigation.navigate('SignupScreen')}
          />
        </View>
        <View style = {styles.button}>
          <Button
              title="Login"
              onPress={() => props.navigation.navigate('LoginScreen')}
          />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button:{
      marginBottom: 10,
      alignItems: 'center',
    },
    imagecontainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '75%',
    },
    logo: {
      width: 250,
      height: 250,
      borderColor: "#000000",
      borderWidth: 5,
    }
  });

export default WelcomeScreen;