!function(){const e=document.querySelector(".js-measure-anchor-form");if(e){const r=e.querySelectorAll("input");r.forEach((a=>{a.addEventListener("input",(a=>{let o=0,t=!0;do{t=""!==r[o].value,o++}while(t&&o<r.length);const u=e.querySelector("#measureAnchorFormLaceLength"),s=e.querySelector("#measureAnchorFormMaximumThickness");if(t){const r=parseFloat(e.querySelector("#measureAnchorFormThickness").value),a=parseFloat(e.querySelector("#measureAnchorFormLayerThickness").value)+parseFloat(e.querySelector("#measureAnchorFormLayer").value),o=parseFloat(e.querySelector("#measureAnchorFormDepth").value),t=r+a+o,c=t-a-o,l=u.dataset.unitMeasure;u.value=l?`${t} ${l}`:t;const n=s.dataset.unitMeasure;s.value=n?`${c} ${n}`:c}else u.value="-",s.value="-"}),!1)}))}}();