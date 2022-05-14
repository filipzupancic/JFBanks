"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_loans_Signature_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CheckIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ChevronRightIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/HomeIcon.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var pages = [{
  name: 'kredit',
  href: '/kredit',
  current: false
}, {
  name: 'prvi korak',
  href: '/kredit/prvi-korak',
  current: true
}];
var steps = [{
  name: "Step 1",
  href: "/kredit/prvi-korak",
  status: "current"
}, {
  name: "Step 2",
  href: "/kredit/drugi-korak",
  status: "upcoming"
}, {
  name: "Step 3",
  href: "/kredit/tretji-korak",
  status: "upcoming"
}, {
  name: "Step 4",
  href: "/kredit/cetrti-korak",
  status: "upcoming"
}, {
  name: "Step 5",
  href: "/kredit/peti-korak",
  status: "upcoming"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  data: function data() {
    return {
      participants: [{
        id: "user1",
        name: "AI JFBanks",
        imageUrl: "https://www.dropbox.com/s/6ggs6yqmcwcx4i6/JFBanks-logo.jpeg?raw=1"
      }],
      // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [{
        type: "text",
        author: "user1",
        data: {
          text: "Hej Mojca, kako ti lahko pomagam?"
        }
      }, {
        type: "text",
        author: "me",
        data: {
          text: "\u017Divjo, potrebujem pomo\u010D pri pridobivanju ponudb za stanovanjska posojila."
        }
      }, {
        type: "text",
        author: "user1",
        data: {
          text: "Ni problema, tvoje zanimanje bomo posredovali izbranim bankam in v kratkem bo\u0161 dobila odgovor."
        }
      }],
      // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false,
      // to determine whether the chat window should be open or closed
      showTypingIndicator: "",
      // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        launcher: {
          bg: "#4e8cff"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      },
      // specifies the color scheme for the component
      alwaysScrollToBottom: false,
      // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true,
      // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
      percentage: 50
    };
  },
  methods: {
    sendMessage: function sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "kipo",
          type: "text",
          data: {
            text: text
          }
        });
      }
    },
    onMessageWasSent: function onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [].concat(_toConsumableArray(this.messageList), [message]);
    },
    openChat: function openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat: function closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop: function handleScrollToTop() {// called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType: function handleOnType() {
      console.log("Emit typing event");
    },
    editMessage: function editMessage(message) {
      var m = this.messageList.find(function (m) {
        return m.id === message.id;
      });
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  },
  components: {
    CheckIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChevronRightIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__["default"],
    HomeIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var completedSteps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var totalSteps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10);
    return {
      completedSteps: completedSteps,
      totalSteps: totalSteps,
      steps: steps,
      pages: pages
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-478f6d91"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "items-center text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, " BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB ");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.radial-progress[data-v-478f6d91] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\n}\n.draw_circle[data-v-478f6d91] {\r\n    width: 140px;\r\n    height: 140px;\r\n    border-radius: 25px;\r\n    background: red;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_style_index_0_id_478f6d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_style_index_0_id_478f6d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_style_index_0_id_478f6d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/loans/Signature.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/loans/Signature.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signature_vue_vue_type_template_id_478f6d91_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signature.vue?vue&type=template&id=478f6d91&scoped=true */ "./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true");
/* harmony import */ var _Signature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signature.vue?vue&type=script&lang=js */ "./resources/js/components/loans/Signature.vue?vue&type=script&lang=js");
/* harmony import */ var _Signature_vue_vue_type_style_index_0_id_478f6d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css */ "./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Signature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Signature_vue_vue_type_template_id_478f6d91_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-478f6d91"],['__file',"resources/js/components/loans/Signature.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/loans/Signature.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/loans/Signature.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signature.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_template_id_478f6d91_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_template_id_478f6d91_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signature.vue?vue&type=template&id=478f6d91&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=template&id=478f6d91&scoped=true");


/***/ }),

/***/ "./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signature_vue_vue_type_style_index_0_id_478f6d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/loans/Signature.vue?vue&type=style&index=0&id=478f6d91&scoped=true&lang=css");


/***/ })

}]);