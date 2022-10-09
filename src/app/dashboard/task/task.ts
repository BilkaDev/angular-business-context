export type Assigned = {
  "person_name": string;
  "status": string;
}[]  | []

export interface TaskInterface {
  "work_order_id": number;
  "description": string;
  "received_date": Date;
  "assigned_to": Assigned;
  "status": string;
  "priority": string;
}
