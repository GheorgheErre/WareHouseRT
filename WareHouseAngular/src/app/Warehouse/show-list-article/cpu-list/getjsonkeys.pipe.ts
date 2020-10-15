import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getjsonkeys'
})
export class GetjsonkeysPipe implements PipeTransform {

  transform(value): any {
    return Object.keys(value);
  }

  
}
