const characters = [
  "Luke Skywalker",
  "Darth Vader",
  "Leia Organa",
  "Han Solo",
  "Yoda",
  "Obi-Wan Kenobi",
  "Anakin Skywalker",
  "R2-D2",
  "C-3PO"
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function render(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  list.forEach(name => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${name}</h3>
      <button onclick="addFavorite('${name}')">⭐ Favorito</button>
    `;

    container.appendChild(div);
  });
}

function searchCharacter() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = characters.filter(c =>
    c.toLowerCase().includes(value)
  );

  render(filtered, "results");
}

function addFavorite(name) {
  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    render(favorites, "favoritesList");
  }
}

render(characters, "results");
render(favorites, "favoritesList");