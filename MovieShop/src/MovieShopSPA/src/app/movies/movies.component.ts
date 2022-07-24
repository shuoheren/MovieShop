import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../shared/models/movie-card';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: MovieCard[];
  genreId!: number;

  constructor() { }

  ngOnInit(): void {


  }

}
