const vegetables = [
  { id: 1, name: "Tomato", price: 1.5, farmer: "Farmer John" },
  { id: 2, name: "Carrot", price: 2.0, farmer: "Farmer Emma" },
  { id: 3, name: "Lettuce", price: 1.2, farmer: "Farmer Raj" },
];

let cart = [];

const vegetableList = document.getElementById("vegetableList");
const cartItems = document.getElementById("cartItems");
const emptyCartMsg = document.getElementById("emptyCartMsg");
const searchInput = document.getElementById("searchInput");

function renderVegetables(list) {
  vegetableList.innerHTML = "";
  list.forEach((veg) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${veg.name}</h2>
      <p>Farmer: <strong>${veg.farmer}</strong></p>
      <p>Price: $${veg.price.toFixed(2)}</p>
      <button onclick="addToCart(${veg.id})">Add to Cart</button>
    `;
    vegetableList.appendChild(card);
  });
}

function addToCart(id) {
  const veg = vegetables.find((v) => v.id === id);
  cart.push(veg);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    emptyCartMsg.style.display = "block";
  } else {
    emptyCartMsg.style.display = "none";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
    });
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = vegetables.filter((veg) =>
    veg.name.toLowerCase().includes(query)
  );
  renderVegetables(filtered);
});

renderVegetables(vegetables);
updateCart();
