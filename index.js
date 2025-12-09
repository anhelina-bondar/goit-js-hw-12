import{a as b,S as w,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const E="53613119-f2730f8cf542fb1098fca49a3",P="https://pixabay.com/api/",S=15;async function h(r,e=1){try{return(await b.get(P,{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",per_page:S,page:e}})).data}catch(t){throw console.error("Ошибка при загрузке изображений",t),t}}const f=document.querySelector("#gallery"),y=document.querySelector("#loader"),m=document.querySelector("#load-more"),B=new w(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const e=r.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="stats">
          <div class="stat">
            <span class="label">Likes</span>
            <span class="number">${t.likes}</span>
          </div>
          <div class="stat">
            <span class="label">Views</span>
            <span class="number">${t.views}</span>
          </div>
          <div class="stat">
            <span class="label">Comments</span>
            <span class="number">${t.comments}</span>
          </div>
          <div class="stat">
            <span class="label">Downloads</span>
            <span class="number">${t.downloads}</span>
          </div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),B.refresh()}function $(){f.innerHTML=""}function v(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}function L(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const q=document.querySelector("#search-form");let i="",o=1,u=0;q.addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.searchQuery.value.trim(),!!i){o=1,$(),l(),v();try{const e=await h(i,o);if(!e.hits.length){n.error({title:"No results",message:"No images found."}),d();return}g(e.hits),u=e.totalHits,o*15<u?L():(l(),n.info({title:"End",message:"You've reached the end of search results."}))}catch(e){n.error({title:"Error",message:e.message})}finally{d()}}});m.addEventListener("click",async()=>{o+=1,l(),v();try{const r=await h(i,o);g(r.hits);const e=f.firstElementChild;if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}o*15<u?L():(l(),n.info({title:"End",message:"You've reached the end of search results."}))}catch(r){n.error({title:"Error",message:r.message})}finally{d()}});
//# sourceMappingURL=index.js.map
