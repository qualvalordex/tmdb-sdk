import { TMDBRequest } from "../../utils"
import { MovieGetDetailsDTO, MovieGetRecommendationsDTO, MovieGetAlternativeTitlesDTO, MovieGetCreditsDTO } from "./types"

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

    public async alternativeTitles(params: MovieGetAlternativeTitlesDTO) {
        const { status, data } = await this.movieGetAlternativeTitles(params)
        return {
            status,
            data
        }
    }

    public async credits(params: MovieGetCreditsDTO) {
        const { status, data } = await this.movieGetCredits(params)
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