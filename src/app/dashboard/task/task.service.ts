import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskInterface } from "./task";
import { ApiResponse } from "../../interfaces/api";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  public fetchTasks(): Observable<ApiResponse<TaskInterface[]>> {
    return this.httpClient.get<ApiResponse<TaskInterface[]>>("http://localhost:3000/tasks");
  }
}
