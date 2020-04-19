(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2a196de"],{"1b31":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"view"}},[r("b-alert",{staticClass:"alerts",attrs:{variant:"danger",dismissible:""},model:{value:e.showErrorAlert,callback:function(t){e.showErrorAlert=t},expression:"showErrorAlert"}},[e._v(" An error has occurred! "),r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,s){return r("li",{key:s},[e._v(" "+e._s(s)+" "+e._s(t)+" ")])})),0)]),r("b-alert",{staticClass:"alerts",attrs:{variant:"success"},model:{value:e.showSuccessAlert,callback:function(t){e.showSuccessAlert=t},expression:"showSuccessAlert"}},[e._v(" User Updated: "),r("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:e.createdUsername}}}},[e._v(" "+e._s(e.createdUsername)+" ")])],1),e.show?r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("div",{staticClass:"main-form"},[r("b-form-group",{attrs:{id:"input-group-username",label:"Username:","label-for":"input-username"}},[r("b-form-input",{attrs:{id:"input-username",required:"",placeholder:"Enter Username"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"input-email"}},[r("b-form-input",{attrs:{id:"input-email",type:"email",required:"",placeholder:"Enter Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-company",label:"Company:","label-for":"input-company"}},[r("b-form-input",{attrs:{id:"input-company",required:"",placeholder:"Enter Company"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),r("b-form-group",{attrs:{id:"input-group-password",label:"Password:","label-for":"input-password"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",placeholder:"Enter Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-form-group",[r("b-form-checkbox",{attrs:{id:"input-active"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[e._v(" Active Account? ")])],1),r("b-form-group",{attrs:{id:"input-group-role",label:"Role:","label-for":"input-role"}},[r("b-form-select",{attrs:{id:"input-role",options:e.roles,required:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1),"founder"===e.form.role?r("b-form-group",{attrs:{id:"input-group-state",label:"State:","label-for":"input-state"}},[r("b-form-select",{attrs:{id:"input-state",options:e.states,required:""},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1):e._e()],1),e.determineCanSubmit?r("b-button",{staticClass:"form-btn",attrs:{type:"submit",block:"",variant:"primary"}},[e._v(" Submit ")]):r("b-button",{staticClass:"form-btn",attrs:{type:"fake-submit",block:"",disabled:"",variant:"primary"}},[e._v(" Submit ")]),r("b-button",{staticClass:"form-btn",attrs:{type:"reset",block:"",variant:"danger"}},[e._v(" Reset ")])],1):e._e()],1)},a=[],o=(r("4160"),r("b64b"),r("159b"),r("96cf"),r("1da1")),i=r("5530"),n=r("2f62"),u=r("6c33"),l={name:"AdminDashboardModifyUser",props:{user:{default:null,required:!0,type:Object}},data:function(){return{form:null,roles:[{text:"Select One",value:null},{text:"Founder",value:"founder"},{text:"Admin",value:"admin"},{text:"Reviewer",value:"reviewer"}],states:[{text:"Select One",value:null},{text:"Submit Eapp",value:"submit_eapp"},{text:"Watch Pitch Video",value:"watch_pitch_video"},{text:"Take Pitch Quiz",value:"take_pitch_quiz"},{text:"Submit Pitch Deck",value:"submit_pitch_deck"},{text:"Pitch Deck Review",value:"pitch_deck_review"},{text:"Book Pitch Date",value:"book_pitch_date"},{text:"Pitch Accepted",value:"pitch_accepted"},{text:"Pitch Cancelled",value:"pitch_cancelled"}],show:!0,createdUsername:"",showErrorAlert:!1,showSuccessAlert:!1}},computed:Object(i["a"])({},Object(n["b"])(["userErrors"]),{errors:function(){return this.userErrors[0]},determineCanSubmit:function(){return this.form.username!==this.user.username||this.form.email!==this.user.email||this.form.company!==this.user.company||this.form.password!==this.user.password||this.form.active!==this.user.active||this.form.role!==this.user.role||this.form.state!==this.user.state}}),created:function(){this.form=Object(i["a"])({},this.user)},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object.keys(e.userErrors).forEach((function(t){return delete e.userErrors[t]})),"founder"!==e.form.role&&(e.form.state=""),r=Object(i["a"])({},e.form),Object.keys(e.form).forEach((function(t){e.form[t]!==e.user[t]&&""!==e.form[t]||delete r[t]})),r.id=e.user.id,t.next=7,e.$store.dispatch(u["u"],r);case 7:e.createdUsername=e.form.username,e.determineAlert(),!0===e.showSuccessAlert&&(e.show=!1);case 10:case"end":return t.stop()}}),t)})))()},onReset:function(){var e=this;this.form=Object(i["a"])({},this.user),this.show=!1,this.$nextTick((function(){e.show=!0}))},determineAlert:function(){this.showErrorAlert=!1,this.showSuccessAlert=!1,0!==Object.keys(this.userErrors).length?this.showErrorAlert=!0:0===Object.keys(this.userErrors).length&&""!==this.createdUsername&&(this.showSuccessAlert=!0)}}},c=l,m=(r("3be4"),r("2877")),p=Object(m["a"])(c,s,a,!1,null,"57ceb7fa",null);t["default"]=p.exports},"39e4":function(e,t,r){},"3be4":function(e,t,r){"use strict";var s=r("39e4"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-a2a196de.7ddb0a57.js.map