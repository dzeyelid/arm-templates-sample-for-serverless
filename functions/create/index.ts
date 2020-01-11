import { AzureFunction, HttpRequest } from "@azure/functions"
import CreateTaskContext from '../core/interfaces/createTaskContext'
import Task from '../core/interfaces/task'
import ResponseBody from "../core/interfaces/responseBody";

const httpTrigger: AzureFunction = async function (context: CreateTaskContext, req: HttpRequest): Promise<void> {

  let errorMessage: string;
  if (!req.body) {
    errorMessage = 'Missing body'
  } else if (!req.body.title) {
    errorMessage = 'Missing title'
  }

  if (errorMessage) {
    context.res = {
      status: 400,
      body: {
        success: false,
        message: errorMessage
      }
    }
    return;
  }

  let task: Task = {
    userId: req.params.userId,
    title: req.body.title,
  }

  if (req.body.dueDate) {
    task.dueDate = req.body.dueDate
  }

  context.bindings.newTask = JSON.stringify(task)

  context.res = {
    status: 201,
    body: {
      success: true,
      data: task
    }
  }
};

export default httpTrigger;
