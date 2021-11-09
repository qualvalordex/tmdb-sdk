import { TMDBRequest } from "../../utils"
import { MovieGetDetailsDTO, MovieGetRecommendationsDTO } from "./types"

export class Movie extends TMDBRequest {

    constructor(apiKey: string) {
        super(apiKey)
    }

    public async details(params: MovieGetDetailsDTO) {
        const { status, data } = await this.movieGetDetails(params)
        return {
            status,
            data
        }
    }

    public async recommendations(params: MovieGetRecommendationsDTO) {
        const { status, data } = await this.movieGetRecommendations(params)
        return {
            status,
            data
        }
    }
}