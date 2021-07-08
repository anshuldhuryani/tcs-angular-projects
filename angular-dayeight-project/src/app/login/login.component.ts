import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: '',
    password: ''
  };

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.username == "admin" && this.user.password == "admin") {
      localStorage.setItem('isLoggedIn', "true");
      alert('LoggedIn Successfully.');
      this._router.navigate(['/home']);
    } else {
      alert('Login Failed. Try Again');
    }
  }

}
