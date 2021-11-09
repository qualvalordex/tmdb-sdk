import { Movie } from './Movie'
import { Search } from './Search'

export class TMDB {
    public movie: Movie
    public search: Search

    constructor(apiKey: string) {
        this.movie = new Movie(apiKey)
        this.search = new Search(apiKey)
    }
}