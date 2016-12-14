import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class PostService {

  private items: FirebaseListObservable<any[]>;
  private item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {}

  getItems(num) {
    this.items = this.af.database
      .list('/posts', { query: { limitToLast: num | 20} } )
      .map( (arr) => { return arr.reverse() } ) as FirebaseListObservable<any[]>;
    return this.items;
  }

  getItem(id: string) {
    return this.af.database.object('/posts/'+id);
  }

}
