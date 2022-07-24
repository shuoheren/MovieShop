import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/services/user.service';
import { PurchaseDetails } from 'src/app/shared/models/PurchaseDetails';
import { Purchases } from 'src/app/shared/models/purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases!: Purchases;
  constructor(private userService: UserService, private modalService: NgbModal) { }
  purchaseDetails!: PurchaseDetails;

  ngOnInit(): void {
    this.userService.getPurchasedMovies().subscribe(resp => {
      this.purchases = resp;
    });
  }

  showPurchaseDetails(movieId: number, content: any) {
    //    console.log(' call purchase details API with MovieId: ' + movieId)
    this.userService.getPurchaseDetails(movieId).subscribe(resp => {
      this.purchaseDetails = resp;
      // console.log(this.purchaseDetails);
      this.modalService.open(content, { size: 'lg' });
    });
  }
}
