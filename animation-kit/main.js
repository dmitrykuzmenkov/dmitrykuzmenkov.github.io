!function(t){function n(a){if(e[a])return e[a].exports;var r=e[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(4);var a=e(2),r=e(1);document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded");var t=document.querySelector(".js-animated-element"),n=a(document.body);n.on("click",".js-animate",function(n,e){var a=e.getAttribute("data-animation");r(t).animate(a)})})},function(t,n){var e=["webkit","moz","MS","o",""],a=function(t,n,a){e.forEach(function(e){e||(n=n.toLowerCase()),t.addEventListener(e+n,a,!1)})};t.exports=function(t){return{animation_class:"",animate:function(n){this.animation_class=n+"-animation",t.classList.add("animated",this.animation_class);var e=this;return this.end(function(n){t.classList.remove("animated",e.animation_class)}),this},start:function(n){return a(t,"AnimationStart",n),this},end:function(n){return a(t,"AnimationEnd",n),this},iteraction:function(n){return a(t,"AnimationIteraction",n),this}}}},function(t,n,e){var a=e(3),r=function(t){var n=[{},{}],e=function(e){var r,i=e.target;3===i.nodeType&&(i=i.parentNode);var o=[],c=e.eventPhase||(e.target!==e.currentTarget?3:2);switch(c){case 1:o=n[1][e.type];break;case 2:n[0][e.type]&&(o=o.concat(n[0][e.type])),n[1][e.type]&&(o=o.concat(n[1][e.type]));break;case 3:o=n[0][e.type]}for(;i;){for(var s in o){if(a(t,i,o[s].selector)){r=o[s].callback(e,i);break}if(r===!1)return void e.preventDefault()}if(i===t)break;i=i.parentElement}};return this.on=function(a,r,i,o){var c=n[o?1:0];c[a]||(c[a]=[],t.addEventListener(a,e,!!o)),c[a].push({selector:r,callback:i})},this.off=function(t,e){n.forEach(function(n){for(var a in n[t]||[])n[t][a].selector===e&&n[t].splice(a,1)})},this};t.exports=function(t){return new r(t)}},function(t,n){t.exports=function(t,n,e){var a=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(n){return-1!==[].indexOf.call(t.querySelectorAll(n),this)};return a.call(n,e)}},function(t,n){}]);