import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName = 'machine à laver';
  @Input() appareilStatus = 'éteint';
  @Input()
  indexOfAppareil!: number;

  myClassObject = {};
  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    this.updateMyClassObject();
  }

  updateMyClassObject() {
    this.myClassObject = {
      'list-group-item': true,
      'list-group-item-success': this.appareilStatus === 'allumé',
      'list-group-item-danger': this.appareilStatus === 'éteint',
    };
    return this.myClassObject;
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

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
