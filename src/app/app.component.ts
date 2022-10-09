import { Component, OnInit } from "@angular/core";
import { TaskService } from "./task/task.service";
import { TaskInterface } from "./task/task";
import { Observable } from "rxjs";
import { ApiResponse } from "./interfaces/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public tasks$: Observable<ApiResponse<TaskInterface[]>> | undefined;

  constructor(private taskService: TaskService) {
  }

  public ngOnInit(): void {
    this.tasks$ = this.taskService.fetchTasks()
  }

  title = "angular-fs";
}
