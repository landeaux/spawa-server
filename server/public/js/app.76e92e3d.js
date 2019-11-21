(function(e){function t(t){for(var n,s,c=t[0],u=t[1],i=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1ef62393"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var i=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},a=[],s=(r("5c0b"),r("2877")),c={},u=Object(s["a"])(c,o,a,!1,null,null,null),i=u.exports,l=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("PostComponent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("h1",[e._v("Latest Posts")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-post"}},[e._v("Say Something...")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{id:"create-post",placeholder:"Create a post",type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("button",{on:{click:e.createPost}},[e._v(" Post! ")])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(" "+e._s(e.error)+" ")]):e._e(),r("div",{staticClass:"posts-container"},e._l(e.posts,(function(t,n){return r("div",{key:t._id,staticClass:"post",attrs:{item:t,index:n},on:{dblclick:function(r){return e.deletePost(t._id)}}},[e._v(" "+e._s(t.createdAt.toDateString())+" "),r("p",{staticClass:"text"},[e._v(" "+e._s(t.text)+" ")])])})),0)])},v=[],m=(r("96cf"),r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("0d03"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),b=r("9f12"),h=r("53fe"),g=r("bc3a"),y=r.n(g);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(m["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x="api/posts/",O=function(){function e(){Object(b["a"])(this,e)}return Object(h["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){var r,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(y.a.get(x));case 3:r=o.sent,n=r.data,e(n.map((function(e){return P({},e,{createdAt:new Date(e.createdAt)})}))),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),t(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,8]])}))}},{key:"insertPost",value:function(e){return y.a.post(x,{text:e})}},{key:"deletePost",value:function(e){return y.a.delete("".concat(x).concat(e),{})}}]),e}(),_=O,j={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_.getPosts());case 3:this.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}}),null,this,[[0,6]])},methods:{createPost:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(_.insertPost(this.text));case 2:return e.next=4,regeneratorRuntime.awrap(_.getPosts());case 4:this.posts=e.sent,this.text="";case 6:case"end":return e.stop()}}),null,this)},deletePost:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(_.deletePost(e));case 2:return t.next=4,regeneratorRuntime.awrap(_.getPosts());case 4:this.posts=t.sent;case 5:case"end":return t.stop()}}),null,this)}}},k=j,C=(r("f416"),Object(s["a"])(k,d,v,!1,null,"9c0d8212",null)),S=C.exports,R={name:"Home",components:{PostComponent:S}},E=R,A=Object(s["a"])(E,p,f,!1,null,null,null),D=A.exports;n["a"].use(l["a"]);var T=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],M=new l["a"]({routes:T}),$=M,L=r("2f62");n["a"].use(L["a"]);var H=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:$,store:H,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},e60d:function(e,t,r){},f416:function(e,t,r){"use strict";var n=r("e60d"),o=r.n(n);o.a}});
//# sourceMappingURL=app.76e92e3d.js.map