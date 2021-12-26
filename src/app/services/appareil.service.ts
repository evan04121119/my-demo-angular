export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    { id: 2, name: 'Télévision', status: 'allumé' },
    { id: 3, name: 'Ordinateur', status: 'éteint' },
  ];
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
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
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
