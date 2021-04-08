import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Song } from '../../interface/state';
import { Store } from '../../store';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list [list]="listened$ | async"> Played </songs-list>
    </div>
  `,
  styleUrls: ['./songs-listened.component.scss'],
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<Song[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: Song[]) => playlist.filter((track) => track.listened))
    );
  }
}
