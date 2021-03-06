import React, {useState} from 'react';
import { StyleSheet, Button, TextInput, View, Text} from 'react-native';;
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EditTaskForm({editTask,prevValues,courseList}){
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const getdate = (date) => {
    let dd = date.getDate().toString()
    let mm = (date.getMonth() + 1).toString()
    let year = date.getFullYear().toString()
    return (`${mm}/${dd}/${year}`)
  }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={
        {   key : prevValues.key,
            class: prevValues.class, 
            details: prevValues.details, 
            type: prevValues.type,
            due_date: prevValues.due_date,
            priority: prevValues.priority 
        }}
        onSubmit={(values,actions) => {
          actions.resetForm();
          editTask(values)
        }}
      >
        {props => (
          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={(event,selectedDate)=>{
                  const currentDate = selectedDate || date;
                  setShow(Platform.OS === 'ios');
                  setDate(currentDate);
                  props.setFieldValue("due_date",getdate(date))
                }}
              />
            )}
            <Picker
              selectedValue = {props.values.class}
              style={styles.input}
              mode='dropdown'
              onValueChange={props.handleChange('class')}
            >
              <Picker.Item label = "Select Class" value = {null} color = "grey" />
              {courseList.map((e)=>{
                return (<Picker.Item label = {e.course} value = {e.course}/>)
              })}
            </Picker>
            <TextInput
              style={styles.input}
              multiline
              placeholder='Details'
              onChangeText={props.handleChange('details')}
              value={props.values.details}
            />
            <TextInput 
              style={styles.input}
              placeholder='Type'
              onChangeText={props.handleChange('type')}
              value={props.values.type}
            />
            <TextInput 
              style={styles.input}
              placeholder='Due Date'
              onChangeText={props.handleChange('due_date')}
              value={props.values.due_date}
              keyboardType='numbers-and-punctuation'
            />
            <Button title = "Pick Due Date" color = "navy" onPress = {()=>{
              showDatepicker()
            }}/>
            <Text style = {{
                padding: 10,
                fontSize: 18,
                color: 'gray',
                paddingLeft: 0,
            }}> Priority </Text>
            <Picker
                selectedValue = {props.values.priority}
                style={styles.input}
                mode='dropdown'
                onValueChange={props.handleChange('priority')}
            >
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="High" value="high" />
            </Picker>
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      }
})