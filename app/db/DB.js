import React, {Component, useState} from 'react'
class DB extends Component{
    constructor (props){
        super(props)
        this.state = {
            data: []
        }
    }
    viewTasks = () => {
        return this.state.data
    }
    addTask (task) {
        task.key = Math.random().toString();
        this.setState((currentTasks)=>{
            console.log(currentTasks)
            return [task, ...currentTasks]
        });
    }
    editTask = (task) => {
        this.setState((currentTasks)=>{
            console.log(currentTasks)
            for (i=0; i<currentTasks.length;i++){
              if(currentTasks[i].key === task.key){
                currentTasks[i] = task
              }
            }
            return [...currentTasks]
        });
    }
    deleteTask = (key) => {
        this.setState(prevTasks => {
            return prevTasks.filter(task => task.key != key);
        });
    }
}
export default DB