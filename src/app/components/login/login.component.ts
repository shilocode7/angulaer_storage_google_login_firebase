import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FileUploadService } from 'src/app/services/file-upload.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private afAuth: AngularFireAuth,private upFile : FileUploadService
  ) { }
  // like def_init in python to initialize the properties of an object
  ngOnInit(): void { }
   
  loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(googleResponse => {
        // Successfully logged in
        // console.log(googleResponse);
        // Store the user ID in localStorage
        const userId = googleResponse.user?.uid;
        googleResponse.user?.photoURL ? this.upFile.usrImg= googleResponse.user?.photoURL:""
        if (userId) {
          localStorage.setItem('userId', userId);
        }

      }).catch(err => {
        // Login error
        console.log(err);
      });
  }

}