(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"96829e56","chunk-2d0b3289":"7f8a9933","chunk-2d0d6d35":"2e9b23b5","chunk-2d2086b7":"9d0e5c56","chunk-4a66b447":"92b24b6c","chunk-791ef87a":"2cd2a83e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-4a66b447":1,"chunk-791ef87a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0b3289":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-4a66b447":"a4904115","chunk-791ef87a":"ad375ff7"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14a3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("d3b7"),n("3ca3"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RwvHeader"),n("router-view"),n("RwvFooter")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[t._v(" Settings ")])],1),t.currentUser.username?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:t.currentUser.username}}}},[t._v(" "+t._s(t.currentUser.username)+" ")])],1):t._e()]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[t._v(" Sign in ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[t._v(" Sign up ")])],1)])],1)])},i=[],u=(n("a4d3"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),s=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"RwvHeader",computed:f({},Object(s["b"])(["currentUser","isAuthenticated"]))},d=p,v=(n("a033"),n("2877")),b=Object(v["a"])(d,c,i,!1,null,"722a77e4",null),m=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t._m(0)],1)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"attribution"},[t._v(" A web application from "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://startupnv.org"}},[t._v(" StartUpNV ")]),t._v(". ")])}],y={name:"RwvFooter"},O=y,k=(n("c1c6"),Object(v["a"])(O,h,g,!1,null,"0d6cc223",null)),w=k.exports,j={name:"App",components:{RwvHeader:m,RwvFooter:w}},_=j,P=(n("cf25"),Object(v["a"])(_,a,o,!1,null,null,null)),x=P.exports,S=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"book-pitch-date"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Book a Pitch Date ")])])],1)},E=[];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={name:"Home",computed:T({},Object(s["b"])(["currentUser"]))},R=D,U=Object(v["a"])(R,C,E,!1,null,null,null),H=U.exports;r["a"].use(S["a"]);var M,N,L=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"profile",path:"/@:username",component:function(){return n.e("chunk-791ef87a").then(n.bind(null,"c66d"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{name:"book-pitch-date",path:"/book-pitch-date",component:function(){return n.e("chunk-4a66b447").then(n.bind(null,"c335"))}}],$=new S["a"]({mode:"history",base:"/",routes:L}),B=$,F=(n("96cf"),n("99af"),n("bc3a")),I=n.n(F),Y=n("a7fe"),q=n.n(Y),V="id_token",J=function(){return window.localStorage.getItem(V)},z=function(t){window.localStorage.setItem(V,t)},K=function(){window.localStorage.removeItem(V)},G={getToken:J,saveToken:z,destroyToken:K},Q="https://boiling-falls-11748.herokuapp.com/api",W={init:function(){r["a"].use(q.a,I.a),r["a"].axios.defaults.baseURL=Q},setHeader:function(){r["a"].axios.defaults.headers.common["Authorization"]="Token ".concat(G.getToken())},query:function(t,e){return r["a"].axios.get(t,e).catch((function(t){throw new Error("ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["a"].axios.get("".concat(t,"/").concat(e)).catch((function(t){throw new Error("ApiService ".concat(t))}))},post:function(t,e){return r["a"].axios.post("".concat(t),e)},update:function(t,e,n){return r["a"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return r["a"].axios.put("".concat(t),e)},delete:function(t){return r["a"].axios.delete(t).catch((function(t){throw new Error("ApiService ".concat(t))}))}},X=W,Z=n("6c33"),tt="logOut",et="setUser",nt="setError",rt="setProfile",at={errors:null,user:{},isAuthenticated:!!G.getToken()},ot={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},ct=(M={},Object(u["a"])(M,Z["c"],(function(t,e){var n,r,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(X.post("login",{user:e}));case 3:return n=o.sent,r=n.data,t.commit(et,r.user),o.abrupt("return",r);case 9:o.prev=9,o.t0=o["catch"](0),a=o.t0.response,t.commit(nt,a.data.errors);case 13:case"end":return o.stop()}}),null,null,[[0,9]])})),Object(u["a"])(M,Z["d"],(function(t){t.commit(tt)})),Object(u["a"])(M,Z["e"],(function(t,e){var n,r,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(X.post("signup",{user:e}));case 3:return n=o.sent,r=n.data,t.commit(et,r.user),o.abrupt("return",r);case 9:o.prev=9,o.t0=o["catch"](0),a=o.t0.response,t.commit(nt,a.data.errors);case 13:case"end":return o.stop()}}),null,null,[[0,9]])})),Object(u["a"])(M,Z["a"],(function(t){G.getToken()?(X.setHeader(),X.get("user").then((function(e){var n=e.data;t.commit(et,n.user)})).catch((function(e){var n=e.response;t.commit(nt,n.data.errors)}))):t.commit(tt)})),Object(u["a"])(M,Z["f"],(function(t,e){return X.put("user",{user:e}).then((function(e){var n=e.data;return t.commit(et,n.user),n}))})),M),it=(N={},Object(u["a"])(N,nt,(function(t,e){t.errors=e})),Object(u["a"])(N,et,(function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},G.saveToken(t.user.token)})),Object(u["a"])(N,tt,(function(t){t.isAuthenticated=!1,t.user={},t.errors={},G.destroyToken()})),N),ut={state:at,actions:ct,mutations:it,getters:ot},st={errors:{},profile:{}},lt={profile:function(t){return t.profile}},ft=Object(u["a"])({},Z["b"],(function(t,e){var n=e.username;return X.get("profile",n).then((function(e){var n=e.data;return t.commit(rt,n.profile),n})).catch((function(){}))})),pt=Object(u["a"])({},rt,(function(t,e){t.profile=e,t.errors={}})),dt={state:st,actions:ft,mutations:pt,getters:lt};r["a"].use(s["a"]);var vt=new s["a"].Store({modules:{auth:ut,profile:dt}}),bt=(n("0d03"),n("b166")),mt=function(t){return Object(bt["a"])(new Date(t),"MMMM D, YYYY")},ht=function(t){return"".concat(t[0])};r["a"].config.productionTip=!1,r["a"].filter("date",mt),r["a"].filter("error",ht),X.init(),B.beforeEach((function(t,e,n){return Promise.all([vt.dispatch(Z["a"])]).then(n)})),new r["a"]({router:B,store:vt,render:function(t){return t(x)}}).$mount("#app")},"6c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return u}));var r="checkAuth",a="login",o="logout",c="register",i="updateUser",u="fetchProfile"},"88f2":function(t,e,n){},a033:function(t,e,n){"use strict";var r=n("14a3"),a=n.n(r);a.a},c1c6:function(t,e,n){"use strict";var r=n("88f2"),a=n.n(r);a.a},cf25:function(t,e,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.2501cd54.js.map