(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(" Sign up ")]),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"login"}}},[e._v(" Have an account? ")])],1),e.errors?r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,s){return r("li",{key:s},[e._v(" "+e._s(s)+" "+e._s(e._f("error")(t))+" ")])})),0):e._e(),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v(" Sign up ")])])])])])])},a=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("2fa7")),n=r("2f62"),i=r("6c33");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"RwvRegister",data:function(){return{username:"",email:"",password:""}},computed:l({},Object(n["c"])({errors:function(e){return e.auth.errors}})),methods:{onSubmit:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch(i["e"],{email:this.email,password:this.password,username:this.username}));case 2:this.$router.push({name:"home"});case 3:case"end":return e.stop()}}),null,this)}}},p=u,m=r("2877"),d=Object(m["a"])(p,s,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.1280934c.js.map