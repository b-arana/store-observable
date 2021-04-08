import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'songs-listened',
  template: ` <p>songs-listened Works!</p> `,
  styleUrls: ['./songs-listened.component.scss'],
})
export class SongsListenedComponent implements OnInit {
  constructor(private Store: Store) {}

  ngOnInit() {}
}
