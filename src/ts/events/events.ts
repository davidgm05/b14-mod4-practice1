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
import { getSearchMovieUrl } from "../api/api";

export function addSearchEventListener() {
    const movieSearchInput = document.getElementById("text-imput") as HTMLInputElement;
    const movieSearchButton = document.getElementById("text-boton");

    movieSearchButton?.addEventListener('click', async (event) => {
        event.preventDefault(); // Evitar recarga de la página al hacer click en el botón

        const searchValue = movieSearchInput.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

        if (searchValue) { // Verificar que el valor no esté vacío
            try {
                const movies = await getSearchMovieUrl(searchValue);
                // Aquí puedes hacer algo con los datos obtenidos, como mostrarlos en la interfaz
                console.log("Películas encontradas:", movies);
            } catch (error) {
                console.error("Error al buscar películas:", error);
                // Manejar el error de acuerdo a tus necesidades
            }
        } else {
            console.log("El valor de búsqueda está vacío.");
            // Aquí puedes mostrar un mensaje al usuario indicando que debe ingresar un valor de búsqueda
        }
    });
}

