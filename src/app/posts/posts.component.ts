import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  pg;

  constructor(
    private dm: DataManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pg = this.route.snapshot.queryParams['page'];

    this.getPosts();
  }

  getPosts(): Post[] {
    //all posts page
    // this.dm.getLivePosts().subscribe((data) => (this.posts = data));
    // return this.posts;

    //update for pages, such as /posts?page=9
    this.dm.getLivePosts().subscribe((data) => {
      if (this.pg) {
        this.posts = data.slice((this.pg - 1) * 10, this.pg * 10);
      }
    });
    return this.posts;
  }

  goToPost(id) {
    this.router.navigate(['/post', id]);
  }
}
