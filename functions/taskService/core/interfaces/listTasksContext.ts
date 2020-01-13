import InputFunctionContext from './inputFunctionContext'
import Task from './task';

export default interface ListTasksContext extends InputFunctionContext {
  bindings: {
    tasks: Task[]
  }
}