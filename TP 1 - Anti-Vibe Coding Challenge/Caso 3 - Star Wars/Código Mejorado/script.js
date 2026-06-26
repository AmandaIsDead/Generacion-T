/*=========================================================
                    STAR WARS GALACTIC WIKI
=========================================================*/

"use strict";

/*=========================================================
                        CONFIG
=========================================================*/

const API = "https://swapi.py4e.com/api";

const VISUAL_GUIDE =
"https://starwars-visualguide.com/assets/img";

const ITEMS_PER_PAGE = 12;

/*=========================================================
                        ELEMENTOS
=========================================================*/

const loader =
document.getElementById("loader");

const message =
document.getElementById("message");

const modal =
document.getElementById("modal");

const modalBody =
document.getElementById("modalBody");

const closeModal =
document.getElementById("closeModal");

const topBtn =
document.getElementById("topBtn");

const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

const genderFilter =
document.getElementById("genderFilter");

const speciesFilter =
document.getElementById("speciesFilter");

const navButtons =
document.querySelectorAll(".nav-btn");

const sections =
document.querySelectorAll(".content-section");

const grids = {

characters:
document.getElementById("charactersGrid"),

planets:
document.getElementById("planetsGrid"),

species:
document.getElementById("speciesGrid"),

starships:
document.getElementById("starshipsGrid"),

vehicles:
document.getElementById("vehiclesGrid"),

films:
document.getElementById("filmsGrid")

};

/*=========================================================
                        DATOS
=========================================================*/

let people = [];

let planets = [];

let species = [];

let starships = [];

let vehicles = [];

let films = [];

let filteredPeople = [];

let currentPage = 1;

/*=========================================================
                        SONIDO
=========================================================*/

const saber = new Audio(
"https://www.myinstants.com/media/sounds/lightsaber_1.mp3"
);

saber.volume = 0.18;

let soundEnabled = true;

/*=========================================================
                    FUNCIONES UI
=========================================================*/

function showLoader(){

loader.classList.remove("hidden");

}

function hideLoader(){

loader.classList.add("hidden");

}

function showMessage(text,error=false){

message.textContent = text;

message.style.borderColor =
error ? "#ff5c5c" : "#44d8ff";

message.classList.remove("hidden");

setTimeout(()=>{

message.classList.add("hidden");

},3000);

}

function playSaber(){

if(!soundEnabled) return;

saber.currentTime = 0;

saber.play().catch(()=>{});

}

/*=========================================================
                    HELPERS
=========================================================*/

// Trae TODAS las páginas de un endpoint (SWAPI viene paginado)
async function fetchAll(endpoint){

let results = [];
let url = `${API}/${endpoint}`;

try{

while(url){

const res = await fetch(url);

if(!res.ok) throw new Error("API error");

const data = await res.json();

results = results.concat(data.results);

url = data.next;

}

return results;

}catch(err){

showMessage("Error cargando datos de la galaxia", true);

return [];

}

}

/*=========================================================
                NORMALIZACIÓN DE DATOS
=========================================================*/

async function loadAllData(){

showLoader();

people = await fetchAll("people");
planets = await fetchAll("planets");
species = await fetchAll("species");
starships = await fetchAll("starships");
vehicles = await fetchAll("vehicles");
films = await fetchAll("films");

filteredPeople = people;

hideLoader();

renderSection("characters");

populateSpeciesFilter();

showMessage("Datos de la galaxia cargados correctamente");

}

/*=========================================================
                    VISUAL GUIDE (IMÁGENES)
=========================================================*/

// extrae ID desde URL SWAPI
function getId(url){

const parts = url.split("/").filter(Boolean);

return parts[parts.length - 1];

}

// imagen de personajes / planetas / etc
function getImage(type, url){

const id = getId(url);

return `${VISUAL_GUIDE}/${type}/${id}.jpg`;

}

/* fallback si no existe imagen */
function handleImgError(img){

img.src =
`${VISUAL_GUIDE}/big-placeholder.jpg`;

}

/*=========================================================
                    RENDER CARDS
=========================================================*/

function renderSection(section){

switch(section){

case "characters":
renderCharacters();
break;

case "planets":
renderPlanets();
break;

case "species":
renderSpecies();
break;

case "starships":
renderStarships();
break;

case "vehicles":
renderVehicles();
break;

case "films":
renderFilms();
break;

}

}

/*=========================================================
                    PERSONAJES
=========================================================*/

function renderCharacters(){

const container = grids.characters;

container.innerHTML = "";

const start = (currentPage - 1) * ITEMS_PER_PAGE;

const pageItems = filteredPeople.slice(start, start + ITEMS_PER_PAGE);

pageItems.forEach(p => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="${getImage("characters", p.url)}"
onerror="handleImgError(this)" style="width:100%;border-radius:12px;margin-bottom:10px;height:180px;object-fit:cover">

<div class="card-header">
<h3 class="card-title">${p.name}</h3>
</div>

<div class="card-body">

<p><strong>Género:</strong> <span>${p.gender}</span></p>

<p><strong>Nacimiento:</strong> <span>${p.birth_year}</span></p>

<p><strong>Altura:</strong> <span>${p.height} cm</span></p>

</div>

<button class="details-btn" onclick="openCharacterModal('${p.url}')">
Ver más
</button>

`;

container.appendChild(card);

});

}

/*=========================================================
                    PLANETAS
=========================================================*/

function renderPlanets(){

const container = grids.planets;

container.innerHTML = "";

planets.forEach(p => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="${getImage("planets", p.url)}"
onerror="handleImgError(this)"
style="width:100%;border-radius:12px;margin-bottom:10px;height:180px;object-fit:cover">

<div class="card-header">
<h3 class="card-title">${p.name}</h3>
</div>

<div class="card-body">

<p><strong>Clima:</strong> <span>${p.climate}</span></p>

<p><strong>Terreno:</strong> <span>${p.terrain}</span></p>

<p><strong>Población:</strong> <span>${p.population}</span></p>

</div>

`;

container.appendChild(card);

});

}

/*=========================================================
                    ESPECIES
=========================================================*/

function renderSpecies(){

const container = grids.species;

container.innerHTML = "";

species.forEach(s => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<div class="card-header">
<h3 class="card-title">${s.name}</h3>
</div>

<div class="card-body">

<p><strong>Clasificación:</strong> <span>${s.classification}</span></p>

<p><strong>Idioma:</strong> <span>${s.language}</span></p>

<p><strong>Esperanza de vida:</strong> <span>${s.average_lifespan}</span></p>

</div>

`;

container.appendChild(card);

});

}

/*=========================================================
                    NAVEGACIÓN
=========================================================*/

navButtons.forEach(btn => {

btn.addEventListener("click", () => {

navButtons.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

const section = btn.dataset.section;

switchSection(section);

playSaber();

});

});

function switchSection(section){

sections.forEach(s => s.classList.remove("active"));

document.getElementById(section).classList.add("active");

currentPage = 1;

renderSection(section);

}

/*=========================================================
                    PAGINACIÓN
=========================================================*/

function nextPage(){

const maxPages = Math.ceil(filteredPeople.length / ITEMS_PER_PAGE);

if(currentPage < maxPages){

currentPage++;

renderCharacters();

}

}

function prevPage(){

if(currentPage > 1){

currentPage--;

renderCharacters();

}

}

/*=========================================================
                    BUSCADOR
=========================================================*/

function searchCharacters(){

const value = searchInput.value.toLowerCase();

filteredPeople = people.filter(p =>
p.name.toLowerCase().includes(value)
);

currentPage = 1;

renderCharacters();

}

/*=========================================================
                    FILTRO POR GÉNERO
=========================================================*/

function filterByGender(){

const value = genderFilter.value;

if(value === "all"){

filteredPeople = people;

}else{

filteredPeople = people.filter(p =>
p.gender === value
);

}

currentPage = 1;

renderCharacters();

}

/*=========================================================
                FILTRO ESPECIES (BÁSICO)
=========================================================*/

function populateSpeciesFilter(){

const unique = [...new Set(
people.map(p => p.species).flat()
)];

speciesFilter.innerHTML =
`<option value="all">Todas las especies</option>`;

unique.forEach(s => {

if(!s) return;

const opt = document.createElement("option");

opt.value = s;

opt.textContent = s;

speciesFilter.appendChild(opt);

});

}

/*=========================================================
            RESOLVER URLs (PLANETAS / ESPECIES)
=========================================================*/

async function resolveUrl(url){

if(!url) return "unknown";

try{

const res = await fetch(url);

const data = await res.json();

return data.name;

}catch{

return "unknown";

}

}

/*=========================================================
                ESPECIES REALES EN PERSONAJES
=========================================================*/

async function enrichPeople(){

for(let p of people){

// planeta natal
p.homeworldName = await resolveUrl(p.homeworld);

// especie (puede venir vacía)
if(p.species.length > 0){

p.speciesName = await resolveUrl(p.species[0]);

}else{

p.speciesName = "Human";

}

}

filteredPeople = people;

}

/*=========================================================
                    MODAL PERSONAJE
=========================================================*/

async function openCharacterModal(url){

const id = getId(url);

const p = people.find(x => x.url === url);

if(!p) return;

const planet = await resolveUrl(p.homeworld);

let speciesName = "Human";

if(p.species.length){

speciesName = await resolveUrl(p.species[0]);

}

modalBody.innerHTML = `

<div class="modal-info">

<h2 class="modal-title">${p.name}</h2>

<div class="modal-data">

<p><strong>Género:</strong> ${p.gender}</p>

<p><strong>Nacimiento:</strong> ${p.birth_year}</p>

<p><strong>Altura:</strong> ${p.height} cm</p>

<p><strong>Peso:</strong> ${p.mass} kg</p>

<p><strong>Planeta natal:</strong> ${planet}</p>

<p><strong>Especie:</strong> ${speciesName}</p>

</div>

</div>

`;

modal.classList.remove("hidden");

}

/*=========================================================
                    MODAL CONTROL
=========================================================*/

closeModal.addEventListener("click", () => {

modal.classList.add("hidden");

});

/* cerrar clic afuera */
modal.addEventListener("click", (e) => {

if(e.target === modal){

modal.classList.add("hidden");

}

});

/*=========================================================
                FILTRO ESPECIES REAL
=========================================================*/

async function filterBySpecies(){

const value = speciesFilter.value;

if(value === "all"){

filteredPeople = people;

}else{

filteredPeople = people.filter(p =>
p.species.includes(value)
);

}

currentPage = 1;

renderCharacters();

}

/*=========================================================
                    EVENTOS UI
=========================================================*/

searchBtn.addEventListener("click", searchCharacters);

genderFilter.addEventListener("change", filterByGender);

speciesFilter.addEventListener("change", filterBySpecies);

/*=========================================================
                BOTÓN ARRIBA
=========================================================*/

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

topBtn.classList.remove("hidden");

}else{

topBtn.classList.add("hidden");

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({ top: 0, behavior: "smooth" });

});

/*=========================================================
                    INIT
=========================================================*/

async function init(){

await loadAllData();

await enrichPeople();

renderCharacters();

}

init();