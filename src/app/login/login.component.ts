import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "Teboho"
  password = ""
  invalidCredentials = "invalid credentials"
  isInvalidCredentials = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
      if(this.userName==="Teboho" && this.password==="123"){
        this.isInvalidCredentials =false

      }
      else{
        this.isInvalidCredentials =true
      }
  }

}
