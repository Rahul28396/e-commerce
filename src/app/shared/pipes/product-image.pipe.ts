import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {

  noImageLink = 'assets/images/no-image-available.png';

  transform(values: string[]): string {
    const images = values;
    
    return images[0] ?? this.noImageLink;
  }

}
