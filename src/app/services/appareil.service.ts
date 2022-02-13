import { Subject } from 'rxjs/Subject';

export class AppareilService {
  appareilSubject = new Subject<any[]>();
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    { id: 2, name: 'Télévision', status: 'allumé' },
    { id: 3, name: 'Ordinateur', status: 'éteint' },
  ];
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils);
  }
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }
  getAppareilById(id: number): any {
    const appareil = this.appareils.find((e) => {
      return e.id === id;
    });
    return appareil;
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
