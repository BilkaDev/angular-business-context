import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    TaskComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
