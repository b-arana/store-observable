import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Song } from '../interface/state';
import { Store } from '../store';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist(): Observable<Song[]> {
    return this.http
      .get<Song[]>('http://localhost:3000/playlist')
      .pipe(tap((next) => this.store.set('playlist', next)));
  }

  updateSong(event: any) {

    this.http
      .put<Song>(
        `http://localhost:3000/playlist/${event.track.id}`,
        event.track
      )
      .subscribe(() => {
        const playlist = this.store.value.playlist.map((song: Song) => {
          if (event.track.id === song.id) {
            return { ...song, ...event.track };
          } else {
            return song;
          }
        });
        this.store.set('playlist', playlist);
      });
  }
}
