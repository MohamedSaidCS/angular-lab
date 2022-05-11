import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../_models/product";

@Pipe({
  name: 'arraySearch',
  pure: false
})
export class ArraySearchPipe implements PipeTransform {

  transform(value: Product[], search: string = ''): Product[] {
    return value.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }

}
