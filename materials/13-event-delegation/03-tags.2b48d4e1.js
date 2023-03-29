const t=document.querySelector(".js-tags"),e=new Set;t.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;const a=t.target,s=a.dataset.value;a.classList.contains("tags__btn--active")?e.delete(s):e.add(s);a.classList.toggle("tags__btn--active"),console.log(e)}));
//# sourceMappingURL=03-tags.2b48d4e1.js.map
