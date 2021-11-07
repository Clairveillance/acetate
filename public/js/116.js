(self.webpackChunk=self.webpackChunk||[]).push([[116],{6116:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const n={data:function(){return{formData:{email:"",password:""},passwordConfirm:"",showPw:!1,errors:!1,appURL:"https://acetate.ch",baseURL:"/"}},methods:r(r({},(0,a(629).nv)({setId:"user/setId",setUserLogged:"account/setUserLogged",setUsername:"user/setUsername",setFirstname:"user/setFirstname",setLastname:"user/setLastname",setEmail:"user/setEmail",setLanguage:"user/setLanguage",setTheme:"user/setTheme",setThemeSwitch:"user/setThemeSwitch",setAvatar:"user/setAvatar",setApiToken:"user/setApiToken",setRole:"user/setRole",setAbilities:"user/setAbilities"})),{},{login:function(){var e=this;axios.post("/api/login",this.formData).then((function(t){e.userId=t.data.data.user.id,e.username=t.data.data.user.username,e.firstname=t.data.data.user.firstname,e.lastname=t.data.data.user.lastname,e.email=t.data.data.user.email,e.language=t.data.data.user.language,e.theme=t.data.data.user.theme,e.avatar=t.data.data.user.avatar,e.token=t.data.data.user.api_token,e.role=t.data.data.user.role[0].name,e.abilities=t.data.data.user.abilities,e.errors=!1,"light"===e.theme?e.$vuetify.theme.dark=!1:"dark"===e.theme&&(e.$vuetify.theme.dark=!0),localStorage.setItem("user_id",e.userId),localStorage.setItem("user_username",e.username),localStorage.setItem("user_firstname",e.firstname),localStorage.setItem("user_lastname",e.lastname),localStorage.setItem("user_email",e.email),localStorage.setItem("user_language",e.language),localStorage.setItem("user_theme",e.theme),localStorage.setItem("user_avatar",e.avatar),localStorage.setItem("user_api_token",e.token),localStorage.setItem("user_role",e.role),localStorage.setItem("user_abilities",e.abilities),e.setUserLogged(e.token),e.setId(e.userId),e.setUsername(e.username),e.setFirstname(e.firstname),e.setLastname(e.lastname),e.setEmail(e.email),e.setLanguage(e.language),e.setTheme(e.theme),e.setAvatar(e.avatar),e.setApiToken(e.token),e.setRole(e.role),e.setAbilities(e.abilities),e.$router.go(-1)})).catch((function(t){e.errors=!0})).finally((function(){}))}})};const i=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[a("v-col",{attrs:{sm:"7"}},[a("form",{on:{submit:function(e){e.preventDefault()}}},[a("v-card",[a("v-card-title",{staticClass:"title greybg primary--text"},[e._v("\n                        Login\n                    ")]),e._v(" "),a("v-card-text",[a("v-text-field",{attrs:{type:"email",autocomplete:"on",label:e.$t("form.label.email")},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email","string"==typeof t?t.trim():t)},expression:"formData.email"}}),e._v(" "),a("v-text-field",{attrs:{label:e.$t("form.label.password"),autocomplete:"on","append-icon":e.showPw?"mdi-eye-off":"mdi-eye",type:e.showPw?"text":"password"},on:{"click:append":function(t){e.showPw=!e.showPw}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),e._v(" "),e.errors?a("div",{staticClass:"error my-1 px-4 white--text py-2 rounded"},[e._v("\n                            "+e._s(e.$t("errors.login.message"))+"\n                        ")]):e._e()],1),e._v(" "),a("v-divider",{staticClass:"mt-2"}),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"info accent-4",type:"submit"},on:{click:e.login}},[e._v("\n                            submit\n                        ")])],1)],1)],1)])],1)],1)}),[],!1,null,null,null).exports}}]);