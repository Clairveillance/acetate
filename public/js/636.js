(self.webpackChunk=self.webpackChunk||[]).push([[636],{6636:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(629);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const n={data:function(){return{overlay:!0,appURL:"https://acetate.ch",baseURL:"/",errors:!1,form:{id:localStorage.getItem("user_id")}}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,s.nv)({setId:"user/setId",setUserLogged:"account/setUserLogged",setUsername:"user/setUsername",setFirstname:"user/setFirstname",setLastname:"user/setLastname",setEmail:"user/setEmail",setLanguage:"user/setLanguage",setTheme:"user/setTheme",setAvatar:"user/setAvatar",setApiToken:"user/setApiToken",setRole:"user/setRole",setAbilities:"user/setAbilities"})),computed:(0,s.Se)({getUserFields:"user/getUserFields",getUserLogged:"account/getUserLogged"}),mounted:function(){var e=this;axios.post(this.baseURL+"api/logout",this.form).then((function(){localStorage.removeItem("user_id"),localStorage.removeItem("user_username"),localStorage.removeItem("user_firstname"),localStorage.removeItem("user_lastname"),localStorage.removeItem("user_email"),localStorage.removeItem("user_language"),localStorage.removeItem("user_avatar"),localStorage.removeItem("user_api_token"),localStorage.removeItem("user_role"),localStorage.removeItem("user_abilities"),e.$store.state.account.userLogged=null,e.setId(null),e.setUsername(null),e.setFirstname(null),e.setLastname(null),e.setEmail(null),e.setLanguage(null),e.setAvatar(null),e.setApiToken(null),e.setRole(null),e.setAbilities(null),e.$router.go(-1)})).catch((function(t){e.overlay=!1,e.errors=e.$t("errors.logout.wrong")})).finally((function(){}))}};const l=(0,r(1900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.errors?r("div",{staticClass:"error my-1 px-4 white--text py-2 rounded"},[e._v("\n        "+e._s(e.errors)+"\n    ")]):e._e(),e._v(" "),r("v-overlay",{class:e.$vuetify.theme.dark?"primary--text":"secondary--text",attrs:{opacity:.1,value:e.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"90"}},[r("span",{staticClass:"caption",class:e.$vuetify.theme.dark?"primary--text":"secondary--text"},[e._v(e._s(e.$t("loading")))])])],1)],1)}),[],!1,null,null,null).exports}}]);