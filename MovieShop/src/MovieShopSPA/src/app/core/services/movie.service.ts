import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';
import { MovieCard } from 'src/app/shared/models/movie-card';
import { PagedResult } from 'src/app/shared/models/pagedResult';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<MovieCard[]> {
    return this.http.get(`${environment.apiUrl}movies/toprated`).pipe(map(resp => resp as MovieCard[]));
  }

  getTopGrossingMovies(): Observable<MovieCard[]> {
    //    return this.http.get(`${environment.apiUrl}movies/toprevenue`).pipe(map(resp => resp as MovieCard[]));

    return this.http.get<MovieCard[]>(`${environment.apiUrl}movies/toprevenue`);

  }

  getMoviesByGenre(genreId: number, searchParams?: Map<any, any>): Observable<PagedResult<MovieCard>> {
    let params = new HttpParams();
    if (searchParams) {
      searchParams.forEach((value: string, key: string) => {
        params = params.append(key, value);
      });
    }
    return this.http.get<PagedResult<MovieCard>>(`${environment.apiUrl}movies/genre/${genreId}`, { params: params });
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get(`${environment.apiUrl}movies/${id}`).pipe(map(resp => resp as Movie));

  }
}
