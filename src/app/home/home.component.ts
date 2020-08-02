import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  staticPost: Post;

  //inject the service
  constructor(private dm: DataManagerService) {}

  ngOnInit() {
    this.staticPost = this.dm.getStaticPost();
  }
}
