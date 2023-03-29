const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const{elements:{email:t,password:n}}=l.currentTarget;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");const a={email:t.value,password:n.value};console.log(a),e.reset()}));
//# sourceMappingURL=task-08.18a755fb.js.map
