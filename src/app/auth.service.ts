import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  serviceRegister(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
      })
  }

  serviceSignIn(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  serviceSignOut() {
    this.firebaseAuth.auth.signOut();
  }

}