import{r as m,c as p,a as _,o as f,b as h,d as v,e as y,f as g,Q as L,N as E,q as A}from"./vendor.69c03e27.js";const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};O();var P=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n};const b={},V={id:"app"};function w(i,s){const n=m("router-view");return f(),p("div",V,[_(n)])}var k=P(b,[["render",w]]);const I="modulepreload",u={},N="/smart-home-dist/",a=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${N}${r}`,r in u)return;u[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":I,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((l,d)=>{o.addEventListener("load",l),o.addEventListener("error",d)})})).then(()=>s())},R=[{path:"/",name:"MainLayout",component:()=>a(()=>import("./MainLayout.028a7669.js"),["assets/MainLayout.028a7669.js","assets/MainLayout.a6d2ef6b.css","assets/vendor.69c03e27.js"]),children:[{path:"",name:"ViewHome",component:()=>a(()=>import("./Home.ef6e7256.js"),["assets/Home.ef6e7256.js","assets/Home.80a4aacb.css","assets/vendor.69c03e27.js"])},{path:"/airconditioner",name:"ViewAirConditioner",component:()=>a(()=>import("./AirConditioner.174b00ad.js"),["assets/AirConditioner.174b00ad.js","assets/AirConditioner.575fa712.css","assets/vendor.69c03e27.js"])},{path:"/member",name:"ViewMember",component:()=>a(()=>import("./Member.004647de.js"),["assets/Member.004647de.js","assets/Member.57c8539c.css","assets/vendor.69c03e27.js"])}]}],j=h({history:v("/smart-home-dist/"),routes:R}),c=y(k);c.use(g());c.use(j);c.use(L,{plugins:{Notify:E},lang:A});c.mount("#app");export{P as _};
