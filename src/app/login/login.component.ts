import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  // use dependency injection to injection the router object.
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
      if(this.userName==="Teboho" && this.password==="123"){
        // Navigate to welcome page
        this.router.navigate(['welcome'])
        this.isInvalidCredentials =false

      }
      else{
        this.isInvalidCredentials =true
      }
  }

}
