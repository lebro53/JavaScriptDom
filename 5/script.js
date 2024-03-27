const data = JSON.parse(dataForm);
const containerEl = document.querySelector(".container");
data.forEach((element) => {
  const divElem = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const parEl = document.createElement("p");

  imgEl.src = element.src;
  imgEl.width = element.width;
  imgEl.height = element.height;
  titleEl.textContent = element.title;
  parEl.textContent = element.text;
  divElem.appendChild(imgEl);
  divElem.appendChild(titleEl);
  divElem.appendChild(parEl);
  containerEl.appendChild(divElem);
});
