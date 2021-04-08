import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SongsService } from '../../services/songs.service';
import { Store } from '../../store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list [list]="playlist$ | async"> Playlist </songs-list>
    </div>
  `,
  styleUrls: ['./songs-playlist.component.scss'],
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
