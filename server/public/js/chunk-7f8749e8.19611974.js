(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f8749e8"],{"1b31":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.statusIsPending?r("div",{staticClass:"loader-container"},[r("PulseLoader",{staticClass:"loader",attrs:{color:"blue",size:"25px"}})],1):e.statusIsError?r("b-alert",{staticClass:"alerts",attrs:{show:!0,variant:"danger",dismissible:"",fade:""},on:{dismissed:e.onErrorAlertDismissed}},[e._v(" An error has occurred! "),r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,s){return r("li",{key:s},[r("strong",[e._v(e._s(s))]),e._v(" "+e._s(t)+" ")])})),0)]):e.statusIsSuccess?r("b-alert",{staticClass:"alerts",attrs:{show:!0,variant:"success",dismissible:"",fade:""}},[e._v(" User Updated: "),r("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"profile",params:{username:e.createdUsername}}}},[e._v(" "+e._s(e.createdUsername)+" ")])],1):e._e(),e.showForm?r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("div",{staticClass:"main-form"},[r("b-form-group",{attrs:{id:"input-group-username",label:"Username:","label-for":"input-username"}},[r("b-form-input",{attrs:{id:"input-username",required:"",placeholder:"Enter Username"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"input-email"}},[r("b-form-input",{attrs:{id:"input-email",type:"email",required:"",placeholder:"Enter Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-company",label:"Company:","label-for":"input-company"}},[r("b-form-input",{attrs:{id:"input-company",required:"",placeholder:"Enter Company"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),r("b-form-group",{attrs:{id:"input-group-password",label:"Password:","label-for":"input-password"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",placeholder:"Enter Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-form-group",[r("b-form-checkbox",{attrs:{id:"input-active"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[e._v(" Active Account? ")])],1),r("b-form-group",{attrs:{id:"input-group-role",label:"Role:","label-for":"input-role"}},[r("b-form-select",{attrs:{id:"input-role",options:e.roles,required:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1),"founder"===e.form.role?r("b-form-group",{attrs:{id:"input-group-state",label:"State:","label-for":"input-state"}},[r("b-form-select",{attrs:{id:"input-state",options:e.founderStates,required:""},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1):e._e()],1),e.determineCanSubmit?r("b-button",{staticClass:"form-btn",attrs:{type:"submit",block:"",variant:"primary"}},[e._v(" Submit ")]):r("b-button",{staticClass:"form-btn",attrs:{type:"fake-submit",block:"",disabled:"",variant:"primary"}},[e._v(" Submit ")]),r("b-button",{staticClass:"form-btn",attrs:{type:"reset",block:"",variant:"danger"}},[e._v(" Reset ")])],1):e._e()],1)},a=[],o=(r("4160"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),i=r("5530"),n=r("6c33"),u=r("2f62"),c=Object(u["a"])("user"),l=c.mapActions,m=c.mapGetters,d="INIT",p="PENDING",f="SUCCESS",b="ERROR",h={name:"AdminDashboardModifyUser",components:{PulseLoader:function(){return r.e("chunk-97614f80").then(r.bind(null,"8a5d"))}},props:{user:{default:function(){return{}},required:!0,type:Object}},data:function(){return{status:d,errors:{},form:{username:"",email:"",company:"",password:"",active:!0,role:"",state:""},roles:[{text:"Select One",value:null},{text:"Founder",value:"founder"},{text:"Admin",value:"admin"},{text:"Reviewer",value:"reviewer"}],founderStates:[{text:"Submit Eapp",value:"submit_eapp"},{text:"Watch Pitch Video",value:"watch_pitch_video"},{text:"Take Pitch Quiz",value:"take_pitch_quiz"},{text:"Submit Pitch Deck",value:"submit_pitch_deck"},{text:"Pitch Deck Review",value:"pitch_deck_review"},{text:"Book Pitch Date",value:"book_pitch_date"},{text:"Pitch Accepted",value:"pitch_accepted"},{text:"Pitch Cancelled",value:"pitch_cancelled"}],createdUsername:""}},computed:Object(i["a"])({},m(["userErrors"]),{determineCanSubmit:function(){return this.form.username!==this.user.username||this.form.email!==this.user.email||this.form.company!==this.user.company||""!==this.form.password||this.form.active!==this.user.active||this.form.role!==this.user.role||this.form.state!==this.user.state},showForm:function(){return!this.statusIsPending},statusIsPending:function(){return this.status===p},statusIsSuccess:function(){return this.status===f},statusIsError:function(){return this.status===b}}),created:function(){this.setInitialFormValues()},methods:Object(i["a"])({},l({updateUserById:n["v"]}),{setInitialFormValues:function(){var e=this;Object.keys(this.form).forEach((function(t){e.form[t]=Object.prototype.hasOwnProperty.call(e.user,t)?e.user[t]:""}))},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errors={},"founder"!==e.form.role&&(e.form.state=""),r=Object(i["a"])({},e.form),Object.keys(e.form).forEach((function(t){e.form[t]!==e.user[t]&&""!==e.form[t]||delete r[t]})),r.id=e.user.id,e.status=p,t.prev=6,t.next=9,e.updateUserById(r);case 9:e.createdUsername=e.form.username,e.status=f,t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](6),s=t.t0.response,e.errors=s.data.errors,e.status=b;case 18:case"end":return t.stop()}}),t,null,[[6,13]])})))()},onReset:function(){this.status=d,this.errors={},this.setInitialFormValues()},onErrorAlertDismissed:function(){this.errors={}}})},v=h,k=(r("d36a"),r("2877")),_=Object(k["a"])(v,s,a,!1,null,"a11eb22e",null);t["default"]=_.exports},d0dd:function(e,t,r){},d36a:function(e,t,r){"use strict";var s=r("d0dd"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-7f8749e8.19611974.js.map