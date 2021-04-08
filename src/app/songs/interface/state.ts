export interface State {
  playlist: Song[]
}

export interface Song {
  id: number,
  artist: string,
  track: string,
  listened: boolean,
  favourite: boolean
}

