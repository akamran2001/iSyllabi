import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, FlatList } from 'react-native';

function AssignmentDetailScreen({navigation}){
    return (
        <SafeAreaView style={{flex:1, backgroundColor: "#ffffff"}}>
            <View style={{
            borderColor: "black",
            borderWidth:1,
            backgroundColor: "#ffb3ba",
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          }}>
            <Text style = {{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black"
            }}>
                {navigation.getParam('class')}
            </Text>
          </View>

          <View style={{
            flex:1,
            borderColor: "black",
            borderWidth:1,
            backgroundColor: "#ffdfba",
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          }}>
            <Text style = {{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black"
            }}>
                <Text
                    style = {{
                        textDecorationLine: 'underline'
                    }}
                >{navigation.getParam('type')} {"\n \n"}</Text>

                {navigation.getParam('details')}
            </Text>
          </View>

          <View style={{
            borderColor: "black",
            borderWidth:1,
            backgroundColor: "#bae1ff",
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          }}>
            <Text style = {{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black"
            }}>
                {navigation.getParam('due_date')}
            </Text>
          </View>
        </SafeAreaView>
    );
}


export default AssignmentDetailScreen;