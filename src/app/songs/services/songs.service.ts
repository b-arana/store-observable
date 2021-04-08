import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '../store';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist(): Observable<any> {
    return this.http.get('http://localhost:3000/playlist').pipe(
      tap( next => this.store.set('playlist', next))
    )
  }


}
