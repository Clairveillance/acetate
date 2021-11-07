(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Event_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_CardTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/CardTitle */ "./resources/js/components/pages/event/CardTitle.vue");
/* harmony import */ var _event_EventDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/EventDetails */ "./resources/js/components/pages/event/EventDetails.vue");
/* harmony import */ var _event_Likes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/Likes */ "./resources/js/components/pages/event/Likes.vue");
/* harmony import */ var _event_Taxonomies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/Taxonomies */ "./resources/js/components/pages/event/Taxonomies.vue");
/* harmony import */ var _event_Comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/Comments */ "./resources/js/components/pages/event/Comments.vue");
/* harmony import */ var _event_CommentDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/CommentDialog */ "./resources/js/components/pages/event/CommentDialog.vue");
/* harmony import */ var _admin_events_EditAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/events/EditAvatar */ "./resources/js/components/admin/events/EditAvatar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    CardTitle: _event_CardTitle__WEBPACK_IMPORTED_MODULE_0__.default,
    EventDetails: _event_EventDetails__WEBPACK_IMPORTED_MODULE_1__.default,
    Likes: _event_Likes__WEBPACK_IMPORTED_MODULE_2__.default,
    Taxonomies: _event_Taxonomies__WEBPACK_IMPORTED_MODULE_3__.default,
    Comments: _event_Comments__WEBPACK_IMPORTED_MODULE_4__.default,
    CommentDialog: _event_CommentDialog__WEBPACK_IMPORTED_MODULE_5__.default,
    EditAvatar: _admin_events_EditAvatar__WEBPACK_IMPORTED_MODULE_6__.default
  },
  data: function data() {
    return {
      overlay: true,
      avatarDialog: false,
      event: null,
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
        title: "menu.edit_events.title",
        path: "admin/events/edit",
        icon: "mdi-calendar-range"
      }, {
        name: "delete",
        title: "menu.delete_events.title",
        path: "admin/events/delete",
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
      if (this.event.user_id == localStorage.getItem("user_id")) {
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
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/admin/events/edit/").concat(id));
    },
    deleteThis: function deleteThis(id) {
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/admin/events/delete/").concat(id));
    },
    logThis: function logThis(file) {
      console.log(this.appURL + this.baseURL + file.path);
    },
    gotoEvents: function gotoEvents() {
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/events"));
    },
    fetchAPI: function fetchAPI() {
      var _this = this;

      axios.request({
        url: this.id,
        method: "get",
        baseURL: this.baseURL + "api/events/",
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        _this.event = response.data.data.event;
      })["catch"](function (error) {
        var path = "error/404";

        _this.$router.push("".concat(_this.baseURL).concat(_this.$i18n.locale, "/").concat(path));
      })["finally"](function () {
        _this.overlay = false;
        _this.renderToolbox = true;
        _this.renderCardTitle = true;
        _this.renderComponent = true;
        return _this.event;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Avatar: String,
    Taxonomies: Array,
    Name: String
  },
  data: function data() {
    return {
      appURL: "http://127.0.0.1:8001",
      baseURL: "/"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Id: String
  },
  data: function data() {
    return {
      dialog: false,
      formData: {
        text: "",
        user_id: localStorage.getItem("user_id")
      },
      appURL: "http://127.0.0.1:8001",
      baseURL: "/",
      apiToken: localStorage.getItem("user_api_token"),
      errors: false
    };
  },
  methods: {
    postComment: function postComment() {
      var _this = this;

      axios.post(this.baseURL + "api/events/" + this.Id + "/comments", this.formData, {
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        this.$emit("refreshComments");
        this.formData.text = "";
        this.errors = false;
        this.dialog = false;
      }.bind(this))["catch"](function (errors) {
        // Returns errors.
        _this.errors = true; // errors.response.data
      });
    },
    closeDialog: function closeDialog() {
      this.formData.text = "";
      this.errors = false;
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Comments: Array
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
    showUser: function showUser(id) {
      var path = "users/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    },
    showUserToken: function showUserToken() {
      return localStorage.getItem("user_api_token");
    }
  },
  mounted: function mounted() {}
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    Taxonomies: Array
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

/***/ "./resources/js/components/pages/Event.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Event.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.vue?vue&type=template&id=4067c7f4& */ "./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4&");
/* harmony import */ var _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Event.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Event.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/event/CardTitle.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/event/CardTitle.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTitle.vue?vue&type=template&id=4a257e4d& */ "./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d&");
/* harmony import */ var _CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/CardTitle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/event/CommentDialog.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/event/CommentDialog.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentDialog.vue?vue&type=template&id=3af048a8& */ "./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8&");
/* harmony import */ var _CommentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CommentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/CommentDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/event/Comments.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/event/Comments.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.vue?vue&type=template&id=1c111b42& */ "./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42&");
/* harmony import */ var _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__.render,
  _Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/Comments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/pages/event/Taxonomies.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/event/Taxonomies.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Taxonomies.vue?vue&type=template&id=652309da& */ "./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da&");
/* harmony import */ var _Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Taxonomies.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__.render,
  _Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/event/Taxonomies.vue"
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

/***/ "./resources/js/components/pages/Event.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Event.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Taxonomies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_4067c7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=template&id=4067c7f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4&");


/***/ }),

/***/ "./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_template_id_4a257e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardTitle.vue?vue&type=template&id=4a257e4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d&");


/***/ }),

/***/ "./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentDialog_vue_vue_type_template_id_3af048a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentDialog.vue?vue&type=template&id=3af048a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8&");


/***/ }),

/***/ "./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_1c111b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=template&id=1c111b42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42&");


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

/***/ "./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxonomies_vue_vue_type_template_id_652309da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Taxonomies.vue?vue&type=template&id=652309da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da&");


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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Event.vue?vue&type=template&id=4067c7f4& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _vm.event !== null
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
                                return _vm.gotoEvents()
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("button.back.events")))]
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
                                    return _vm.editThis(_vm.event.id)
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
                                    return _vm.deleteThis(_vm.event.id)
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
                  _vm.renderCardTitle
                    ? _c("CardTitle", {
                        attrs: {
                          Avatar: _vm.event.avatar ? _vm.event.avatar : null,
                          Taxonomies: _vm.event.taxonomies
                            ? _vm.event.taxonomies
                            : null,
                          Name: _vm.event.name ? _vm.event.name : null
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.event.files
                    ? _c("div", [
                        _vm.event.files !== null && _vm.event.files.length > 0
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
                                  _vm._l(_vm.event.files, function(
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
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.event.likes
                    ? _c("Likes", {
                        attrs: {
                          LikesCount: _vm.event.likes_count,
                          Likes: _vm.event.likes,
                          Id: _vm.event.id
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.event.dates
                    ? _c("EventDetails", {
                        attrs: {
                          Description: _vm.event.description
                            ? _vm.event.description
                            : null,
                          CurrentDates: _vm.event.current_dates
                            ? _vm.event.current_dates
                            : null,
                          OldDates: _vm.event.old_dates
                            ? _vm.event.old_dates
                            : null,
                          People: _vm.event.people ? _vm.event.people : null,
                          Venues: _vm.event.venues ? _vm.event.venues : null,
                          Addresses: _vm.event.addresses
                            ? _vm.event.addresses
                            : null,
                          Prices: _vm.event.prices ? _vm.event.prices : null,
                          Emails: _vm.event.emails ? _vm.event.emails : null,
                          Phones: _vm.event.phones ? _vm.event.phones : null,
                          Websites: _vm.event.websites
                            ? _vm.event.websites
                            : null
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.event.taxonomies
                    ? _c("Taxonomies", {
                        attrs: {
                          Taxonomies: _vm.event.taxonomies
                            ? _vm.event.taxonomies
                            : null
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.renderComponent
                    ? _c("Comments", {
                        ref: "CommentsContent",
                        attrs: {
                          Comments: _vm.event.comments
                            ? _vm.event.comments
                            : null
                        },
                        on: {
                          "comment-dialog": function($event) {
                            _vm.$refs.CommentDialog.dialog = true
                          }
                        }
                      })
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
                      ),
                  _vm._v(" "),
                  _c("CommentDialog", {
                    ref: "CommentDialog",
                    attrs: { Id: _vm.event.id },
                    on: { refreshComments: _vm.forceRerender }
                  }),
                  _vm._v(" "),
                  _c("EditAvatar", {
                    ref: "AvatarDialog",
                    attrs: {
                      Id: _vm.event.id,
                      Avatar: _vm.event.avatar ? _vm.event.avatar : null
                    },
                    on: {
                      refreshAvatar: _vm.rerenderCardTitle,
                      refreshToolbox: _vm.rerenderToolbox
                    }
                  })
                ],
                1
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CardTitle.vue?vue&type=template&id=4a257e4d& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-list",
    { staticClass: "greybg rounded-t" },
    [
      _c(
        "v-list-item",
        { attrs: { "three-line": "" } },
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
                                                    _vm.$t(
                                                      "taxonomy.type.music"
                                                    )
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
                                                    _vm.$t(
                                                      "taxonomy.type.theater"
                                                    )
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
                          staticClass: "col-auto ml-auto mr-4",
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
                                    "\n                                mdi-star-outline\n                            "
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
              _c(
                "v-list-item-title",
                { staticClass: "title primary--text mb-1" },
                [_vm._v(_vm._s(_vm.Name) + "\n            ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/CommentDialog.vue?vue&type=template&id=3af048a8& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
          attrs: { width: "500" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "title greybg primary--text" },
                [_vm._v("\n                New Comment ")]
              ),
              _c(
                "v-card-text",
                [
                  _vm.errors
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "error mx-4 mt-4 px-4 white--text py-2 rounded"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("errors.comment.message")) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-textarea", {
                    staticClass: "mx-4 mt-4 primary--text",
                    attrs: {
                      outlined: "",
                      "no-resize": "",
                      rows: "1",
                      "row-height": "15",
                      height: "200"
                    },
                    model: {
                      value: _vm.formData.text,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.formData,
                          "text",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "formData.text"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
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
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "info", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.postComment()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.submit")))]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Comments.vue?vue&type=template&id=1c111b42& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _vm.Comments !== null && _vm.Comments.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-row",
                {
                  staticClass: "pt-3 my-2 mx-4 overflow-y-auto",
                  staticStyle: { "max-height": "300px" }
                },
                _vm._l(_vm.Comments, function(comment, index) {
                  return _c(
                    "v-col",
                    {
                      key: index,
                      staticClass: "subtitle-2",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-col",
                        { staticClass: "my-0 py-0" },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-avatar",
                                {
                                  staticClass:
                                    "d-none align-self-start mt-4 d-sm-flex",
                                  staticStyle: { cursor: "pointer" },
                                  attrs: { size: "30" }
                                },
                                [
                                  comment.user_avatar !== null &&
                                  comment.user_avatar.length > 0
                                    ? _c("v-img", {
                                        attrs: {
                                          src:
                                            _vm.baseURL +
                                            "storage/avatar/user/" +
                                            comment.user_avatar,
                                          alt: "Avatar",
                                          title: comment.user_name
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.showUser(comment.user_id)
                                          }
                                        }
                                      })
                                    : _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            large: "",
                                            title: comment.user_name
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.showUser(
                                                comment.user_id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("mdi-account-circle")]
                                      )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-content", [
                                _c(
                                  "span",
                                  { staticClass: "my-0 grey--text" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "comments_links",
                                        attrs: { title: comment.user_name },
                                        on: {
                                          click: function($event) {
                                            return _vm.showUser(comment.user_id)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(comment.user_name))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "caption grey--text" },
                                      [
                                        _vm._v(
                                          "(" +
                                            _vm._s(
                                              _vm._f("formatDate")(
                                                comment.created_at
                                              )
                                            ) +
                                            "\n                                    |\n                                    " +
                                            _vm._s(
                                              _vm._f("formatStringToTime")(
                                                comment.created_at
                                              )
                                            ) +
                                            ") :"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer", { staticClass: "mb-2" }),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(comment.text)
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex justify-end mt-4" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "grey--text mr-4" },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass: "grey--text mr-1",
                                            staticStyle: {
                                              "margin-bottom": "0.05rem"
                                            },
                                            attrs: { dark: "", small: "" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        mdi-thumb-up"
                                            )
                                          ]
                                        ),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "grey--text subtitle-2"
                                          },
                                          [_vm._v(_vm._s(comment.likes_count))]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "grey--text mr-4" },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass: "grey--text mr-1",
                                            staticStyle: {
                                              "margin-bottom": "0.05rem"
                                            },
                                            attrs: { dark: "", small: "" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        mdi-thumb-down "
                                            )
                                          ]
                                        ),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "grey--text subtitle-2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(comment.dislikes_count)
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-col",
                        [
                          index < _vm.Comments.length - 1
                            ? _c("v-divider", { staticClass: "pb-1" })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mx-2" })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.showUserToken()
        ? _c(
            "v-row",
            { staticClass: "pt-3" },
            [
              _c(
                "v-col",
                { staticClass: "my-auto mx-auto col-auto" },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "div",
                                  _vm._g({}, on),
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          text: "",
                                          disabled: "",
                                          outlined: "",
                                          color: "info accent-4"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("page.event.comment.post")
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        255620205
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.$t("not_logged_in")))])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _c(
            "v-row",
            { staticClass: "pt-3" },
            [
              _c(
                "v-col",
                { staticClass: "my-auto mx-auto col-auto" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "info" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.$emit("comment-dialog")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("page.event.comment.post")))]
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
}
var staticRenderFns = []
render._withStripped = true



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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/event/Taxonomies.vue?vue&type=template&id=652309da& ***!
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
  return _c("div", [
    _vm.Taxonomies !== null && _vm.Taxonomies.length > 0
      ? _c(
          "div",
          [
            _c(
              "v-row",
              { staticClass: "py-0" },
              [
                _c("v-col", { staticClass: "my-auto col-auto mx-2" }, [
                  _c(
                    "span",
                    { staticClass: "primary--text" },
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
            )
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