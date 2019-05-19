import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value === undefined) {
      return '../../assets/public/temp/123.png';
    }

  }

}
