const div = document.querySelector(".container");

for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement("div");
    const sprite = document.createElement("img");
    const newSpan = document.createElement("span");
    newDiv.appendChild(sprite);
    newSpan.innerText = `#${i}`;
    newDiv.appendChild(newSpan);
    sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    newDiv.classList.add('pokemon');
    div.appendChild(newDiv);
}
