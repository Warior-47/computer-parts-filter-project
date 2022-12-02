const data = [
  {
    id: 1,
    name: "Nvidea GTX 1070ti",
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/NVIDIA/1070ti/GeForce_GTX_1070_Ti_3qtr_top_left_1508943778.jpg",
    price: 210,
    cat: "Low value card",
  },
  {
    id: 11,
    name: "Asus GTX 1080ti",
    img: "https://m.media-amazon.com/images/I/51QZyjpoxVL.jpg",
    price: 300,
    cat: "Best for casual",
  },
  {
    id: 2,
    name: "Zotac GTX 1050ti",
    img: "https://media.pangoly.com/img/7/8/6/a/786a7932-ca38-42b3-8655-b451fe887bea.jpg",
    price: 140,
    cat: "Low value card",
  },
  {
    id: 3,
    name: "MSI RTX 2080ti",
    img: "https://cdn.homeshopping.pk/product_images/u/640/14-137-338-V15__42832_zoom.jpg",
    price: 400,
    cat: "High end",
  },
  {
    id: 4,
    name: "MSI RTX 380ti",
    img: "https://www.techglobe.pk/images/thumbnails-large/2-4012-696457-240921013727.jpg",
    price: 700,
    cat: "Absolute high",
  },
  {
    id: 5,
    name: "Asus GTX 1080",
    img: "https://www.mega.pk/items_images/ASUS+GeForce+GTX+1080+8GB+Turbo+Graphic+Card+Price+in+Pakistan%2C+Specifications%2C+Features_-_17338.webp",
    price: 260,
    cat: "Bestfor casual",
  },
  {
    id: 6,
    name: "MSI RTX 2080ti",
    img: "https://cdn.homeshopping.pk/product_images/u/640/14-137-338-V15__42832_zoom.jpg",
    price: 430,
    cat: "High end",
  },
  {
    id: 7,
    name: "MSI RTX 380ti",
    img: "https://www.techglobe.pk/images/thumbnails-large/2-4012-696457-240921013727.jpg",
    price: 1100,
    cat: "Absolute high",
  },
  {
    id: 8,
    name: "Asus GTX 1080",
    img: "https://www.mega.pk/items_images/ASUS+GeForce+GTX+1080+8GB+Turbo+Graphic+Card+Price+in+Pakistan%2C+Specifications%2C+Features_-_17338.webp",
    price: 280,
    cat: "Bestfor casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
        <span class="cat">${cat}</span>
      `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
