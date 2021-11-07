(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_event_Likes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    LikesCount: Number,
    Likes: Array,
    Id: String
  },
  data: function data() {
    return {
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/",
      apiToken: "2|ed0bZCRHscyTTVVl0PqgtP3Ug2vDaHPtwrTgFWfi",
      query: null
    };
  },
  methods: {
    logged: function logged() {
      return localStorage.getItem("user_api_token");
    },
    likked: function likked() {
      var likked = this.Likes.find(function (l) {
        return l.user_id == localStorage.getItem("user_id");
      });
      return likked;
    },
    likeThis: function likeThis() {
      /* 
      this.apiToken = localStorage.getItem("user_api_token");
      axios
      .request({
      url: {
      name: this.Name,
      id: this.Id,
      user_id: this.UserId,
      },
      method: "patch",
      baseURL: this.baseURL + "api/events/" + this.Id,
      headers: {
      Authorization: "Bearer " + this.apiToken,
      },
      })
      .then((response) => {
      this.events = response.data.events;
      })
      .catch((errors) => {
      // Returns errors.
      console.log(errors.response.data);
      }); */
    },
    unlikeThis: function unlikeThis() {}
  }
});

/***/ }),

/***/ "./resources/js/components/pages/event/Likes.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/event/Likes.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes.vue?vue&type=template&id=68bf8561& */ "./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561&");
/* harmony import */ var _Likes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Likes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__.render,
  _Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/Likes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Likes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Likes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Likes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Likes_vue_vue_type_template_id_68bf8561___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Likes.vue?vue&type=template&id=68bf8561& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Likes.vue?vue&type=template&id=68bf8561& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-col",
        {
          staticClass: "col-auto ml-auto",
          staticStyle: { "text-align": "right" }
        },
        [
          !_vm.logged()
            ? _c(
                "span",
                {
                  staticClass: "mr-2",
                  class: _vm.$vuetify.theme.dark
                    ? "primary--text"
                    : "secondary--text"
                },
                [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-1",
                      class: _vm.$vuetify.theme.dark
                        ? "primary--text"
                        : "secondary--text",
                      staticStyle: { "margin-bottom": "0.05rem" },
                      attrs: { dark: "", small: "" }
                    },
                    [_vm._v("\n                mdi-heart-outline ")]
                  ),
                  _c("span", { staticClass: "subtitle-2" }, [
                    _vm._v(_vm._s(_vm.LikesCount))
                  ])
                ],
                1
              )
            : _c(
                "v-btn",
                {
                  class: _vm.$vuetify.theme.dark
                    ? "primary--text"
                    : "secondary--text",
                  attrs: { text: "", small: "" }
                },
                [
                  !_vm.likked()
                    ? _c(
                        "span",
                        {
                          on: {
                            click: function($event) {
                              return _vm.likeThis()
                            }
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "mr-1",
                              class: _vm.$vuetify.theme.dark
                                ? "primary--text"
                                : "secondary--text",
                              staticStyle: { "margin-bottom": "0.05rem" },
                              attrs: { dark: "", small: "" }
                            },
                            [_vm._v("\n                    mdi-heart-outline ")]
                          ),
                          _c("span", { staticClass: "subtitle-2" }, [
                            _vm._v(_vm._s(_vm.LikesCount))
                          ])
                        ],
                        1
                      )
                    : _c(
                        "span",
                        {
                          on: {
                            click: function($event) {
                              return _vm.unlikeThis()
                            }
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "pink--text mr-1",
                              staticStyle: { "margin-bottom": "0.05rem" },
                              attrs: { dark: "", small: "" }
                            },
                            [_vm._v("\n                    mdi-heart ")]
                          ),
                          _c(
                            "span",
                            { staticClass: "subtitle-2 pink--text mr-1" },
                            [_vm._v(_vm._s(_vm.LikesCount))]
                          )
                        ],
                        1
                      )
                ]
              )
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