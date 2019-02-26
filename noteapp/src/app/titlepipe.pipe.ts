import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'

})
export class TitlepipePipe implements PipeTransform {

  transform(mainTitle: any, title: any): any {
    if (mainTitle.toString().length > 15) {
      return (mainTitle.slice(0,15)+'...');
    }else{
      return (mainTitle);
    }
  }

}
