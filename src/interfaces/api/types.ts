export interface MovieApi {
  id: number;
  overview: number;
  first_air_date: string;
  backdrop_path: string;
  vote_count: number;
  genre_ids: [number, number, number];
  poster_path: string;
  name: string;
  popularity: number;
  media_type: string;
  title: string;
  original_name: string;
  release_date: string;
}
