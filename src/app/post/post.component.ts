import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  staticPost: Post;
  livePost: Post;
  id;
  sub;

  //inject the service
  constructor(private dm: DataManagerService, private route: ActivatedRoute) {}

  ngOnInit() {
    //approach 1
    this.id = this.route.snapshot.params['id'];
    this.dm.getLivePost(this.id).subscribe((data) => (this.livePost = data));

    //approach 2
    // this.sub = this.route.params.subscribe((params) => {
    //   this.id = +params['id'];
    // });

    this.staticPost = this.dm.getStaticPost();
  }

  //approach 2 - release memory
  // ngOnDestroy() {
  //   if (this.sub) {
  //     this.sub.unsubscribe();
  //   }
  // }
}
