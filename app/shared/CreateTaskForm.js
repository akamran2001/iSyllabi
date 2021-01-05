import React from 'react';
import { StyleSheet, Button, TextInput, View, Text} from 'react-native';;
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';

export default function CreateTaskForm({addTask}){
  return (
    <View style={styles.container}>
      <Formik
        initialValues={
        {   class: '', 
            details: '', 
            type: '',
            due_date: '',
            priority: '' 
        }}
        onSubmit={(values,actions) => {
          actions.resetForm();
          addTask(values)
        }}
      >
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Class'
              onChangeText={props.handleChange('class')}
              value={props.values.class}
            />
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
            <Picker
                selectedValue = {props.values.priority}
                style={styles.input}
                mode='dropdown'
                onValueChange={props.handleChange('priority')}
            >
                <Picker.Item label = "Priority (Low, Medium or High)" value = {null} /> 
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