import { AzureFunction, HttpRequest } from "@azure/functions"
import ListTasksContext from '../core/interfaces/listTasksContext'

const httpTrigger: AzureFunction = async function (context: ListTasksContext, req: HttpRequest, tasks: any): Promise<void> {
  context.res = {
    body: {
      success: true,
      data: context.bindings.tasks
    }
  }
};

export default httpTrigger;
