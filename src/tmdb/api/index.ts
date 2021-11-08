import { Movie } from './Movie'

export class TMDB {
    public movie: Movie

    constructor(apiKey: string) {
        this.movie = new Movie(apiKey)
    }
}