(function(t){function e(e){for(var r,a,u=e[0],s=e[1],i=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a27e61e0","chunk-2d0b3289":"4058387d","chunk-2d0bd27d":"19983e2f","chunk-2d0d6d35":"2147d00a","chunk-2d2086b7":"538f7863","chunk-2d224cc2":"cb2a7f53","chunk-2d2374d7":"2fc5b50e","chunk-49cf7815":"3d087e2b","chunk-68a18f3a":"cd569cbd","chunk-a793ff8e":"201a8b70","chunk-2a60e5c2":"c4df16c1","chunk-97614f80":"f6717131","chunk-ee134eee":"c277e4b1"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-49cf7815":1,"chunk-68a18f3a":1,"chunk-a793ff8e":1,"chunk-2a60e5c2":1,"chunk-97614f80":1,"chunk-ee134eee":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0b3289":"31d6cfe0","chunk-2d0bd27d":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d224cc2":"31d6cfe0","chunk-2d2374d7":"31d6cfe0","chunk-49cf7815":"53c214d9","chunk-68a18f3a":"c4c3ec33","chunk-a793ff8e":"a4904115","chunk-2a60e5c2":"499c2a96","chunk-97614f80":"5c3e7589","chunk-ee134eee":"08274805"}[t]+".css",c=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00c2":function(t,e,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(t){window.localStorage.setItem(r,t)},o=function(){window.localStorage.removeItem(r)};e["a"]={getToken:a,saveToken:c,destroyToken:o}},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("d3b7"),n("3ca3"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RwvHeader"),n("router-view"),n("RwvFooter")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn"},[t._v(" "+t._s(t.currentUser.username)+" ")]),n("div",{staticClass:"dropdown-content"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:t.currentUser.username}}}},[t._v(" Profile ")]),n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[t._v(" Settings ")]),n("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v(" Logout ")])],1)])])]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[t._v(" Sign in ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[t._v(" Sign up ")])],1)])],1)])},s=[],i=n("5530"),l=n("2f62"),d=n("6c33"),f={name:"RwvHeader",computed:Object(i["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){var t=this;this.$store.dispatch(d["e"]).then((function(){t.$router.push({name:"home"})}))}}},h=f,p=(n("90fb"),n("2877")),b=Object(p["a"])(h,u,s,!1,null,"1f1aeed0",null),m=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[n("span",{staticStyle:{color:"red"}},[t._v("START"),n("b",[t._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[t._v("NV")])])]),t._m(0)],1)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"attribution"},[t._v(" A web application from "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://startupnv.org"}},[t._v(" StartUpNV ")]),t._v(". ")])}],g={name:"RwvFooter"},_=g,w=(n("c1c6"),Object(p["a"])(_,v,k,!1,null,"0d6cc223",null)),O=w.exports,j={name:"App",components:{RwvHeader:m,RwvFooter:O}},y=j,C=(n("cf25"),Object(p["a"])(y,c,o,!1,null,null,null)),E=C.exports,U=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},["admin"===t.currentUser.role?n("AdminDashboard"):"evaluator"===t.currentUser.role?n("EvaluatorDashboard"):"reviewer"===t.currentUser.role?n("ReviewerDashboard"):"founder"===t.currentUser.role?n("FounderDashboard"):n("div",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Login ")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Register ")])])],1)],1)},S=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Admin Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},A=[],R={name:"AdminDashboard",computed:Object(i["a"])({},Object(l["b"])(["currentUser"]))},T=R,D=Object(p["a"])(T,P,A,!1,null,"71d05b98",null),H=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Evaluator Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},M=[],N={name:"EvaluatorDashboard",computed:Object(i["a"])({},Object(l["b"])(["currentUser"]))},F=N,$=Object(p["a"])(F,L,M,!1,null,"47fe7638",null),I=$.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[n("div",{staticClass:"greeting"},[n("h1",[t._v("Founder Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"submit-eapp"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Submit Eapp ")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"book-pitch-date"}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(" Book a Pitch Date ")])])],1)},V=[],q={name:"FounderDashboard",computed:Object(i["a"])({},Object(l["b"])(["currentUser"]))},K=q,Y=Object(p["a"])(K,B,V,!1,null,"9642349c",null),W=Y.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"greeting"},[n("h1",[t._v("Reviewer Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])])},Q=[],G={name:"ReviewerDashboard",computed:Object(i["a"])({},Object(l["b"])(["currentUser"]))},J=G,Z=Object(p["a"])(J,z,Q,!1,null,"af4df984",null),X=Z.exports,tt={name:"Home",components:{EvaluatorDashboard:I,FounderDashboard:W,ReviewerDashboard:X,AdminDashboard:H},computed:Object(i["a"])({},Object(l["b"])(["currentUser"]))},et=tt,nt=Object(p["a"])(et,x,S,!1,null,null,null),rt=nt.exports;r["default"].use(U["a"]);var at,ct,ot=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"profile",path:"/@:username",component:function(){return n.e("chunk-68a18f3a").then(n.bind(null,"c66d"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{name:"submit-eapp",path:"/submit-eapp",component:function(){return n.e("chunk-2d224cc2").then(n.bind(null,"e254"))}},{name:"watch-pitch-video",path:"/watch-pitch-video",component:function(){return n.e("chunk-49cf7815").then(n.bind(null,"b052"))}},{name:"take-pitch-quiz",path:"/take-pitch-quiz",component:function(){return n.e("chunk-2d2374d7").then(n.bind(null,"fb16"))}},{name:"submit-pitch-deck",path:"/submit-pitch-deck",component:function(){return n.e("chunk-2d0bd27d").then(n.bind(null,"2b90"))}},{name:"book-pitch-date",path:"/book-pitch-date",component:function(){return n.e("chunk-a793ff8e").then(n.bind(null,"c335"))}}],ut=new U["a"]({mode:"history",base:"/",routes:ot}),st=ut,it=n("ade3"),lt=(n("96cf"),n("1da1")),dt=n("5ce5"),ft=n("00c2"),ht=n("90d2"),pt={errors:null,user:{},isAuthenticated:!!ft["a"].getToken()},bt={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},mt=(at={},Object(it["a"])(at,d["d"],(function(t,e){return Object(lt["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dt["a"].post("login",{user:e});case 3:return r=n.sent,a=r.data,t.commit(ht["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,t.commit(ht["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(it["a"])(at,d["e"],(function(t){t.commit(ht["a"])})),Object(it["a"])(at,d["f"],(function(t,e){return Object(lt["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dt["a"].post("signup",{user:e});case 3:return r=n.sent,a=r.data,t.commit(ht["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,t.commit(ht["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(it["a"])(at,d["a"],(function(t){ft["a"].getToken()?(dt["a"].setHeader(),dt["a"].get("user").then((function(e){var n=e.data;t.commit(ht["b"],n.user)})).catch((function(e){var n=e.response;t.commit(ht["c"],n.data.errors)}))):t.commit(ht["a"])})),Object(it["a"])(at,d["g"],(function(t,e){return dt["a"].put("user",{user:e}).then((function(e){var n=e.data;return t.commit(ht["b"],n.user),n}))})),at),vt=(ct={},Object(it["a"])(ct,ht["c"],(function(t,e){t.errors=e})),Object(it["a"])(ct,ht["b"],(function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},ft["a"].saveToken(t.user.token)})),Object(it["a"])(ct,ht["a"],(function(t){t.isAuthenticated=!1,t.user={},t.errors={},ft["a"].destroyToken()})),ct),kt={state:pt,actions:mt,mutations:vt,getters:bt},gt=n("c2d2");r["default"].use(l["a"]);var _t=new l["a"].Store({modules:{auth:kt,profile:gt["a"]}}),wt=n("b166"),Ot=function(t){return Object(wt["a"])(new Date(t),"MMMM D, YYYY")},jt=function(t){return"".concat(t[0])},yt=n("6c39"),Ct=n.n(yt),Et=n("f6dd");r["default"].use(Ct.a),r["default"].use(Et["a"],{global:!0,componentId:"YouTubePlayer"}),r["default"].config.productionTip=!1,r["default"].filter("date",Ot),r["default"].filter("error",jt),dt["a"].init(),st.beforeEach((function(t,e,n){return Promise.all([_t.dispatch(d["a"])]).then(n)})),new r["default"]({router:st,store:_t,render:function(t){return t(E)}}).$mount("#app")},"5ce5":function(t,e,n){"use strict";n("99af");var r=n("2b0e"),a=n("bc3a"),c=n.n(a),o=n("a7fe"),u=n.n(o),s=n("00c2"),i={init:function(){r["default"].use(u.a,c.a),r["default"].axios.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_HUBSPOT_EAPP_FORM_URL:"https://share.hsforms.com/1MW-HcqwLRrK2T2vKKOKs8A47uvd",VUE_APP_HUBSPOT_PITCH_QUIZ_FORM_URL:"https://share.hsforms.com/1NhHFHxP9SdyU6GkE6QLhMg47uvd",VUE_APP_HUBSPOT_PITCH_DECK_SUBMISSION_FORM_URL:"https://share.hsforms.com/1zPkCb1mYQmS18bQbldqGMw47uvd",BASE_URL:"/"}).API_URL},setHeader:function(){r["default"].axios.defaults.headers.common["Authorization"]="Token ".concat(s["a"].getToken())},query:function(t,e){return r["default"].axios.get(t,e).catch((function(t){throw new Error("ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(t,"/").concat(e)).catch((function(t){throw new Error("ApiService ".concat(t))}))},post:function(t,e){return r["default"].axios.post("".concat(t),e)},update:function(t,e,n){return r["default"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return r["default"].axios.put("".concat(t),e)},delete:function(t){return r["default"].axios.delete(t).catch((function(t){throw new Error("ApiService ".concat(t))}))}};e["a"]=i},"6c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}));var r="checkAuth",a="login",c="logout",o="register",u="updateUser",s="fetchProfile",i="fetchProfileByUsername"},"83fd":function(t,e,n){},"88f2":function(t,e,n){},"90d2":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o}));var r="logOut",a="setUser",c="setError",o="setProfile"},"90fb":function(t,e,n){"use strict";var r=n("83fd"),a=n.n(r);a.a},c1c6:function(t,e,n){"use strict";var r=n("88f2"),a=n.n(r);a.a},c2d2:function(t,e,n){"use strict";(function(t){var r,a=n("ade3"),c=(n("96cf"),n("1da1")),o=n("5ce5"),u=n("6c33"),s=n("90d2"),i={errors:{},profile:{}},l={profile:function(t){return t.profile}},d=(r={},Object(a["a"])(r,u["b"],(function(e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].get("profile");case 3:return r=n.sent,a=r.data,e.commit(s["d"],a.profile),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),"production"!==t.NODE_ENV&&console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(a["a"])(r,u["c"],(function(t,e){var n=e.username;return o["a"].get("profile",n).then((function(e){var n=e.data;return t.commit(s["d"],n.profile),n})).catch((function(){}))})),r),f=Object(a["a"])({},s["d"],(function(t,e){t.profile=e,t.errors={}}));e["a"]={state:i,actions:d,mutations:f,getters:l}}).call(this,n("4362"))},cf25:function(t,e,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.e6006f41.js.map