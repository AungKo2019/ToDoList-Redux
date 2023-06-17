import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTask } from './redux/actions';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask({ id: Date.now(), title: task });
      setTask('');
    }
  };

  return (
    <View style={{marginTop:20}}>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default connect(null, { addTask })(AddTaskForm);
