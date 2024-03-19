// @param movies
// @returns


export function filterMoviesData(movies) {
    return movies.map(movie => {
        const { id, title, overview, poster_path, release_date, vote_average } = movie
        return {
            id,
            title,
            description: overview,
            cover: poster_path,
            year: release_date.split("-").shift(),
            rating: vote_average,
        }
    })
}

export function movieListMapper(movieData) {
    return movieData.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        cover: movie.poster_path,
        background: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        year: movie.release_date.split("-").shift(),
        rating: movie.vote_average,
    }));
}

export function castMapper(castData) {
    return castData.map(actor => ({
        name: actor.name,
        character: actor.character
    }));
}


export interface Movie {
    id: number;
    title: string;
    overview: string;
    rating: string | number;
    year: string;
    poster: string;
}