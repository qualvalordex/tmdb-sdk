import { TMDBRequest } from "../../utils"
import { SearchMovieDTO, SearchPersonDTO } from "./types"

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

    public async person(params: SearchPersonDTO) {
        const { status, data } = await this.searchPerson(params)
        return {
            status,
            data
        }
    }
}