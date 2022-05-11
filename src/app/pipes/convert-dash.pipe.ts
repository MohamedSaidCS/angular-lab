import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDash'
})
export class ConvertDashPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace('-', ' ');
  }

}
