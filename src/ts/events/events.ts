import { MovieListType } from "../models";
import { setCurrentMovieListType, showMovies } from "../movie/movie-list";
import { getElementByIdFrom } from "../utils/utils";



// export function addMovieGridLayoutClickListener() {
//     const element = getElementByIdFrom(
//         "btn-grid",
//         "addMovieGridLayoutClickListener"
//     );

//     const eventGridHandler = function () {
       
        
//     }

//     if (element) {
//         element.addEventListener("click", eventGridHandler);
//     } else {
//         console.error("El elemento con id 'btn-grid' no fue encontrado.");
//     }
// }

// export function addMovieRowLayoutClickListener() {
//     const element = getElementByIdFrom(
//         "btn-row",
//         "addMovieGridLayoutClickListener"
//     );
   
//     const eventRowHandler = function () {
//         if (element) {
//             element.addEventListener("click", showMoviesRow);
//         } else {
//             console.error("El elemento con id 'btn-grid' no fue encontrado.");
//         }
//     }

//     element.addEventListener("click", eventRowHandler);
// }

export function addSelectMovieTypeChangeListener() {
    const selectMovieType = document.getElementById("movie-type-select") as HTMLSelectElement;

    selectMovieType?.addEventListener('change', () => {
        const selectedMovieType = selectMovieType.value as MovieListType;
        setCurrentMovieListType(selectedMovieType);
    })
}

