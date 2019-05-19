import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sms'
})
export class SmsPipe implements PipeTransform {

  transform(value: any): any {

      if (value.usuarioId._id !== localStorage.getItem('mega')) {
        return;
      }


    }
}
