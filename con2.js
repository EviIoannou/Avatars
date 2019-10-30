function Avatar(name, age, type, image) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.image = image;
}
let avatars = [];

avatars.push(
  (frodo = new Avatar("Frodo", 100, "Hobbit", "img/frodo.jpg")),
  (aragorn = new Avatar("Aragorn", 135, "Warrior", "img/aragorn.jpg")),
  (legolas = new Avatar("Leoglas", 300, "Archer", "img/legolas.jpg")),
  (gimli = new Avatar("Gimli", 40, "Dwarf", "img/gimli.jpg")),
  (gandalf = new Avatar("Gandalf", 110, "Mage", "img/gandalf.gif"))
);

avatars.sort((a, b) => {
  return a.age - b.age;
});

function render() {
  avatars.forEach(item => {
    let rendAvatar = document.querySelector(".avatars");
    let div = document.createElement("div");
    div.innerHTML = `
  
    <div class="card">
  <img src="${item.image}" alt="John" style="width:100%">
  <h1>${item.name}</h1>
  <p class="title">${item.age}</p>
  <p>${item.type}</p>
 

</div>

  `;
    rendAvatar.appendChild(div);
  });
}
render();
