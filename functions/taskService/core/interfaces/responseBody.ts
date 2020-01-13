import Task from "./task";

export default interface ResponseBody {
  success: boolean
  message?: string
  data?: Task[] | Task
}