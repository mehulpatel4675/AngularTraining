import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

