import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  prepositions: string[] = ["of", "the"];

  transform(value: string): string {
    if(!value) return null;
  
    let titleWords: string[] = value.split(" ")
    for (let index = 0; index < titleWords.length; index++) {
      const word = titleWords[index];
      if(word !== "") {
        if( ! this.prepositions.includes(word))  {
          let firstCharacter: string = word[0].toUpperCase();
          titleWords[index] = firstCharacter + word.substr(1);
        }
      }
    }
    return titleWords.join(" ");
  }

}
