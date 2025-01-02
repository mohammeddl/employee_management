import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hireDate',
  standalone: false
})
export class HireDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
