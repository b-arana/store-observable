import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'songs-favourites',
  template: `
   <p>
  		songs-favourites Works!
   </p>
  `,
  styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {

  constructor( private Store: Store) { }

  ngOnInit() {
  }

}
