(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const v=document.getElementById("container-desserts");let y=[];const N=()=>{v.innerHTML="",y.forEach(i=>{const o=document.createElement("div");o.dataset.id=i.category,o.className="card card-compact bg-base-300 w-80 shadow-xl",o.innerHTML=`
        <figure>
        <img src="${i.image.tablet}"alt="" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${i.category}</h2>
            <p>${i.name}</p>
            <p>$ ${i.price}</p>
            <div class="card-actions justify-end">
                <button class="addCart btn btn-primary"><img class="size-6" src="./images/icon-add-to-cart.svg" alt="">Add to cart</button>
            </div>
        </div>
        `,v.appendChild(o)}),F()},k=()=>{fetch("./data.json").then(i=>i.json()).then(i=>{y=i,console.log(y),N(),localStorage.getItem("cart")&&(r.length=0,r.push(...JSON.parse(localStorage.getItem("cart"))),g())})};var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var L={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(i){(function(o,e){i.exports?i.exports=e():o.Toastify=e()})(O,function(o){var e=function(t){return new e.lib.init(t)},a="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:a,constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=t.duration===0?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity=t.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=t.stopOnFocus===void 0?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=t.escapeMarkup!==void 0?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var d in this.options.style)t.style[d]=this.options.style[d];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?t.appendChild(f):t.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var l=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&l>360?t.insertAdjacentElement("afterbegin",c):t.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;t.addEventListener("mouseover",function(m){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){u.removeElement(t)},u.options.duration)})}if(typeof this.options.destination<"u"&&t.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&t.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var p=s("x",this.options),h=s("y",this.options),b=this.options.position=="left"?p:"-"+p,E=this.options.gravity=="toastify-top"?h:"-"+h;t.style.transform="translate("+b+","+E+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector=="string"?t=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?t=this.options.selector:t=document.body,!t)throw"Root element is not defined";var d=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,d),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}).bind(this),400)}},e.reposition=function(){for(var t={top:15,bottom:15},d={top:15,bottom:15},f={top:15,bottom:15},c=document.getElementsByClassName("toastify"),l,u=0;u<c.length;u++){n(c[u],"toastify-top")===!0?l="toastify-top":l="toastify-bottom";var p=c[u].offsetHeight;l=l.substr(9,l.length-1);var h=15,b=window.innerWidth>0?window.innerWidth:screen.width;b<=360?(c[u].style[l]=f[l]+"px",f[l]+=p+h):n(c[u],"toastify-left")===!0?(c[u].style[l]=t[l]+"px",t[l]+=p+h):(c[u].style[l]=d[l]+"px",d[l]+=p+h)}return this};function s(t,d){return d.offset[t]?isNaN(d.offset[t])?d.offset[t]:d.offset[t]+"px":"0px"}function n(t,d){return!t||typeof d!="string"?!1:!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(d)>-1)}return e.lib.init.prototype=e.lib,e})})(L);var P=L.exports;const S=x(P);let r=[];const w=document.getElementById("cartElements"),q=document.querySelector(".indicator-item"),M=document.querySelector(".indicator-item-2"),I=document.querySelector(".subtotal"),$=document.querySelector(".subtotal-2"),F=()=>{v.addEventListener("click",i=>{let o=i.target;if(o.classList.contains("addCart")||o.closest(".addCart")){let e=o.closest(".card").dataset.id;A(e),g()}})},A=i=>{let o=r.findIndex(e=>e.product_id==i);r.length<=0?r=[{product_id:i,quantity:1}]:o<0?r.push({product_id:i,quantity:1}):r[o].quantity=r[o].quantity+1,S({text:"Añadido al carrito",className:"info",gravity:"top",position:"center",style:{background:"linear-gradient(to right, #3aa4b4 , #1dfd82)"}}).showToast(),C()},C=()=>{localStorage.setItem("cart",JSON.stringify(r))},g=()=>{w.innerHTML="";let i=0,o=0;r.length>0&&r.forEach(e=>{i=i+e.quantity;let a=document.createElement("div");a.className="flex flex-row",a.dataset.id=e.product_id;let s=y.findIndex(t=>t.category==e.product_id),n=y[s];o+=n.price*e.quantity,a.innerHTML=`
            <img class="size-12" src="${n.image.thumbnail}" alt="">
            <button class="minus btn btn-warning"> - </button>
            <span class="p-3 px-3">${e.quantity}</span>
            <button class="plus btn btn-success"> + </button>
            <h4 class="p-3">${n.category}</h4>
            <span class="totalPrice p-3">$ ${n.price*e.quantity}</span>
            `,w.appendChild(a)}),q.innerText=i,M.innerText=i+" Items",I.innerText=`$ ${o.toFixed(2)}`,$.innerText=`$ ${o.toFixed(2)}`},H=()=>{w.addEventListener("click",i=>{let o=i.target;if(o.classList.contains("minus")||o.classList.contains("plus")){let e=o.parentElement.dataset.id,a="minus";o.classList.contains("plus")&&(a="plus"),T(e,a)}})},T=(i,o)=>{let e=r.findIndex(a=>a.product_id==i);if(e>=0){switch(o){case"plus":r[e].quantity=r[e].quantity+1;break;default:let a=r[e].quantity-1;a>0?r[e].quantity=a:r.splice(e,1);break}C(),g()}};document.addEventListener("DOMContentLoaded",()=>{k(),g(),H(),T()});
