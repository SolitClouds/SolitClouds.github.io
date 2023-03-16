(self["webpackChunkricky_martin_app"] = self["webpackChunkricky_martin_app"] || []).push([["src_app_components_pages_home_home_module_ts"],{

/***/ 7924:
/*!******************************************************************!*\
  !*** ./src/app/components/pages/characters/characters.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersModule": function() { return /* binding */ CharactersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-infinite-scroll */ 9210);
/* harmony import */ var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @characters/character-list/character-list.component */ 8717);
/* harmony import */ var _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @characters/character-details/character-details.component */ 3243);
/* harmony import */ var _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @characters/character.componet */ 9927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const myComponents = [
    _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent,
    _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent,
    _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent
];
class CharactersModule {
}
CharactersModule.ɵfac = function CharactersModule_Factory(t) { return new (t || CharactersModule)(); };
CharactersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CharactersModule });
CharactersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__.InfiniteScrollModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CharactersModule, { declarations: [_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent,
        _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent,
        _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_0__.InfiniteScrollModule], exports: [_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent,
        _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterListComponent,
        _characters_character_componet__WEBPACK_IMPORTED_MODULE_3__.CharacterComponent] }); })();


/***/ }),

/***/ 4484:
/*!**************************************************************!*\
  !*** ./src/app/components/pages/home/home-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2670:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @characters/character-list/character-list.component */ 8717);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-character-list");
    } }, directives: [_characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_0__.CharacterListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5056:
/*!******************************************************!*\
  !*** ./src/app/components/pages/home/home.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4484);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 2670);
/* harmony import */ var _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @characters/characters.module */ 7924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__.CharactersModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _characters_characters_module__WEBPACK_IMPORTED_MODULE_2__.CharactersModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_pages_home_home_module_ts-es2015.js.map