(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page",attrs:{id:"view"}},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(" Sign in ")]),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"register"}}},[e._v(" Need an account? ")])],1),e.errors?r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,s){return r("li",{key:s},[e._v(" "+e._s(s)+" "+e._s(e._f("error")(t))+" ")])})),0):e._e(),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(e.username,e.password)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"Username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"Password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v(" Sign in ")])])])])])])},a=[],n=(r("96cf"),r("1da1")),o=r("5530"),i=r("2f62"),u=r("6c33"),c={name:"Login",data:function(){return{username:null,password:null}},computed:Object(o["a"])({},Object(i["c"])({errors:function(e){return e.auth.errors}})),methods:{onSubmit:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,r.$store.dispatch(u["d"],{username:e,password:t});case 2:r.$router.push({name:"home"});case 3:case"end":return s.stop()}}),s)})))()}}},l=c,m=r("2877"),p=Object(m["a"])(l,s,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.875303cf.js.map