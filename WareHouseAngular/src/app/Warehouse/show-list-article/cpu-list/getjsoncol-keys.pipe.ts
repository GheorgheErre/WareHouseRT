import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getjsoncolKeys'
})
export class GetjsoncolKeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    return Object.keys(value);
  }

}
