(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a27e61e0","chunk-2d0b3289":"4058387d","chunk-2d0bd27d":"9595b299","chunk-2d0d6d35":"2147d00a","chunk-2d2086b7":"538f7863","chunk-2d224cc2":"2a0e0a43","chunk-2d2374d7":"61273507","chunk-49cf7815":"3d087e2b","chunk-68a18f3a":"cd569cbd","chunk-a793ff8e":"201a8b70","chunk-2a60e5c2":"c4df16c1","chunk-97614f80":"f6717131","chunk-ee134eee":"c277e4b1"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-49cf7815":1,"chunk-68a18f3a":1,"chunk-a793ff8e":1,"chunk-2a60e5c2":1,"chunk-97614f80":1,"chunk-ee134eee":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0b3289":"31d6cfe0","chunk-2d0bd27d":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d224cc2":"31d6cfe0","chunk-2d2374d7":"31d6cfe0","chunk-49cf7815":"53c214d9","chunk-68a18f3a":"c4c3ec33","chunk-a793ff8e":"a4904115","chunk-2a60e5c2":"499c2a96","chunk-97614f80":"5c3e7589","chunk-ee134eee":"08274805"}[t]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00c2":function(t,e,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(t){window.localStorage.setItem(r,t)},o=function(){window.localStorage.removeItem(r)};e["a"]={getToken:a,saveToken:c,destroyToken:o}},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("d3b7"),n("3ca3"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RwvHeader"),n("router-view"),n("RwvFooter")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn"},[t._v(" "+t._s(t.currentUser.username)+" ")]),n("div",{staticClass:"dropdown-content"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:t.currentUser.username}}}},[t._v(" Profile ")]),n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[t._v(" Settings ")]),n("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v(" Logout ")])],1)])])]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[t._v(" Sign in ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[t._v(" Sign up ")])],1)])],1)])},i=[],s=n("5530"),l=n("2f62"),d=n("6c33"),f={name:"RwvHeader",computed:Object(s["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){var t=this;this.$store.dispatch(d["e"]).then((function(){t.$router.push({name:"home"})}))}}},p=f,h=(n("90fb"),n("2877")),b=Object(h["a"])(p,u,i,!1,null,"1f1aeed0",null),m=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t._m(0)],1)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"attribution"},[t._v(" A web application from "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://startupnv.org"}},[t._v(" StartUpNV ")]),t._v(". ")])}],k={name:"RwvFooter"},_=k,w=(n("c1c6"),Object(h["a"])(_,v,g,!1,null,"0d6cc223",null)),O=w.exports,j={name:"App",components:{RwvHeader:m,RwvFooter:O}},y=j,C=(n("cf25"),Object(h["a"])(y,c,o,!1,null,null,null)),x=C.exports,E=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},["admin"===t.currentUser.role?n("AdminDashboard"):"evaluator"===t.currentUser.role?n("EvaluatorDashboard"):"reviewer"===t.currentUser.role?n("ReviewerDashboard"):"founder"===t.currentUser.role?n("FounderDashboard"):n("div",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Login ")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Register ")])])],1)],1)},A=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Admin Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},D=[],T={name:"AdminDashboard",computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},R=T,P=Object(h["a"])(R,U,D,!1,null,"71d05b98",null),$=P.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Evaluator Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},H=[],F={name:"EvaluatorDashboard",computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},L=F,M=Object(h["a"])(L,N,H,!1,null,"47fe7638",null),q=M.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[n("div",{staticClass:"greeting"},[n("h1",[t._v("Founder Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"submit-eapp"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Submit Eapp ")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"book-pitch-date"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Book a Pitch Date ")])])],1)},I=[],Y={name:"FounderDashboard",computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},V=Y,W=Object(h["a"])(V,B,I,!1,null,"9642349c",null),z=W.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Reviewer Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},K=[],G={name:"ReviewerDashboard",computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},Q=G,X=Object(h["a"])(Q,J,K,!1,null,"af4df984",null),Z=X.exports,tt={name:"Home",components:{EvaluatorDashboard:q,FounderDashboard:z,ReviewerDashboard:Z,AdminDashboard:$},computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},et=tt,nt=Object(h["a"])(et,S,A,!1,null,null,null),rt=nt.exports;r["default"].use(E["a"]);var at,ct,ot=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"profile",path:"/@:username",component:function(){return n.e("chunk-68a18f3a").then(n.bind(null,"c66d"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{name:"submit-eapp",path:"/submit-eapp",component:function(){return n.e("chunk-2d224cc2").then(n.bind(null,"e254"))}},{name:"watch-pitch-video",path:"/watch-pitch-video",component:function(){return n.e("chunk-49cf7815").then(n.bind(null,"b052"))}},{name:"take-pitch-quiz",path:"/take-pitch-quiz",component:function(){return n.e("chunk-2d2374d7").then(n.bind(null,"fb16"))}},{name:"submit-pitch-deck",path:"/submit-pitch-deck",component:function(){return n.e("chunk-2d0bd27d").then(n.bind(null,"2b90"))}},{name:"book-pitch-date",path:"/book-pitch-date",component:function(){return n.e("chunk-a793ff8e").then(n.bind(null,"c335"))}}],ut=new E["a"]({mode:"history",base:"/",routes:ot}),it=ut,st=n("ade3"),lt=(n("96cf"),n("1da1")),dt=n("5ce5"),ft=n("00c2"),pt=n("90d2"),ht={errors:null,user:{},isAuthenticated:!!ft["a"].getToken()},bt={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},mt=(at={},Object(st["a"])(at,d["d"],(function(t,e){return Object(lt["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dt["a"].post("login",{user:e});case 3:return r=n.sent,a=r.data,t.commit(pt["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,t.commit(pt["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(st["a"])(at,d["e"],(function(t){t.commit(pt["a"])})),Object(st["a"])(at,d["f"],(function(t,e){return Object(lt["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dt["a"].post("signup",{user:e});case 3:return r=n.sent,a=r.data,t.commit(pt["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,t.commit(pt["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(st["a"])(at,d["a"],(function(t){ft["a"].getToken()?(dt["a"].setHeader(),dt["a"].get("user").then((function(e){var n=e.data;t.commit(pt["b"],n.user)})).catch((function(e){var n=e.response;t.commit(pt["c"],n.data.errors)}))):t.commit(pt["a"])})),Object(st["a"])(at,d["g"],(function(t,e){return dt["a"].put("user",{user:e}).then((function(e){var n=e.data;return t.commit(pt["b"],n.user),n}))})),at),vt=(ct={},Object(st["a"])(ct,pt["c"],(function(t,e){t.errors=e})),Object(st["a"])(ct,pt["b"],(function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},ft["a"].saveToken(t.user.token)})),Object(st["a"])(ct,pt["a"],(function(t){t.isAuthenticated=!1,t.user={},t.errors={},ft["a"].destroyToken()})),ct),gt={state:ht,actions:mt,mutations:vt,getters:bt},kt=n("c2d2");r["default"].use(l["a"]);var _t=new l["a"].Store({modules:{auth:gt,profile:kt["a"]}}),wt=n("b166"),Ot=function(t){return Object(wt["a"])(new Date(t),"MMMM D, YYYY")},jt=function(t){return"".concat(t[0])},yt=n("6c39"),Ct=n.n(yt),xt=n("f6dd");r["default"].use(Ct.a),r["default"].use(xt["a"],{global:!0,componentId:"YouTubePlayer"}),r["default"].config.productionTip=!1,r["default"].filter("date",Ot),r["default"].filter("error",jt),dt["a"].init(),it.beforeEach((function(t,e,n){return Promise.all([_t.dispatch(d["a"])]).then(n)})),new r["default"]({router:it,store:_t,render:function(t){return t(x)}}).$mount("#app")},"5ce5":function(t,e,n){"use strict";n("99af");var r=n("2b0e"),a=n("bc3a"),c=n.n(a),o=n("a7fe"),u=n.n(o),i=n("00c2"),s={production:"https://boiling-falls-11748.herokuapp.com/api",staging:"https://boiling-falls-11748.herokuapp.com/api",development:"http://localhost:5000/api",test:"http://localhost:5000/api"}["production"],l={init:function(){r["default"].use(u.a,c.a),r["default"].axios.defaults.baseURL=s},setHeader:function(){r["default"].axios.defaults.headers.common["Authorization"]="Token ".concat(i["a"].getToken())},query:function(t,e){return r["default"].axios.get(t,e).catch((function(t){throw new Error("ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(t,"/").concat(e)).catch((function(t){throw new Error("ApiService ".concat(t))}))},post:function(t,e){return r["default"].axios.post("".concat(t),e)},update:function(t,e,n){return r["default"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return r["default"].axios.put("".concat(t),e)},delete:function(t){return r["default"].axios.delete(t).catch((function(t){throw new Error("ApiService ".concat(t))}))}};e["a"]=l},"6c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));var r="checkAuth",a="login",c="logout",o="register",u="updateUser",i="fetchProfile",s="fetchProfileByUsername"},"83fd":function(t,e,n){},"88f2":function(t,e,n){},"90d2":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o}));var r="logOut",a="setUser",c="setError",o="setProfile"},"90fb":function(t,e,n){"use strict";var r=n("83fd"),a=n.n(r);a.a},c1c6:function(t,e,n){"use strict";var r=n("88f2"),a=n.n(r);a.a},c2d2:function(t,e,n){"use strict";(function(t){var r,a=n("ade3"),c=(n("96cf"),n("1da1")),o=n("5ce5"),u=n("6c33"),i=n("90d2"),s={errors:{},profile:{}},l={profile:function(t){return t.profile}},d=(r={},Object(a["a"])(r,u["b"],(function(e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].get("profile");case 3:return r=n.sent,a=r.data,e.commit(i["d"],a.profile),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),"production"!==t.NODE_ENV&&console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(a["a"])(r,u["c"],(function(t,e){var n=e.username;return o["a"].get("profile",n).then((function(e){var n=e.data;return t.commit(i["d"],n.profile),n})).catch((function(){}))})),r),f=Object(a["a"])({},i["d"],(function(t,e){t.profile=e,t.errors={}}));e["a"]={state:s,actions:d,mutations:f,getters:l}}).call(this,n("4362"))},cf25:function(t,e,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.43b97a7b.js.map