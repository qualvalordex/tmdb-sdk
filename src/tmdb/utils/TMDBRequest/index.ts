import request, { AxiosPromise } from "axios";
import {
  MovieGetDetailsDTO,
  MovieGetRecommendationsDTO,
  MovieGetAlternativeTitlesDTO,
  MovieGetCreditsDTO,
  MovieGetImagesDTO,
  MovieGetReviewsDTO,
} from "../../api/Movie/types";
import { SearchMovieDTO } from "../../api/Search/types";

export abstract class TMDBRequest {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.themoviedb.org/3";
  }

  protected movieGetDetails(params: MovieGetDetailsDTO) {
    return this.request(`/movie/${params.movieId}`, params);
  }

  protected movieGetAlternativeTitles(params: MovieGetAlternativeTitlesDTO) {
    return this.request(`/movie/${params.movieId}/alternative_titles`, params);
  }

  protected movieGetCredits(params: MovieGetCreditsDTO) {
    return this.request(`/movie/${params.movieId}/credits`, params);
  }

  protected movieGetImages(params: MovieGetImagesDTO) {
    return this.request(`/movie/${params.movieId}/images`, params);
  }

  protected movieGetRecommendations(params: MovieGetRecommendationsDTO) {
    return this.request(`/movie/${params.movieId}/recommendations`, params);
  }

  protected movieGetReviews(params: MovieGetReviewsDTO) {
    return this.request(`/movie/${params.movieId}/reviews`, params);
  }

  protected searchMovie(params: SearchMovieDTO) {
    return this.request("/search/movie", params);
  }

  private async request(url: string, params: any) {
    return request({
      method: "GET",
      baseURL: this.baseUrl,
      url,
      params: {
        ...params,
        api_key: this.apiKey,
      },
    });
  }
}
