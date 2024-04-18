const nameInput = document.querySelector("#name-input");
const spanInputId = document.querySelector("span#name-output");
console.log(nameInput);
console.log(spanInputId.textContent);

nameInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  if (inputValue === "" || inputValue === " ") {
    spanInputId.textContent = "Anonymous";
  } else {
    spanInputId.textContent = inputValue;
  }
});
