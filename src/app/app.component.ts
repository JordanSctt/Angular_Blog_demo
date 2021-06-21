import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCdNC0RM0Xgshol3fNxKfVvXWUZQSRQly8",
      authDomain: "angularblog-e73d6.firebaseapp.com",
      databaseURL: "https://angularblog-e73d6-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "angularblog-e73d6",
      storageBucket: "angularblog-e73d6.appspot.com",
      messagingSenderId: "209195601754",
      appId: "1:209195601754:web:2f613d7ca1af106d4b2d63",
      measurementId: "G-47WJNDSGBD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
