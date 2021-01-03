import React from 'react';
import { StyleSheet, Button, TextInput, View, Text} from 'react-native';;
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';

export default function EditTaskForm({editTask,prevValues}){
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