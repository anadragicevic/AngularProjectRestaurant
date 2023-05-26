import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user$: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth, private router:Router) {
    auth.authState.subscribe(x => console.log(x));
    this.user$ = auth.authState;
  }

  login() {
    this.auth.signInWithPopup(new GoogleAuthProvider).then(
      res=> {
        Swal.fire({
          
          title: 'Uspešna prijava!',
          text: 'Spremni ste za online poručivanje.',
          color: '#F0DDC8',
          background: '#000000',
          icon: 'success',
          showConfirmButton: false,
          width: '25%' ,
          timer: 4000
        })
        this.router.navigate(['/jelovnik']);
        localStorage.setItem('token', JSON.stringify(res.user));
      }, err => {
        alert(err.message);
      }
    )
  }

  logout() {
    this.auth.signOut();
  }
}
