import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
      if(this.hardcodedAuthenticationService.authenticate(this.userName, this.password)){
        // Navigate to welcome page
        this.router.navigate(['welcome', this.userName])
        this.isInvalidCredentials =false

      }
      else{
        this.isInvalidCredentials =true
      }
  }

}
