(self.webpackChunk=self.webpackChunk||[]).push([[915],{6856:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});const s={props:{Id:String,Phones:Array,Emails:Array,Websites:Array,Step:Number},data:function(){return{form:{id:this.id,name:"",description:"",user_id:localStorage.getItem("user_id")},appURL:"https://acetate.ch",baseURL:"/",apiToken:localStorage.getItem("user_api_token"),errors:!1,dialog:!1}},methods:{submit:function(){for(var e=this,t=[],i=0;i<this.Emails.length;i++)document.getElementById("email["+i+"]").value&&t.push(JSON.parse(document.getElementById("email["+i+"]").value));for(var s=[],a=0;a<this.Phones.length;a++)document.getElementById("phone["+a+"]").value&&s.push(JSON.parse(document.getElementById("phone["+a+"]").value));for(var r=[],n=0;n<this.Websites.length;n++)document.getElementById("website["+n+"]").value&&r.push(JSON.parse(document.getElementById("website["+n+"]").value));console.log("emails: ",t),console.log("phones: ",s),console.log("websites: ",r);var o={headers:{Authorization:"Bearer "+this.apiToken}};axios.patch(this.baseURL+"api/events/"+this.Id,this.form,o).then((function(t){e.historyBack()})).catch((function(t){return e.errors=t.response.data.message,e.dialog=!0,e.errors}))},closeDialog:function(){this.errors=!1,this.dialog=!1}}};const a=(0,i(1900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-stepper-content",{attrs:{step:e.Step}},[i("v-card",{staticClass:"m-0 mt-4 p-0 primary--text"},[i("v-divider"),e._v(" "),i("div",{staticClass:"pt-8"},e._l(e.Emails,(function(t,s){return i("v-card-text",{key:s,staticClass:" mb-0 py-0"},[i("v-textarea",{staticClass:"my-0 py-0 primary--text",attrs:{height:"160",clearable:"","no-resize":"",outlined:"",rows:"1","row-height":"25",id:"email["+s+"]",label:"Email "+(s+1)},model:{value:JSON.stringify(t,void 0,4),callback:function(t){e.$set(JSON,"stringify(email, undefined, 4)",t)},expression:"JSON.stringify(email, undefined, 4)"}})],1)})),1),e._v(" "),i("div",e._l(e.Phones,(function(t,s){return i("v-card-text",{key:s,staticClass:" mb-0 py-0"},[i("v-textarea",{staticClass:"my-0 py-0 primary--text",attrs:{height:"240",clearable:"","no-resize":"",outlined:"",rows:"1","row-height":"25",id:"phone["+s+"]",label:"Phone "+(s+1)},model:{value:JSON.stringify(t,void 0,4),callback:function(t){e.$set(JSON,"stringify(phone, undefined, 4)",t)},expression:"JSON.stringify(phone, undefined, 4)"}})],1)})),1),e._v(" "),i("div",e._l(e.Websites,(function(t,s){return i("v-card-text",{key:s,staticClass:" mb-0 py-0"},[i("v-textarea",{staticClass:"my-0 py-0 primary--text",attrs:{height:"310",clearable:"","no-resize":"",outlined:"",rows:"1","row-height":"25",id:"website["+s+"]",label:"Website "+(s+1)},model:{value:JSON.stringify(t,void 0,4),callback:function(t){e.$set(JSON,"stringify(website, undefined, 4)",t)},expression:"JSON.stringify(website, undefined, 4)"}})],1)})),1),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",{staticClass:"mx-1 mt-4 p-0"},[i("v-btn",{staticClass:"primary--text",attrs:{outlined:""},on:{click:function(t){return e.$emit("Step5")}}},[e._v("\n                    "+e._s(e.$t("button.back.back"))+" ")]),i("v-spacer"),i("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(t){return e.submit()}}},[e._v("\n                    "+e._s(e.$t("button.submit"))+"\n                ")])],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"title greybg primary--text"},[e._v("\n                Error ")]),i("v-card-text",[i("div",{staticClass:"error--text mx-4 mt-4 px-4  py-2 rounded"},[e._v("\n                    "+e._s(JSON.stringify(e.errors,void 0,4))+"\n                ")])]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{staticClass:"primary--text",attrs:{text:""},on:{click:function(t){return e.closeDialog()}}},[e._v(e._s(e.$t("button.close")))])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);