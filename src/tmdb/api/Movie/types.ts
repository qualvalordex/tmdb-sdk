export interface MovieGetDetailsDTO {
    movieId: number
    language?: string
    appendToResponse?: string
}

export interface MovieGetAlternativeTitlesDTO {
    movieId: number
    country?: string
}

export interface MovieGetCreditsDTO {
    movieId: number
    language?: string
}

export interface MovieGetRecommendationsDTO {
    movieId: number
    language?: string
    page?: number
}