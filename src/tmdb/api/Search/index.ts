import { TMDBRequest } from "../../utils"
import { SearchMovieDTO } from "./types"

export class Search extends TMDBRequest {

    constructor(apiKey: string) {
        super(apiKey)
    }

    public async movie(params: SearchMovieDTO) {
        const { status, data } = await this.searchMovie(params)
        return {
            status,
            data
        }
    }
}