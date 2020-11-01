import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm') login:NgForm 
user = {
  name : '',
  email : '',
  checkval : false
}
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.login)
  this.user.name = this.login.value.name;
  this.user.email = this.login.value.email;
  this.user.checkval = this.login.value.check;
  console.log(this.user)
  this.login.reset();
  console.log(this.login)
  }
  okk(event){
    console.log(event.target.checked)
  }

}
