import request, { AxiosPromise } from 'axios'
import { MovieGetDetailsDTO, MovieGetRecommendationsDTO, MovieGetAlternativeTitlesDTO } from '../../api/Movie/types'
import { SearchMovieDTO } from '../../api/Search/types'

export abstract class TMDBRequest {
    
    private apiKey: string
    private baseUrl: string

    constructor(apiKey: string) {
        this.apiKey = apiKey
        this.baseUrl = 'https://api.themoviedb.org/3'
    }

    protected movieGetDetails(params: MovieGetDetailsDTO) {
        return this.request(`/movie/${params.movieId}`, params)
    }

    protected movieGetAlternativeTitles(params: MovieGetAlternativeTitlesDTO) {
        return this.request(`/movie/${params.movieId}/alternative_titles`, params)
    }

    protected movieGetRecommendations(params: MovieGetRecommendationsDTO) {
        return this.request(`/movie/${params.movieId}/recommendations`, params)
    }

    protected searchMovie(params: SearchMovieDTO) {
        return this.request('/search/movie', params)
    }

    private async request(url: string, params: any) {
        return request({
            method: 'GET',
            baseURL: this.baseUrl,
            url,
            params: {
                ...params,
                api_key: this.apiKey,
            }
        })
    }
}