(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4278f2e4"],{ae74:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[n("div",{staticClass:"greeting"},[n("h1",[t._v("Founder Dashboard")]),n("p",[t._v("Welcome back, "+t._s(t.currentUser.username)+"!")])]),n("div",{staticClass:"main-flex"},[n("div",{staticClass:"column"},[n("div",{staticClass:"stat-display"},[n("span",[t._v("Status Of My Pitch Deck:")]),n("b-badge",{staticClass:"status",attrs:{variant:t.statusBadgeVariant}},[t._v(" "+t._s(t.statusBadgeText)+" ")])],1),"NOT_READY"!==this.pitchDeck.status&&"UNDER_REVIEW"!==this.pitchDeck.status?n("div",{staticClass:"admin-comments"},[n("h2",[t._v("Submission Comments")]),n("div",{staticClass:"instruct-text"},[t._v(" "+t._s(t.pitchDeck.adminComments)+" ")]),n("hr")]):t._e(),n("h2",[t._v("What Should I Do Now?")]),n("div",{staticClass:"instruct-text"},[t._v(" "+t._s(t.instructText)+" ")])]),n("div",{staticClass:"column"},[n("BigButtonComponent",{staticClass:"right-flex big-button",attrs:{title:"See My Feedback",subtitle:"Total Reviews: ",info:t.reviewCount,disabled:t.feedbackButtonDisabled},nativeOn:{click:function(e){return t.onFeedbackButtonClick(e)}}}),n("b-modal",{ref:"see-review-modal",attrs:{id:"seeReviewModal",size:"lg",centered:"","hide-footer":!0,title:"My Reviews"}},[n("FounderReviewModal",{attrs:{"pitch-deck":t.pitchDeck}})],1),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.vid-model",modifiers:{"vid-model":!0}}],staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"}},[t._v(" Re-watch Pitch Process Video ")]),n("b-modal",{attrs:{id:"vid-model",size:"lg",centered:"",title:"Pitch Process Video"}},[n("YouTubePlayer",{staticClass:"text-center",attrs:{"video-id":t.videoId,"player-width":"100%"}})],1),n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onDownloadButtonClick}},[t._v(" Download Pitch Deck ")]),t.showReUploadPitchDeckButton?n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onReUploadPitchDeckButtonClick}},[t._v(" Re-upload Pitch Deck ")]):t._e(),n("b-modal",{ref:"reupload-pitchdeck-modal",attrs:{id:"reUploadPitchDeckModal",size:"lg",centered:"","hide-footer":!0,title:"Re-upload Pitch Deck"}},[n("ReUploadPitchDeckModal",{on:{"form-submit-success":t.onUploadSuccess}})],1),t.showSubmitForReviewButton?n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onSubmitForReviewButtonClick}},[t._v(" Submit Pitch Deck For Review ")]):t._e(),t.showBookPitchDateButton?n("button",{staticClass:"right-flex btn btn-primary small-btn",attrs:{type:"button"},on:{click:t.onBookPitchDateButtonClick}},[t._v(" Book a Pitch Date ")]):t._e()],1)])])},i=[],r=(n("d3b7"),n("96cf"),n("1da1")),o=n("5530"),a=n("6c33"),s=n("2f62"),u="auth",d="pitchDeck",h=4,l="jwLZVMI3q70",k={name:"FounderDashboard",components:{ReUploadPitchDeckModal:function(){return n.e("chunk-6706cbc6").then(n.bind(null,"370d"))},FounderReviewModal:function(){return n.e("chunk-4940f642").then(n.bind(null,"d84d"))},BigButtonComponent:function(){return n.e("chunk-94c2dc40").then(n.bind(null,"c77d"))}},data:function(){return{videoId:l,pitchDeck:{}}},computed:Object(o["a"])({},Object(s["d"])({currentUser:"".concat(u,"/currentUser")}),{statusBadgeVariant:function(){return{NOT_READY:"secondary",NEEDS_REWORK:"warning",UNDER_REVIEW:"primary",ACCEPTED:"success",REJECTED:"danger"}[this.pitchDeck.status]},statusBadgeText:function(){return{NOT_READY:"NOT READY",NEEDS_REWORK:"NEEDS REWORK",UNDER_REVIEW:"UNDER REVIEW",ACCEPTED:"ACCEPTED",REJECTED:"NOT ACCEPTED"}[this.pitchDeck.status]},instructText:function(){return{NOT_READY:'\n          Your pitch deck has been uploaded but you have not submitted it for\n          review yet. Click the "Submit Pitch Deck For Review" button when your\n          pitch deck is ready to be reviewed by StartUpNV\'s Reviewers.\n        ',NEEDS_REWORK:"\n          Your pitch deck has been reviewed by our reviewers, but has been sent\n          back for re-work. Click the \"See My Feedback\" button to see the\n          feedback left by our reviewers and update your pitch deck accordingly.\n          When you think your pitch deck is ready to re-submit for review, click\n          the 'Submit Pitch Deck For Review' button to re-initiate the review\n          process.\n        ",UNDER_REVIEW:'\n          Your pitch deck has been submitted and is under review by StartUpNV\'s\n          Reviewers. Once you have four or more reviews, the "See My Feedback"\n          button will be enabled, allowing you to click it to see your recent\n          reviews. Additionally, once you have over four reviews, an admin will\n          either accept your pitch deck or send it back for re-work. Check back\n          here periodically for updates.\n        ',ACCEPTED:'\n          Your pitch deck has been accepted by StartUpNV\'s Reviewers. You can\n          click the "See My Feedback" button  to see your recent reviews. You\n          may now select the "Book a Pitch Date" button to book a date to pitch\n          your pitch deck with StartUpNV.\n        ',REJECTED:'\n          Your pitch deck has not been accepted by StartUpNV\'s Reviewers. You\n          can click the "See My Feedback" button to see your recent reviews.\n        '}[this.pitchDeck.status]},reviewCount:function(){try{return this.pitchDeck.reviews.length}catch(t){return 0}},feedbackButtonDisabled:function(){return this.reviewCount<h},showReUploadPitchDeckButton:function(){var t=this.pitchDeck,e=t.status,n=t.isLocked;return!n&&("NOT_READY"===e||"NEEDS_REWORK"===e)},showSubmitForReviewButton:function(){var t=this.pitchDeck,e=t.status,n=t.isLocked;return!n&&"NOT_READY"===e},showBookPitchDateButton:function(){var t=this.pitchDeck.status;return"ACCEPTED"===t}}),created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchPitchDeckById(t.currentUser.pitchDeck);case 2:n=e.sent,t.pitchDeck=n.pitchDeck;case 4:case"end":return e.stop()}}),e)})))()},methods:Object(o["a"])({},Object(s["c"])({fetchPitchDeckById:"".concat(d,"/").concat(a["j"]),downloadPitchDeck:"".concat(d,"/").concat(a["h"]),submitPitchDeckForReview:"".concat(d,"/").concat(a["w"])}),{onDownloadButtonClick:function(){this.downloadPitchDeck({id:this.currentUser.pitchDeck})},onFeedbackButtonClick:function(){this.feedbackButtonDisabled||this.$refs["see-review-modal"].show()},onReUploadPitchDeckButtonClick:function(){this.$refs["reupload-pitchdeck-modal"].show()},onSubmitForReviewButtonClick:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.submitPitchDeckForReview();case 2:n=e.sent,c=n.pitchDeck,t.pitchDeck=c;case 5:case"end":return e.stop()}}),e)})))()},onBookPitchDateButtonClick:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"book-pitch-date"});case 2:case"end":return e.stop()}}),e)})))()},onUploadSuccess:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchPitchDeckById(t.currentUser.pitchDeck);case 2:n=e.sent,t.pitchDeck=n.pitchDeck;case 4:case"end":return e.stop()}}),e)})))()}})},b=k,p=(n("f568"),n("2877")),v=Object(p["a"])(b,c,i,!1,null,"daf16ae6",null);e["default"]=v.exports},e068:function(t,e,n){},f568:function(t,e,n){"use strict";var c=n("e068"),i=n.n(c);i.a}}]);
//# sourceMappingURL=chunk-4278f2e4.a0c86adf.js.map