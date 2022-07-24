import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieReportData } from 'src/app/shared/models/movieReport';
import { PagedResult } from 'src/app/shared/models/pagedResult';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getTopMovies(searchParams?: Map<any, any>): Observable<PagedResult<MovieReportData>> {

    let params = new HttpParams();
    if (searchParams) {
      searchParams.forEach((value: string, key: string) => {
        params = params.append(key, value);
      });
    }

    return this.http.get<PagedResult<MovieReportData>>(`${environment.apiUrl}Admin/reports/toppurchases`, { params: params });

  }

}
