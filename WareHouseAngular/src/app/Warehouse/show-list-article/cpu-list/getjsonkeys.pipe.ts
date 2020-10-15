import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getjsonkeys'
})
export class GetjsonkeysPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Object.keys(value);
  }

  
}
