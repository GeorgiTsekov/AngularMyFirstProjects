import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../models/Movie';

const IMAGE_PATH_FIRST_PART = 'https://image.tmdb.org/t/p/w500';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie!: Movie;
  @Output()
  clickButtonEmitter: EventEmitter<number> = new EventEmitter();
  imagePath!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie + 'ok from child');
    this.imagePath = `${IMAGE_PATH_FIRST_PART}${this.movie.poster_path}`;
  }

  clickButton(): void{
    console.log(`button with id: ${this.movie.id}`);
    this.clickButtonEmitter.emit(this.movie.id);
  }
}
