const dataParse = JSON.parse(dataJSONObject);

const tamplateEl = catalog_item.content;
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
