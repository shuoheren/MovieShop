import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { UserService } from 'src/app/core/services/user.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;
  id: number = 0;
  isMoviePurchased: boolean = false;
  constructor(private movieService: MovieService, private authService: AuthenticationService,
    private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.id = Number(p.get('id'));
      // get movie Details
      this.movieService.getMovieDetails(this.id).subscribe(resp => {
        this.movie = resp;
      });
      // see if movie is purchased by user, first check if user is authenticated
      this.CheckIfMoviePurchased();
    });

  }

  private CheckIfMoviePurchased() {
    this.authService.isLoggedIn.subscribe(resp => {
      if (resp) {
        // call the API
        this.userService.isMoviePurchasedByUser(this.id).subscribe(resp => {
          this.isMoviePurchased = resp;
        });
      }
    });
  }

  puchaseMovie() {
    this.authService.isLoggedIn.subscribe(resp => {
      if (resp) {
        // call the API
        this.userService.purchaseMovie(this.id).subscribe(resp => {
          if (resp) {
            console.log('Movie Successfully purchased');
            this.isMoviePurchased = resp;
          }
          else {
            console.log('something went wrong');
          }
        })
      }
      else {
        this.router.navigateByUrl('/account/login');

      }
    });

  }

}
