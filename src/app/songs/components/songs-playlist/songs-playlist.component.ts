import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Song } from '../../interface/state';
import { SongsService } from '../../services/songs.service';
import { Store } from '../../store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list [list]="playlist$ | async" (toggle)="onToggle($event)">
        Playlist
      </songs-list>
    </div>
  `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<Song[]>;
  subscription: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist().subscribe();
  }

  onToggle(event: any) {
    this.songsService.updateSong(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
