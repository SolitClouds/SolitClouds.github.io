(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkricky_martin_app"] = self["webpackChunkricky_martin_app"] || []).push([["src_app_components_pages_home_home_module_ts"], {
    /***/
    7924:
    /*!******************************************************************!*\
      !*** ./src/app/components/pages/characters/characters.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharactersModule": function CharactersModule() {
          return (
            /* binding */
            _CharactersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      9210);
      /* harmony import */


      var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @characters/character-list/character-list.component */
      8717);
      /* harmony import */


      var _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @characters/character-details/character-details.component */
      3243);
      /* harmony import */


      var _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @characters/character.componet */
      9927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var myComponents = [_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent, _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent, _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent];

      var _CharactersModule = /*#__PURE__*/_createClass(function _CharactersModule() {
        _classCallCheck(this, _CharactersModule);
      });

      _CharactersModule.ɵfac = function CharactersModule_Factory(t) {
        return new (t || _CharactersModule)();
      };

      _CharactersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _CharactersModule
      });
      _CharactersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__.InfiniteScrollModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_CharactersModule, {
          declarations: [_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent, _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent, _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__.InfiniteScrollModule],
          exports: [_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent, _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent, _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent]
        });
      })();
      /***/

    },

    /***/
    4484:
    /*!**************************************************************!*\
      !*** ./src/app/components/pages/home/home-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeRoutingModule": function HomeRoutingModule() {
          return (
            /* binding */
            _HomeRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      2670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
      }];

      var _HomeRoutingModule = /*#__PURE__*/_createClass(function _HomeRoutingModule() {
        _classCallCheck(this, _HomeRoutingModule);
      });

      _HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || _HomeRoutingModule)();
      };

      _HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomeRoutingModule
      });
      _HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    2670:
    /*!*********************************************************!*\
      !*** ./src/app/components/pages/home/home.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @characters/character-list/character-list.component */
      8717);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 1,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-character-list");
          }
        },
        directives: [_characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_0__.CharacterListComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    5056:
    /*!******************************************************!*\
      !*** ./src/app/components/pages/home/home.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      4484);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      2670);
      /* harmony import */


      var _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @characters/characters.module */
      7924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HomeModule = /*#__PURE__*/_createClass(function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      });

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__.CharactersModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__.CharactersModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_pages_home_home_module_ts-es5.js.map