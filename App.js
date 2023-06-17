import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, padding: 20,marginTop:50 }}>
        <TaskList />
        <AddTaskForm />
      </View>
    </Provider>
  );
};

export default App;
