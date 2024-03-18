import { filterMoviesData, movieListMapper } from '../mappers/mappers';
 export const config = {
    apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
    langIso: "es-ES",
    baseUrl: "https://api.themoviedb.org/3/",
    posterBaseUrl: "https://image.tmdb.org/t/p/w500//",
}

export async function getListMoviesData(movieListType, page = 1) {
    const movieListUrl = `${config.baseUrl}/movie/${movieListType}?language=${config.langIso}&api_key=${config.apiKey}&page=${page}`;
    const response = await fetch(movieListUrl);
    const data = await response.json();

    if (data?.success === false) {
        throw new Error(`Error(getListMoviesData): ${data.status_message}`)
    }

    return movieListMapper(data?.results ?? []);
}


export async function getSearchMovieUrl(name: string, page = 1) {
    let searchMovieUrl: string = config.baseUrl;
    searchMovieUrl += `search/movie?query=${name}&include_adult=false&language=${config.langIso}&api_key=${config.apiKey}&page=${page}`;
    const response = await fetch(searchMovieUrl);
    const data = await response.json();
    return movieListMapper(data?.results ?? []);
}




function searchMovies(searchText: string) {
    throw new Error('Function not implemented.');
}

