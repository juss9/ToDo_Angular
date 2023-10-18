import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories
  }

  getTask(): Task[] {
    return TestData.tasks
  }
  getTaskByCategory(category: Category):Task[]{
    const tasks = TestData.tasks.filter(task => task.category === category)
    console.log(tasks)
    return tasks
  }

}

