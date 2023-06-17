import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeTask } from './redux/actions';
import { useSelector,useDispatch } from 'react-redux';

// const TaskList = (tasks,removeTask) => {
const TaskList = () => {
  const tasks=useSelector((state)=>state.tasks)
  const dispatch = useDispatch();

  return (
    <View>
      {tasks.map((task) => (
        <View key={task.id} style={{marginTop:20}}>
          <Text>{task.title}</Text>
          <Button title="Remove" onPress={() => dispatch(removeTask(task.id))} />
        </View>
      ))}
    </View>
  );
};

// const mapStateToProps = (state) => ({
//   tasks: state.tasks,
// });

// export default connect(mapStateToProps, { removeTask })(TaskList);
export default TaskList