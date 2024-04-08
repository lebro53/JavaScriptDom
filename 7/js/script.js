const dataParse = JSON.parse(dataJSONObject);

const tamplateEl = catalog_item.content;
const cartItemsEl = document.querySelector(".cartItems");

const productCatalogEl = document.querySelector(".product_catalog");

dataParse.forEach((element) => {
  const newTamplate = tamplateEl.cloneNode(true);
  newTamplate.querySelector(".item__img").src = element.src;
  newTamplate.querySelector(".item__img").width = element.width;
  newTamplate.querySelector(".item__img").height = element.height;

  newTamplate.querySelector(".item__name").innerHTML = element.name;
  newTamplate.querySelector(".item__description").innerHTML =
    element.description;
  newTamplate.querySelector(".item__price").innerHTML = element.price;
  productCatalogEl.appendChild(newTamplate);
});

const buttonEl = productCatalogEl.querySelectorAll(".button");
buttonEl.forEach((item) => {
  item.addEventListener("click", function () {
    const addCard = item.closest(".item__box").cloneNode(true);
    const childButton = addCard.querySelector(".button");
    addCard.removeChild(childButton);

    const deleteElement = document.createElement("button");
    deleteElement.classList.add("deleteButton");
    deleteElement.textContent = "Delete";
    addCard.appendChild(deleteElement);

    cartItemsEl.appendChild(addCard);
    const deleteButtonEl = cartItemsEl.querySelectorAll(".deleteButton");

    deleteButtonEl.forEach((item) => {
      item.addEventListener("click", function () {
        const parentDelete = item.parentNode;
        parentDelete.remove();
      });
    });
  });
});
