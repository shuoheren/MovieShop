import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { MovieReportData } from 'src/app/shared/models/movieReport';
import { PagedResult } from 'src/app/shared/models/pagedResult';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  movies!: PagedResult<MovieReportData>;
  pageSize = 30;
  currentPageIndex = 1;
  fromDate!: Date;
  toDate!: Date;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(searchParams?: Map<any, any>) {
    this.adminService.getTopMovies(searchParams).subscribe(resp => {
      this.movies = resp;
      console.log(this.movies);
    })
  }
  loadPage(page: number) {
    console.log(page);
    this.currentPageIndex = page;
    this.loadData(this.parseSearchParameters(this.fromDate, this.toDate));
  }
  parseSearchParameters(fromDate?: Date, toDate?: Date): Map<string, string> {
    const params = new Map<string, string>();

    params.set('pageIndex', (this.currentPageIndex).toString());
    params.set('pageSize', this.pageSize.toString());

    if (fromDate) {
      params.set('fromDate', this.fromDate.toString());

    }
    if (toDate) {
      params.set('toDate', this.toDate.toString());

    }
    return params;
  }

  searchMovies() {
    this.loadData(this.parseSearchParameters(this.fromDate, this.toDate));
  }

}
