import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '0',
    title: 'A',
  },
  {
    id: '1',
    title: 'B',
  },
  {
    id: '2',
    title: 'C',
  },
  {
    id: '3',
    title: 'D',
  },
  {
    id: '4',
    title: 'E',
  },
  {
    id: '5',
    title: 'F',
  },
  {
    id: '6',
    title: 'G',
  },
  {
    id: '7',
    title: 'H',
  }
];

const Item = ({ title,props }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress = {()=>props.navigation.navigate('AssignmentDetailScreen')}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    
  </View>
);

function MainScreen(props) {
  const renderItem = ({ item }) => (
    <Item title={item.title} props = {props}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MainScreen;