import { Injectable, Pipe, PipeTransform } from '@angular/core';  
import { ApplicationinfoService } from '../service/applicationinfo.service';
 
 @Injectable({
   providedIn: 'root'
 })

 @Pipe ({ name: 'translate' }) 

 export class TranslatePipe implements PipeTransform {      
   constructor(private applicationinfoService: ApplicationinfoService) {}   
   public translationLanguage: any = 'german';

   transform(tokenName: any) { 
      let returnValue = this.applicationinfoService.translationArray.filter(x => x.tokenName == tokenName);      
      console.warn('XXX', returnValue);
      if (returnValue.length == 0) {
         return tokenName;
      } else {
         return returnValue[0][this.translationLanguage];
      }      
   }     


 } 