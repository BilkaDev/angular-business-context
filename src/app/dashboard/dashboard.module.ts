import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations: [
    TaskComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
