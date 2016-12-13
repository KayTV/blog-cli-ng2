import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './post.html'
})

export class PostComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) { }
}
