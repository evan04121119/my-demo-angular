import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input()
  appareilName = 'machine à laver';
  @Input()
  appareilStatus = 'éteint';

  myClassObject = {};
  constructor() {}

  ngOnInit(): void {
    this.myClassObject = {
      'list-group-item': true,
      'list-group-item-success': this.appareilStatus === 'allumé',
      'list-group-item-danger': this.appareilStatus === 'éteint',
    };
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
    return '';
  }
}
