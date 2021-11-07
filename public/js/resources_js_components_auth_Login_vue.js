(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      passwordConfirm: "",
      showPw: false,
      errors: false,
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/"
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    setId: "user/setId",
    setUserLogged: "account/setUserLogged",
    setUsername: "user/setUsername",
    setFirstname: "user/setFirstname",
    setLastname: "user/setLastname",
    setEmail: "user/setEmail",
    setLanguage: "user/setLanguage",
    setTheme: "user/setTheme",
    setThemeSwitch: "user/setThemeSwitch",
    setAvatar: "user/setAvatar",
    setApiToken: "user/setApiToken",
    setRole: "user/setRole",
    setAbilities: "user/setAbilities"
  })), {}, {
    // Login request.
    login: function login() {
      var _this = this;

      axios.post("/api/login", this.formData).then(function (response) {
        // Fetch API response.
        _this.userId = response.data.data.user.id;
        _this.username = response.data.data.user.username;
        _this.firstname = response.data.data.user.firstname;
        _this.lastname = response.data.data.user.lastname;
        _this.email = response.data.data.user.email;
        _this.language = response.data.data.user.language;
        _this.theme = response.data.data.user.theme;
        _this.avatar = response.data.data.user.avatar;
        _this.token = response.data.data.user.api_token;
        _this.role = response.data.data.user.role[0].name;
        _this.abilities = response.data.data.user.abilities;
        _this.errors = false; // Set logged user's theme.

        if (_this.theme === "light") {
          _this.$vuetify.theme.dark = false;
        } else if (_this.theme === "dark") {
          _this.$vuetify.theme.dark = true;
        } // Save logged user's variables in localStorage.


        localStorage.setItem("user_id", _this.userId);
        localStorage.setItem("user_username", _this.username);
        localStorage.setItem("user_firstname", _this.firstname);
        localStorage.setItem("user_lastname", _this.lastname);
        localStorage.setItem("user_email", _this.email);
        localStorage.setItem("user_language", _this.language);
        localStorage.setItem("user_theme", _this.theme);
        localStorage.setItem("user_avatar", _this.avatar);
        localStorage.setItem("user_api_token", _this.token);
        localStorage.setItem("user_role", _this.role);
        localStorage.setItem("user_abilities", _this.abilities); // Set logged user's states in vuex store.

        _this.setUserLogged(_this.token);

        _this.setId(_this.userId);

        _this.setUsername(_this.username);

        _this.setFirstname(_this.firstname);

        _this.setLastname(_this.lastname);

        _this.setEmail(_this.email);

        _this.setLanguage(_this.language);

        _this.setTheme(_this.theme);

        _this.setAvatar(_this.avatar);

        _this.setApiToken(_this.token);

        _this.setRole(_this.role);

        _this.setAbilities(_this.abilities);

        _this.$router.go(-1);
      })["catch"](function (errors) {
        // Returns errors.
        _this.errors = true; // errors.response.data
      })["finally"](function () {});
    }
  })
});

/***/ }),

/***/ "./resources/js/components/auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/Login.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4221c3ad& */ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=4221c3ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { staticClass: "mt-4", attrs: { justify: "center" } },
        [
          _c("v-col", { attrs: { sm: "7" } }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-card-title",
                      { staticClass: "title greybg primary--text" },
                      [
                        _vm._v(
                          "\n                        Login\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c("v-text-field", {
                          attrs: {
                            type: "email",
                            autocomplete: "on",
                            label: _vm.$t("form.label.email")
                          },
                          model: {
                            value: _vm.formData.email,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.formData,
                                "email",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "formData.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            label: _vm.$t("form.label.password"),
                            autocomplete: "on",
                            "append-icon": _vm.showPw
                              ? "mdi-eye-off"
                              : "mdi-eye",
                            type: _vm.showPw ? "text" : "password"
                          },
                          on: {
                            "click:append": function($event) {
                              _vm.showPw = !_vm.showPw
                            }
                          },
                          model: {
                            value: _vm.formData.password,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "password", $$v)
                            },
                            expression: "formData.password"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "error my-1 px-4 white--text py-2 rounded"
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("errors.login.message")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider", { staticClass: "mt-2" }),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "mr-4",
                            attrs: {
                              text: "",
                              color: "info accent-4",
                              type: "submit"
                            },
                            on: { click: _vm.login }
                          },
                          [
                            _vm._v(
                              "\n                            submit\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);