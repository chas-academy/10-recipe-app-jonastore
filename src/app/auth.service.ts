import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  user: Observable<firebase.User>;

  constructor(protected fbAuth: AngularFireAuth) {
    this.user = fbAuth.authState;
  }

  serviceRegister(email: string, password: string) {
    this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
      })
  }

  serviceSignIn(email: string, password: string) {
    this.fbAuth.auth.signInWithEmailAndPassword(email, password)
  }

  serviceSignOut() {
    this.fbAuth.auth.signOut();
  }

}