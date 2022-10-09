import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "shortName" })
export class ShortNamePipe implements PipeTransform {
  transform(fullName: string): string {
    if (!fullName) {
      return "NN";
    }
    const array = fullName.split(" ");
    const short = array[0][0] + array [1][0];

    return short.toUpperCase();
  }
}
