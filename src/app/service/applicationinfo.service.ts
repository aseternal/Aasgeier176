import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationinfoService {  
  clanName = 'Aasgeier';
  navigationVisible = false;

  // Translation
  public translationArray: any[] = [];

  constructor() { }

  addTranslation(tokenName: string, german: string, english: string) {
    this.translationArray.push({ tokenName: tokenName, german: german, english: english });
 }
}
