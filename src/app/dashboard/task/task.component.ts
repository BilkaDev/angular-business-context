import { Component, Input } from "@angular/core";
import { Assigned } from "./task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent {

  @Input()
  public work_order_id!: number;
  @Input()
  public description!: string;
  @Input()
  public received_date!: Date;
  @Input()
  public assigned_to!: Assigned;
  @Input()
  public status!: string;
  @Input()
  public priority!: string;

}
