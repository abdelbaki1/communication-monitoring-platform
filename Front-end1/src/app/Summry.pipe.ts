import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'summry'

})
export class Summry implements PipeTransform{
    transform(value: string, ...args: any[]) {
        if(!value)
          return null
        return value.substring(0,40)+"....."
        
    }


}