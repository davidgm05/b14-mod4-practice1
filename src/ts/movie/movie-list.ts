import {  addSelectMovieTypeChangeListener } from "../events/events";
import { MovieListType } from "../models";
import { getElementByIdFrom } from "../utils/utils";
import { addToolbar } from "./toolbar";
import { config, getListMoviesData, getSearchMovieUrl } from "../api/api";

let currentMovieListType = MovieListType.NowPlaying;

export function setCurrentMovieListType(movieListType: MovieListType) {
    currentMovieListType = movieListType;
    addMovieListElements();
}

export async function addMovieListElements() {
    // Clean app element
    const appElement = getElementByIdFrom('app', 'addMovieListElements');
    appElement.innerHTML = "";

    // Toolbar
    addToolbar();
   
    addSelectMovieTypeChangeListener();

    // Movie Data
    const moviesData = await getListMoviesData(currentMovieListType);

    // MOLDE!!!
    showMovies(moviesData);


}

export function showMovies(movies) {
    const appElement = getElementByIdFrom("app", "showMovies");

    // Crear el contenedor principal
    const container = document.createElement("div");
    container.classList.add("container");

    // Crear la fila para las cartas
    const row = document.createElement("div");
    row.classList.add("row");

    // Agregar la fila al contenedor principal
    container.appendChild(row);
    appElement.appendChild(container);

    movies.forEach(function (movie) {
        // Crear la columna para cada carta
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-6";

        // Crear la carta
        const carta = document.createElement("div");
        carta.classList.add("carta");

        // Agregar el evento de clic a la carta
        carta.addEventListener('click', () => {
            // Eliminar todas las cartas
            while (row.firstChild) {
                row.removeChild(row.firstChild);
            }

            // Mostrar los detalles de la película
            showMovieDetails(movie);
        });

        // Crear la portada de la película
        const portada = document.createElement("div");
        portada.classList.add("portada");
        portada.style.backgroundImage = `url(${config.posterBaseUrl + movie.cover})`;

        // Crear el contenedor para el título y la descripción
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor");

        // Crear el título de la película
        const titulo = document.createElement("h2");
        titulo.textContent = movie.title;
        titulo.classList.add("titulo");

        // Crear la descripción de la película
        const descripcion = document.createElement("p");
        descripcion.textContent = movie.description;
        descripcion.classList.add("descripcion");

        // Agregar el título y la descripción al contenedor
        contenedor.appendChild(titulo);
        contenedor.appendChild(descripcion);

        // Agregar la portada y el contenedor a la carta
        carta.appendChild(portada);
        carta.appendChild(contenedor);

        // Agregar la carta a la columna
        col.appendChild(carta);

        // Agregar la columna a la fila
        row?.appendChild(col);
    });
}


function showMovieDetails(movie) {
    const appElement = getElementByIdFrom("app", "showMovies");

    // Limpiar el contenido existente del elemento 'app'
    appElement.innerHTML = "";

    // Crear un contenedor para los detalles de la película
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("movie-details");

    //Crear la img
    const portadaElement = document.createElement("div");
    portadaElement.classList.add("portada-detail");
    portadaElement.style.backgroundImage = `url(${config.posterBaseUrl + movie.cover})`;

    const contenedorDetail = document.createElement("div");
    contenedorDetail.classList.add("contenedor-detail");
        

    // Crear elementos HTML para mostrar los detalles de la película
    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;
    titleElement.className = "titulo-detail";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = movie.description;
    descriptionElement.className = "descripcion-detail";

    const releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = movie.release_date;
    releaseDateElement.className = "fecha-detail";

    const ratingElement = document.createElement("p");
    ratingElement.textContent = "Rating: " + movie.rating;
    ratingElement.className = "ratin-detail";

    // Agregar los elementos al contenedor de detalles
    detailsContainer.appendChild(portadaElement);
    detailsContainer.appendChild(contenedorDetail);
    contenedorDetail.appendChild(titleElement);
    contenedorDetail.appendChild(descriptionElement);
    contenedorDetail.appendChild(releaseDateElement);
    contenedorDetail.appendChild(ratingElement);

    // Agregar el contenedor de detalles al elemento 'app'
    appElement.appendChild(detailsContainer);
}





// export function showMoviesRow(moviesData: any[]) {
//     const appElement = getElementByIdFrom("app", "showMovies");
//     // container
//     const container = document.createElement("div");
//     container.classList.add("container");

//     // row
//     const row = document.createElement("div");
//     row.classList.add("row");

//     container.appendChild(row);
//     appElement.appendChild(container);

//     moviesData.forEach(function (movie) {
//         // cols
//         const col = document.createElement("div");
//         col.className = "col-lg-12 ";

//         const carta = document.createElement("div");
//         carta.classList.add("carta-list");

//         const portada = document.createElement("div");
//         portada.classList.add("portada-list");
//         portada.style.backgroundImage = `url(${config.posterBaseUrl+movie.cover})`;

//         const contenedor = document.createElement("div");
//         contenedor.classList.add("contenedor-list");

//         const titulo = document.createElement("h2");
//         titulo.textContent = movie.title;
//         titulo.className = "titulo-list";

//         const descripcion = document.createElement("p");
//         descripcion.textContent = movie.description;
//         descripcion.className = "descripcion-list";

//         contenedor.appendChild(titulo);
//         contenedor.appendChild(descripcion);

//         carta.appendChild(portada);
//         carta.appendChild(contenedor);

//         col.appendChild(carta);
//         row?.appendChild(col);

//     })
// }


// export function showMovies(movies) {
    // const appElement = getElementByIdFrom("app", "showMovies");
    // // container
    // const container = document.createElement("div");
    // container.classList.add("container");

    // // row
    // const row = document.createElement("div");
    // row.classList.add("row");

    // container.appendChild(row);
    // appElement.appendChild(container);

    // movies.forEach(function (movie) {
    //     // cols
    //     const col = document.createElement("div");
    //     col.className = "col-lg-3 col-md-4 col-sm-6";

    //     const carta = document.createElement("div");
    //     carta.classList.add("carta");

    //     const portada = document.createElement("div");
    //     portada.classList.add("portada");
    //     portada.style.backgroundImage = `url(${config.posterBaseUrl+movie.cover})`;

    //     const contenedor = document.createElement("div");
    //     contenedor.classList.add("contenedor");

    //     const titulo = document.createElement("h2");
    //     titulo.textContent = movie.title;

    //     const descripcion = document.createElement("p");
    //     descripcion.textContent = movie.description;

    //     contenedor.appendChild(titulo);
    //     contenedor.appendChild(descripcion);

    //     carta.appendChild(portada);
    //     carta.appendChild(contenedor);

    //     col.appendChild(carta);
    //     row?.appendChild(col);
    // });

    // // Agregar event listener al botón grid
    // const botonGrid = document.getElementById("btn-grid");
    // botonGrid?.addEventListener("click", function() {
    //     container.classList.remove("row-layout");
    // });

    // // Agregar event listener al botón row
    // const botonRow = document.getElementById("btn-row");
    // botonRow?.addEventListener("click", function() {
    //     container.classList.add("row-layout");
    // });
// }



// export function mostrarDetalle(movie: any) {
//     const titulo = encodeURIComponent(movie.title);
//     const portada = encodeURIComponent(movie.cover);
//     const descripcion = encodeURIComponent(movie.description);

//     sessionStorage.setItem('detallePelicula', detallePelicula);

//     window.location.href = `detalles.html?titulo=${titulo}&portada=${portada}&descripcion=${descripcion}`;

//     const detallePelicula = document.getElementById("detalle-pelicula");

//     const titulo = document.createElement("h1");
//     titulo.textContent = movie.title;
//     titulo.classList.add("titulo-detalle");

//     const portada = document.createElement("img");
//     portada.src = movie.cover;
//     portada.alt = "Portada de la Película";
//     portada.classList.add("portada-detalle");

//     const descripcion = document.createElement("p");
//     descripcion.textContent = movie.description;
//     descripcion.classList.add("descripcion-detalle");
//     if (detallePelicula) {
//         detallePelicula.appendChild(titulo);
//         detallePelicula.appendChild(portada);
//         detallePelicula.appendChild(descripcion);
//     } else {
//         console.error("no se a encontrado el detalle");
//     }
// }

// export function mostrarDetalle1(movie: any) {
//     const titulo = encodeURIComponent(movie.title);
//     const portada = encodeURIComponent(movie.cover);
//     const descripcion = encodeURIComponent(movie.description);

//     // Guardar los detalles en el sessionStorage
//     const detallePelicula = JSON.stringify({
//         title: movie.title,
//         cover: movie.cover,
//         description: movie.description
//     });
//     sessionStorage.setItem('detallePelicula', detallePelicula);

//     // Redirigir la página a detalles.html con los parámetros de consulta
//     window.location.href = `detalles.html?titulo=${titulo}&portada=${portada}&descripcion=${descripcion}`;
// }


// export function mostrarDetalle1(movie: any) {
//     const titulo = encodeURIComponent(movie.title);
//     const portada = encodeURIComponent(movie.cover);
//     const descripcion = encodeURIComponent(movie.description);

//     // Guardar los detalles en el sessionStorage
//     const detallePelicula = JSON.stringify({
//         title: movie.title,
//         cover: movie.cover,
//         description: movie.description
//     });
//     sessionStorage.setItem('detallePelicula', detallePelicula);

   
//     mostrarDetalleHTML(movie);
//

    // const searchMovie = document.getElementById("text-imput") as HTMLSelectElement;
    // const botonSearchMovie = document.getElementById("text-boton") as HTMLSelectElement;


    // botonSearchMovie?.addEventListener('click', () => {
    //     const selectedMovieSearch = searchMovie.value;


    //         getSearchMovieUrl(selectedMovieSearch, 1)
    //         .then((movies) => {
    //             showMovies(movies);
    //         })
    //         .catch((error) => {
    //             console.error(error.message);
    //         });

    // })
    export function searchMovie() {
        const searchInput: HTMLInputElement = document.getElementById("text-imput") as HTMLInputElement;
        const searchButton = document.getElementById("text-boton");
        
        searchButton?.addEventListener('click', async (event) => {
            event.preventDefault(); // Evitar recarga de la página
            
            const selectedMovieSearch = searchInput.value;
            
            try {
                const movies = await getSearchMovieUrl(selectedMovieSearch, 1); // Aquí se llama a la función getSearchMovieUrl en lugar de getSearchMoviesData
                if (Array.isArray(movies) && movies.length > 0) {
                    showMovies(movies);
                } else {
                    console.log("No se encontraron películas.");
                }
              
            } catch (error) {
                // Mostrar un mensaje de error en la interfaz de usuario
                console.error("Error al buscar películas:", error.message);
            }
        });
    }




    // export function mostrarDetalle(movie){
    //     const detallePelicula = document.getElementById("detalle-pelicula");

    //     if (!detallePelicula){
    //         return
    //     } else{
    //         detallePelicula.innerHTML = 
    //         ` <h1>${movie.title}</h1>
    //         <img src="${movie.cover}" alt="Portada de la Película">
    //         <p>${movie.description}</p>`
    //     }
    // }







