import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, FlatList } from 'react-native';

function AssignmentDetailScreen({navigation}){
    return (
      <SafeAreaView style={styles.container}>
          <View style = {styles.class}>
          <Text style = {styles.text}>
            {navigation.getParam('class')}
          </Text>
        </View>
        <View style={styles.description}>
          <Text style = {styles.text}>
            <Text
                  style = {{
                      textDecorationLine: 'underline'
                  }}
              >{navigation.getParam('type')} {"\n \n"}
            </Text>
            {navigation.getParam('details')}
          </Text>
        </View>

        <View style={styles.due_date}>
          <Text style = {styles.text}>
            {navigation.getParam('due_date')}
          </Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: "#ffffff"
  },
  text : {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  class: {
    borderColor: "black",
    borderWidth:1,
    backgroundColor: "#ffb3ba",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  description:{
    flex:1,
    borderColor: "black",
    borderWidth:1,
    backgroundColor: "#ffdfba",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  due_date:{
    borderColor: "black",
    borderWidth:1,
    backgroundColor: "#bae1ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})

export default AssignmentDetailScreen;