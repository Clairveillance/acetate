(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_event_EventDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    Description: String,
    CurrentDates: Array,
    OldDates: Array,
    People: Array,
    Venues: Array,
    Addresses: Array,
    Prices: Array,
    Emails: Array,
    Phones: Array,
    Websites: Array
  },
  data: function data() {
    return {
      panel: [0],
      appURL: "http://127.0.0.1:8001",
      baseURL: "/",
      googleMap: "https://www.google.com/maps/search/?api=1&query=",
      sortBy: "start_date"
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t("page.event.title.start_date"),
        value: "start_date",
        align: "start"
      }, {
        text: this.$t("page.event.title.end_date"),
        value: "end_date"
      }, {
        text: this.$t("page.event.title.start_time"),
        value: "start_time"
      }, {
        text: this.$t("page.event.title.end_time"),
        value: "end_time"
      }];
    }
  },
  methods: {
    showPerson: function showPerson(id) {
      var path = "people/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    },
    showVenue: function showVenue(id) {
      var path = "venues/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    },
    mapQuery: function mapQuery(address) {
      return this.googleMap + address.latitude + "," + address.longitude;
    },
    mailTo: function mailTo(email) {
      return "mailto:" + email.address;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/event/EventDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/event/EventDetails.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDetails.vue?vue&type=template&id=8132019a& */ "./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a&");
/* harmony import */ var _EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__.render,
  _EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/EventDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_8132019a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventDetails.vue?vue&type=template&id=8132019a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/EventDetails.vue?vue&type=template&id=8132019a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        "v-expansion-panels",
        {
          attrs: { multiple: "", elevation: "-1", tile: "", accordion: "" },
          model: {
            value: _vm.panel,
            callback: function($$v) {
              _vm.panel = $$v
            },
            expression: "panel"
          }
        },
        [
          _c(
            "v-expansion-panel",
            { staticClass: "caption primary--text" },
            [
              _c(
                "v-expansion-panel-header",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "actions",
                      fn: function() {
                        return [
                          _c("v-icon", { attrs: { color: "primary" } }, [
                            _vm._v(" $expand ")
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(
                    _vm._s(_vm.$t("page.event.title.description")) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-expansion-panel-content", [
                _vm.Description !== null && _vm.Description.length > 0
                  ? _c(
                      "span",
                      {
                        staticClass: "subtitle-2",
                        class: _vm.$vuetify.theme.dark
                          ? "grey--text"
                          : "primary--text"
                      },
                      [_vm._v(_vm._s(_vm.Description))]
                    )
                  : _c("span", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("page.event.description_none"))
                      )
                    ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panel",
            { staticClass: "caption primary--text" },
            [
              _c(
                "v-expansion-panel-header",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "actions",
                      fn: function() {
                        return [
                          _c("v-icon", { attrs: { color: "primary" } }, [
                            _vm._v(" $expand ")
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(
                    _vm._s(_vm.$t("page.event.title.dates")) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-expansion-panel-content", [
                _vm.CurrentDates !== null && _vm.CurrentDates.length > 0
                  ? _c(
                      "span",
                      {
                        staticClass: "subtitle-2",
                        class: _vm.$vuetify.theme.dark
                          ? "primary--text"
                          : "primary--text"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "primary--text",
                          attrs: {
                            headers: _vm.headers,
                            items: _vm.CurrentDates,
                            "sort-by": _vm.sortBy,
                            "disable-pagination": "",
                            "hide-default-footer": ""
                          },
                          on: {
                            "update:sortBy": function($event) {
                              _vm.sortBy = $event
                            },
                            "update:sort-by": function($event) {
                              _vm.sortBy = $event
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.People !== null && _vm.People.length > 0
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.title.attendance")))]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _c(
                      "span",
                      _vm._l(_vm.People, function(person, index) {
                        return _c(
                          "span",
                          { key: index },
                          [
                            _c(
                              "v-avatar",
                              {
                                staticStyle: { cursor: "pointer" },
                                attrs: { size: "20" }
                              },
                              [
                                person.avatar !== null &&
                                person.avatar.length > 0
                                  ? _c("img", {
                                      attrs: {
                                        alt: "Avatar",
                                        src:
                                          _vm.baseURL +
                                          "storage/avatar/person/" +
                                          person.avatar,
                                        title: person.nickname
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.showPerson(person.id)
                                        }
                                      }
                                    })
                                  : _c(
                                      "v-icon",
                                      {
                                        class: _vm.$vuetify.theme.dark
                                          ? "info--text"
                                          : "secondary--text",
                                        attrs: { title: person.nickname },
                                        on: {
                                          click: function($event) {
                                            return _vm.showPerson(person.id)
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-account-circle")]
                                    )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "no-uppercase",
                                class: _vm.$vuetify.theme.dark
                                  ? "info--text"
                                  : "secondary--text",
                                attrs: {
                                  text: "",
                                  tile: "",
                                  small: "",
                                  title: person.nickname
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showPerson(person.id)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(person.nickname))]
                            ),
                            _vm._v(" "),
                            _c("v-spacer")
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          (_vm.Venues !== null && _vm.Venues.length > 0) ||
          (_vm.Addresses !== null && _vm.Addresses.length > 0)
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.title.locations")))]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _vm.Venues !== null && _vm.Venues.length > 0
                      ? _c("div", { staticClass: "mt-0 mb-4 py-0 mx-0 px-0" }, [
                          _c(
                            "span",
                            [
                              _vm.Venues.length > 1
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "mb-2 subtitle-2 grey--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t("page.event.title.venues")
                                          ) +
                                          " :\n                        "
                                      )
                                    ]
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass: "mb-2 subtitle-2 grey--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t("page.event.title.venue")
                                          ) +
                                          " :\n                        "
                                      )
                                    ]
                                  ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _vm._l(_vm.Venues, function(venue, index) {
                                return _c(
                                  "span",
                                  { key: index },
                                  [
                                    _c(
                                      "v-avatar",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        attrs: { tile: "", size: "20" }
                                      },
                                      [
                                        venue.avatar !== null &&
                                        venue.avatar.length > 0
                                          ? _c("img", {
                                              attrs: {
                                                alt: "Avatar",
                                                src:
                                                  _vm.baseURL +
                                                  "storage/avatar/venue/" +
                                                  venue.avatar,
                                                title: venue.name
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.showVenue(venue.id)
                                                }
                                              }
                                            })
                                          : _c(
                                              "v-icon",
                                              {
                                                class: _vm.$vuetify.theme.dark
                                                  ? "info--text"
                                                  : "secondary--text",
                                                attrs: { title: venue.name },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.showVenue(
                                                      venue.id
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("mdi-office-building")]
                                            )
                                      ],
                                      1
                                    ),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "no-uppercase",
                                        class: _vm.$vuetify.theme.dark
                                          ? "info--text"
                                          : "secondary--text",
                                        attrs: {
                                          text: "",
                                          tile: "",
                                          small: "",
                                          title: venue.name
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.showVenue(venue.id)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(venue.name))]
                                    ),
                                    _c("v-spacer")
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.Addresses !== null && _vm.Addresses.length > 0
                      ? _c("div", { staticClass: "mt-0 mb-4 py-0 mx-0 px-0" }, [
                          _c(
                            "span",
                            [
                              _vm.Addresses.length > 1
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "mb-2 subtitle-2 grey--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t("page.event.title.addresses")
                                          ) +
                                          " :\n                        "
                                      )
                                    ]
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass: "mb-2 subtitle-2 grey--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t("page.event.title.address")
                                          ) +
                                          " :\n                        "
                                      )
                                    ]
                                  ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _vm._l(_vm.Addresses, function(address, index) {
                                return _c("span", { key: index }, [
                                  _c(
                                    "span",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-1 primary--text",
                                          staticStyle: {
                                            "margin-bottom": "0.08rem"
                                          },
                                          attrs: {
                                            small: "",
                                            title: _vm.$t(
                                              "page.venues.title.company"
                                            )
                                          }
                                        },
                                        [_vm._v("mdi-map-marker")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(address.street1) +
                                            ",\n                                    " +
                                            _vm._s(address.zip) +
                                            "\n                                    " +
                                            _vm._s(address.city) +
                                            ",\n                                    " +
                                            _vm._s(address.canton) +
                                            ",\n                                    " +
                                            _vm._s(address.country)
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ])
                              }),
                              _c("v-spacer")
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.Prices !== null && _vm.Prices.length > 0
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("page.event.title.prices")) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _c(
                      "span",
                      { staticClass: "subtitle-2" },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "caption",
                            class: _vm.$vuetify.theme.dark
                              ? "grey--text"
                              : "primary--text"
                          },
                          _vm._l(_vm.Prices, function(price, index) {
                            return _c(
                              "span",
                              { key: index },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-1",
                                    class: _vm.$vuetify.theme.dark
                                      ? "grey--text"
                                      : "primary--text",
                                    staticStyle: { "margin-bottom": "0.08rem" },
                                    attrs: { small: "" }
                                  },
                                  [_vm._v("mdi-cash-usd-outline")]
                                ),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(price.cost) +
                                    " chf (" +
                                    _vm._s(price.type) +
                                    ")"
                                ),
                                _c("v-spacer")
                              ],
                              1
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("v-spacer")
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.Emails !== null && _vm.Emails.length > 0
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.title.emails")))]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _c(
                      "span",
                      _vm._l(_vm.Emails, function(email, index) {
                        return _c(
                          "span",
                          { key: index },
                          [
                            _c(
                              "v-icon",
                              {
                                class: _vm.$vuetify.theme.dark
                                  ? "info--text"
                                  : "secondary--text",
                                attrs: { small: "" }
                              },
                              [_vm._v("mdi-email-outline")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "no-uppercase",
                                class: _vm.$vuetify.theme.dark
                                  ? "info--text"
                                  : "secondary--text",
                                attrs: {
                                  text: "",
                                  tile: "",
                                  small: "",
                                  href: _vm.mailTo(email),
                                  title: _vm.$t("page.event.title.email"),
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(email.address) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                class: _vm.$vuetify.theme.dark
                                  ? "grey--text"
                                  : "primary--text"
                              },
                              [
                                _vm._v(
                                  "\n                            (" +
                                    _vm._s(email.type) +
                                    ")\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-spacer")
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.Phones !== null && _vm.Phones.length > 0
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.title.phones")))]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _c(
                      "span",
                      _vm._l(_vm.Phones, function(phone, index) {
                        return _c(
                          "span",
                          { key: index },
                          [
                            _c(
                              "v-icon",
                              {
                                class: _vm.$vuetify.theme.dark
                                  ? "info--text"
                                  : "secondary--text",
                                attrs: { small: "" }
                              },
                              [_vm._v("mdi-phone-outline")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "ml-3",
                                class: _vm.$vuetify.theme.dark
                                  ? "grey--text"
                                  : "primary--text"
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(phone.number) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                class: _vm.$vuetify.theme.dark
                                  ? "grey--text"
                                  : "primary--text"
                              },
                              [
                                _vm._v(
                                  "\n                            (" +
                                    _vm._s(phone.type) +
                                    ")\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-spacer")
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.Websites !== null && _vm.Websites.length > 0
            ? _c(
                "v-expansion-panel",
                { staticClass: "caption primary--text" },
                [
                  _c(
                    "v-expansion-panel-header",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [
                                _c("v-icon", { attrs: { color: "primary" } }, [
                                  _vm._v(" $expand ")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        431335688
                      )
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.title.websites")))]
                  ),
                  _vm._v(" "),
                  _c("v-expansion-panel-content", [
                    _c(
                      "span",
                      _vm._l(_vm.Websites, function(website, index) {
                        return _c(
                          "span",
                          { key: index },
                          [
                            website.type === "website"
                              ? _c(
                                  "span",
                                  {
                                    class: _vm.$vuetify.theme.dark
                                      ? "grey--text"
                                      : "primary--text"
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        class: _vm.$vuetify.theme.dark
                                          ? "info--text"
                                          : "secondary--text",
                                        attrs: { small: "" }
                                      },
                                      [_vm._v("mdi-web")]
                                    )
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  {
                                    class: _vm.$vuetify.theme.dark
                                      ? "grey--text"
                                      : "primary--text"
                                  },
                                  [
                                    website.social_network.type === "tiktok"
                                      ? _c(
                                          "v-icon",
                                          {
                                            class: _vm.$vuetify.theme.dark
                                              ? "info--text"
                                              : "secondary--text",
                                            attrs: { small: "" }
                                          },
                                          [_vm._v("mdi-web ")]
                                        )
                                      : _c(
                                          "v-icon",
                                          {
                                            class: _vm.$vuetify.theme.dark
                                              ? "info--text"
                                              : "secondary--text",
                                            attrs: { small: "" }
                                          },
                                          [
                                            _vm._v(
                                              "mdi-" +
                                                _vm._s(
                                                  website.social_network.type
                                                ) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                  ],
                                  1
                                ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "no-uppercase",
                                class: _vm.$vuetify.theme.dark
                                  ? "info--text"
                                  : "secondary--text",
                                attrs: {
                                  text: "",
                                  tile: "",
                                  small: "",
                                  href: website.url,
                                  title: website.name,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(website.url) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-spacer")
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            : _vm._e()
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