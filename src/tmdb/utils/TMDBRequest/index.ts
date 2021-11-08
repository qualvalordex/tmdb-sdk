import request, { AxiosPromise } from 'axios'
import { MovieGetDetailsDTO } from '../../api/Movie/types'

export abstract class TMDBRequest {
    
    private apiKey: string
    private baseUrl: string

    constructor(apiKey: string) {
        this.apiKey = apiKey
        this.baseUrl = ''
    }

    protected movieGetDetails(params: MovieGetDetailsDTO) {
        return this.request(`/movie/${params.movieId}`, params)
    }

    private async request(url: string, params: any) {
        return request({
            baseURL: this.baseUrl,
            url,
            params: {
                ...params,
                api_key: this.apiKey,
            }
        })
    }
}