const e={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function o(){window.removeEventListener("keydown",n),document.body.classList.remove("show-modal")}function n(e){"Escape"===e.code&&o()}e.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",n),document.body.classList.add("show-modal")})),e.closeModalBtn.addEventListener("click",o),e.backdrop.addEventListener("click",(function(e){console.log(e.currentTarget),console.log(e.target),e.currentTarget===e.target&&(console.log("Кликнули именно в бекдроп!!!!"),o())}));
//# sourceMappingURL=06-modal.532e8db7.js.map
