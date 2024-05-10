import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productHeaderText'
})
export class ProductHeaderTextPipe implements PipeTransform {

  transform(value: string, trimIndex: number = 20): string {
    const newValue = value;
    return newValue.length > trimIndex
      ? `${newValue.slice(0, trimIndex)}...`
      : newValue;
  }

}
