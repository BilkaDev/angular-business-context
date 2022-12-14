import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from "@angular/forms";
import { SearchTaskComponent } from './search-task/search-task.component';
import { ShortNamePipe } from "./pipes/short-name.pipe";
import { StatusPipe } from "./pipes/status.pipe";



@NgModule({
  declarations: [
    TaskComponent,
    DashboardComponent,
    FilterPipe,
    StatusPipe,
    ShortNamePipe,
    SearchTaskComponent
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
