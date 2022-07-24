import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieCard } from '../../models/movie-card';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() hideButton: boolean = true;
  @Input() movieCard!: MovieCard;
  @Output() showPurchaseDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  purchases(movieId: number) {
    this.showPurchaseDetails.emit(movieId);
  }
}
