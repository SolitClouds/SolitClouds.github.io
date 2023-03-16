(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkricky_martin_app"] = self["webpackChunkricky_martin_app"] || []).push([["common"], {
    /***/
    3243:
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/pages/characters/character-details/character-details.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterDetailsComponent": function CharacterDetailsComponent() {
          return (
            /* binding */
            _CharacterDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5257);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_services_character_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/services/character.service */
      3938);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _characters_character_componet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @characters/character.componet */
      9927);

      function CharacterDetailsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-character", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var character_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("character", character_r1);
        }
      }

      var _CharacterDetailsComponent = /*#__PURE__*/function () {
        function _CharacterDetailsComponent(route, characterSvc, location) {
          _classCallCheck(this, _CharacterDetailsComponent);

          this.route = route;
          this.characterSvc = characterSvc;
          this.location = location;
        }

        _createClass(_CharacterDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(function (params) {
              var id = params['id'];
              _this.character$ = _this.characterSvc.getDetails(id);
            });
          }
        }, {
          key: "onGoBack",
          value: function onGoBack() {
            this.location.back();
          }
        }]);

        return _CharacterDetailsComponent;
      }();

      _CharacterDetailsComponent.ɵfac = function CharacterDetailsComponent_Factory(t) {
        return new (t || _CharacterDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_character_service__WEBPACK_IMPORTED_MODULE_0__.CharacterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location));
      };

      _CharacterDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CharacterDetailsComponent,
        selectors: [["app-character-details"]],
        decls: 4,
        vars: 3,
        consts: [["class", "row justify-content-center mt-3", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "mt-3", 3, "click"], [1, "row", "justify-content-center", "mt-3"], [1, "col-xs-12", "col-sm-6", "col-md-6", "justify-content-center"], [3, "character"]],
        template: function CharacterDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CharacterDetailsComponent_div_0_Template, 3, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CharacterDetailsComponent_Template_button_click_2_listener() {
              return ctx.onGoBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.character$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _characters_character_componet__WEBPACK_IMPORTED_MODULE_1__.CharacterComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map