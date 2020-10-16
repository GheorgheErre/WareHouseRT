import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getjsonvalues'
})
export class GetjsonvaluesPipe implements PipeTransform {

  transform(value, args: string[]): any{

    let keys = Object.keys(value);
    console.log(keys.map(k => value[k]));
    return keys.map(k => value[k]);
  }

}
