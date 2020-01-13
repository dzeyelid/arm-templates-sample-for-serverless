import InputFunctionContext from './inputFunctionContext'
import Task from './task';

export default interface CreateTasksContext extends InputFunctionContext {
  bindings: {
    newTask: string
  }
}