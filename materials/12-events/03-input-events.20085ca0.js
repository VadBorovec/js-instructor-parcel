!function(){const e={input:document.querySelector(".js-input"),nameLabel:document.querySelector(".js-button > span"),licenseCheckbox:document.querySelector(".js-license"),btn:document.querySelector(".js-button")};e.input.addEventListener("focus",(function(){console.log("Инпут получил фокус - событие focus")})),e.input.addEventListener("blur",(function(){console.log("Инпут потерял фокус - событие blur")})),e.input.addEventListener("input",(function(n){e.nameLabel.textContent=n.currentTarget.value})),e.licenseCheckbox.addEventListener("change",(function(n){e.btn.disabled=!n.currentTarget.checked}))}();
//# sourceMappingURL=03-input-events.20085ca0.js.map