import { Component } from '@angular/core';

import { AfoListObservable, AngularFireOffline } from 'angularfire2-offline';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html'
})
export class ReadListComponent {
  items: AfoListObservable<any[]>;
  constructor(afo: AngularFireOffline) {
    this.items = afo.database.list('/items');
  }
}
