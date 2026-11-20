/* ==========================================
   GAMETRACKER
   Gestión de una biblioteca de videojuegos
========================================== */


/* ==========================================
   DATOS
========================================== */

const STORAGE_KEY = "gametracker_games";

let games = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

let editingGameId = null;
let showingFavoritesOnly = false;


/* ==========================================
   ELEMENTOS DEL DOM
========================================== */

const gamesContainer = document.getElementById("gamesContainer");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const platformFilter = document.getElementById("platformFilter");
const genreFilter = document.getElementById("genreFilter");
const statusFilter = document.getElementById("statusFilter");
const favoriteFilter = document.getElementById("favoriteFilter");
const clearFilters = document.getElementById("clearFilters");

const gameModal = document.getElementById("gameModal");
const gameForm = document.getElementById("gameForm");

const addGameBtn = document.getElementById("addGameBtn");
const emptyAddBtn = document.getElementById("emptyAddBtn");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");

const modalTitle = document.getElementById("modalTitle");
const submitText = document.getElementById("submitText");

const toast = document.getElementById("toast");


/* ==========================================
   INICIALIZACIÓN
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Si no existen juegos guardados, agregamos algunos de ejemplo.
    if (games.length === 0) {
        games = [
            {
                id: Date.now(),
                nombre: "Minecraft",
                plataforma: "PC",
                genero: "Sandbox",
                estado: "Jugando",
                horasJugadas: 124,
                fechaAgregado: "2026-09-01",
                calificacion: 5,
                favorito: true,
                observaciones: "Mi mundo principal con amigos."
            },
            {
                id: Date.now() + 1,
                nombre: "Resident Evil 4",
                plataforma: "PlayStation 5",
                genero: "Terror",
                estado: "Completado",
                horasJugadas: 18,
                fechaAgregado: "2026-08-20",
                calificacion: 5,
                favorito: true,
                observaciones: "Excelente remake."
            },
            {
                id: Date.now() + 2,
                nombre: "Genshin Impact",
                plataforma: "PC",
                genero: "RPG",
                estado: "Jugando",
                horasJugadas: 230,
                fechaAgregado: "2026-07-15",
                calificacion: 4,
                favorito: false,
                observaciones: "Jugando principalmente por los personajes."
            }
        ];

        saveGames();
    }

    populateFilters();
    renderGames();
    updateStats();
    setDefaultDate();
});


/* ==========================================
   LOCALSTORAGE
========================================== */

function saveGames() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}


/* ==========================================
   RENDERIZADO
========================================== */

function renderGames() {

    const filteredGames = getFilteredGames();

    gamesContainer.innerHTML = "";

    if (filteredGames.length === 0) {
        gamesContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
    } else {
        gamesContainer.classList.remove("hidden");
        emptyState.classList.add("hidden");

        filteredGames.forEach(game => {
            gamesContainer.appendChild(createGameCard(game));
        });
    }

    const resultText = document.getElementById("resultsText");

    resultText.textContent =
        `${filteredGames.length} ${filteredGames.length === 1 ? "juego encontrado" : "juegos encontrados"}`;
}


/* ==========================================
   CREAR TARJETA DE JUEGO
========================================== */

function createGameCard(game) {

    const card = document.createElement("article");

    card.className = "game-card";

    const statusClass = getStatusClass(game.estado);

    const stars = createStars(game.calificacion);

    const formattedDate = formatDate(game.fechaAgregado);

    card.innerHTML = `
        <div class="game-card-header">
            <div>
                <h3 class="game-title">${escapeHTML(game.nombre)}</h3>
                <span class="detail">${escapeHTML(game.plataforma)}</span>
            </div>

            <span class="favorite">
                ${game.favorito ? "★" : ""}
            </span>
        </div>

        <div class="game-info">
            <span class="tag">${escapeHTML(game.genero)}</span>
            <span class="status ${statusClass}">
                ${escapeHTML(game.estado)}
            </span>
        </div>

        <div class="game-details">

            <div class="detail">
                ⏱ Horas jugadas
                <strong>${game.horasJugadas || 0} h</strong>
            </div>

            <div class="detail">
                📅 Agregado
                <strong>${formattedDate}</strong>
            </div>

            <div class="detail">
                ⭐ Calificación
                <strong class="rating">${stars}</strong>
            </div>

        </div>

        ${
            game.observaciones
                ? `<div class="notes">${escapeHTML(game.observaciones)}</div>`
                : ""
        }

        <div class="game-actions">

            <button
                class="action-btn"
                onclick="editGame(${game.id})"
            >
                ✏️ Editar
            </button>

            <button
                class="action-btn delete-btn"
                onclick="deleteGame(${game.id})"
            >
                🗑️ Eliminar
            </button>

        </div>
    `;

    return card;
}


/* ==========================================
   BÚSQUEDA Y FILTROS
========================================== */

function getFilteredGames() {

    const search = searchInput.value.toLowerCase().trim();
    const platform = platformFilter.value;
    const genre = genreFilter.value;
    const status = statusFilter.value;

    return games.filter(game => {

        const matchesSearch =
            game.nombre.toLowerCase().includes(search);

        const matchesPlatform =
            !platform || game.plataforma === platform;

        const matchesGenre =
            !genre || game.genero === genre;

        const matchesStatus =
            !status || game.estado === status;

        const matchesFavorite =
            !showingFavoritesOnly || game.favorito;

        return (
            matchesSearch &&
            matchesPlatform &&
            matchesGenre &&
            matchesStatus &&
            matchesFavorite
        );
    });
}


function populateFilters() {

    const platforms = [...new Set(
        games.map(game => game.plataforma)
    )].sort();

    const genres = [...new Set(
        games.map(game => game.genero)
    )].sort();

    platforms.forEach(platform => {

        const option = document.createElement("option");

        option.value = platform;
        option.textContent = platform;

        platformFilter.appendChild(option);
    });

    genres.forEach(genre => {

        const option = document.createElement("option");

        option.value = genre;
        option.textContent = genre;

        genreFilter.appendChild(option);
    });
}


function clearAllFilters() {

    searchInput.value = "";
    platformFilter.value = "";
    genreFilter.value = "";
    statusFilter.value = "";

    showingFavoritesOnly = false;

    favoriteFilter.classList.remove("active");
    favoriteFilter.textContent = "☆ Favoritos";

    renderGames();
}


/* ==========================================
   ESTADÍSTICAS
========================================== */

function updateStats() {

    const total = games.length;

    const playing = games.filter(
        game => game.estado === "Jugando"
    ).length;

    const favorites = games.filter(
        game => game.favorito
    ).length;

    const totalHours = games.reduce(
        (total, game) => total + Number(game.horasJugadas || 0),
        0
    );

    document.getElementById("totalGames").textContent = total;
    document.getElementById("playingGames").textContent = playing;
    document.getElementById("favoriteGames").textContent = favorites;
    document.getElementById("totalHours").textContent =
        Number.isInteger(totalHours)
            ? totalHours
            : totalHours.toFixed(1);
}


/* ==========================================
   AGREGAR / EDITAR
========================================== */

function openAddModal() {

    editingGameId = null;

    modalTitle.textContent = "Agregar videojuego";
    submitText.textContent = "Guardar juego";

    gameForm.reset();

    clearErrors();
    setDefaultDate();

    gameModal.classList.remove("hidden");
}


function openEditModal(game) {

    editingGameId = game.id;

    modalTitle.textContent = "Editar videojuego";
    submitText.textContent = "Guardar cambios";

    document.getElementById("gameName").value = game.nombre;
    document.getElementById("gamePlatform").value = game.plataforma;
    document.getElementById("gameGenre").value = game.genero;
    document.getElementById("gameStatus").value = game.estado;
    document.getElementById("gameHours").value = game.horasJugadas;
    document.getElementById("gameDate").value = game.fechaAgregado;
    document.getElementById("gameRating").value = game.calificacion;
    document.getElementById("gameFavorite").checked = game.favorito;
    document.getElementById("gameNotes").value = game.observaciones || "";

    clearErrors();

    gameModal.classList.remove("hidden");
}


function editGame(id) {

    const game = games.find(game => game.id === id);

    if (!game) {
        showToast("No se encontró el juego.", "error");
        return;
    }

    openEditModal(game);
}


/* ==========================================
   GUARDAR FORMULARIO
========================================== */

gameForm.addEventListener("submit", event => {

    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const gameData = {

        nombre: document.getElementById("gameName").value.trim(),

        plataforma: document.getElementById("gamePlatform").value,

        genero: document.getElementById("gameGenre").value,

        estado: document.getElementById("gameStatus").value,

        horasJugadas:
            Number(document.getElementById("gameHours").value) || 0,

        fechaAgregado:
            document.getElementById("gameDate").value,

        calificacion:
            Number(document.getElementById("gameRating").value),

        favorito:
            document.getElementById("gameFavorite").checked,

        observaciones:
            document.getElementById("gameNotes").value.trim()
    };


    if (editingGameId !== null) {

        const index = games.findIndex(
            game => game.id === editingGameId
        );

        if (index !== -1) {

            games[index] = {
                ...games[index],
                ...gameData
            };

            showToast("Juego actualizado correctamente.", "success");
        }

    } else {

        games.push({
            id: Date.now(),
            ...gameData
        });

        showToast("Juego agregado correctamente.", "success");
    }


    saveGames();

    populateFiltersAfterChange();

    renderGames();
    updateStats();

    closeGameModal();
});


/* ==========================================
   VALIDACIÓN
========================================== */

function validateForm() {

    clearErrors();

    let valid = true;

    const name = document.getElementById("gameName");
    const platform = document.getElementById("gamePlatform");
    const genre = document.getElementById("gameGenre");
    const status = document.getElementById("gameStatus");
    const hours = document.getElementById("gameHours");
    const date = document.getElementById("gameDate");

    if (name.value.trim() === "") {

        showFieldError(
            name,
            "nameError",
            "Ingresá el nombre del juego."
        );

        valid = false;

    } else if (name.value.trim().length < 2) {

        showFieldError(
            name,
            "nameError",
            "El nombre debe tener al menos 2 caracteres."
        );

        valid = false;
    }


    if (platform.value === "") {

        showFieldError(
            platform,
            "platformError",
            "Seleccioná una plataforma."
        );

        valid = false;
    }


    if (genre.value === "") {

        showFieldError(
            genre,
            "genreError",
            "Seleccioná un género."
        );

        valid = false;
    }


    if (status.value === "") {

        showFieldError(
            status,
            "statusError",
            "Seleccioná un estado."
        );

        valid = false;
    }


    if (
        hours.value !== "" &&
        (
            Number(hours.value) < 0 ||
            Number(hours.value) > 99999
        )
    ) {

        showFieldError(
            hours,
            "hoursError",
            "Las horas deben estar entre 0 y 99999."
        );

        valid = false;
    }


    if (date.value === "") {

        showFieldError(
            date,
            "dateError",
            "Seleccioná una fecha."
        );

        valid = false;
    }


    return valid;
}


function showFieldError(input, errorId, message) {

    input.classList.add("input-error");

    document.getElementById(errorId).textContent = message;
}


function clearErrors() {

    document.querySelectorAll(".error-message").forEach(
        element => element.textContent = ""
    );

    document.querySelectorAll(".input-error").forEach(
        element => element.classList.remove("input-error")
    );
}


/* ==========================================
   ELIMINAR
========================================== */

function deleteGame(id) {

    const game = games.find(game => game.id === id);

    if (!game) {
        return;
    }

    const confirmed = confirm(
        `¿Querés eliminar "${game.nombre}" de tu biblioteca?`
    );

    if (!confirmed) {
        return;
    }

    games = games.filter(game => game.id !== id);

    saveGames();

    populateFiltersAfterChange();

    renderGames();
    updateStats();

    showToast("Juego eliminado correctamente.", "success");
}


/* ==========================================
   MODAL
========================================== */

function closeGameModal() {

    gameModal.classList.add("hidden");

    gameForm.reset();

    clearErrors();

    editingGameId = null;
}


function setDefaultDate() {

    const dateInput = document.getElementById("gameDate");

    if (!dateInput.value) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        dateInput.value = `${year}-${month}-${day}`;
    }
}


/* ==========================================
   TOAST / MENSAJES
========================================== */

function showToast(message, type = "success") {

    toast.textContent = message;

    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* ==========================================
   FUNCIONES AUXILIARES
========================================== */

function getStatusClass(status) {

    switch (status) {

        case "Jugando":
            return "status-playing";

        case "Completado":
            return "status-completed";

        case "Pendiente":
            return "status-pending";

        case "Abandonado":
            return "status-abandoned";

        default:
            return "";
    }
}


function createStars(rating) {

    if (!rating || rating === 0) {
        return "—";
    }

    return "★".repeat(rating) + "☆".repeat(5 - rating);
}


function formatDate(date) {

    if (!date) {
        return "—";
    }

    const parts = date.split("-");

    if (parts.length !== 3) {
        return date;
    }

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


/*
    Evita que los datos ingresados por el usuario
    sean interpretados como HTML.
*/
function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* ==========================================
   ACTUALIZAR FILTROS
========================================== */

function populateFiltersAfterChange() {

    const currentPlatform = platformFilter.value;
    const currentGenre = genreFilter.value;

    platformFilter.innerHTML =
        `<option value="">Todas las plataformas</option>`;

    genreFilter.innerHTML =
        `<option value="">Todos los géneros</option>`;

    const platforms = [...new Set(
        games.map(game => game.plataforma)
    )].sort();

    const genres = [...new Set(
        games.map(game => game.genero)
    )].sort();

    platforms.forEach(platform => {

        const option = document.createElement("option");

        option.value = platform;
        option.textContent = platform;

        platformFilter.appendChild(option);
    });

    genres.forEach(genre => {

        const option = document.createElement("option");

        option.value = genre;
        option.textContent = genre;

        genreFilter.appendChild(option);
    });

    if (platforms.includes(currentPlatform)) {
        platformFilter.value = currentPlatform;
    }

    if (genres.includes(currentGenre)) {
        genreFilter.value = currentGenre;
    }
}


/* ==========================================
   EVENTOS
========================================== */

addGameBtn.addEventListener("click", openAddModal);

emptyAddBtn.addEventListener("click", openAddModal);

closeModal.addEventListener("click", closeGameModal);

cancelBtn.addEventListener("click", closeGameModal);


gameModal.addEventListener("click", event => {

    if (event.target === gameModal) {
        closeGameModal();
    }
});


searchInput.addEventListener("input", renderGames);

platformFilter.addEventListener("change", renderGames);

genreFilter.addEventListener("change", renderGames);

statusFilter.addEventListener("change", renderGames);


favoriteFilter.addEventListener("click", () => {

    showingFavoritesOnly = !showingFavoritesOnly;

    favoriteFilter.classList.toggle(
        "active",
        showingFavoritesOnly
    );

    favoriteFilter.textContent =
        showingFavoritesOnly
            ? "★ Solo favoritos"
            : "☆ Favoritos";

    renderGames();
});


clearFilters.addEventListener(
    "click",
    clearAllFilters
);


/* ==========================================
   TECLA ESC PARA CERRAR EL MODAL
========================================== */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        !gameModal.classList.contains("hidden")
    ) {
        closeGameModal();
    }
});