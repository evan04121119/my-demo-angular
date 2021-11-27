import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Télévision',
      status: 'allumé',
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];
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

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log('allume tout');
  }
}
