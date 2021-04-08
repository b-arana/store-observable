import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../interface/state';

@Component({
  selector: 'songs-list',
  template: `
    <div class="songs-list">
      <h3>
        <ng-content></ng-content>
      </h3>
      <ul>
        <li *ngFor="let item of list; index as i">
          <p>{{ item.artist }}</p>
          <span>{{ item.track }}</span>
          <div
            class="songs-list__favourite"
            [class.active]="item.favourite"
          ></div>
          <div
            class="songs-list__listened"
            [class.active]="item.listened"
          ></div>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  @Input()
  list: Song[];
  constructor() {}

  ngOnInit() {}
}
