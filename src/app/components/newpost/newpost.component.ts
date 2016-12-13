import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../../models/posts';

@Component({
  selector: 'new-post',
  templateUrl: './newpost.html',
  styleUrls: ['../../styles/shared.css']
})

export class NewPostComponent implements OnInit {
  items: FirebaseListObservable<Post[]>;

  constructor(
    private af: AngularFire,
    private location: Location
  ) { }

  ngOnInit() {
    this.items = this.af.database.list('/posts');
  }

  addPost(title: string, body: string, description: string) {
    this.items.push({title: title, post: body, description: description})
    this.location.back()
  }
}
