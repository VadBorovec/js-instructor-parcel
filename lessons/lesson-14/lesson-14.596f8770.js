!function(){const t=document.getElementById("otuputScrollStandart"),e=document.getElementById("otuputScrollThrottled"),n={standart:0,throttle:0};document.addEventListener("scroll",(function(){n.standart+=1,t.textContent=n.standart})),document.addEventListener("scroll",_.throttle((()=>{n.throttle+=1,e.textContent=n.throttle}),500));const o=document.getElementById("otuputResizeStandart"),d=document.getElementById("otuputResizeThrottled"),s={standart:0,throttle:0};window.addEventListener("resize",(function(){s.standart+=1,o.textContent=s.standart})),window.addEventListener("resize",_.throttle((()=>{s.throttle+=1,d.textContent=s.throttle}),500));const r=document.querySelector(".magic-btn"),l=document.querySelectorAll(".counter");r.addEventListener("click",(function(t){l.forEach((t=>{t.classList.toggle("visual-hidden")}))}));const c=document.getElementById("nameInput");c.addEventListener("input",_.debounce((()=>console.log(c.value)),1e3,{leading:!0,trailing:!1}));const a=document.getElementById("signInForm"),u=(document.getElementById("loginInput"),document.getElementById("passwordInput"),"correct"),i="wrong";a.addEventListener("input",_.debounce((({target:t})=>{const e=t.value.trim().length;0===e?(t.classList.remove(u),t.classList.remove(i)):e>=5&&e<=10?(t.classList.add(u),t.classList.remove(i)):(t.classList.add(i),t.classList.remove(u))}),1e3))}();
//# sourceMappingURL=lesson-14.596f8770.js.map
