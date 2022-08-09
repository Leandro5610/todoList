import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import TodoList from './components/todoList';
import Form from './components/form';

export default function App() {
 const state={
    list:[
      {
          id:'1', text:'bruno'
      },
      {
          id: '2', text:'senai'
      },
      
  ]
  }
  return (
    <View>
      <Form/>
      <TodoList 
      list={state.list} />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  borda:{
    borderWidth:2,
    
  } 
});
