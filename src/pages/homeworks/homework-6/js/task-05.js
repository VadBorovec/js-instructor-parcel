// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// ==========================================================================================================

const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  event.currentTarget.value.trim() === ""
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = event.currentTarget.value.trim());
  //   console.log(refs.nameOutput.textContent);
}

// // ==========================================================================================================
// //  ChatGPT

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", () => {
//   nameOutput.textContent = nameInput.value.trim() || "Anonymous";
// });
