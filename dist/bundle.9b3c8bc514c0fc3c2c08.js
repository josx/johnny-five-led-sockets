webpackJsonp([1],{26:function(e,o,n){"use strict";var t={host:"https://arduino-sockets.herokuapp.com",namespace:"arduino"},c=t,s=c.port?":"+c.port:"",l=c.namespace?c.namespace:"",i=c.host+s+"/"+l;c.url=i,e.exports=c},27:function(e,o){},56:function(e,o,n){"use strict";n(27);var t=n(5),c=function(e){return e&&e.__esModule?e:{default:e}}(t),s=n(26);!function(){var e=document.getElementById("switch"),o=document.getElementById("mask_container"),n=document.getElementById("light"),t=!1,l=function(o){t="toggle"===o?!t:"on"===o,t?(e.classList.add("on"),n.style.display="none"):(e.classList.remove("on"),n.style.display="block")},i=function(){l("toggle"),d.emit("led:"+(t?"on":"off")),console.log("Sent: "+(t?"on":"off"))},d=c.default.connect(s.url);d.emit("led:off"),o.addEventListener("click",i),e.addEventListener("click",i),d.on("led:on",function(){console.log("Received: on"),l("on")}),d.on("led:off",function(){console.log("Received: off"),l("off")})}()}},[56]);