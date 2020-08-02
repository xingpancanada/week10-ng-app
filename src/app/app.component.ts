import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  studentPhotos: Array<string> = [
    'https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d1/Matt_Damon_%28cropped%29.jpg',
  ];
  title = 'my-app';
}
