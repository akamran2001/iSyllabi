
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import mockData from '../db/mockData'

function MainScreen (props){
const [task, setTask] = useState(mockData)
return(
    <SafeAreaView style={styles.container}>
      <FlatList data = {task} renderItem = {({item})=>
        (
          <View style={itemStyle(item)}>
            <TouchableOpacity onPress = {()=>props.navigation.navigate('AssignmentDetailScreen',item)}>
              <Text style={styles.title}>{item.class} assigment due on {item.due_date}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const bgcolors = {
  "low" : "#5cb85c",
  "medium" : "#f0ad4e",
  "high" : "#d9534f"
}

itemStyle = function (item){
  return{
    borderColor: "black",
    borderWidth:1,
    backgroundColor: bgcolors[item.priority],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  }
});

export default MainScreen;