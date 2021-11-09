export interface MovieGetDetailsDTO {
    movieId: number
    language?: string
    appendToResponse?: string
}

export interface MovieGetRecommendationsDTO {
    movieId: number
    language?: string
    page?: number
}

export interface MovieGetAlternativeTitlesDTO {
    movieId: number
    country?: string
}