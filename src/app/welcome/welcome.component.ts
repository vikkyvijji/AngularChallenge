import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  username: String;

  ngOnInit() {
    let activeUser = JSON.parse(localStorage.getItem('ActiveUser'));
   
    console.log(activeUser);
    this.username = activeUser.name;
  }

}
