(()=>{"use strict";function e(e,t){const n=document.createElement("button");n.setAttribute("id",e);const c=document.createElement("span");return c.innerText=t,n.appendChild(c),n.classList.add("tab"),n}function t(){const e=document.getElementById("tab-content");e.textContent="";const t=function(){const e=document.createElement("section");e.setAttribute("class","landing-page");const t=document.createElement("div");t.setAttribute("class","image-one"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","image-two"),e.appendChild(n);const c=document.createElement("div");c.setAttribute("class","image-three"),e.appendChild(c);const o=document.createElement("div");o.setAttribute("class","home-section");const d=document.createElement("p");d.setAttribute("class","p1"),d.innerText="Welcome to Star Candy Shop",o.appendChild(d);const i=document.createElement("p");i.setAttribute("class","p2"),i.innerText="Our store is now LIVE online!",o.appendChild(i);const s=document.createElement("p");return s.setAttribute("class","p3"),s.innerText="Order by 11/11/2023 @ 11:59 EST",o.appendChild(s),e.appendChild(o),e}();e.appendChild(t)}function n(){const e=document.getElementById("tab-content");e.textContent="";const t=function(){const e=document.createElement("section");e.setAttribute("id","shop-background");const t=document.createElement("div");t.setAttribute("class","grid-container"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","grid-one"),n.innerText="Scooper Bites",t.appendChild(n);const c=document.createElement("div");c.setAttribute("class","grid-two"),c.innerText="Mystic Molly",t.appendChild(c);const o=document.createElement("div");o.setAttribute("class","grid-three"),o.innerText="Butternut Hopscotch",t.appendChild(o);const d=document.createElement("div");d.setAttribute("class","grid-four"),d.innerText="Pancake Panic",t.appendChild(d);const i=document.createElement("div");i.setAttribute("class","grid-five"),i.innerText="Tubble Tots",t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","grid-six"),s.innerText="Pom Pickled",t.appendChild(s);const r=document.createElement("div");r.setAttribute("class","grid-seven"),r.innerText="Strawberry sorbet",t.appendChild(r);const a=document.createElement("div");return a.setAttribute("class","grid-eight"),a.innerText="Chocolate maple",t.appendChild(a),e}();e.appendChild(t)}function c(){const e=document.getElementById("tab-content");e.textContent="";const t=function(){const e=document.createElement("section");e.setAttribute("id","contact-info");const t=document.createElement("div");t.setAttribute("class","contact-container");const n=document.createElement("p");n.setAttribute("class","address-block"),n.innerText="Address: ABC St, Toronto ON",t.appendChild(n);const c=document.createElement("p");c.setAttribute("class","phone-block"),c.innerText="Phone: 123-456-789",n.appendChild(c);const o=document.createElement("p");return o.setAttribute("class","email-block"),o.innerText="Email: abc.xyz@email.com",n.appendChild(o),e.appendChild(t),e}();e.appendChild(t)}(function(){const t=document.getElementById("container"),n=function(e,t){const n=document.createElement("header");n.setAttribute("id","logo-name");const c=document.createElement("h3");return c.innerText="Star Candy Shop",n.appendChild(c),n}();t.appendChild(n);const c=function(t){const n=document.createElement("nav");n.setAttribute("id","nav");const c=e("home","Home"),o=e("shop","Shop"),d=e("contact","Contact");return n.appendChild(c),n.appendChild(o),n.appendChild(d),n}();t.appendChild(c);const o=function(e){const t=document.createElement("main");return t.setAttribute("id","tab-content"),t}();t.appendChild(o);const d=function(e,t){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h5");return c.innerHTML='Copyright © 2022 <a href="https://github.com/qymmore">qymmore</a>',n.appendChild(c),n}();t.appendChild(d)})(),t(),function(){const e=document.getElementById("home"),o=document.getElementById("shop"),d=document.getElementById("contact");e.addEventListener("click",t),o.addEventListener("click",n),d.addEventListener("click",c)}()})();