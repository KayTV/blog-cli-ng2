import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.html',
  styleUrls: ['../../styles/homepage.css']
})

export class HomepageComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/posts');
  }
}
