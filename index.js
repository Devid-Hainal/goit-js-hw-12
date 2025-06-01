import{a as b,S as w,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function S(i,o){const n="https://pixabay.com/api/",e={key:"50347658-285688eb76e59c705e33623f4",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await b.get(n,{params:e})).data}const g=document.querySelector(".form"),h={container:document.querySelector(".section-js"),inputElement:g.querySelector('input[name="search-text"]'),buttonElement:document.querySelector(".button"),galleryListElement:document.querySelector(".gallery"),loaderElement:document.querySelector(".loader"),loaderButtonElement:document.querySelector(".loader-button-js")},{container:j,inputElement:C,buttonElement:H,galleryListElement:y,loaderElement:u,loaderButtonElement:d}=h;let q=new w(".gallery a");async function B(i){const o=i.map(({webformatURL:n,largeImageURL:r,tags:e,likes:t,views:s,comments:L,downloads:E})=>`<li class="gallery-list-item">
        <a href="${r}" class="gallery-list-link">
          <img class="gallery-img" src="${n}" alt="${e}" />
        </a>
        <div class="img-info">
  <div class="info-item">
    <p class="info-label">Likes</p>
    <p class="info-value">${t}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Views</p>
    <p class="info-value">${s}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Comments</p>
    <p class="info-value">${L}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${E}</p>
  </div>
</div>

      </li>`).join("");y.insertAdjacentHTML("beforeend",o),q.refresh()}function $(){y.innerHTML=""}function P(){u&&u.classList.remove("is-hidden")}function m(){u&&u.classList.add("is-hidden")}function M(){d&&d.classList.remove("is-hidden")}function c(){d&&d.classList.add("is-hidden")}const{inputElement:O,loaderButtonElement:R,galleryListElement:x}=h;let f="",a=1;const p=15;g.addEventListener("submit",async i=>{i.preventDefault();const o=O.value.trim();if(!o){l.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}o!==f&&(f=o,a=1,$(),c()),await v()});R.addEventListener("click",async()=>{a+=1,await v()});async function v(){try{P();const i=await S(f,a,p);if(m(),i.hits.length===0){c(),l.info({title:"Info",message:"No images found. Try another search term.",position:"topRight"});return}B(i.hits),M();const o=Math.ceil(i.totalHits/p);if(a>=o&&(c(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a>1){const{height:n}=x.firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}}catch(i){m(),c(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error("Fetch error:",i)}}
//# sourceMappingURL=index.js.map
