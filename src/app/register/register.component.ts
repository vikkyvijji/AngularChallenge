import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { AuthguardService } from '../service/authguard.service';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: NgForm;
  constructor(private authservice : AuthserviceService, private authguard:AuthguardService, private router: Router ) { }

  onRegister(form: NgForm) {
   let usersList = localStorage.getItem('users') && localStorage.getItem('users') !== '' ? JSON.parse(localStorage.getItem('users')):[];
   usersList.push({name:form.controls['name'].value, password: form.controls['password'].value});
   localStorage.setItem('users' , JSON.stringify(usersList));
   this.router.navigate(['login']);
  }

  
   


  ngOnInit() {
  }

 

}
