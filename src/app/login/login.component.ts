import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { AuthguardService } from '../service/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: NgForm;
  constructor(private authservice: AuthserviceService, private authguard:AuthguardService, private router: Router) { }

  onLogin(form: NgForm) {
    console.log(form);
    let activeuser = this.authservice.login(form);
    if(this.authservice.isLoggin()) {
      localStorage.setItem('ActiveUser', JSON.stringify(activeuser));
      this.router.navigate(['welcome']);
    }

  }

}
  

 

