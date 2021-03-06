import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { Subscription } from 'rxjs';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/posts';

@Component({
  selector: 'app-item-detail',
  templateUrl: './post.html',
  styleUrls: ['../../styles/blogpost.css']
})
export class PostComponent implements OnInit {
  id: string;
  post: FirebaseObjectObservable<Post>

  constructor(private af: AngularFire,
              private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];
       this.post = this.af.database.object('/posts/'+this.id);
       console.log(this.id);
       console.log(this.post);
    });
  }

  update(description: string, title: string, post: string) {
    this.post.update({description: description, title: title, post: post});
    alert('updated post');
  }

  delete() {
    this.post.remove();
    window.history.back();
  }
}
