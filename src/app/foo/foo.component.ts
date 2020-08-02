import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  studentName: string = 'Jason Bourne';
  studentUpdated: Date = new Date();
  studentPhoto: string =
    'https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg';

  @Input('photos') studentPhotos: string[];
  photoIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  togglePhoto(e) {
    this.photoIndex =
      this.photoIndex == this.studentPhotos.length - 1
        ? 0
        : this.photoIndex + 1;
  }
}
