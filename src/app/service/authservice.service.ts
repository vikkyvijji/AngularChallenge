import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  activeUser = false;
  constructor() { }

  login(form) {
    let result = [];
    let usersList = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[]
    if(usersList && usersList.length > 0 ) {
      usersList.forEach((element, index) => {
        if(element.name === form.controls['name'].value && element.password===form.controls['password'].value) {
          result.push(element);
        }
      });
    }
    if(result.length > 0) {
      this.activeUser = true;
    }

    return result[0];
  }

  isLoggin() {
    return this.activeUser;
  }
  
  logOut() {
    this.activeUser = false;
    return this.activeUser;
  }
}
