import { Component, Input } from "@angular/core";

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
  public received_date!: string;
  @Input()
  public assigned_to!: {
  "person_name": string;
  "status": string;
}[]  | [];
  @Input()
  public status!: string;
  @Input()
  public priority!: string;

}
