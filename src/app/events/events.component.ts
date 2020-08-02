import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  eventMsgs: string[] = [];

  constructor() {}

  ngOnInit(): void {
    var source = Observable.create(function (observer) {
      let i = 0;
      let interval = setInterval(() => {
        observer.next(i++);

        if (i == 5) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });

    var subscription = source.subscribe(
      function (x) {
        console.log('next: %s', x);
      }, // "next"
      function (e) {
        console.log('error: %s', e);
      }, // "error"
      function () {
        console.log('complete');
      } // "complete"
    );
  }

  logClick(msg) {
    console.log(msg);
    this.eventMsgs.push(msg);
  }
}
