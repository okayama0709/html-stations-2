function displayList() {
  const list = document.querySelector("#fruits");
  const lists = document.querySelectorAll("#fruits p");

  list.innerHTML = "";

  const ulEl = document.createElement("ul");
  lists.forEach((li) => {
    const liElm = document.createElement("li");
    liElm.textContent = li.textContent;
    ulEl.appendChild(liElm);
  });
  list.appendChild(ulEl);
}
