!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=document.querySelector("#controls"),n=e.querySelector("input"),o=e.querySelector("button[data-create]"),r=e.querySelector("button[data-destroy]"),c=document.querySelector("#boxes");o.addEventListener("click",(function(){!function(e){for(var n=30,o=0;o<e;o++){var r=document.createElement("div");r.style.width="".concat(n,"px"),r.style.height="".concat(n,"px"),r.style.backgroundColor=t(),c.appendChild(r),n+=10}}(n.value)})),r.addEventListener("click",(function(){c.innerHTML=""}))}();
//# sourceMappingURL=task-10.3a8593c2.js.map
