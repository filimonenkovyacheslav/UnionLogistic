import {combineReducers} from 'redux';
import {signInReducer} from './user';
import {fetchTasksReducer} from './tasks';
import {updateTaskReducer} from './task';
import {addDataReducer} from './addData';


export default combineReducers({
  auth: signInReducer,
  fetchTasks: fetchTasksReducer,
  updateTask: updateTaskReducer,
  addData: addDataReducer
});
