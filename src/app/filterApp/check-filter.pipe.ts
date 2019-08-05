import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkFilter'
})
export class CheckFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
