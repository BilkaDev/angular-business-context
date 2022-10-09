import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent {
  public searchText = '';

  @Output() searchEvent = new EventEmitter<string>();
  search() {
    this.searchEvent.emit(this.searchText);
  }
}
