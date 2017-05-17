// truncate.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 200) : 200;
    let trail = args.length > 1 ? args[1] : '...';
    try{
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }catch(err){      
    }
    
  }
}