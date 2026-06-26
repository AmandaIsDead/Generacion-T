let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

mostrarFavoritos();

async function buscarPokemon(){

const nombre = document.getElementById("pokemon").value.toLowerCase();

const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

if(!res.ok){
alert("No existe");
return;
}

const p = await res.json();

const card = document.getElementById("card");

card.innerHTML=`
<div class="card">

<h2>${p.name.toUpperCase()}</h2>

<img src="${p.sprites.other["official-artwork"].front_default}">

<p><b>N°</b> ${p.id}</p>

<p><b>Tipo:</b> ${p.types.map(t=>t.type.name).join(", ")}</p>

<p><b>Altura:</b> ${p.height/10} m</p>

<p><b>Peso:</b> ${p.weight/10} kg</p>

<button class="favorito" onclick='agregar(${JSON.stringify(p)})'>
❤️ Favorito
</button>

</div>
`;

}

function agregar(p){

if(favoritos.find(x=>x.id===p.id)){
return;
}

favoritos.push({
id:p.id,
name:p.name,
img:p.sprites.other["official-artwork"].front_default
});

guardar();

}

function guardar(){

localStorage.setItem("favoritos",JSON.stringify(favoritos));

mostrarFavoritos();

}

function mostrarFavoritos(){

const div=document.getElementById("favoritos");

div.innerHTML="";

favoritos.forEach(p=>{

div.innerHTML+=`
<div class="fav" onclick="eliminar(${p.id})">

<img src="${p.img}">

<p>${p.name}</p>

</div>
`;

});

}

function eliminar(id){

favoritos=favoritos.filter(p=>p.id!=id);

guardar();

}