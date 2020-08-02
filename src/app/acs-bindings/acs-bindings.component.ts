import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acs-bindings',
  templateUrl: './acs-bindings.component.html',
  styleUrls: ['./acs-bindings.component.css'],
})
export class AcsBindingsComponent implements OnInit {
  headerSpan: number = 2;
  showWarning: boolean = true;
  grayBackground: string = 'lightgrey';
  showBackground: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
