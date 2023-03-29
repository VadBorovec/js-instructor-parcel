!function(){const t=document.querySelector(".js-tags"),e=new Set;t.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;const n=t.target,a=n.dataset.value;n.classList.contains("tags__btn--active")?e.delete(a):e.add(a);n.classList.toggle("tags__btn--active"),console.log(e)}))}();
//# sourceMappingURL=03-tags.800bc065.js.map
