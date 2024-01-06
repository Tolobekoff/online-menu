//! Admin
let urlInput = document.querySelector(".url-input");
let nameInput = document.querySelector(".name-input");
let priceInput = document.querySelector(".price-input");
let createBtn = document.querySelector(".create");

// !  Client
let list = document.querySelector(".list");

//!  Order
let list2 = document.querySelector(".list2");

getProduct();
getOrder();

createBtn.addEventListener("click", () => {
  addProduct();
  getProduct();
});
function addProduct() {
  let url = urlInput.value;
  let name = nameInput.value;
  let price = priceInput.value;

  let obj = {
    url: url,
    name: name,
    price: price,
    id: Date.now(),
  };

  let menuName = JSON.parse(localStorage.getItem("foodMenu")) || [];
  menuName.push(obj);
  localStorage.setItem("foodMenu", JSON.stringify(menuName));
  for (let i of inputs) {
    i.value = "";
  }
}

function getProduct() {
  list.innerHTML = "";
  let menuName = JSON.parse(localStorage.getItem("foodMenu")) || [];
  menuName.forEach((el) => {
    let priceFood = document.createElement("h4");
    let nameFood = document.createElement("h3");
    let foodImg = document.createElement("img");
    let addBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    let basketBtn = document.createElement("button");
    let div1 = document.createElement("div");
    let setT = document.createElement("div");
    let div2 = document.createElement("div");

    foodImg.src = el.url;
    priceFood.innerText = `$${el.price}`;
    nameFood.innerText = el.name;
    delBtn.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";
    addBtn.innerHTML = "<ion-icon name='brush-outline'></ion-icon>";
    basketBtn.innerHTML = "<ion-icon name='basket-outline'></ion-icon>";

    div1.classList.add("back-font");
    div2.classList.add("div2");
    foodImg.classList.add("foodImg");
    nameFood.classList.add("nameFood");
    priceFood.classList.add("priceFood");
    addBtn.classList.add("addBtn");
    delBtn.classList.add("delBtn");
    basketBtn.classList.add("basketBtn");

    div1.append(foodImg);
    div1.append(nameFood);
    setT.append(addBtn);
    setT.append(delBtn);
    setT.append(basketBtn);
    div2.append(priceFood);
    div2.append(setT);
    div1.append(div2);
    list.append(div1);

    delBtn.addEventListener("click", () => {
      removeMenu(el.id);
      div1.style.display = "none";
    });
    basketBtn.addEventListener("click", () => {
      getOrder();
    });
  });
}
function removeMenu(id) {
  let menuName = JSON.parse(localStorage.getItem("foodMenu")) || [];
  menuName = menuName.splice(id, 1);
  localStorage.setItem("foodMenu", JSON.stringify(menuName));
  getProduct();
}

function getOrder() {
  list2.innerHTML = "";
  let menuName = JSON.parse(localStorage.getItem("foodMenu")) || [];
  menuName.forEach((el) => {
    let orderImg = document.createElement("img");
    let orderDiv = document.createElement("div");
    let orderName = document.createElement("h3");
    let orderPrice = document.createElement("h4");
    let orderInfo = document.createElement("div");
    let orderDel = document.createElement("button");

    orderName = el.name;
    orderPrice = el.price;
    orderImg.src = el.url;
    orderDel.innerText = " delete order";

    orderImg.classList.add("orderImg");
    orderName.classList.add("orderName");
    orderPrice.classList.add("orderPrice");
    orderDiv.classList.add("orderDiv");
    orderInfo.classList.add("orderInfo");
    orderDel.classList.add("orderDel");

    orderDiv.append(orderImg);
    orderInfo.append(orderName);
    orderInfo.append(orderPrice);
    orderDiv.append(orderInfo);
    orderDiv.append(orderDel);
    list2.append(orderDiv);
  });
}
