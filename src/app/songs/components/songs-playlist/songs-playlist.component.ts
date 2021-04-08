import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'songs-playlist',
  template: `
   <p>
  		songs-playlist Works!
   </p>
  `,
  styleUrls: ['./songs-playlist.component.scss']
})
export class SongsPlaylistComponent implements OnInit {

  constructor( private store: Store) { }

  ngOnInit() {
  }

}
