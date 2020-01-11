import { Context } from "@azure/functions"
import Task from './task'
import ResponseBody from './responseBody'

export default interface InputFunctionContext extends Context {
  res: {
    status?: number
    body: ResponseBody
  }
}
