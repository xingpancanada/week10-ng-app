import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title: string = 'my-app';
  name: string;
  age: number = 19;

  constructor() {}

  ngOnInit(): void {}
}
