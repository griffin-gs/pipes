import { Pipe, PipeTransform } from '@angular/core';
import {Server} from "./app.component";

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any {
    // return value.sort((a: Server, b: Server) => a.name < b.name ? -1: a.name > b.name ? 1 : 0);
    return value.sort((a: any, b: any) => {
      if (a[propName] < b[propName]) {
        return -1;
      } else {
        return 1;
      }
    });
  }

}
