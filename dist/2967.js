"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2967,3582],{2967:(e,t,o)=>{o.r(t),o.d(t,{map:()=>m});const a=document.querySelector(".map-container"),c=document.createElement("div");c.id="map",c.style.height="377px",a.appendChild(c);const n=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"",maxZoom:19});var m=L.map("map",{zoomControl:!1,layers:[n],maxZoom:18,minZoom:6}).setView([43.64701,-79.39425],15);L.marker([43.64701,-79.39425]).addTo(m);const d=document.getElementById("deactive");document.getElementById("hotel-deactive").addEventListener("click",(()=>{active.checked=!1,d.checked=!0}))}}]);