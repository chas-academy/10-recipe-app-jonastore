import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  userRegister() {
    this.authService.serviceRegister(this.email, this.password);
    this.email = this.password = '';
  }

  userSignIn() {
    this.authService.serviceSignIn(this.email, this.password);
    this.email = this.password = '';    
  }

  userSignOut() {
    this.authService.serviceSignOut();
  }


}
