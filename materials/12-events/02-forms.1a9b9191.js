document.querySelector(".js-register-form").addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(e.currentTarget);console.log(o),o.forEach(((e,o)=>{console.log("onFormSubmit -> name",o),console.log("onFormSubmit -> value",e)}))}));
//# sourceMappingURL=02-forms.1a9b9191.js.map
