import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import 'rxjs/Rx';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  appareils: any[] = [];
  posts = [
    {
      title: 'Post 1',
      content: 'i like travel',
      loveIts: 10,
      created_at: new Date('December 17, 1995 03:24:00'),
    },
    {
      title: 'Post 2',
      content: 'i like training',
      loveIts: 9,
      created_at: new Date('December 17, 1996 03:24:00'),
    },
    {
      title: 'Post 3',
      content: 'i like coding',
      loveIts: -1,
      created_at: new Date('December 17, 1997 03:24:00'),
    },
  ];
  secondes: number | undefined;
  counterSubscription!: Subscription;
  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    const counter = interval(1000);
    // sauvgarder le subscribe
    this.counterSubscription = counter.subscribe((value: number) => {
      this.secondes = value;
    });
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
