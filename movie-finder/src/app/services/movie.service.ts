import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/Movie';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR = '/movie/popular';
const IN_THEATERS = '/discover/movie';
const API_KEY = '?api_key=e4102d64a668f2158a0d4acb31825e13';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${BASE_URL}${POPULAR}${API_KEY}`);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${BASE_URL}${IN_THEATERS}${API_KEY}&with_release_type=2|3`);
  }
}
