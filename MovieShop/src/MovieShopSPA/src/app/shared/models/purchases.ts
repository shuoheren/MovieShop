import { MovieCard } from "./movie-card";

export interface Purchases {
    userId: number;
    totalMoviesPurchased: number;
    purchasedMovies: MovieCard[];
}


