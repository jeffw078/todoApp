import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'

// This is the main file of todo app

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);


    // hide keyboard and show new task
    const handleAddTask = () => {
      Keyboard.dismiss();
       setTaskItems([...taskItems, task])
       setTask(null);
    }

    // delete completed Task
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    }


  return (
    
    <View style={styles.container}>
      {/* Todays tasks}*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks,</Text>
        <View style={styles.items}></View>


        {/* This is where tasks will go */}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item}/>
              </TouchableOpacity>
            )            
          })
        }      
      </View>

        
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text )} />
    


        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>


    </View>
  );
}

// start styling
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#E8EAED',
  },
 tasksWrapper: {
   paddingTop: 40,
   paddingHorizontal: 20
 },
 sectionTitle: {
   fontSize: 24,
   fontWeight: 'bold',
 },
 items: {
   marginTop: 30,
 },
 writeTaskWrapper: {
   position: 'absolute',
   bottom: 30,
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
 },
 input: {
   paddingVertical: 15,
   paddingHorizontal: 15,
   backgroundColor: '#fff',
   borderRadius: 60,
   width: 250,
   height: 50,
 },
 addWrapper: {
   width: 60,
   height: 60,
   borderRadius: 60,
   backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
 },
 addText: {
   fontWeight: '200',
   fontSize: 32,
   color: '#85bb65',
 },
//  end styling
});
