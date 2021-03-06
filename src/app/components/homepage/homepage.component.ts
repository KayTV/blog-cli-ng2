import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Post } from '../../models/posts';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.html',
  styleUrls: ['../../styles/homepage.css', '../../styles/shared.css']
})

export class HomepageComponent implements OnInit {
  title = 'app works!';
  items: FirebaseListObservable<Post[]>;
  item: FirebaseListObservable<Post>;

  constructor(
    private af: AngularFire,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = this.af.database.list('/posts');
  }

  onSelect(item: Post) {
    this.router.navigate(['/post', item.$key]);
  }
}
