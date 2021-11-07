(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Events_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_CardTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/CardTitle */ "./resources/js/components/pages/events/CardTitle.vue");
/* harmony import */ var _events_People__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/People */ "./resources/js/components/pages/events/People.vue");
/* harmony import */ var _events_Venues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/Venues */ "./resources/js/components/pages/events/Venues.vue");
/* harmony import */ var _events_Dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/Dates */ "./resources/js/components/pages/events/Dates.vue");
/* harmony import */ var _events_Time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/Time */ "./resources/js/components/pages/events/Time.vue");
/* harmony import */ var _events_Prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/Prices */ "./resources/js/components/pages/events/Prices.vue");
/* harmony import */ var _events_Taxonomies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/Taxonomies */ "./resources/js/components/pages/events/Taxonomies.vue");
/* harmony import */ var _events_CardFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/CardFooter */ "./resources/js/components/pages/events/CardFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    CardTitle: _events_CardTitle__WEBPACK_IMPORTED_MODULE_0__.default,
    People: _events_People__WEBPACK_IMPORTED_MODULE_1__.default,
    Venues: _events_Venues__WEBPACK_IMPORTED_MODULE_2__.default,
    Dates: _events_Dates__WEBPACK_IMPORTED_MODULE_3__.default,
    Time: _events_Time__WEBPACK_IMPORTED_MODULE_4__.default,
    Prices: _events_Prices__WEBPACK_IMPORTED_MODULE_5__.default,
    Taxonomies: _events_Taxonomies__WEBPACK_IMPORTED_MODULE_6__.default,
    CardFooter: _events_CardFooter__WEBPACK_IMPORTED_MODULE_7__.default
  },
  data: function data() {
    return {
      activeTab: "all",
      overlay: true,
      perPage: 48,
      page: 1,
      events: "",
      meta: "",
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/",
      apiToken: "2|ed0bZCRHscyTTVVl0PqgtP3Ug2vDaHPtwrTgFWfi",
      eventTabs: [{
        name: "all"
      }, {
        name: "conference"
      }, {
        name: "exhibition"
      }, {
        name: "music"
      }, {
        name: "theater"
      }],
      query: null
    };
  },
  mounted: function mounted() {
    this.showTab(this.activeTab);
  },
  methods: {
    showTab: function showTab(item) {
      var _this = this;

      this.overlay = true;
      this.events = null;

      if (item === "all") {
        this.query = "events?page=" + this.page + "&per_page=";
      } else {
        this.query = "events?type=" + item + "&per_page=";
      }

      axios.request({
        url: this.query + this.perPage,
        method: "get",
        baseURL: this.baseURL + "api/",
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        _this.events = response.data.events;
        _this.meta = response.data.meta;
        _this.overlay = false;
        return _this.events;
      })["catch"](function (error) {
        var path = "error/404";

        _this.$router.push("".concat(_this.baseURL).concat(_this.$i18n.locale, "/").concat(path));
      })["finally"](function () {});
    },
    onPageChange: function onPageChange() {
      this.showTab(this.activeTab);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Id: String,
    Comments: Number,
    Likes: Number
  },
  data: function data() {
    return {
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/"
    };
  },
  methods: {
    showEvent: function showEvent(id) {
      var path = "events/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Name: String,
    Avatar: String,
    Taxonomies: Array
  },
  data: function data() {
    return {
      appURL: "http://127.0.0.1:8001",
      baseURL: "/"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    StartDate: String,
    EndDate: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    People: Array
  },
  data: function data() {
    return {
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/"
    };
  },
  methods: {
    showPerson: function showPerson(id) {
      var path = "people/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Prices: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Taxonomies: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    StartTime: String,
    EndTime: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Venues: Array
  },
  data: function data() {
    return {
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/"
    };
  },
  methods: {
    showVenue: function showVenue(id) {
      var path = "venues/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Events.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Events.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=5f8650a2& */ "./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Events.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Events.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/CardFooter.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/events/CardFooter.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardFooter.vue?vue&type=template&id=0aed7a9b& */ "./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b&");
/* harmony import */ var _CardFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CardFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/CardFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/CardTitle.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/events/CardTitle.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTitle.vue?vue&type=template&id=3c30f408& */ "./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408&");
/* harmony import */ var _CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/CardTitle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/Dates.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/events/Dates.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dates.vue?vue&type=template&id=183446e5& */ "./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5&");
/* harmony import */ var _Dates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dates.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/Dates.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/People.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/events/People.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./People.vue?vue&type=template&id=2f6a9342& */ "./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342&");
/* harmony import */ var _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/People.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__.render,
  _People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/People.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/Prices.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/events/Prices.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prices.vue?vue&type=template&id=459fa69a& */ "./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a&");
/* harmony import */ var _Prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prices.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/Prices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/Taxonomies.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/events/Taxonomies.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Taxonomies.vue?vue&type=template&id=96f36902& */ "./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902&");
/* harmony import */ var _Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Taxonomies.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__.render,
  _Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/Taxonomies.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/Time.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/events/Time.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time.vue?vue&type=template&id=c3c554c6& */ "./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6&");
/* harmony import */ var _Time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Time.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/Time.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/events/Venues.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/events/Venues.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Venues.vue?vue&type=template&id=3774b534& */ "./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534&");
/* harmony import */ var _Venues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Venues.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Venues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__.render,
  _Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/events/Venues.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Events.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/Events.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/People.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/events/People.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./People.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Taxonomies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Time.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Venues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Venues.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Venues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Events.vue?vue&type=template&id=5f8650a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&");


/***/ }),

/***/ "./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFooter_vue_vue_type_template_id_0aed7a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardFooter.vue?vue&type=template&id=0aed7a9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b&");


/***/ }),

/***/ "./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_3c30f408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardTitle.vue?vue&type=template&id=3c30f408& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408&");


/***/ }),

/***/ "./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dates_vue_vue_type_template_id_183446e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dates.vue?vue&type=template&id=183446e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5&");


/***/ }),

/***/ "./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_2f6a9342___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./People.vue?vue&type=template&id=2f6a9342& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342&");


/***/ }),

/***/ "./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prices_vue_vue_type_template_id_459fa69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prices.vue?vue&type=template&id=459fa69a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a&");


/***/ }),

/***/ "./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_96f36902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Taxonomies.vue?vue&type=template&id=96f36902& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902&");


/***/ }),

/***/ "./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Time_vue_vue_type_template_id_c3c554c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Time.vue?vue&type=template&id=c3c554c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6&");


/***/ }),

/***/ "./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Venues_vue_vue_type_template_id_3774b534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Venues.vue?vue&type=template&id=3774b534& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2& ***!
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
      _c(
        "div",
        [
          _c(
            "v-tabs",
            {
              attrs: {
                "show-arrows": "",
                "background-color": "appBackground",
                color: _vm.$vuetify.theme.dark ? "primary" : "secondary",
                grow: ""
              },
              model: {
                value: _vm.activeTab,
                callback: function($$v) {
                  _vm.activeTab = $$v
                },
                expression: "activeTab"
              }
            },
            _vm._l(_vm.eventTabs, function(tab, index) {
              return _c(
                "v-tab",
                {
                  key: index,
                  on: {
                    click: function($event) {
                      return _vm.showTab(tab.name)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("page.events.tabs." + tab.name)))]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-tabs-items",
            {
              model: {
                value: _vm.activeTab,
                callback: function($$v) {
                  _vm.activeTab = $$v
                },
                expression: "activeTab"
              }
            },
            _vm._l(_vm.eventTabs, function(tab, index) {
              return _c(
                "v-tab-item",
                { key: index },
                [
                  _c("v-container", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-row",
                          { attrs: { dense: "" } },
                          _vm._l(_vm.events, function(event, index) {
                            return _c(
                              "v-col",
                              {
                                key: index,
                                attrs: {
                                  cols: "12",
                                  sm: "12",
                                  md: "6",
                                  lg: "4",
                                  xl: "3"
                                }
                              },
                              [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto pb-4",
                                    attrs: { "max-width": "500px" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      [
                                        _c("CardTitle", {
                                          attrs: {
                                            Name: event.name,
                                            Avatar: event.avatar,
                                            Taxonomies: event.taxonomies
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          { staticClass: "pb-3" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "mx-4 pt-5 col-auto mr-auto"
                                              },
                                              [
                                                _c("People", {
                                                  attrs: {
                                                    People: event.people
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("Venues", {
                                                  attrs: {
                                                    Venues: event.venues
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("Dates", {
                                                  attrs: {
                                                    StartDate: event.start_date,
                                                    EndDate: event.end_date
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("Time", {
                                                  attrs: {
                                                    StartTime: event.start_time,
                                                    EndTime: event.end_time
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("Prices", {
                                                  attrs: {
                                                    Prices: event.prices
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("Taxonomies", {
                                          attrs: {
                                            Taxonomies: event.taxonomies
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("CardFooter", {
                                          attrs: {
                                            Id: event.id,
                                            Comments: event.comments_count,
                                            Likes: event.likes_count
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _vm.meta.last_page != 1 && _vm.overlay == false
                          ? _c("v-col", { staticClass: "my-0 py-o" }, [
                              _c(
                                "div",
                                { staticClass: "text-center mt-4 mb-0 py-0" },
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { justify: "center" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "v-container",
                                                { staticClass: "max-width" },
                                                [
                                                  _c("v-pagination", {
                                                    attrs: {
                                                      color: _vm.$vuetify.theme
                                                        .dark
                                                        ? "primary"
                                                        : "secondary",
                                                      length:
                                                        _vm.meta.last_page,
                                                      circle: ""
                                                    },
                                                    on: {
                                                      input: _vm.onPageChange
                                                    },
                                                    model: {
                                                      value: _vm.page,
                                                      callback: function($$v) {
                                                        _vm.page = $$v
                                                      },
                                                      expression: "page"
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
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-overlay",
        {
          class: _vm.$vuetify.theme.dark ? "primary--text" : "secondary--text",
          attrs: { opacity: 0.1, value: _vm.overlay }
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardFooter.vue?vue&type=template&id=0aed7a9b& ***!
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
    "v-row",
    { staticClass: "pt-3" },
    [
      _c(
        "v-col",
        { staticClass: "ml-4 my-auto col-auto" },
        [
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "info" },
              on: {
                click: function($event) {
                  return _vm.showEvent(_vm.Id)
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("page.events.more_info")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-col", { staticClass: "mx-4 my-auto col-auto ml-auto" }, [
        _c(
          "span",
          {
            staticClass: "mr-3",
            class: _vm.$vuetify.theme.dark ? "primary--text" : "secondary--text"
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
              [_vm._v("\n                mdi-comment-outline ")]
            ),
            _c("span", { staticClass: "subtitle-2" }, [
              _vm._v(_vm._s(_vm.Comments) + " ")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            class: _vm.$vuetify.theme.dark ? "primary--text" : "secondary--text"
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
              _vm._v(_vm._s(_vm.Likes))
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/CardTitle.vue?vue&type=template&id=3c30f408& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-list-item",
    { staticClass: "greybg rounded-t", attrs: { "three-line": "" } },
    [
      _c(
        "v-list-item-avatar",
        {
          staticClass: "rounded",
          attrs: {
            tile: "",
            size: "80",
            color: _vm.$vuetify.theme.dark
              ? "primary darken-1"
              : "greybg darken-1"
          }
        },
        [
          _vm.Avatar != null
            ? _c("v-img", {
                attrs: {
                  src: _vm.baseURL + "storage/avatar/event/" + _vm.Avatar,
                  title: _vm.Name
                }
              })
            : _c(
                "v-icon",
                {
                  attrs: {
                    title: _vm.$t("avatar.no_avatar"),
                    color: _vm.$vuetify.theme.dark
                      ? "greybg"
                      : "primary lighten-1"
                  }
                },
                [_vm._v("mdi-camera-off")]
              )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-content",
        [
          _c(
            "div",
            { staticClass: "overline primary--text" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "col-auto" },
                    _vm._l(_vm.Taxonomies, function(taxonomy, index) {
                      return _c("span", { key: index }, [
                        taxonomy.type
                          ? _c("span", [
                              index === 0
                                ? _c("span", [
                                    taxonomy.type === "music"
                                      ? _c(
                                          "span",
                                          { staticClass: "primary--text" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("taxonomy.type.music")
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    taxonomy.type === "conference"
                                      ? _c(
                                          "span",
                                          { staticClass: "primary--text" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "taxonomy.type.conference"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    taxonomy.type === "exhibition"
                                      ? _c(
                                          "span",
                                          { staticClass: "primary--text" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "taxonomy.type.exhibition"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    taxonomy.type === "theater"
                                      ? _c(
                                          "span",
                                          { staticClass: "primary--text" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("taxonomy.type.theater")
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                : _vm._e()
                            ])
                          : _vm._e()
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "col-auto ml-auto",
                      staticStyle: { "margin-bottom": "1rem" }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "primary--text px-0" },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "primary--text",
                              attrs: { dark: "", small: "" }
                            },
                            [
                              _vm._v(
                                "\n                            mdi-star-outline\n                        "
                              )
                            ]
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
          ),
          _vm._v(" "),
          _c("v-list-item-title", { staticClass: "title primary--text mb-1" }, [
            _vm._v(_vm._s(_vm.Name) + "\n        ")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Dates.vue?vue&type=template&id=183446e5& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _vm.StartDate === _vm.EndDate
        ? _c(
            "span",
            { staticClass: "caption primary--text" },
            [
              _c(
                "v-icon",
                {
                  staticClass: "mr-1 primary--text",
                  staticStyle: { "margin-bottom": "0.08rem" },
                  attrs: { small: "" }
                },
                [_vm._v("mdi-calendar-blank")]
              ),
              _vm._v(
                "\n        " +
                  _vm._s(_vm._f("formatDate")(_vm.StartDate)) +
                  "\n    "
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.StartDate !== _vm.EndDate
        ? _c(
            "span",
            { staticClass: "caption primary--text" },
            [
              _c(
                "v-icon",
                {
                  staticClass: "mr-1 primary--text",
                  staticStyle: { "margin-bottom": "0.08rem" },
                  attrs: { small: "" }
                },
                [_vm._v("mdi-calendar-blank-multiple")]
              ),
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("page.events.From")) +
                  "\n        " +
                  _vm._s(_vm._f("formatMultipleDates")(_vm.StartDate)) +
                  "\n        " +
                  _vm._s(_vm.$t("page.events.to")) +
                  "\n        " +
                  _vm._s(_vm._f("formatMultipleDates")(_vm.EndDate))
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-spacer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/People.vue?vue&type=template&id=2f6a9342& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.People.length > 0
      ? _c("span", { staticClass: "caption primary--text" }, [
          _c(
            "span",
            [
              _c(
                "v-icon",
                {
                  staticClass: "mr-1 primary--text",
                  staticStyle: { "margin-bottom": "0.08rem" },
                  attrs: { small: "" }
                },
                [_vm._v("mdi-account-group")]
              ),
              _vm._l(_vm.People, function(person, index) {
                return _c("span", { key: index }, [
                  _vm.People.length < 4
                    ? _c("span", [
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "events_links",
                            attrs: { title: person.nickname },
                            on: {
                              click: function($event) {
                                return _vm.showPerson(person.id)
                              }
                            }
                          },
                          [_vm._v(_vm._s(person.nickname))]
                        ),
                        _vm._v(" "),
                        index < _vm.People.length - 1
                          ? _c("span", [_vm._v(", ")])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.People.length >= 4
                    ? _c("span", [
                        index < 2
                          ? _c("span", [
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "events_links",
                                  attrs: { title: person.nickname },
                                  on: {
                                    click: function($event) {
                                      return _vm.showPerson(person.id)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(person.nickname))]
                              ),
                              _vm._v(",\n                    ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        index === 2
                          ? _c("span", [
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "events_links",
                                  attrs: { title: person.nickname },
                                  on: {
                                    click: function($event) {
                                      return _vm.showPerson(person.id)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(person.nickname))]
                              ),
                              _vm._v(", ...")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ])
              }),
              _c("v-spacer")
            ],
            2
          )
        ])
      : _vm._e(),
    _vm.People.length <= 0
      ? _c(
          "span",
          { staticClass: "caption primary--text" },
          [
            _c(
              "span",
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-1 ",
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    staticStyle: { "margin-bottom": "0.08rem" },
                    attrs: { small: "" }
                  },
                  [_vm._v("mdi-account-group")]
                ),
                _c(
                  "span",
                  {
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    attrs: { title: _vm.$t("page.events.no_people_title") }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("page.events.no_people"))
                    )
                  ]
                )
              ],
              1
            ),
            _c("v-spacer")
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Prices.vue?vue&type=template&id=459fa69a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.Prices.length > 0
      ? _c(
          "span",
          { staticClass: "caption primary--text" },
          [
            _c(
              "v-icon",
              {
                staticClass: "mr-1 primary--text",
                staticStyle: { "margin-bottom": "0.08rem" },
                attrs: { small: "" }
              },
              [_vm._v("mdi-cash-usd-outline")]
            ),
            _vm._v(" "),
            _vm._l(_vm.Prices, function(price, index) {
              return _c("span", { key: index }, [
                index < _vm.Prices.length - 1
                  ? _c("span", [
                      price.cost > 0
                        ? _c("span", [
                            _vm._v(" " + _vm._s(price.cost) + " chf |")
                          ])
                        : _c("span", [
                            _vm._v(" " + _vm._s(_vm.$t("price.free")) + " |")
                          ])
                    ])
                  : _vm._e(),
                index >= _vm.Prices.length - 1
                  ? _c("span", [
                      price.cost > 0
                        ? _c("span", [
                            _vm._v(" " + _vm._s(price.cost) + " chf")
                          ])
                        : _c("span", [
                            _vm._v(" " + _vm._s(_vm.$t("price.free")))
                          ])
                    ])
                  : _vm._e()
              ])
            }),
            _c("v-spacer")
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.Prices.length <= 0
      ? _c(
          "span",
          { staticClass: "caption primary--text" },
          [
            _c(
              "span",
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-1 primary--text",
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    staticStyle: { "margin-bottom": "0.08rem" },
                    attrs: { small: "" }
                  },
                  [_vm._v("mdi-cash-usd-outline")]
                ),
                _c(
                  "span",
                  {
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    attrs: { title: _vm.$t("page.events.no_prices_title") }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("page.events.no_prices"))
                    )
                  ]
                )
              ],
              1
            ),
            _c("v-spacer")
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Taxonomies.vue?vue&type=template&id=96f36902& ***!
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
      _c("v-divider", { staticClass: "mx-2" }),
      _vm._v(" "),
      _vm.Taxonomies.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-row",
                { staticClass: "py-0" },
                [
                  _c("v-col", { staticClass: "my-auto mx-auto col-auto" }, [
                    _c(
                      "span",
                      {
                        staticClass: "primary--text",
                        attrs: { justify: "center" }
                      },
                      [
                        _c(
                          "v-chip-group",
                          {
                            staticClass: "col-auto my-2 py-0",
                            attrs: { "show-arrows": "" }
                          },
                          _vm._l(_vm.Taxonomies, function(taxonomy, index) {
                            return _c(
                              "span",
                              { key: index },
                              [
                                _c(
                                  "v-chip",
                                  {
                                    staticClass: "greybg primary--text",
                                    attrs: { "x-small": "" }
                                  },
                                  [_vm._v(_vm._s(taxonomy.category))]
                                ),
                                _c(
                                  "v-chip",
                                  {
                                    staticClass: "greybg primary--text",
                                    attrs: { "x-small": "" }
                                  },
                                  [_vm._v(_vm._s(taxonomy.sub_category))]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mx-2" })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.Taxonomies.length <= 0
        ? _c(
            "div",
            [
              _c(
                "v-row",
                { staticClass: "py-0" },
                [
                  _c("v-col", { staticClass: "my-auto mx-auto col-auto" }, [
                    _c(
                      "span",
                      {
                        staticClass: "mx-auto col-auto  caption",
                        class: _vm.$vuetify.theme.dark
                          ? "grey--text"
                          : "grey--text",
                        staticStyle: { "line-height": "3rem" },
                        attrs: { justify: "center" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("page.events.no_taxonomies_title")) +
                            "\n                "
                        )
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mx-2" })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Time.vue?vue&type=template&id=c3c554c6& ***!
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
        "span",
        { staticClass: "caption primary--text" },
        [
          _c(
            "v-icon",
            {
              staticClass: "mr-1 primary--text",
              staticStyle: { "margin-bottom": "0.08rem" },
              attrs: { small: "" }
            },
            [_vm._v("mdi-clock-time-four-outline")]
          ),
          _vm._v(
            "\n        " +
              _vm._s(_vm._f("formatTime")(_vm.StartTime)) +
              " - " +
              _vm._s(_vm._f("formatTime")(_vm.EndTime))
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-spacer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/events/Venues.vue?vue&type=template&id=3774b534& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.Venues.length > 0
      ? _c("span", { staticClass: "caption primary--text" }, [
          _c(
            "span",
            [
              _c(
                "v-icon",
                {
                  staticClass: "mr-1 primary--text",
                  staticStyle: { "margin-bottom": "0.08rem" },
                  attrs: { small: "" }
                },
                [_vm._v("mdi-office-building-marker")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "events_links",
                  attrs: { title: _vm.Venues[0].name },
                  on: {
                    click: function($event) {
                      return _vm.showVenue(_vm.Venues[0].id)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.Venues[0].name))]
              ),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.Venues.length <= 0
      ? _c(
          "span",
          { staticClass: "caption primary--text" },
          [
            _c(
              "span",
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-1 ",
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    staticStyle: { "margin-bottom": "0.08rem" },
                    attrs: { small: "" }
                  },
                  [_vm._v("mdi-office-building-marker")]
                ),
                _c(
                  "span",
                  {
                    class: _vm.$vuetify.theme.dark
                      ? "grey--text"
                      : "grey--text",
                    attrs: { title: _vm.$t("page.events.no_venues_title") }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("page.events.no_venues"))
                    )
                  ]
                )
              ],
              1
            ),
            _c("v-spacer")
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);