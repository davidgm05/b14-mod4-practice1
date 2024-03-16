""
export function addToolbar(): void {
  const toolbarElement = document.createElement("div");
  toolbarElement.className = "toolbar-container";
  toolbarElement.innerHTML = `
      <div class="buttons">
          <button id="btn-grid" class="btn btn-icon">
              <img src="grid.svg" alt="grid">
          </button>
          <button id="btn-row" class="btn btn-icon">
              <img src="row.svg" alt="row">
          </button>
      </div>
      <div>
          <select
              id="movie-type-select"
              class="form-select"
          >
              <option value="now_playing" selected>En cartelera</option>
              <option value="popular">Popular</option>
              <option value="top_rated">Mejor valoradas</option>
              <option value="upcoming">Próximamente</option>
          </select>
      </div>
  `;

  const appElement: any = document.getElementById("app");
  appElement?.appendChild(toolbarElement);

  // Agregar listeners de eventos a los botones
  const gridButton = document.getElementById("btn-grid");
  const rowButton = document.getElementById("btn-row");

  gridButton?.addEventListener("click", () => toggleView("grid"));
  rowButton?.addEventListener("click", () => toggleView("row"));
}

function toggleView(viewType: string): void {
  const movieListContainer = document.getElementById("app")?.querySelector(".container .row");
  if (!movieListContainer) return;

  if (viewType === "grid") {
      movieListContainer.classList.remove("list-view");
  } else if (viewType === "row") {
      movieListContainer.classList.add("list-view");
  }
}



