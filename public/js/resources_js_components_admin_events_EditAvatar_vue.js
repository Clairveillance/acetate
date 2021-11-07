(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_events_EditAvatar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Id: String,
    Avatar: String
  },
  data: function data() {
    return {
      avatarDialog: false,
      currentAvatar: null,
      event: "",
      file: "",
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/",
      apiToken: localStorage.getItem("user_api_token"),
      errors: false
    };
  },
  mounted: function mounted() {
    // Load event.avatar
    if (this.Avatar) {
      this.currentAvatar = this.baseURL + "storage/avatar/event/" + this.Avatar;
    } else {
      this.currentAvatar = null;
    }
  },
  methods: {
    // Validate file type.
    handleFileUpload: function handleFileUpload() {
      if (this.$refs.file.files[0]["type"] !== "image/jpeg" && this.$refs.file.files[0]["type"] !== "image/gif" && this.$refs.file.files[0]["type"] !== "image/png") {
        this.errors = "Invalid file type ( gif, jpg or png ).";
      } else {
        this.errors = false;
        this.file = this.$refs.file.files[0];
        this.filePreview = this.$refs.file.files[0];
        this.currentAvatar = URL.createObjectURL(this.filePreview);
      }
    },
    // POST
    submit: function submit() {
      if (!this.errors) {
        var formData = new FormData();
        var blob = this.file.slice(0, this.file.size, this.file.type);
        var filename = this.file.name.substr(0, 30);
        var newFile = new File([blob], filename, {
          type: this.file.type
        }); //this.file.name = this.file.name.trim();

        formData.append("upload", newFile);
        var config = {
          headers: {
            "Content-Type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2),
            Authorization: "Bearer " + this.apiToken
          }
        };
        axios.post(this.baseURL + "api/events/" + this.Id + "/avatar", formData, config).then(function (response) {
          this.refreshAll();
          this.closeDialog();
        }.bind(this))["catch"](function (error) {
          console.log(error);
        });
      }
    },
    // DELETE
    deleteAvatar: function deleteAvatar() {
      var formData = new FormData();
      formData.append("upload", "");
      var config = {
        headers: {
          "Content-Type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2),
          Authorization: "Bearer " + this.apiToken
        }
      };
      axios.post(this.baseURL + "api/events/" + this.Id + "/avatar", formData, config).then(function (response) {
        this.currentAvatar = null;
        this.refreshAll();
        this.closeDialog();
      }.bind(this))["catch"](function (error) {
        console.log(error);
      });
    },
    // GET
    fetchAPI: function fetchAPI() {
      var _this = this;

      axios.request({
        url: this.Id,
        method: "get",
        baseURL: this.baseURL + "api/events/",
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        console.log("response");
        _this.event = response.data.data.event;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {});
    },
    refreshAll: function refreshAll() {
      this.$emit("refreshAvatar");
      this.$emit("refreshToolbox");
    },
    closeDialog: function closeDialog() {
      this.errors = false;
      this.avatarDialog = false;
      this.refreshAll();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/events/EditAvatar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/events/EditAvatar.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAvatar.vue?vue&type=template&id=7686831e& */ "./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e&");
/* harmony import */ var _EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAvatar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/events/EditAvatar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_template_id_7686831e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAvatar.vue?vue&type=template&id=7686831e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/events/EditAvatar.vue?vue&type=template&id=7686831e& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          attrs: { persistent: "", width: "500" },
          model: {
            value: _vm.avatarDialog,
            callback: function($$v) {
              _vm.avatarDialog = $$v
            },
            expression: "avatarDialog"
          }
        },
        [
          _c(
            "form",
            {
              attrs: { id: "myForm" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "800px" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "title greybg primary--text" },
                    [
                      _c("div", [
                        _vm._v(_vm._s(_vm.$t("admin.edit_avatar.title")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mt-4 col-auto mx-auto my-auto",
                          class: _vm.$vuetify.theme.dark ? "greybg" : "greybg",
                          attrs: { elevation: "0", width: "300" }
                        },
                        [
                          _vm.errors
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "error mb-2 px-4 white--text py-2 rounded"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "white" },
                            [
                              _vm.currentAvatar
                                ? _c("img", {
                                    staticClass:
                                      "mx-4 my-3 primary--text col-auto mx-auto my-auto",
                                    attrs: {
                                      width: "213",
                                      src: _vm.currentAvatar
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _c("input", {
                                ref: "file",
                                staticClass: "mx-4 my-4 primary--text",
                                attrs: { type: "file", id: "file" },
                                on: {
                                  change: function($event) {
                                    return _vm.handleFileUpload()
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "mt-2" }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary--text",
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.cancel")))]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _vm.currentAvatar
                        ? _c(
                            "v-btn",
                            {
                              attrs: {
                                text: "",
                                color: "warning",
                                type: "submit"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.deleteAvatar()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("button.delete")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentAvatar
                        ? _c(
                            "v-btn",
                            {
                              attrs: {
                                text: "",
                                color: "info",
                                type: "submit"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.submit()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("button.submit")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);