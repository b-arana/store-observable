import { Component } from '@angular/core';
import { Store } from './playlist/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store-observable';
  todos$ = this.store.select<any[]>('playlist');

  constructor( private store: Store ) {
    this.store.set('playlist', [
      { id: 1, name: 'All The Small Things' },
      { id: 2, name: 'Wish You Were Here' },
    ]);
  }
}
