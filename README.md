# The Movie Database API - Software Development Kit

> This SDK was developed to help all people that need to use TMDB API.

## How to install?
You could download this from `npm`:
```sh
$ npm install tmdb-sdk
```
or using `yarn` if you prefere:
```sh
$ yarn add tmdb-sdk
```

> If your project uses TypeScript you could donwload the types from @types/tmdb-sdk

## How to use?
TMDB SDK usage is very simple. You just need to import it to your project and call TMDB class passing your API Key. If you don't know how to get TMDB API Key, consult the [documentation here](https://developers.themoviedb.org/3/getting-started/authentication).
```js
const { TMDB } = require('tmdb-sdk')

const tmdb = new TMDB('your_api_key')
```

### Available methods

> Disclaimer: you don't need to pass API Key parameter to any method below.

#### movie.details()
This method calls [Movie Get Details](https://developers.themoviedb.org/3/movies/get-movie-details) endpoint. The params is the same present in documentation.
```js
const res = async () => tmdb.movie.details({ movieId: 123 })
res().then((res) => {
    console.log(res)
})
```

#### movie.recommendation()
This method calls [Movie Get Recommendations](https://developers.themoviedb.org/3/movies/get-movie-recommendations) endpoint. The params is the same present in documentation.
```js
const res = async () => tmdb.movie.recommendations({ movieId: 123 })
res().then((res) => {
    console.log(res)
})
```

#### search.movie()
This method calls [Search Movie](https://developers.themoviedb.org/3/search/search-movies) endpoint. The params is the same present in documentation.
```js
const res = async () => tmdb.search.movie({ q: 'Pocahontas' })
res().then((res) => {
    console.log(res)
})
```