(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"55d10e41","chunk-1419bd5d":"44011764","chunk-164cc11d":"a61ff3c9","chunk-2d0bd27d":"bc534331","chunk-2d0d6d35":"fe2fbf12","chunk-2d2086b7":"c18614c7","chunk-2d212b59":"b1707d89","chunk-2d224cc2":"f3e31749","chunk-2d2374d7":"973a2924","chunk-65a3baad":"03938843","chunk-69604754":"ed091761","chunk-97614f80":"a10e223e","chunk-9fdf685a":"faa36d15","chunk-b70f415e":"f24119a8","chunk-fe7c545a":"efa2ba6c","chunk-52fd9b3f":"9fc2d4af","chunk-b6c2ddb6":"36ffc784","chunk-ee134eee":"39ebeb13"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1419bd5d":1,"chunk-164cc11d":1,"chunk-65a3baad":1,"chunk-69604754":1,"chunk-97614f80":1,"chunk-9fdf685a":1,"chunk-b70f415e":1,"chunk-fe7c545a":1,"chunk-52fd9b3f":1,"chunk-b6c2ddb6":1,"chunk-ee134eee":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1419bd5d":"8dfbf8ad","chunk-164cc11d":"60941163","chunk-2d0bd27d":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d212b59":"31d6cfe0","chunk-2d224cc2":"31d6cfe0","chunk-2d2374d7":"31d6cfe0","chunk-65a3baad":"1304a1ac","chunk-69604754":"a964698f","chunk-97614f80":"5c3e7589","chunk-9fdf685a":"1ba47d2a","chunk-b70f415e":"fb2f6db3","chunk-fe7c545a":"182038c1","chunk-52fd9b3f":"0a3d0474","chunk-b6c2ddb6":"419839bd","chunk-ee134eee":"08274805"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00c2":function(e,t,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(e){window.localStorage.setItem(r,e)},u=function(){window.localStorage.removeItem(r)};t["a"]={getToken:a,saveToken:c,destroyToken:u}},"11b3":function(e,t,n){"use strict";var r=n("78e1"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd"),n("2b0e")),c=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(c["a"]);var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("router-view"),n("TheFooter")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[n("span",{staticStyle:{color:"red"}},[e._v("START"),n("b",[e._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[e._v("NV")])])]),e.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[e._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn user-dropdown"},[e._v(" "+e._s(e.currentUser.username)+" ")]),n("div",{staticClass:"dropdown-content"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:e.currentUser.username}}}},[e._v(" Profile ")]),n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[e._v(" Settings ")]),n("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v(" Logout ")])],1)])])]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[e._v(" Home ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[e._v(" Sign in ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[e._v(" Sign up ")])],1)])],1)])},s=[],d=n("5530"),l=n("2f62"),f=n("6c33"),p={name:"TheHeader",computed:Object(d["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){var e=this;this.$store.dispatch(f["l"]).then((function(){e.$router.push({name:"login"})}))},onPitchDeckListButtonClick:function(){this.$emit("pitch-list-btn-clicked")}}},h=p,b=(n("8d3e"),n("2877")),m=Object(b["a"])(h,i,s,!1,null,"40c63783",null),v=m.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[n("span",{staticStyle:{color:"red"}},[e._v("START"),n("b",[e._v("UP")])]),n("span",{staticStyle:{color:"blue"}},[n("b",[e._v("NV")])])]),e._m(0)],1)])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"attribution"},[e._v(" A web application from "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://startupnv.org"}},[e._v(" StartUpNV ")]),e._v(". ")])}],w={name:"TheFooter"},O=w,j=(n("c42b"),Object(b["a"])(O,k,g,!1,null,"c6a86efa",null)),x=j.exports,_={name:"App",components:{TheHeader:v,TheFooter:x}},C=_,y=(n("cf25"),Object(b["a"])(C,u,o,!1,null,null,null)),E=y.exports,R=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"view"}},[n(e.dashboardComponent,e._b({tag:"component",class:e.dashboardComponentClasses},"component",e.dashboardComponentProps,!1))],1)},P=[],S={name:"Home",components:{AdminDashboard:function(){return n.e("chunk-b70f415e").then(n.bind(null,"3007"))},EvaluatorDashboard:function(){return n.e("chunk-2d212b59").then(n.bind(null,"aa25"))},FounderDashboard:function(){return n.e("chunk-fe7c545a").then(n.bind(null,"ae74"))},ReviewerDashboard:function(){return n.e("chunk-164cc11d").then(n.bind(null,"5fc9"))},Loader:function(){return n.e("chunk-97614f80").then(n.bind(null,"8a5d"))}},computed:Object(d["a"])({},Object(l["b"])(["currentUser"]),{dashboardComponent:function(){var e=this.currentUser&&this.currentUser.role?this.currentUser.role:"loader";return{admin:"AdminDashboard",evaluator:"EvaluatorDashboard",founder:"FounderDashboard",reviewer:"ReviewerDashboard",loader:"Loader"}[e]},dashboardComponentProps:function(){return this.currentUser&&this.currentUser.role?{}:{color:"blue",size:"25px"}},dashboardComponentClasses:function(){return"Loader"===this.dashboardComponent?"loader":"component"}})},A=S,U=(n("11b3"),Object(b["a"])(A,T,P,!1,null,"39c37893",null)),D=U.exports;a["default"].use(R["a"]);var N,L,H,$=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"profile",path:"/@:username",component:function(){return n.e("chunk-69604754").then(n.bind(null,"c66d"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-9fdf685a").then(n.bind(null,"26d3"))}},{name:"submit-eapp",path:"/submit-eapp",component:function(){return n.e("chunk-2d224cc2").then(n.bind(null,"e254"))}},{name:"watch-pitch-video",path:"/watch-pitch-video",component:function(){return n.e("chunk-1419bd5d").then(n.bind(null,"b052"))}},{name:"take-pitch-quiz",path:"/take-pitch-quiz",component:function(){return n.e("chunk-2d2374d7").then(n.bind(null,"fb16"))}},{name:"submit-pitch-deck",path:"/submit-pitch-deck",component:function(){return n.e("chunk-2d0bd27d").then(n.bind(null,"2b90"))}},{name:"book-pitch-date",path:"/book-pitch-date",component:function(){return n.e("chunk-65a3baad").then(n.bind(null,"c335"))}}],B=new R["a"]({mode:"history",base:"/",routes:$}),F=B,I=n("ade3"),V=n("5ce5"),q=n("00c2"),z=n("90d2"),M={errors:null,user:{},isAuthenticated:!!q["a"].getToken()},J={currentUser:function(e){return e.user},isAuthenticated:function(e){return e.isAuthenticated}},K=(N={},Object(I["a"])(N,f["k"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].post("login",{user:t});case 3:return r=n.sent,a=r.data,e.commit(z["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,e.commit(z["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(I["a"])(N,f["l"],(function(e){e.commit(z["a"])})),Object(I["a"])(N,f["m"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].post("signup",{user:t});case 3:return r=n.sent,a=r.data,e.commit(z["b"],a.user),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),c=n.t0.response,e.commit(z["c"],c.data.errors);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(I["a"])(N,f["b"],(function(e){q["a"].getToken()?(V["a"].setHeader(),V["a"].get("user").then((function(t){var n=t.data;e.commit(z["b"],n.user)})).catch((function(t){var n=t.response;e.commit(z["c"],n.data.errors)}))):e.commit(z["a"])})),Object(I["a"])(N,f["o"],(function(e,t){return V["a"].put("user",{user:t}).then((function(t){var n=t.data;return e.commit(z["b"],n.user),n}))})),N),Y=(L={},Object(I["a"])(L,z["c"],(function(e,t){e.errors=t})),Object(I["a"])(L,z["b"],(function(e,t){e.isAuthenticated=!0,e.user=t,e.errors={},q["a"].saveToken(e.user.token)})),Object(I["a"])(L,z["a"],(function(e){e.isAuthenticated=!1,e.user={},e.errors={},q["a"].destroyToken()})),L),G={state:M,actions:K,mutations:Y,getters:J},Q=n("c2d2"),W=n("2909"),X={userErrors:[]},Z={userErrors:function(e){return Object(W["a"])(e.userErrors)}},ee=(H={},Object(I["a"])(H,f["d"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].post("user",{user:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n["catch"](0),c=n.t0.response,u=c.data.errors,e.commit(z["c"],u),n.abrupt("return",c.data);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})))()})),Object(I["a"])(H,f["j"],(function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].get("users");case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t["catch"](0),e.commit(z["c"],t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()})),Object(I["a"])(H,f["n"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].update("user/suspend",t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n["catch"](0),c=n.t0.response,u=c.data.errors,e.commit(z["c"],u),n.abrupt("return",c.data);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})))()})),Object(I["a"])(H,f["a"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].update("user/activate",t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n["catch"](0),c=n.t0.response,u=c.data.errors,e.commit(z["c"],u),n.abrupt("return",c.data);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})))()})),Object(I["a"])(H,f["e"],(function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V["a"].delete("user",t);case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n["catch"](0),e.commit(z["c"],n.t0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))()})),H),te=Object(I["a"])({},z["c"],(function(e,t){e.userErrors.push(t)})),ne={state:X,actions:ee,mutations:te,getters:Z},re=n("caee");a["default"].use(l["a"]);var ae=new l["a"].Store({modules:{auth:G,profile:Q["a"],user:ne,pitchDeck:re["a"]}}),ce=n("b166"),ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eee, PP";return Object(ce["a"])(new Date(e),t)},oe=function(e){return"".concat(e[0])},ie=n("8972"),se=function(e){return Object(ie["startCase"])(e)},de=n("6c39"),le=n.n(de),fe=n("f6dd"),pe=n("b1e0");a["default"].use(pe["a"]),a["default"].use(le.a),a["default"].use(fe["a"],{global:!0,componentId:"YouTubePlayer"}),a["default"].config.productionTip=!1,a["default"].filter("date",ue),a["default"].filter("error",oe),a["default"].filter("startCase",se),V["a"].init(),F.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([ae.dispatch(f["b"])]);case 2:ae.getters.isAuthenticated||"login"===t.name||"register"===t.name?r():r({name:"login"});case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),new a["default"]({router:F,store:ae,render:function(e){return e(E)}}).$mount("#app")},"5ce5":function(e,t,n){"use strict";n("99af");var r=n("2b0e"),a=n("bc3a"),c=n.n(a),u=n("a7fe"),o=n.n(u),i=n("00c2"),s={init:function(){r["default"].use(o.a,c.a),r["default"].axios.defaults.baseURL="https://spawa-staging.herokuapp.com/api"},setHeader:function(){r["default"].axios.defaults.headers.common["Authorization"]="Token ".concat(i["a"].getToken())},query:function(e,t){return r["default"].axios.get(e,t).catch((function(e){throw new Error("ApiService ".concat(e))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("ApiService ".concat(e))}))},post:function(e,t){return r["default"].axios.post("".concat(e),t)},update:function(e,t,n){return r["default"].axios.put("".concat(e,"/").concat(t),n)},put:function(e,t){return r["default"].axios.put("".concat(e),t)},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.delete("".concat(e,"/").concat(t)).catch((function(e){throw new Error("ApiService ".concat(e))}))}};t["a"]=s},"6c33":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"o",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"j",(function(){return l})),n.d(t,"n",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return v}));var r="checkAuth",a="login",c="logout",u="register",o="updateUser",i="fetchProfile",s="fetchProfileByUsername",d="createUser",l="fetchUsers",f="suspendUser",p="activateUser",h="deleteUser",b="fetchPitchDecks",m="fetchPitchDeckById",v="createPitchDeck"},"78e1":function(e,t,n){},"8d3e":function(e,t,n){"use strict";var r=n("c37e"),a=n.n(r);a.a},"90d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var r="logOut",a="setUser",c="setError",u="setProfile"},c2d2:function(e,t,n){"use strict";(function(e){var r,a,c=n("ade3"),u=(n("96cf"),n("1da1")),o=n("2909"),i=n("5ce5"),s=n("6c33"),d=n("90d2"),l={profileErrors:[],profile:{}},f={profile:function(e){return e.profile},profileErrors:function(e){return Object(o["a"])(e.profileErrors)}},p=(r={},Object(c["a"])(r,s["h"],(function(t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i["a"].get("profile");case 3:return r=n.sent,a=r.data,t.commit(d["d"],a.profile),n.abrupt("return",a);case 9:n.prev=9,n.t0=n["catch"](0),t.commit(d["c"],n.t0),"production"!==e.NODE_ENV&&console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()})),Object(c["a"])(r,s["i"],(function(t,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,a=n.username,r.next=4,i["a"].get("profile",a);case 4:return c=r.sent,u=c.data,t.commit(d["d"],u.profile),r.abrupt("return",u);case 10:r.prev=10,r.t0=r["catch"](0),t.commit(d["c"],r.t0),"production"!==e.NODE_ENV&&console.error(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()})),r),h=(a={},Object(c["a"])(a,d["c"],(function(e,t){e.profileErrors.push(t)})),Object(c["a"])(a,d["d"],(function(e,t){e.profile=t,e.errors=[]})),a);t["a"]={state:l,actions:p,mutations:h,getters:f}}).call(this,n("4362"))},c37e:function(e,t,n){},c42b:function(e,t,n){"use strict";var r=n("e133"),a=n.n(r);a.a},caee:function(e,t,n){"use strict";(function(e){var r,a=n("ade3"),c=(n("96cf"),n("1da1")),u=n("5ce5"),o=n("6c33"),i=n("90d2"),s={pitchDeckErrors:[]},d={},l=(r={},Object(a["a"])(r,o["c"],(function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u["a"].post("pitchdecks",{pitchDeck:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n["catch"](0),c=n.t0.response,o=c.data.errors,e.commit(i["c"],o),n.abrupt("return",c.data);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})))()})),Object(a["a"])(r,o["f"],(function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get("pitchdecks");case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t["catch"](0),e.commit(i["c"],t.t0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()})),Object(a["a"])(r,o["g"],(function(t,n){return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].get("pitchdecks",n);case 3:return a=r.sent,c=a.data,r.abrupt("return",c);case 8:r.prev=8,r.t0=r["catch"](0),t.commit(i["c"],r.t0),"production"!==e.NODE_ENV&&console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()})),r),f=Object(a["a"])({},i["c"],(function(e,t){e.pitchDeckErrors.push(t)}));t["a"]={state:s,actions:l,mutations:f,getters:d}}).call(this,n("4362"))},cf25:function(e,t,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},e133:function(e,t,n){},fea6:function(e,t,n){}});
//# sourceMappingURL=app.255871ce.js.map