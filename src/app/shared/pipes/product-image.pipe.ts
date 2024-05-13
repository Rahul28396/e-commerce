import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {

  noImageLink = 'assets/images/no-Image-available.png';

  imageFormats = ['jpeg', 'jpg', 'png'];

  transform(values: string | string[] | Array<string>[]): string {

    if (Array.isArray(values)) {
      const images = values.map(element => Array.isArray(element) ? element[0] : element);
      const imgLink = images[0].replace('[', '').replace(']', '').replaceAll('"', '');

      return imgLink.includes(this.imageFormats[0]) || imgLink.includes(this.imageFormats[1]) || imgLink.includes(this.imageFormats[2])
        ? imgLink
        : this.noImageLink;

    } else {
      const imgLink = values.replace('[', '').replace(']', '').replaceAll('"', '');
      return imgLink.includes(this.imageFormats[0]) || imgLink.includes(this.imageFormats[1]) || imgLink.includes(this.imageFormats[2])
        ? imgLink
        : this.noImageLink;;
    }

  }

}
