const products = [
  {
    name: "Waffle",
    fullname: "Waffle with Berries",
    price: "$6.50",
    image: "./assets/images/image-waffle-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Créme Brûlée",
    fullname: "Vanilla Bean Crème Brûlée",
    price: "$7.00",
    image: "./assets/images/image-creme-brulee-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Macaron",
    fullname: "Macaron Mix of Five",
    price: "$8.00",
    image: "./assets/images/image-macaron-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Tiramisu",
    fullname: "Classic Tiramisu",
    price: "$5.50",
    image: "./assets/images/image-tiramisu-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Baklava",
    fullname: "Pistachio Baklava",
    price: "$4.00",
    image: "./assets/images/image-baklava-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Pie",
    fullname: "Lemon Meringue Pie",
    price: "$5.00",
    image: "./assets/images/image-meringue-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Cake",
    fullname: "Red Velvet Cake",
    price: "$4.50",
    image: "./assets/images/image-cake-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Brownie",
    fullname: "Salted Caramel Brownie",
    price: "$5.50",
    image: "./assets/images/image-brownie-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
  {
    name: "Panna Cotta",
    fullname: "Vanilla Panna Cotta",
    price: "$6.50",
    image: "./assets/images/image-panna-cotta-desktop.jpg",
    quantity: 0,
    inCart: false,
  },
];

// Inject products into HTML
const container = document.querySelector(".grids");

products.forEach((product, index) => {
  const productElement = document.createElement("div");
  productElement.className = "option";

  productElement.innerHTML = `
    <div class="background">
        <img class="centered-image" src="${product.image}" alt="${product.fullname}">
        <button class="add_button" onclick="addToCart(${index})">
            <img class="shop_icon" src="./assets/images/icon-add-to-cart.svg">
            <p class="add_to_cart">Add to Cart</p>
        </button>
    </div>
    <div class="product_data">
        <p class="name">${product.name}</p>
        <p class="fullname">${product.fullname}</p>
        <p class="price">${product.price}</p>
    </div>
  `;

  container.appendChild(productElement);
});

// Update cart count
function updateCartCount() {
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
  document.getElementById("total").textContent = totalItems;
  const itemsContainer = document.querySelector(".items");

  if (totalItems > 0) {
    itemsContainer.style.display = "none";
  } else {
    itemsContainer.style.display = "block";
  }
}

