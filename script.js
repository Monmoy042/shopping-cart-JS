// Get the Products from API
const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Show Fetched Data in UI
const showData = (elementType, productInfo) => {
  let div = document.getElementById("products");
  let element = document.createElement(`${elementType}`);
  element.textContent = `${productInfo}`;
  div.appendChild(element);
};

// Add to Cart Button Creation
const addButton = () => {
  let div = document.getElementById("products");
  let btn = document.createElement("button");
  btn.setAttribute("id", "#handleClick");
  btn.textContent = "Add to Cart";
  div.appendChild(btn);
  return btn;
};

// Delete from Cart
const deleteProduct = () => {};

getProducts()
  .then((data) => {
    data.map((products) => {
      let { title, description, price } = products;
      showData("h4", title);
      showData("p", description);
      showData("h5", `Price: $${price}`);
      let btn = addButton();
      btn.addEventListener("click", () => {
        let cartList = document.createElement("div");
        cartList.setAttribute("class", "show-cart-list");
        let div = document.querySelector(".shopping-cart-list");
        let h5 = document.createElement("h5");
        h5.textContent = `Products Name: ${title}`;
        let h4 = document.createElement("h4");
        h4.textContent = `Price: $${price}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = `Delete Product`;
        cartList.appendChild(h5);
        cartList.appendChild(h4);
        cartList.appendChild(deleteBtn);
        div.appendChild(cartList);

        deleteBtn.addEventListener("click", () => {
          let div = document.querySelector(".shopping-cart-list");
          div.removeChild(div.firstChild);
        });
      });
    });
  })
  .catch((err) => console.log(err.message));
