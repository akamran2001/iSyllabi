
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import mockData from '../db/mockData';
import mockClass from "../db/mockClass";
import CreateTaskForm from '../shared/CreateTaskForm'
import EditTaskForm from '../shared/EditTaskForm'

function MainScreen (props){
  //Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  ///*** Start Mock Database setup ***///
  const [task, setTasks] = useState(mockData)
  const addTask = (task) => {
    task.key = Math.random().toString();
    setTasks((currentTasks)=>{
      return [task, ...currentTasks]
    });
    setModalOpen(false)
  }
  const deleteTask = (key) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.key != key);
    });
  }
  const editTask = (task) => {
    setTasks((currentTasks)=>{
      for (let i=0; i<currentTasks.length;i++){
        if(currentTasks[i].key === task.key){
          currentTasks[i] = task
        }
      }
      return [...currentTasks]
    });
    setEditOpen(false);
  }
  const [prevValues,setPrevValues] = useState({
    key: 0,
    class: '', 
    details: '', 
    type: '',
    due_date: '',
    priority: '' 
  })
  const onEdit = (item) =>{
    setPrevValues(item)
    setEditOpen(true)
  }
  ///*** End Mock Database setup ***///
  const [course, setCourse] = useState(mockClass)

  return(
  <SafeAreaView style={styles.container}>
    {/* Modal for creating a new task*/}
    <Modal visible={modalOpen} animationType='slide'>
      <View style={styles.modalContent}>
        <MaterialIcons 
          name='close'
          size={24} 
          style={{...styles.modalToggle, ...styles.modalClose}} 
          onPress={() => setModalOpen(false)} 
        />
        <CreateTaskForm addTask = {addTask} courseList = {course}/>
      </View>
    </Modal>
    <Ionicons 
      name='add-circle' 
      size={48} 
      style={styles.modalToggle}
      color = "black"
      onPress={() => setModalOpen(true)} 
    />
    {/* Modal for Editing Tasks*/}
    <Modal visible={editOpen} animationType='slide'>
      <View style={styles.modalContent}>
        <MaterialIcons 
          name='close'
          size={24} 
          style={{...styles.modalToggle, ...styles.modalClose}} 
          onPress={() => setEditOpen(false)} 
        />
        <EditTaskForm editTask = {editTask} prevValues = {prevValues} courseList = {course}/>
      </View>
    </Modal>
    <FlatList data = {task} renderItem = {({item})=>
      (<View style={itemStyle(item)}>
        <TouchableOpacity onPress = {()=>props.navigation.navigate('AssignmentDetailScreen',item)}>
          <MaterialIcons 
            name='edit' 
            size={24}
            style = {{
              flex: 1,
              flexDirection: "row",
              textAlign: "right"
            }}
            onPress={() => onEdit(item)} 
          />
          <Text style={styles.title}>
            {item.type.trim()} for {item.class.trim()} due on {item.due_date}
          </Text>
          <MaterialIcons 
            name='delete' 
            size={24}
            style = {{
              flex: 1,
              flexDirection: "row",
              textAlign: "right"
            }}
            onPress={() => deleteTask(item.key)} 
          />
        </TouchableOpacity>
      </View>)}
    />
  </SafeAreaView>
)}

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
    color: "black",
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center'
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});

export default MainScreen;