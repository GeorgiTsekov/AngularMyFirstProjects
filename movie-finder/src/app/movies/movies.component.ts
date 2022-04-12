import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies!: Array<Movie>;
  inTheaterMovies!: Array<Movie>;
  singleMovie!: Movie;
  message!: Number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = Object(data)['results'].slice(0, 6);
      // for (let index = 0; index < this.popularMovies.length; index++) {
      //   this.singleMovie = this.popularMovies[index];
      //   console.log(this.singleMovie.title);
      // }
    });

    this.movieService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = Object(data)['results'].slice(6, 12);
      // for (let index = 0; index < this.inTheaterMovies.length; index++) {
      //   this.singleMovie = this.inTheaterMovies[index];
      //   console.log(this.singleMovie.title);
      // }
    });
  }

  fromChild(event: Number) {
    console.log(event)
    this.message = event;
  }
}
