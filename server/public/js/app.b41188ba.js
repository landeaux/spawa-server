(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a27e61e0","chunk-1419bd5d":"d4b5db62","chunk-164cc11d":"67ab8bad","chunk-2d0b3289":"a2f38dfb","chunk-2d0bd27d":"6c4b50fc","chunk-2d0d6d35":"70e935bd","chunk-2d2086b7":"875303cf","chunk-2d212b59":"7f6859b4","chunk-2d224cc2":"cae6c00d","chunk-2d2374d7":"1aab8764","chunk-2ebb194f":"8a1644d9","chunk-3595e518":"446143ce","chunk-50fc3305":"25fbc29b","chunk-97614f80":"f6717131","chunk-fe7c545a":"8aab3c37","chunk-52fd9b3f":"725112a0","chunk-b6c2ddb6":"69e39990","chunk-ee134eee":"c277e4b1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1419bd5d":1,"chunk-164cc11d":1,"chunk-2ebb194f":1,"chunk-3595e518":1,"chunk-50fc3305":1,"chunk-97614f80":1,"chunk-fe7c545a":1,"chunk-52fd9b3f":1,"chunk-b6c2ddb6":1,"chunk-ee134eee":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1419bd5d":"8dfbf8ad","chunk-164cc11d":"60941163","chunk-2d0b3289":"31d6cfe0","chunk-2d0bd27d":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d212b59":"31d6cfe0","chunk-2d224cc2":"31d6cfe0","chunk-2d2374d7":"31d6cfe0","chunk-2ebb194f":"4cccf1c2","chunk-3595e518":"41984371","chunk-50fc3305":"1304a1ac","chunk-97614f80":"5c3e7589","chunk-fe7c545a":"182038c1","chunk-52fd9b3f":"0a3d0474","chunk-b6c2ddb6":"419839bd","chunk-ee134eee":"08274805"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00c2":function(e,t,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(e){window.localStorage.setItem(r,e)},o=function(){window.localStorage.removeItem(r)};t["a"]={getToken:a,saveToken:c,destroyToken:o}},"08b8":function(e,t,n){"use strict";var r=n("ae0f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd"),n("2b0e")),c=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(c["a"]);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("router-view"),n("TheFooter")],1)},u=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[n("span",{staticStyle:{color:"red"}},[e._v("START"),n("b",[e._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[e._v("NV")])])]),e.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[e._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn user-dropdown"},[e._v(" "+e._s(e.currentUser.username)+" ")]),n("div",{staticClass:"dropdown-content"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:e.currentUser.username}}}},[e._v(" Profile ")]),n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[e._v(" Settings ")]),n("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v(" Logout ")])],1)])])]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[e._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[e._v(" Sign in ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[e._v(" Sign up ")])],1)])],1)])},s=[],d=n("5530"),l=n("2f62"),f=n("6c33"),h={name:"TheHeader",computed:Object(d["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){var e=this;this.$store.dispatch(f["e"]).then((function(){e.$router.push({name:"login"})}))},onPitchDeckListButtonClick:function(){this.$emit("pitch-list-btn-clicked")}}},p=h,b=(n("8d3e"),n("2877")),m=Object(b["a"])(p,i,s,!1,null,"40c63783",null),v=m.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[n("span",{staticStyle:{color:"red"}},[e._v("START"),n("b",[e._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[e._v("NV")])])]),e._m(0)],1)])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"attribution"},[e._v(" A web application from "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://startupnv.org"}},[e._v(" StartUpNV ")]),e._v(". ")])}],w={name:"TheFooter"},_=w,C=(n("c42b"),Object(b["a"])(_,k,g,!1,null,"c6a86efa",null)),y=C.exports,O={name:"App",components:{TheHeader:v,TheFooter:y}},j=O,x=(n("cf25"),Object(b["a"])(j,o,u,!1,null,null,null)),T=x.exports,S=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"view"}},[n(e.dashboardComponent,e._b({tag:"component",class:e.dashboardComponentClasses},"component",e.dashboardComponentProps,!1))],1)},E=[],P={name:"Home",components:{AdminDashboard:function(){return n.e("chunk-3595e518").then(n.bind(null,"3007"))},EvaluatorDashboard:function(){return n.e("chunk-2d212b59").then(n.bind(null,"aa25"))},FounderDashboard:function(){return n.e("chunk-fe7c545a").then(n.bind(null,"ae74"))},ReviewerDashboard:function(){return n.e("chunk-164cc11d").then(n.bind(null,"5fc9"))},Loader:function(){return n.e("chunk-97614f80").then(n.bind(null,"8a5d"))}},computed:Object(d["a"])({},Object(l["b"])(["currentUser"]),{dashboardComponent:function(){var e=this.currentUser&&this.currentUser.role?this.currentUser.role:"loader";return{admin:"AdminDashboard",evaluator:"EvaluatorDashboard",founder:"FounderDashboard",reviewer:"ReviewerDashboard",loader:"Loader"}[e]},dashboardComponentProps:function(){return this.currentUser&&this.currentUser.role?{}:{color:"blue",size:"25px"}},dashboardComponentClasses:function(){return"Loader"===this.dashboardComponent?"loader":"component"}})},U=P,D=(n("08b8"),Object(b["a"])(U,A,E,!1,null,"5bfee19a",null)),R=D.exports;a["default"].use(S["a"]);var L,N,H=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"profile",path:"/@:username",component:function(){return n.e("chunk-2ebb194f").then(n.bind(null,"c66d"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{name:"submit-eapp",path:"/submit-eapp",component:function(){return n.e("chunk-2d224cc2").then(n.bind(null,"e254"))}},{name:"watch-pitch-video",path:"/watch-pitch-video",component:function(){return n.e("chunk-1419bd5d").then(n.bind(null,"b052"))}},{name:"take-pitch-quiz",path:"/take-pitch-quiz",component:function(){return n.e("chunk-2d2374d7").then(n.bind(null,"fb16"))}},{name:"submit-pitch-deck",path:"/submit-pitch-deck",component:function(){return n.e("chunk-2d0bd27d").then(n.bind(null,"2b90"))}},{name:"book-pitch-date",path:"/book-pitch-date",component:function(){return n.e("chunk-50fc3305").then(n.bind(null,"c335"))}}],$=new S["a"]({mode:"history",base:"/",routes:H}),M=$,F=n("ade3"),q=n("5ce5"),B=n("00c2"),I=n("90d2"),Y={errors:null,user:{},isAuthenticated:!!B["a"].getToken()},z={currentUser:function(e){return e.user},isAuthenticated:function(e){return e.isAuthenticated}},V=(L={},Object(F["a"])(L,f["d"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q["a"].post("login",{user:t});case 3:return r=n.sent,a=r.data,e.commit(I["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,e.commit(I["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(F["a"])(L,f["e"],(function(e){e.commit(I["a"])})),Object(F["a"])(L,f["f"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q["a"].post("signup",{user:t});case 3:return r=n.sent,a=r.data,e.commit(I["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,e.commit(I["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(F["a"])(L,f["a"],(function(e){B["a"].getToken()?(q["a"].setHeader(),q["a"].get("user").then((function(t){var n=t.data;e.commit(I["b"],n.user)})).catch((function(t){var n=t.response;e.commit(I["c"],n.data.errors)}))):e.commit(I["a"])})),Object(F["a"])(L,f["g"],(function(e,t){return q["a"].put("user",{user:t}).then((function(t){var n=t.data;return e.commit(I["b"],n.user),n}))})),L),J=(N={},Object(F["a"])(N,I["c"],(function(e,t){e.errors=t})),Object(F["a"])(N,I["b"],(function(e,t){e.isAuthenticated=!0,e.user=t,e.errors={},B["a"].saveToken(e.user.token)})),Object(F["a"])(N,I["a"],(function(e){e.isAuthenticated=!1,e.user={},e.errors={},B["a"].destroyToken()})),N),K={state:Y,actions:V,mutations:J,getters:z},G=n("c2d2");a["default"].use(l["a"]);var Q=new l["a"].Store({modules:{auth:K,profile:G["a"]}}),W=n("b166"),X=function(e){return Object(W["a"])(new Date(e),"MMMM D, YYYY")},Z=function(e){return"".concat(e[0])},ee=n("6c39"),te=n.n(ee),ne=n("f6dd"),re=n("b1e0");a["default"].use(re["a"]),a["default"].use(te.a),a["default"].use(ne["a"],{global:!0,componentId:"YouTubePlayer"}),a["default"].config.productionTip=!1,a["default"].filter("date",X),a["default"].filter("error",Z),q["a"].init(),M.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Q.dispatch(f["a"])]);case 2:Q.getters.isAuthenticated||"login"===t.name||"register"===t.name?r():r({name:"login"});case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),new a["default"]({router:M,store:Q,render:function(e){return e(T)}}).$mount("#app")},"5ce5":function(e,t,n){"use strict";n("99af");var r=n("2b0e"),a=n("bc3a"),c=n.n(a),o=n("a7fe"),u=n.n(o),i=n("00c2"),s={init:function(){r["default"].use(u.a,c.a),r["default"].axios.defaults.baseURL="https://spawa-staging.herokuapp.com/api"},setHeader:function(){r["default"].axios.defaults.headers.common["Authorization"]="Token ".concat(i["a"].getToken())},query:function(e,t){return r["default"].axios.get(e,t).catch((function(e){throw new Error("ApiService ".concat(e))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("ApiService ".concat(e))}))},post:function(e,t){return r["default"].axios.post("".concat(e),t)},update:function(e,t,n){return r["default"].axios.put("".concat(e,"/").concat(t),n)},put:function(e,t){return r["default"].axios.put("".concat(e),t)},delete:function(e){return r["default"].axios.delete(e).catch((function(e){throw new Error("ApiService ".concat(e))}))}};t["a"]=s},"6c33":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var r="checkAuth",a="login",c="logout",o="register",u="updateUser",i="fetchProfile",s="fetchProfileByUsername"},"8d3e":function(e,t,n){"use strict";var r=n("c37e"),a=n.n(r);a.a},"90d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o}));var r="logOut",a="setUser",c="setError",o="setProfile"},ae0f:function(e,t,n){},c2d2:function(e,t,n){"use strict";(function(e){var r,a=n("ade3"),c=(n("96cf"),n("1da1")),o=n("5ce5"),u=n("6c33"),i=n("90d2"),s={errors:{},profile:{}},d={profile:function(e){return e.profile}},l=(r={},Object(a["a"])(r,u["b"],(function(t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].get("profile");case 3:return r=n.sent,a=r.data,t.commit(i["d"],a.profile),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),"production"!==e.NODE_ENV&&console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(a["a"])(r,u["c"],(function(e,t){var n=t.username;return o["a"].get("profile",n).then((function(t){var n=t.data;return e.commit(i["d"],n.profile),n})).catch((function(){}))})),r),f=Object(a["a"])({},i["d"],(function(e,t){e.profile=t,e.errors={}}));t["a"]={state:s,actions:l,mutations:f,getters:d}}).call(this,n("4362"))},c37e:function(e,t,n){},c42b:function(e,t,n){"use strict";var r=n("e133"),a=n.n(r);a.a},cf25:function(e,t,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},e133:function(e,t,n){},fea6:function(e,t,n){}});
//# sourceMappingURL=app.b41188ba.js.map