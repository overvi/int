(self.webpackChunk=self.webpackChunk||[]).push([[6141],{1482:()=>{const e=document.getElementById("drop-area"),n=document.getElementById("file-input"),t=document.getElementById("cancel-upload"),a=document.getElementById("preview-container");function r(e){e.preventDefault(),e.stopPropagation()}function d(){return!0}function d(e){return["image/jpeg","image/png","image/gif"].includes(e.type)}e.addEventListener("dragover",r),e.addEventListener("dragenter",r),e.addEventListener("dragleave",r),e.addEventListener("drop",(function(e){e.preventDefault();const t=e.dataTransfer.files;t.length&&(n.files=t,function(e){for(const n of e){const e=new FileReader;e.readAsDataURL(n),e.onloadend=function(e){const t=document.createElement("img");d(n)&&(t.src=e.target.result),t.classList.add("preview-image"),a.innerHTML="",a.appendChild(t)}}}(t))})),e.addEventListener("dragover",(()=>{e.classList.add("drag-over")})),e.addEventListener("dragleave",(()=>{e.classList.remove("drag-over")})),t&&t.addEventListener("click",(()=>{a.innerHTML&&(a.innerText="")}))}},e=>{var n;n=1482,e(e.s=n)}]);