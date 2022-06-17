import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    if(username==='Teboho' && password==='123'){
      return true
    }
    return false


  }
}
