//! =============================================
const t={price:0,quantity:0,calcTotalPrice(){return(this.price*this.quantity).toFixed(2)}},e=document.getElementById("form"),n=document.getElementById("total"),o=document.getElementById("amount");function a(){t.price=e.elements.price.getAttribute("value"),t.quantity=e.elements.quantity.getAttribute("value")}function c(){n.textContent=t.calcTotalPrice()+"грн",o.textContent=t.quantity}
//! =============================================
a(),c(),e.addEventListener("change",(function({target:t}){const{value:n}=t;t===e.elements.quantity&&(o.textContent=n);t.setAttribute("value",n),a(),c()}));const i=new FormData(e),u={};i.forEach(((t,e)=>{u[e]=t})),console.log(u);
//# sourceMappingURL=lesson-13.ad422bea.js.map
