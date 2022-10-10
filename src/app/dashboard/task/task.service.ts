import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskResponseInterface } from "./task";
import { ApiResponse } from "../../interfaces/api";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  public fetchTasks(): Observable<ApiResponse<TaskResponseInterface>> {
    return this.httpClient.get<ApiResponse<TaskResponseInterface>>("http://localhost:3000/tasks");
  }
}
