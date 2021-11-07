(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Person_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    id: String
  },
  components: {},
  data: function data() {
    return {
      overlay: true,
      avatarDialog: false,
      person: null,
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/",
      apiToken: "2|ed0bZCRHscyTTVVl0PqgtP3Ug2vDaHPtwrTgFWfi",
      renderComponent: false,
      renderCardTitle: false,
      renderToolbox: false,
      adminButtons: [{
        name: "edit",
        title: "menu.edit_people.title",
        path: "admin/people/edit",
        icon: "mdi-calendar-range"
      }, {
        name: "delete",
        title: "menu.delete_people.title",
        path: "admin/people/delete",
        icon: "mdi-calendar-remove"
      }],
      toggle_none: null
    };
  },
  methods: {
    logged: function logged() {
      return localStorage.getItem("user_api_token");
    },
    author: function author() {
      if (this.person.user_id == localStorage.getItem("user_id")) {
        return true;
      }
    },
    admin: function admin() {
      if (localStorage.getItem("user_role") === "super-admin") {
        return true;
      }
    },
    editable: function editable() {
      if (this.logged() && (this.author() || this.admin())) {
        return true;
      }
    },
    editThis: function editThis(id) {
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/admin/people/edit/").concat(id));
    },
    deleteThis: function deleteThis(id) {
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/admin/people/delete/").concat(id));
    },
    logThis: function logThis(file) {
      console.log(this.appURL + this.baseURL + file.path);
    },
    gotoPeople: function gotoPeople() {
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/people"));
    },
    fetchAPI: function fetchAPI() {
      var _this = this;

      axios.request({
        url: this.id,
        method: "get",
        baseURL: this.baseURL + "api/people/",
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        _this.person = response.data.data.person;
      })["catch"](function (error) {
        var path = "error/404";

        _this.$router.push("".concat(_this.baseURL).concat(_this.$i18n.locale, "/").concat(path));
      })["finally"](function () {
        _this.overlay = false;
        _this.renderToolbox = true;
        _this.renderCardTitle = true;
        _this.renderComponent = true;
        return _this.person;
      });
    },
    forceRerender: function forceRerender() {
      var _this2 = this;

      // Remove my-component from the DOM
      this.renderComponent = false;
      this.$nextTick(function () {
        // Add the component back in
        _this2.fetchAPI();
      });
    },
    rerenderCardTitle: function rerenderCardTitle() {
      var _this3 = this;

      // Remove my-component from the DOM
      this.renderCardTitle = false;
      this.$nextTick(function () {
        // Add the component back in
        _this3.fetchAPI();
      });
    },
    rerenderToolbox: function rerenderToolbox() {
      var _this4 = this;

      // Remove my-component from the DOM
      this.renderToolbox = false;
      this.$nextTick(function () {
        // Add the component back in
        _this4.fetchAPI();
      });
    }
  },
  mounted: function mounted() {
    this.fetchAPI();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Person.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Person.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person.vue?vue&type=template&id=860dd82a& */ "./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a&");
/* harmony import */ var _Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Person.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Person.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Person.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/Person.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Person.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_860dd82a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Person.vue?vue&type=template&id=860dd82a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Person.vue?vue&type=template&id=860dd82a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.person !== null
        ? _c(
            "div",
            { staticClass: "d-flex justify-center mb-4" },
            [
              _vm.renderToolbox
                ? _c("v-btn-toggle", { staticClass: "greybg" }, [
                    _c(
                      "span",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              text: "",
                              tile: "",
                              outlined: "",
                              small: "",
                              color: "secondary"
                            },
                            on: {
                              click: function($event) {
                                return _vm.gotoPeople()
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("button.back.people")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.editable()
                      ? _c(
                          "span",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  text: "",
                                  tile: "",
                                  outlined: "",
                                  small: "",
                                  color: "info"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.$refs.AvatarDialog.avatarDialog = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("admin.edit_avatar.title"))
                                )
                              ]
                            ),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  text: "",
                                  tile: "",
                                  outlined: "",
                                  small: "",
                                  color: "info"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editThis(_vm.person.id)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("admin.edit.title")))]
                            ),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  text: "",
                                  tile: "",
                                  outlined: "",
                                  small: "",
                                  color: "info"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteThis(_vm.person.id)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("admin.delete.title")))]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        [
          _vm.overlay === false
            ? _c(
                "v-card",
                {
                  staticClass: "pb-4 mx-auto",
                  attrs: { "max-width": "800px" }
                },
                [
                  _c("div", { staticClass: "mx-4 py-4" }, [
                    _vm._v(_vm._s(_vm.id))
                  ]),
                  _vm._v(" "),
                  _vm.person.files
                    ? _c("div", [
                        _vm.person.files !== null && _vm.person.files.length > 0
                          ? _c(
                              "div",
                              [
                                _c(
                                  "v-carousel",
                                  {
                                    attrs: {
                                      cycle: "",
                                      interval: "5000",
                                      "hide-delimiters": "",
                                      "show-arrows-on-hover": ""
                                    }
                                  },
                                  _vm._l(_vm.person.files, function(
                                    file,
                                    index
                                  ) {
                                    return _c("v-carousel-item", {
                                      key: index,
                                      attrs: {
                                        src:
                                          _vm.baseURL +
                                          "storage/file/" +
                                          file.path,
                                        title: file.name
                                      }
                                    })
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _c(
                        "div",
                        { staticClass: "d-flex justify-center" },
                        [
                          _c("v-progress-linear", {
                            attrs: {
                              indeterminate: "",
                              color: _vm.$vuetify.theme.dark ? "info" : "info",
                              opacity: "0.1"
                            }
                          })
                        ],
                        1
                      )
                ]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-overlay",
        {
          class: _vm.$vuetify.theme.dark ? "primary--text" : "secondary--text",
          attrs: { opacity: "0.1", value: _vm.overlay }
        },
        [
          _c(
            "v-progress-circular",
            { attrs: { indeterminate: "", size: "90" } },
            [
              _c(
                "span",
                {
                  staticClass: "caption",
                  class: _vm.$vuetify.theme.dark
                    ? "primary--text"
                    : "secondary--text"
                },
                [_vm._v(_vm._s(_vm.$t("loading")))]
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