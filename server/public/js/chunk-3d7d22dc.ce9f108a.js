(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d7d22dc"],{a1d1:function(t,e,n){},a7a4:function(t,e,n){"use strict";var i=n("a1d1"),a=n.n(i);a.a},ae74:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[n("div",{staticClass:"greeting"},[n("h1",[t._v("Founder Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])]),n("div",{staticClass:"main-flex"},[n("div",{staticClass:"column"},[n("div",{staticClass:"stat-display"},[n("span",[t._v("Status Of My Pitch Deck:")]),n("b-badge",{staticClass:"status",attrs:{variant:t.statusBadgeVariant}},[t._v(" "+t._s(t.statusBadgeText)+" ")])],1),n("h2",[t._v("What Should I Do Now?")]),n("div",{staticClass:"instruct-text"},[t._v(" "+t._s(t.instructText)+" ")])]),n("div",{staticClass:"column"},[n("BigButtonComponent",{staticClass:"right-flex big-button",attrs:{title:"See My Feedback",subtitle:"Total Reviews: ",info:t.reviewCount,disabled:t.feedbackButtonDisabled},on:{click:t.onFeedbackButtonClick}}),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.vid-model",modifiers:{"vid-model":!0}}],staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"}},[t._v(" Re-watch Pitch Process Video ")]),n("b-modal",{attrs:{id:"vid-model",size:"lg",centered:"",title:"Pitch Process Video"}},[n("YouTubePlayer",{staticClass:"text-center",attrs:{"video-id":t.videoId,"player-width":"100%"}})],1),n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onDownloadButtonClick}},[t._v(" Download Pitch Deck ")]),t.showResubmitPitchDeckButton?n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onResubmitPitchDeckButtonClick}},[t._v(" Re-submit Pitch Deck ")]):t._e()],1)])])},a=[],o=(n("d3b7"),n("5530")),c=n("2f62"),s=n("6c33"),r=Object(c["a"])("pitchDeck"),u=r.mapActions,d=Object(c["a"])("auth"),l=d.mapGetters,b=4,h="jwLZVMI3q70",k={name:"FounderDashboard",components:{BigButtonComponent:function(){return n.e("chunk-94c2dc40").then(n.bind(null,"c77d"))}},data:function(){return{videoId:h}},computed:Object(o["a"])({},l(["currentUser"]),{statusBadgeVariant:function(){return"info"},statusBadgeText:function(){return"UNDER REVIEW"},instructText:function(){return'\n        Your pitch deck has been submitted and is under review by StartUpNV\'s\n        Reviewers. Once you have four or more reviews, the "See My Feedback"\n        button will be enabled and you can click it to see your recent reviews.\n        Additionally, once you have over four reviews, an admin will either\n        accept your pitch deck or send it back for re-work. If your pitch deck\n        was accepted, your status will change to "ACCEPTED" and you will be\n        given the next steps on what to do. If your pitch deck is sent back for\n        re-work, your status will remain in "UNDER REVIEW" and you will be able\n        review your feedback and re-submit a new version of your pitch deck.\n        Finally, if your pitch deck is not approved after the third submission,\n        then your status will change to "NOT APPROVED".\n      '},reviewCount:function(){return 0},feedbackButtonDisabled:function(){return this.reviewCount<b},showResubmitPitchDeckButton:function(){return!0}}),methods:Object(o["a"])({},u({downloadPitchDeck:s["h"]}),{onDownloadButtonClick:function(){this.downloadPitchDeck({id:this.currentUser.pitchDeck})},onFeedbackButtonClick:function(){console.log("onFeedbackButtonClick triggered!"),this.feedbackButtonDisabled},onResubmitPitchDeckButtonClick:function(){console.log("onResubmitPitchDeckButtonClick triggered!")}})},v=k,m=(n("a7a4"),n("2877")),w=Object(m["a"])(v,i,a,!1,null,"115cb39e",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-3d7d22dc.ce9f108a.js.map