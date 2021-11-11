export interface SearchMovieDTO {
    query: string
    language?: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
}

export interface SearchPersonDTO {
    query: string
    language?: string
    page?: number
    include_adult?: boolean
    region?: string
}