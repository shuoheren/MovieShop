import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';
import { PurchaseDetails } from 'src/app/shared/models/PurchaseDetails';
import { Purchases } from 'src/app/shared/models/purchases';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPurchasedMovies(): Observable<Purchases> {
    return this.http.get(`${environment.apiUrl}user/purchases`).pipe(map(resp => resp as Purchases));
  }

  getPurchaseDetails(movieId: number): Observable<PurchaseDetails> {
    return this.http.get<PurchaseDetails>(`${environment.apiUrl}user/purchase-details/${movieId}`);
  }

  isMoviePurchasedByUser(movieId: number): Observable<boolean> {
    return this.http.get(`${environment.apiUrl}user/is-movie-purchased/${movieId}`)
      .pipe(map((response: any) => {
        if (response.purchased) {
          return true;
        }
        return false;
      }));

  }

  purchaseMovie(movieId: number): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}user/purchase`, { 'movieId': movieId }).pipe(map((response: any) => {
      if (response.purchased) {
        return true;
      }
      return false;
    }));
  }

  isEmailExists(email: string): Observable<boolean> {
    return this.http.get(`${environment.apiUrl}Account/checkemail?email=${email}`).pipe(map((val: any) => val.emailExists));
  }

}
