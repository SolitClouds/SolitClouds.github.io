(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkricky_martin_app"] = self["webpackChunkricky_martin_app"] || []).push([["default-src_app_components_pages_characters_character-list_character-list_component_ts"], {
    /***/
    9210:
    /*!**************************************************************************************!*\
      !*** ./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfiniteScrollDirective": function InfiniteScrollDirective() {
          return (
            /* binding */
            _InfiniteScrollDirective
          );
        },

        /* harmony export */
        "InfiniteScrollModule": function InfiniteScrollModule() {
          return (
            /* binding */
            _InfiniteScrollModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      2759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      9773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      5435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      4549);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} selector
       * @param {?} scrollWindow
       * @param {?} defaultElement
       * @param {?} fromRoot
       * @return {?}
       */


      function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
        /** @type {?} */
        var hasWindow = window && !!window.document && window.document.documentElement;
        /** @type {?} */

        var container = hasWindow && scrollWindow ? window : defaultElement;

        if (selector) {
          /** @type {?} */
          var containerIsString = selector && hasWindow && typeof selector === 'string';
          container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;

          if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
          }
        }

        return container;
      }
      /**
       * @param {?} selector
       * @param {?} customRoot
       * @param {?} fromRoot
       * @return {?}
       */


      function findElement(selector, customRoot, fromRoot) {
        /** @type {?} */
        var rootEl = fromRoot ? window.document : customRoot;
        return rootEl.querySelector(selector);
      }
      /**
       * @param {?} prop
       * @return {?}
       */


      function inputPropChanged(prop) {
        return prop && !prop.firstChange;
      }
      /**
       * @return {?}
       */


      function hasWindowDefined() {
        return typeof window !== 'undefined';
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var VerticalProps = {
        clientHeight: "clientHeight",
        offsetHeight: "offsetHeight",
        scrollHeight: "scrollHeight",
        pageYOffset: "pageYOffset",
        offsetTop: "offsetTop",
        scrollTop: "scrollTop",
        top: "top"
      };
      /** @type {?} */

      var HorizontalProps = {
        clientHeight: "clientWidth",
        offsetHeight: "offsetWidth",
        scrollHeight: "scrollWidth",
        pageYOffset: "pageXOffset",
        offsetTop: "offsetLeft",
        scrollTop: "scrollLeft",
        top: "left"
      };

      var AxisResolver = /*#__PURE__*/function () {
        /**
         * @param {?=} vertical
         */
        function AxisResolver() {
          var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          _classCallCheck(this, AxisResolver);

          this.vertical = vertical;
          this.propsMap = vertical ? VerticalProps : HorizontalProps;
        }
        /**
         * @return {?}
         */


        _createClass(AxisResolver, [{
          key: "clientHeightKey",
          value: function clientHeightKey() {
            return this.propsMap.clientHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "offsetHeightKey",
          value: function offsetHeightKey() {
            return this.propsMap.offsetHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollHeightKey",
          value: function scrollHeightKey() {
            return this.propsMap.scrollHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "pageYOffsetKey",
          value: function pageYOffsetKey() {
            return this.propsMap.pageYOffset;
          }
          /**
           * @return {?}
           */

        }, {
          key: "offsetTopKey",
          value: function offsetTopKey() {
            return this.propsMap.offsetTop;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollTopKey",
          value: function scrollTopKey() {
            return this.propsMap.scrollTop;
          }
          /**
           * @return {?}
           */

        }, {
          key: "topKey",
          value: function topKey() {
            return this.propsMap.top;
          }
        }]);

        return AxisResolver;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @param {?} alwaysCallback
       * @param {?} shouldFireScrollEvent
       * @param {?} isTriggeredCurrentTotal
       * @return {?}
       */


      function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
        if (alwaysCallback && shouldFireScrollEvent) {
          return true;
        }

        if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
          return true;
        }

        return false;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} __0
       * @return {?}
       */


      function createResolver(_ref) {
        var windowElement = _ref.windowElement,
            axis = _ref.axis;
        return createResolverWithContainer({
          axis: axis,
          isWindow: isElementWindow(windowElement)
        }, windowElement);
      }
      /**
       * @param {?} resolver
       * @param {?} windowElement
       * @return {?}
       */


      function createResolverWithContainer(resolver, windowElement) {
        /** @type {?} */
        var container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
        return Object.assign(Object.assign({}, resolver), {
          container: container
        });
      }
      /**
       * @param {?} windowElement
       * @return {?}
       */


      function isElementWindow(windowElement) {
        /** @type {?} */
        var isWindow = ['Window', 'global'].some(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          return Object.prototype.toString.call(windowElement).includes(obj);
        });
        return isWindow;
      }
      /**
       * @param {?} isContainerWindow
       * @param {?} windowElement
       * @return {?}
       */


      function getDocumentElement(isContainerWindow, windowElement) {
        return isContainerWindow ? windowElement.document.documentElement : null;
      }
      /**
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePoints(element, resolver) {
        /** @type {?} */
        var height = extractHeightForElement(resolver);
        return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
      }
      /**
       * @param {?} height
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePointsForWindow(height, element, resolver) {
        var axis = resolver.axis,
            container = resolver.container,
            isWindow = resolver.isWindow;

        var _extractHeightPropKey = extractHeightPropKeys(axis),
            offsetHeightKey = _extractHeightPropKey.offsetHeightKey,
            clientHeightKey = _extractHeightPropKey.clientHeightKey; // scrolled until now / current y point

        /** @type {?} */


        var scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow); // total height / most bottom y point

        /** @type {?} */

        var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
        /** @type {?} */

        var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
        return {
          height: height,
          scrolled: scrolled,
          totalToScroll: totalToScroll,
          isWindow: isWindow
        };
      }
      /**
       * @param {?} height
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePointsForElement(height, element, resolver) {
        var axis = resolver.axis,
            container = resolver.container; // perhaps use container.offsetTop instead of 'scrollTop'

        /** @type {?} */

        var scrolled = container[axis.scrollTopKey()];
        /** @type {?} */

        var totalToScroll = container[axis.scrollHeightKey()];
        return {
          height: height,
          scrolled: scrolled,
          totalToScroll: totalToScroll,
          isWindow: false
        };
      }
      /**
       * @param {?} axis
       * @return {?}
       */


      function extractHeightPropKeys(axis) {
        return {
          offsetHeightKey: axis.offsetHeightKey(),
          clientHeightKey: axis.clientHeightKey()
        };
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function extractHeightForElement(_ref2) {
        var container = _ref2.container,
            isWindow = _ref2.isWindow,
            axis = _ref2.axis;

        var _extractHeightPropKey2 = extractHeightPropKeys(axis),
            offsetHeightKey = _extractHeightPropKey2.offsetHeightKey,
            clientHeightKey = _extractHeightPropKey2.clientHeightKey;

        return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
      }
      /**
       * @param {?} elem
       * @param {?} isWindow
       * @param {?} offsetHeightKey
       * @param {?} clientHeightKey
       * @return {?}
       */


      function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
        if (isNaN(elem[offsetHeightKey])) {
          /** @type {?} */
          var docElem = getDocumentElement(isWindow, elem);
          return docElem ? docElem[clientHeightKey] : 0;
        } else {
          return elem[offsetHeightKey];
        }
      }
      /**
       * @param {?} elem
       * @param {?} axis
       * @param {?} isWindow
       * @return {?}
       */


      function getElementOffsetTop(elem, axis, isWindow) {
        /** @type {?} */
        var topKey = axis.topKey(); // elem = elem.nativeElement;

        if (!elem.getBoundingClientRect) {
          // || elem.css('none')) {
          return;
        }

        return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
      }
      /**
       * @param {?} elem
       * @param {?} axis
       * @param {?} isWindow
       * @return {?}
       */


      function getElementPageYOffset(elem, axis, isWindow) {
        /** @type {?} */
        var pageYOffset = axis.pageYOffsetKey();
        /** @type {?} */

        var scrollTop = axis.scrollTopKey();
        /** @type {?} */

        var offsetTop = axis.offsetTopKey();

        if (isNaN(window.pageYOffset)) {
          return getDocumentElement(isWindow, elem)[scrollTop];
        } else if (elem.ownerDocument) {
          return elem.ownerDocument.defaultView[pageYOffset];
        } else {
          return elem[offsetTop];
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} container
       * @param {?} distance
       * @param {?} scrollingDown
       * @return {?}
       */


      function shouldFireScrollEvent(container, distance, scrollingDown) {
        /** @type {?} */
        var remaining;
        /** @type {?} */

        var containerBreakpoint;

        if (container.totalToScroll <= 0) {
          return false;
        }
        /** @type {?} */


        var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;

        if (scrollingDown) {
          remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
          containerBreakpoint = distance.down / 10;
        } else {
          /** @type {?} */
          var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
          remaining = container.scrolled / totalHiddenContentHeight;
          containerBreakpoint = distance.up / 10;
        }
        /** @type {?} */


        var shouldFireEvent = remaining <= containerBreakpoint;
        return shouldFireEvent;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} container
       * @return {?}
       */


      function isScrollingDownwards(lastScrollPosition, container) {
        return lastScrollPosition < container.scrolled;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} container
       * @param {?} distance
       * @return {?}
       */


      function getScrollStats(lastScrollPosition, container, distance) {
        /** @type {?} */
        var scrollDown = isScrollingDownwards(lastScrollPosition, container);
        return {
          fire: shouldFireScrollEvent(container, distance, scrollDown),
          scrollDown: scrollDown
        };
      }
      /**
       * @param {?} position
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} totalToScroll
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} scroll
       * @param {?} scrollState
       * @param {?} triggered
       * @param {?} isScrollingDown
       * @return {?}
       */

      /**
       * @param {?} totalToScroll
       * @param {?} scrollState
       * @param {?} isScrollingDown
       * @return {?}
       */

      /**
       * @param {?} scrollState
       * @param {?} scrolledUntilNow
       * @param {?} totalToScroll
       * @return {?}
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ScrollState = /*#__PURE__*/function () {
        /**
         * @param {?} __0
         */
        function ScrollState(_ref3) {
          var totalToScroll = _ref3.totalToScroll;

          _classCallCheck(this, ScrollState);

          this.lastScrollPosition = 0;
          this.lastTotalToScroll = 0;
          this.totalToScroll = 0;
          this.triggered = {
            down: 0,
            up: 0
          };
          this.totalToScroll = totalToScroll;
        }
        /**
         * @param {?} position
         * @return {?}
         */


        _createClass(ScrollState, [{
          key: "updateScrollPosition",
          value: function updateScrollPosition(position) {
            return this.lastScrollPosition = position;
          }
          /**
           * @param {?} totalToScroll
           * @return {?}
           */

        }, {
          key: "updateTotalToScroll",
          value: function updateTotalToScroll(totalToScroll) {
            if (this.lastTotalToScroll !== totalToScroll) {
              this.lastTotalToScroll = this.totalToScroll;
              this.totalToScroll = totalToScroll;
            }
          }
          /**
           * @param {?} scrolledUntilNow
           * @param {?} totalToScroll
           * @return {?}
           */

        }, {
          key: "updateScroll",
          value: function updateScroll(scrolledUntilNow, totalToScroll) {
            this.updateScrollPosition(scrolledUntilNow);
            this.updateTotalToScroll(totalToScroll);
          }
          /**
           * @param {?} scroll
           * @param {?} isScrollingDown
           * @return {?}
           */

        }, {
          key: "updateTriggeredFlag",
          value: function updateTriggeredFlag(scroll, isScrollingDown) {
            if (isScrollingDown) {
              this.triggered.down = scroll;
            } else {
              this.triggered.up = scroll;
            }
          }
          /**
           * @param {?} totalToScroll
           * @param {?} isScrollingDown
           * @return {?}
           */

        }, {
          key: "isTriggeredScroll",
          value: function isTriggeredScroll(totalToScroll, isScrollingDown) {
            return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
          }
        }]);

        return ScrollState;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} config
       * @return {?}
       */


      function createScroller(config) {
        var scrollContainer = config.scrollContainer,
            scrollWindow = config.scrollWindow,
            element = config.element,
            fromRoot = config.fromRoot;
        /** @type {?} */

        var resolver = createResolver({
          axis: new AxisResolver(!config.horizontal),
          windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
        });
        /** @type {?} */

        var scrollState = new ScrollState({
          totalToScroll: calculatePoints(element, resolver)
        });
        /** @type {?} */

        var options = {
          container: resolver.container,
          throttle: config.throttle
        };
        /** @type {?} */

        var distance = {
          up: config.upDistance,
          down: config.downDistance
        };
        return attachScrollEvent(options).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(
        /**
        * @return {?}
        */
        function () {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(calculatePoints(element, resolver));
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(
        /**
        * @param {?} positionStats
        * @return {?}
        */
        function (positionStats) {
          return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance);
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref4) {
          var stats = _ref4.stats;
          return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var fire = _ref5.fire,
              scrollDown = _ref5.scrollDown,
              totalToScroll = _ref5.stats.totalToScroll;
          return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref6) {
          var scrollDown = _ref6.scrollDown,
              totalToScroll = _ref6.stats.totalToScroll;
          scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(toInfiniteScrollAction));
      }
      /**
       * @param {?} options
       * @return {?}
       */


      function attachScrollEvent(options) {
        /** @type {?} */
        var obs = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(options.container, 'scroll'); // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
        // Let's avoid calling the function unless needed.
        // See https://github.com/orizens/ngx-infinite-scroll/issues/198

        if (options.throttle) {
          obs = obs.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.sampleTime)(options.throttle));
        }

        return obs;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} stats
       * @param {?} distance
       * @return {?}
       */


      function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
        var _getScrollStats = getScrollStats(lastScrollPosition, stats, distance),
            scrollDown = _getScrollStats.scrollDown,
            fire = _getScrollStats.fire;

        return {
          scrollDown: scrollDown,
          fire: fire,
          stats: stats
        };
      }
      /** @type {?} */


      var InfiniteScrollActions = {
        DOWN: '[NGX_ISE] DOWN',
        UP: '[NGX_ISE] UP'
      };
      /**
       * @param {?} response
       * @return {?}
       */

      function toInfiniteScrollAction(response) {
        var scrollDown = response.scrollDown,
            currentScrollPosition = response.stats.scrolled;
        return {
          type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
          payload: {
            currentScrollPosition: currentScrollPosition
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _InfiniteScrollDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} zone
         */
        function _InfiniteScrollDirective(element, zone) {
          _classCallCheck(this, _InfiniteScrollDirective);

          this.element = element;
          this.zone = zone;
          this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.infiniteScrollDistance = 2;
          this.infiniteScrollUpDistance = 1.5;
          this.infiniteScrollThrottle = 150;
          this.infiniteScrollDisabled = false;
          this.infiniteScrollContainer = null;
          this.scrollWindow = true;
          this.immediateCheck = false;
          this.horizontal = false;
          this.alwaysCallback = false;
          this.fromRoot = false;
        }
        /**
         * @return {?}
         */


        _createClass(_InfiniteScrollDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this.infiniteScrollDisabled) {
              this.setup();
            }
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref7) {
            var infiniteScrollContainer = _ref7.infiniteScrollContainer,
                infiniteScrollDisabled = _ref7.infiniteScrollDisabled,
                infiniteScrollDistance = _ref7.infiniteScrollDistance;

            /** @type {?} */
            var containerChanged = inputPropChanged(infiniteScrollContainer);
            /** @type {?} */

            var disabledChanged = inputPropChanged(infiniteScrollDisabled);
            /** @type {?} */

            var distanceChanged = inputPropChanged(infiniteScrollDistance);
            /** @type {?} */

            var shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;

            if (containerChanged || disabledChanged || distanceChanged) {
              this.destroyScroller();

              if (shouldSetup) {
                this.setup();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            var _this = this;

            if (hasWindowDefined()) {
              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                _this.disposeScroller = createScroller({
                  fromRoot: _this.fromRoot,
                  alwaysCallback: _this.alwaysCallback,
                  disable: _this.infiniteScrollDisabled,
                  downDistance: _this.infiniteScrollDistance,
                  element: _this.element,
                  horizontal: _this.horizontal,
                  scrollContainer: _this.infiniteScrollContainer,
                  scrollWindow: _this.scrollWindow,
                  throttle: _this.infiniteScrollThrottle,
                  upDistance: _this.infiniteScrollUpDistance
                }).subscribe(
                /**
                * @param {?} payload
                * @return {?}
                */
                function (payload) {
                  return _this.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this.handleOnScroll(payload);
                  });
                });
              });
            }
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "handleOnScroll",
          value: function handleOnScroll(_ref8) {
            var type = _ref8.type,
                payload = _ref8.payload;

            switch (type) {
              case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);

              case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);

              default:
                return;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyScroller();
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroyScroller",
          value: function destroyScroller() {
            if (this.disposeScroller) {
              this.disposeScroller.unsubscribe();
            }
          }
        }]);

        return _InfiniteScrollDirective;
      }();

      _InfiniteScrollDirective.ɵfac = function InfiniteScrollDirective_Factory(t) {
        return new (t || _InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
      };

      _InfiniteScrollDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
        type: _InfiniteScrollDirective,
        selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
        inputs: {
          infiniteScrollDistance: "infiniteScrollDistance",
          infiniteScrollUpDistance: "infiniteScrollUpDistance",
          infiniteScrollThrottle: "infiniteScrollThrottle",
          infiniteScrollDisabled: "infiniteScrollDisabled",
          infiniteScrollContainer: "infiniteScrollContainer",
          scrollWindow: "scrollWindow",
          immediateCheck: "immediateCheck",
          horizontal: "horizontal",
          alwaysCallback: "alwaysCallback",
          fromRoot: "fromRoot"
        },
        outputs: {
          scrolled: "scrolled",
          scrolledUp: "scrolledUp"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      _InfiniteScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }];
      };

      _InfiniteScrollDirective.propDecorators = {
        scrolled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
        }],
        scrolledUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
        }],
        infiniteScrollDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        infiniteScrollUpDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        infiniteScrollThrottle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        infiniteScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        infiniteScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        scrollWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        immediateCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        alwaysCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        fromRoot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](_InfiniteScrollDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
          args: [{
            selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
          }];
        }, {
          scrolled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
          }],
          scrolledUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
          }],
          infiniteScrollDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          infiniteScrollUpDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          infiniteScrollThrottle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          infiniteScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          infiniteScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          scrollWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          immediateCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          alwaysCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }],
          fromRoot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _InfiniteScrollModule = /*#__PURE__*/_createClass(function _InfiniteScrollModule() {
        _classCallCheck(this, _InfiniteScrollModule);
      });

      _InfiniteScrollModule.ɵfac = function InfiniteScrollModule_Factory(t) {
        return new (t || _InfiniteScrollModule)();
      };

      _InfiniteScrollModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _InfiniteScrollModule
      });
      _InfiniteScrollModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](_InfiniteScrollModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
          args: [{
            declarations: [_InfiniteScrollDirective],
            exports: [_InfiniteScrollDirective],
            imports: [],
            providers: []
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_InfiniteScrollModule, {
          declarations: [_InfiniteScrollDirective],
          exports: [_InfiniteScrollDirective]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Angular library starter.
       * Build an Angular library compatible with AoT compilation & Tree shaking.
       * Written by Roberto Simonetti.
       * MIT license.
       * https://github.com/robisim74/angular-library-starter
       */

      /**
       * Entry point for all public APIs of the package.
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-infinite-scroll.js.map

      /***/

    },

    /***/
    4549:
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "sampleTime": function sampleTime() {
          return (
            /* binding */
            _sampleTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      7393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      3637);

      function _sampleTime(period) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new SampleTimeOperator(period, scheduler));
        };
      }

      var SampleTimeOperator = /*#__PURE__*/function () {
        function SampleTimeOperator(period, scheduler) {
          _classCallCheck(this, SampleTimeOperator);

          this.period = period;
          this.scheduler = scheduler;
        }

        _createClass(SampleTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
          }
        }]);

        return SampleTimeOperator;
      }();

      var SampleTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(SampleTimeSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(SampleTimeSubscriber);

        function SampleTimeSubscriber(destination, period, scheduler) {
          var _this2;

          _classCallCheck(this, SampleTimeSubscriber);

          _this2 = _super.call(this, destination);
          _this2.period = period;
          _this2.scheduler = scheduler;
          _this2.hasValue = false;

          _this2.add(scheduler.schedule(dispatchNotification, period, {
            subscriber: _assertThisInitialized(_this2),
            period: period
          }));

          return _this2;
        }

        _createClass(SampleTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.lastValue = value;
            this.hasValue = true;
          }
        }, {
          key: "notifyNext",
          value: function notifyNext() {
            if (this.hasValue) {
              this.hasValue = false;
              this.destination.next(this.lastValue);
            }
          }
        }]);

        return SampleTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNotification(state) {
        var subscriber = state.subscriber,
            period = state.period;
        subscriber.notifyNext();
        this.schedule(state, period);
      } //# sourceMappingURL=sampleTime.js.map

      /***/

    },

    /***/
    8717:
    /*!****************************************************************************************!*\
      !*** ./src/app/components/pages/characters/character-list/character-list.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterListComponent": function CharacterListComponent() {
          return (
            /* binding */
            _CharacterListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      5435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5257);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared_services_character_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/services/character.service */
      3938);
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      9210);
      /* harmony import */


      var _characters_character_componet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @characters/character.componet */
      9927);

      function CharacterListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-character", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var character_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("character", character_r3);
        }
      }

      function CharacterListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No results.......");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CharacterListComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterListComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.onScrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Go UP\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "no-hidden");
        }
      }

      var _CharacterListComponent = /*#__PURE__*/function () {
        function _CharacterListComponent(document, characterSvc, route, router) {
          _classCallCheck(this, _CharacterListComponent);

          this.document = document;
          this.characterSvc = characterSvc;
          this.route = route;
          this.router = router;
          this.characters = [];
          this.info = {
            next: null
          };
          this.showGoUpButton = false;
          this.pageNum = 1;
          this.hideScrollHeight = 200;
          this.showScrollHeight = 500;
          this.onUrlChanged();
        }

        _createClass(_CharacterListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCharactersByQuery();
          }
        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var yOffSet = window.pageYOffset;

            if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
              this.showGoUpButton = true;
            } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
              this.showGoUpButton = false;
            }
          }
        }, {
          key: "onScrollDown",
          value: function onScrollDown() {
            if (this.info.next) {
              this.pageNum++;
              this.getDataFromService();
            }
          }
        }, {
          key: "onScrollTop",
          value: function onScrollTop() {
            this.document.body.scrollTop = 0; // Safari

            this.document.documentElement.scrollTop = 0; // Other
          }
        }, {
          key: "onUrlChanged",
          value: function onUrlChanged() {
            var _this3 = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd;
            })).subscribe(function () {
              _this3.characters = [];
              _this3.pageNum = 1;

              _this3.getCharactersByQuery();
            });
          }
        }, {
          key: "getCharactersByQuery",
          value: function getCharactersByQuery() {
            var _this4 = this;

            this.route.queryParams.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (params) {
              _this4.query = params['q'];

              _this4.getDataFromService();
            });
          }
        }, {
          key: "getDataFromService",
          value: function getDataFromService() {
            var _this5 = this;

            this.characterSvc.searchCharacters(this.query, this.pageNum).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (res) {
              var _a;

              if ((_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.length) {
                var info = res.info,
                    results = res.results;
                _this5.characters = [].concat(_toConsumableArray(_this5.characters), _toConsumableArray(results));
                _this5.info = info;
              } else {
                _this5.characters = [];
              }
            }, function (error) {
              return console.log(error.friendlyMessage);
            });
          }
        }]);

        return _CharacterListComponent;
      }();

      _CharacterListComponent.ɵfac = function CharacterListComponent_Factory(t) {
        return new (t || _CharacterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_character_service__WEBPACK_IMPORTED_MODULE_0__.CharacterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _CharacterListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _CharacterListComponent,
        selectors: [["app-character-list"]],
        hostBindings: function CharacterListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function CharacterListComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        decls: 4,
        vars: 3,
        consts: [["infinite-scroll", "", 1, "row", 3, "scrolled"], ["class", "col-xs-12 col-sm-6 col-md-4", 4, "ngFor", "ngForOf"], ["class", "col-xs-12 col-sm-12 col-md-12 mt-5 container-notFound", 4, "ngIf"], ["class", "btn btn-dark", 3, "ngClass", "click", 4, "ngIf"], [1, "col-xs-12", "col-sm-6", "col-md-4"], [3, "character"], [1, "col-xs-12", "col-sm-12", "col-md-12", "mt-5", "container-notFound"], [1, "btn", "btn-dark", 3, "ngClass", "click"]],
        template: function CharacterListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function CharacterListComponent_Template_div_scrolled_0_listener() {
              return ctx.onScrollDown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CharacterListComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CharacterListComponent_div_2_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CharacterListComponent_button_3_Template, 2, 1, "button", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.characters);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.characters.length <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showGoUpButton);
          }
        },
        directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _characters_character_componet__WEBPACK_IMPORTED_MODULE_2__.CharacterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
        styles: [".container-notFound[_ngcontent-%COMP%] {\n  color: #1F1E1E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImNoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1ub3RGb3VuZCB7XHJcbiAgY29sb3I6ICMxRjFFMUU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    9927:
    /*!*******************************************************************!*\
      !*** ./src/app/components/pages/characters/character.componet.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterComponent": function CharacterComponent() {
          return (
            /* binding */
            _CharacterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a1) {
        return ["/character-details", a1];
      };

      var _CharacterComponent = /*#__PURE__*/_createClass(function _CharacterComponent() {
        _classCallCheck(this, _CharacterComponent);
      });

      _CharacterComponent.ɵfac = function CharacterComponent_Factory(t) {
        return new (t || _CharacterComponent)();
      };

      _CharacterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CharacterComponent,
        selectors: [["app-character"]],
        inputs: {
          character: "character"
        },
        decls: 15,
        vars: 17,
        consts: [[1, "card"], [1, "image"], [3, "routerLink"], [1, "card-img-top", 3, "src", "alt"], [1, "card-inner"], [1, "header"], [1, "text-muted"]],
        template: function CharacterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.character.id - 1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.character.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.character.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.character.id - 1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 7, ctx.character.name, 0, 15));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.species);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, ctx.character.created));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    1598:
    /*!*************************************************!*\
      !*** ./src/app/shared/models/trackHttpError.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackHttpError": function TrackHttpError() {
          return (
            /* binding */
            _TrackHttpError
          );
        }
        /* harmony export */

      });

      var _TrackHttpError = /*#__PURE__*/_createClass(function _TrackHttpError() {
        _classCallCheck(this, _TrackHttpError);
      });
      /***/

    },

    /***/
    3938:
    /*!******************************************************!*\
      !*** ./src/app/shared/services/character.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterService": function CharacterService() {
          return (
            /* binding */
            _CharacterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      205);
      /* harmony import */


      var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @environment/environment */
      2340);
      /* harmony import */


      var _shared_models_trackHttpError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/models/trackHttpError */
      1598);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _CharacterService = /*#__PURE__*/function () {
        function _CharacterService(http) {
          _classCallCheck(this, _CharacterService);

          this.http = http;
        }

        _createClass(_CharacterService, [{
          key: "searchCharacters",
          value: function searchCharacters() {
            var _this6 = this;

            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
            var filter = "".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAPI, "/?name=").concat(query, "&page=").concat(page);
            return this.http.get(filter).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
              return _this6.handleHttpError(err);
            }));
          }
        }, {
          key: "getDetails",
          value: function getDetails(id) {
            var _this7 = this;

            return this.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrlAPI, "/").concat(id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
              return _this7.handleHttpError(err);
            }));
          }
        }, {
          key: "handleHttpError",
          value: function handleHttpError(error) {
            var dataError = new _shared_models_trackHttpError__WEBPACK_IMPORTED_MODULE_1__.TrackHttpError();
            dataError.errorNumber = error.status;
            dataError.message = error.statusText;
            dataError.friendlyMessage = 'An error occured retrienving data.';
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(dataError);
          }
        }]);

        return _CharacterService;
      }();

      _CharacterService.ɵfac = function CharacterService_Factory(t) {
        return new (t || _CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _CharacterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CharacterService,
        factory: _CharacterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_components_pages_characters_character-list_character-list_component_ts-es5.js.map