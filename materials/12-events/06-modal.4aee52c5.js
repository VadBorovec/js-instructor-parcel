!function(){const o={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function e(){window.removeEventListener("keydown",n),document.body.classList.remove("show-modal")}function n(o){"Escape"===o.code&&e()}o.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",n),document.body.classList.add("show-modal")})),o.closeModalBtn.addEventListener("click",e),o.backdrop.addEventListener("click",(function(o){console.log(o.currentTarget),console.log(o.target),o.currentTarget===o.target&&(console.log("Кликнули именно в бекдроп!!!!"),e())}))}();
//# sourceMappingURL=06-modal.4aee52c5.js.map