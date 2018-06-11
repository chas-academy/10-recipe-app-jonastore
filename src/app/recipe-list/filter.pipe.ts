import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(alternatives: any[], input: string): any[] {
  if(!input) return alternatives;
  return alternatives.filter( it => {
      return it.toString().toLowerCase().includes(input);
    });
   }
}