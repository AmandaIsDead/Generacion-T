// =========================================
// POKEDEX RETRO
// =========================================

const API = "https://pokeapi.co/api/v2";

// ELEMENTOS
const listaPokemon = document.getElementById("listaPokemon");
const listaFavoritos = document.getElementById("listaFavoritos");

const inputBuscar = document.getElementById("buscarPokemon");

const btnBuscar = document.getElementById("btnBuscar");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnMostrarTodos = document.getElementById("btnMostrarTodos");

const selectRegion = document.getElementById("region");
const selectTipo = document.getElementById("tipo");

const loading = document.getElementById("loading");

const mensaje = document.getElementById("mensajeError");
const textoError = document.getElementById("textoError");
const cerrarMensaje = document.getElementById("cerrarMensaje");

const template = document.getElementById("templatePokemon");

// =========================================
// FAVORITOS
// =========================================

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function guardarFavoritos(){
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function esFavorito(id){
    return favoritos.includes(id);
}

function toggleFavorito(id){

    if(esFavorito(id)){
        favoritos = favoritos.filter(f => f !== id);
    } else {
        favoritos.push(id);
    }

    guardarFavoritos();
    renderFavoritos();
}

// =========================================
// UI
// =========================================

function mostrarError(texto){
    textoError.textContent = texto;
    mensaje.classList.remove("oculto");
}

cerrarMensaje.onclick = () => {
    mensaje.classList.add("oculto");
};

function mostrarLoader(){
    loading.classList.remove("oculto");
}

function ocultarLoader(){
    loading.classList.add("oculto");
}

// =========================================
// FETCH POKÉMON
// =========================================

async function getPokemon(id){
    try{
        const res = await fetch(`${API}/pokemon/${id}`);
        if(!res.ok) throw new Error();
        return await res.json();
    }catch{
        mostrarError("Error al obtener Pokémon.");
        return null;
    }
}

// =========================================
// CARD
// =========================================

function crearCard(pokemon){

    const card = template.content.cloneNode(true);

    card.querySelector(".numero").textContent =
        "#" + pokemon.id.toString().padStart(3, "0");

    card.querySelector("img").src =
        pokemon.sprites.other["official-artwork"].front_default;

    card.querySelector("h3").textContent = pokemon.name;

    card.querySelector(".altura").textContent =
        `Altura: ${pokemon.height / 10} m`;

    card.querySelector(".peso").textContent =
        `Peso: ${pokemon.weight / 10} kg`;

    const habilidades = pokemon.abilities
        .map(a => a.ability.name)
        .join(", ");

    card.querySelector(".habilidades").textContent =
        "Habilidades: " + habilidades;

    const contTipos = card.querySelector(".tipos");

    pokemon.types.forEach(t => {
        const span = document.createElement("span");
        span.className = `tipo ${t.type.name}`;
        span.textContent = t.type.name;
        contTipos.appendChild(span);
    });

    const btn = card.querySelector(".favorito");

    function actualizarBtn(){
        btn.textContent = esFavorito(pokemon.id)
            ? "Quitar favorito"
            : "Agregar favorito";

        btn.classList.toggle("activo", esFavorito(pokemon.id));
    }

    actualizarBtn();

    btn.onclick = () => {
        toggleFavorito(pokemon.id);
        actualizarBtn();
    };

    return card;
}

// =========================================
// RENDER LISTA
// =========================================

function renderLista(lista){
    listaPokemon.innerHTML = "";
    lista.forEach(p => listaPokemon.appendChild(crearCard(p)));
}

// =========================================
// CARGAR TODOS
// =========================================

async function obtenerTodos(){

    try{

        mostrarLoader();

        listaPokemon.innerHTML = "";

        const res = await fetch(`${API}/pokemon?limit=1025`);
        const data = await res.json();

        const lista = data.results;
        const resultados = [];

        const CHUNK_SIZE = 50;

        for(let i = 0; i < lista.length; i += CHUNK_SIZE){

            const chunk = lista.slice(i, i + CHUNK_SIZE);

            const promesas = chunk.map(p =>
                getPokemon(p.name)
            );

            const resultadoChunk = await Promise.all(promesas);

            resultados.push(...resultadoChunk.filter(Boolean));

            renderLista(resultados);
        }

        ocultarLoader();

    }catch{

        mostrarError("Error al cargar Pokémon.");
        ocultarLoader();
    }
}

// =========================================
// BUSCAR
// =========================================

async function buscar(){

    const valor = inputBuscar.value.toLowerCase().trim();

    if(!valor){
        mostrarError("Escribí un Pokémon.");
        return;
    }

    mostrarLoader();

    const p = await getPokemon(valor);

    if(p){
        renderLista([p]);
    }

    ocultarLoader();
}

// =========================================
// FILTRO COMBINADO
// =========================================

async function filtrar(){

    mostrarLoader();

    const region = selectRegion.value;
    const tipo = selectTipo.value;

    let inicio = 1;
    let fin = 1025;

    if(region === "johto"){inicio=152; fin=251;}
    if(region === "hoenn"){inicio=252; fin=386;}
    if(region === "sinnoh"){inicio=387; fin=493;}
    if(region === "unova"){inicio=494; fin=649;}
    if(region === "kalos"){inicio=650; fin=721;}
    if(region === "alola"){inicio=722; fin=809;}
    if(region === "galar"){inicio=810; fin=905;}
    if(region === "paldea"){inicio=906; fin=1025;}

    const resultados = [];

    for(let i = inicio; i <= fin; i++){

        const p = await getPokemon(i);

        if(!p) continue;

        const okTipo =
            !tipo ||
            p.types.some(t => t.type.name === tipo);

        if(okTipo){
            resultados.push(p);
        }
    }

    renderLista(resultados);

    ocultarLoader();
}

// =========================================
// FAVORITOS
// =========================================

async function renderFavoritos(){

    listaFavoritos.innerHTML = "";

    for(let id of favoritos){
        const p = await getPokemon(id);
        if(p){
            listaFavoritos.appendChild(crearCard(p));
        }
    }
}

// =========================================
// EVENTOS
// =========================================

btnBuscar.onclick = buscar;
btnFiltrar.onclick = filtrar;
btnMostrarTodos.onclick = obtenerTodos;

// =========================================
// INIT
// =========================================

function init(){

    obtenerTodos();
    renderFavoritos();

}

init();