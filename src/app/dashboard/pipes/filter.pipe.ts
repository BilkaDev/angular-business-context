import { Pipe, PipeTransform } from '@angular/core';
import { TaskInterface } from "../task/task";

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: TaskInterface[], searchText: string): TaskInterface[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.description.toLocaleLowerCase().includes(searchText);
    });
  }
}
