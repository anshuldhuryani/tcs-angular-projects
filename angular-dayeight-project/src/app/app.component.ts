import { AuthGuard } from './services/auth-guard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginStatus: boolean = false;

  constructor(private _authGuard: AuthGuard) { }

  ngOnInit(): void {
    this.loginStatus = this._authGuard.isLoggedIn();
  }

  logout() {
    this._authGuard.logout();
    window.location.reload();
  }

}
