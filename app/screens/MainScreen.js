
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, FlatList, TouchableOpacity } from 'react-native';

function MainScreen (props){
  const [task, setTask] = useState([
    {key:1,class:"Sociology",details:"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",type:"nec condimentum",due_date:"03/25/2020",priority:"medium"},
    {key:2,class:"Calculus",details:"Morbi porttitor lorem key ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",type:"placerat ante",due_date:"03/30/2020",priority:"high"},
    {key:3,class:"Calculus",details:"Phasellus in felis. Donec semper sapien a libero.",type:"lectus",due_date:"12/12/2020",priority:"medium"},
    {key:4,class:"Computer Science",details:"Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",type:"volutpat quam",due_date:"12/28/2020",priority:"high"},
    {key:5,class:"Calculus",details:"Morbi porttitor lorem key ligula. Suspendisse ornare consequat lectus.",type:"ut tellus",due_date:"06/01/2020",priority:"low"},
    {key:6,class:"Computer Science",details:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus key sapien in sapien iaculis congue.",type:"nec",due_date:"05/31/2020",priority:"high"},
    {key:7,class:"Sociology",details:"In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",type:"dui",due_date:"04/21/2020",priority:"low"},
    {key:8,class:"Sociology",details:"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",type:"morbi",due_date:"02/02/2020",priority:"low"},
    {key:9,class:"Computer Science",details:"Vivamus tortor. Duis mattis egestas metus.",type:"volutpat",due_date:"08/02/2020",priority:"medium"},
    {key:10,class:"Computer Science",details:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",type:"in",due_date:"09/29/2020",priority:"medium"},
    {key:11,class:"Calculus",details:"In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",type:"laoreet ut",due_date:"11/17/2020",priority:"medium"},
    {key:12,class:"Sociology",details:"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam key ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",type:"volutpat eleifend",due_date:"06/03/2020",priority:"high"},
    {key:13,class:"Sociology",details:"Duis mattis egestas metus. Aenean fermentum.",type:"neque aenean",due_date:"07/22/2020",priority:"medium"},
    {key:14,class:"Calculus",details:"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",type:"in",due_date:"01/05/2020",priority:"high"},
    {key:15,class:"Calculus",details:"Nunc purus. Phasellus in felis.",type:"dui luctus",due_date:"01/02/2020",priority:"medium"},
    {key:16,class:"Calculus",details:"Sed ante. Vivamus tortor. Duis mattis egestas metus.",type:"convallis",due_date:"07/15/2020",priority:"high"},
    {key:17,class:"Calculus",details:"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",type:"consectetuer adipiscing",due_date:"12/17/2020",priority:"low"},
    {key:18,class:"Computer Science",details:"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",type:"orci eget",due_date:"10/06/2020",priority:"medium"},
    {key:19,class:"Sociology",details:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",type:"commodo",due_date:"12/06/2020",priority:"low"},
    {key:20,class:"Calculus",details:"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",type:"phasellus",due_date:"02/09/2020",priority:"low"}
  ]);
  const bgcolors = {
    "low" : "#5cb85c",
    "medium" : "#f0ad4e",
    "high" : "#d9534f"
  }
  return(
    <SafeAreaView style={styles.container}>
      <FlatList data = {task} renderItem = {({ item })=>
        (
          <View style={{
            borderColor: "black",
            borderWidth:1,
            backgroundColor: bgcolors[item.priority],
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          }}>
            <TouchableOpacity onPress = {()=>props.navigation.navigate('AssignmentDetailScreen',item)}>
              <Text style={styles.title}>{item.class} assigment due on {item.due_date}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
});

export default MainScreen;