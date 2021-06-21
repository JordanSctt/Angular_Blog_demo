import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp; 

export class Post {
    
    
    constructor(public title: string, public content: string, public loveIts: number, public createdAt: Timestamp) { }
    
  }

  