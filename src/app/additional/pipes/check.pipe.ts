import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value, args?) {
    return value.filter(v => {
      console.log(args);
      if(args){
        return value;
      }
    });
  }

}
