import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  username: string = '';
  password: string = '';
  usernameValid: boolean = true;
  passwordValid: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

  onKeyUpUsername(e: any) {
    this.username = e.target.value;
  }

  onKeyUpPassword(e: any) {
    this.password = e.target.value;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.usernameValid = this.username.length > 0;
    this.passwordValid = this.password.length > 0;
    if (this.usernameValid && this.passwordValid) {
      const data = {
        username: this.username,
        password: this.password,
      };
      if (this.username === 'Rajotiana' && this.password === '0000') {
        this.isLoggedIn = true;
        console.log(data);
      } else {
        this.isLoggedIn = false;
      }
    }
  }
}
