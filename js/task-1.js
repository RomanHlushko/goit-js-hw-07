const categoriesItem = document.querySelector("ul#categories");
const itemList = document.querySelectorAll(".item");

// console.log(categoriesItem);
console.log(`Number of categories: ${itemList.length}`);
for (const element of itemList) {
  console.log("Category: " + element.firstElementChild.textContent);
  console.log("Elements: " + element.lastElementChild.children.length);
}
