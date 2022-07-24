import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieCard } from 'src/app/shared/models/movie-card';
import { PagedResult } from 'src/app/shared/models/pagedResult';

@Component({
  selector: 'app-movies-card-list',
  templateUrl: './movies-card-list.component.html',
  styleUrls: ['./movies-card-list.component.css']
})
export class MoviesCardListComponent implements OnInit {
  movies!: PagedResult<MovieCard>;
  pageSize = 30;
  currentPageIndex = 1;
  genreId!: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log('inside ngOnInit');
    this.route.paramMap.subscribe(p => {
      this.genreId = Number(p.get('id'));
      // console.log('GenreId: Inside ngOnInit ' + this.genreId)
      this.loadData(this.genreId);
    });
  }


  loadData(genreId: number, searchParams?: Map<any, any>) {
    this.movieService.getMoviesByGenre(genreId, searchParams).subscribe(resp => {
      // console.log('calling API Parameters:' + searchParams);
      this.movies = resp;
    });
  }

  parseSearchParameters(): Map<string, string> {
    const params = new Map<string, string>();
    params.set('pageIndex', this.currentPageIndex.toString());
    params.set('pageSize', this.pageSize.toString());
    return params;
  }

  loadPage(page: number) {
    this.currentPageIndex = page;
    this.loadData(this.genreId, this.parseSearchParameters());
  }
}
