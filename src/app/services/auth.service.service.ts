import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user$: Observable<firebase.User>;

  constructor(private auth:AngularFireAuth) {
    auth.authState.subscribe(x=>console.log(x));
    this.user$=auth.authState;
   }

   login(){
     this.auth.signInWithPopup(new GoogleAuthProvider)
   }

   logout(){
     this.auth.signOut();
   }
}
