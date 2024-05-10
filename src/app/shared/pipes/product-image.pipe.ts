import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {

  noImageLink = 'assets/images/no-Image-available.png';

  transform(values: string[] | Array<string>[]): string {
    const images = values.map(element => Array.isArray(element) ? element[0] : element);   
    const imgLink = images[0].replace('[','').replace(']','').replaceAll('"','');
    const imageFormats = ['jpeg','jpg','png'];
    return imgLink.includes(imageFormats[0]) || imgLink.includes(imageFormats[1]) || imgLink.includes(imageFormats[2]) ? imgLink : this.noImageLink;
  }

}
