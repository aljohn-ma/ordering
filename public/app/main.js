(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-top {\r\n    z-index: 2999 !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"site-header sticky-top py-1\">\n  <div class=\"container d-flex flex-column flex-md-row justify-content-between\">\n    <a class=\"py-2\" routerLink=\"/\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n        stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"d-block mx-auto\" focusable=\"false\" role=\"img\">\n        <title>Food ordering system</title>\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line>\n        <line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line>\n        <line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line>\n        <line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line>\n        <line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line>\n        <line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>\n      </svg> FOS\n    </a>\n    <a class=\"py-4 d-none d-md-inline-block\" routerLink=\"/cart\">\n      <i class=\"fa fa-lg fa-shopping-cart\"></i>\n      <i *ngIf=\"my_cart.items && my_cart.items.length > 0\" class=\"badge badge-light text-danger\">{{ my_cart.items.length }}</i>\n    </a>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"fixed-top static-top\">\n    <ng-flash-message></ng-flash-message>\n  </div>\n  <div class=\"flash\">\n  </div>\n\n  <router-outlet></router-outlet>\n\n  <footer class=\"container py-5\">\n    <div class=\"row border-top pt-3\">\n      <div class=\"col-12 col-md\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n          stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"d-block mb-2\" focusable=\"false\" role=\"img\">\n          <title>Product</title>\n          <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n          <line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line>\n          <line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line>\n          <line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line>\n          <line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line>\n          <line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line>\n          <line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>\n        </svg>\n        <small class=\"d-block mb-3 text-muted\">© 2017-2018</small>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Features</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" routerLink=\"/\">Cool stuff</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Random feature</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Team feature</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Stuff for developers</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Another one</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Last time</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Resources</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" routerLink=\"/\">Resource</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Resource name</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Another resource</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Final resource</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>Resources</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" routerLink=\"/\">Business</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Education</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Government</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Gaming</a></li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-md\">\n        <h5>About</h5>\n        <ul class=\"list-unstyled text-small\">\n          <li><a class=\"text-muted\" routerLink=\"/\">Team</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Locations</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Privacy</a></li>\n          <li><a class=\"text-muted\" routerLink=\"/\">Terms</a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cart.info.service */ "./src/app/services/cart.info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(cart_svc) {
        var _this = this;
        this.cart_svc = cart_svc;
        this.my_cart = { items: [] };
        cart_svc.object.subscribe(function () {
            if (localStorage.getItem('cart') !== null) {
                _this.my_cart = JSON.parse(atob(localStorage.getItem('cart')));
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_info_service__WEBPACK_IMPORTED_MODULE_1__["CartInfoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// INSTALLED MODULES


// PROJECT IMPORTS




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["routingComponents"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessagesModule"].forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_cart_cart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart.module */ "./src/app/components/cart/cart.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'cart', loadChildren: function () { return _components_cart_cart_module__WEBPACK_IMPORTED_MODULE_4__["CartModule"]; } },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
];


/***/ }),

/***/ "./src/app/components/cart/cart-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/cart/cart-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/components/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!my_cart.items else content\">\n  <div class=\"container \">\n    <div class=\"row py-5 justify-content-center\">\n      <div class=\"col-md-9 text-center\">\n        <p class=\"text-muted\">There are no items in this cart.</p>\n        <a class=\"btn btn-primary\" routerLink=\"/\">Go shopping</a>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #content>\n\n  <div class=\"container justify-content-center\">\n    <div class=\"row py-5\">\n      <div class=\"col-md-9\">\n        <div class=\"col-md-12\" *ngFor=\"let item of my_cart.items\">\n          <div class=\"media text-muted pt-3  border-bottom border-gray\">\n\n            <img [src]=\"item.image_name\" alt=\"32x32\" class=\"mr-2 rounded\" style=\"width: 32px; height: 32px;\"\n              data-holder-rendered=\"true\">\n            <p class=\"media-body pb-3 mb-0 small lh-125\">\n              <strong class=\"d-block text-gray-dark\">{{ item.item_name }}</strong>\n              {{ item.description }}\n            </p>\n            <p class=\"text-danger\">₱ {{item.selling_price}}</p>\n            <div class=\"form-row justify-content-center\">\n              <div class=\"col-1 px-0\">\n                <button class=\"btn btn-sm btn-default rounded-0 mt-1 border-right-0\" [disabled]=\"!item.quantity\"\n                  (click)=\"changQuantity(item, false)\">\n                  <i class=\"fa fa-minus\"></i>\n                </button>\n              </div>\n              <div class=\"col-2 mx-0 px-0\">\n                <input type=\"number\" [(ngModel)]=\"item.quantity\" class=\"text-center ml-2 form-control form-control-sm rounded-0 \">\n              </div>\n              <div class=\"col-1 mx-0 px-0\">\n                <button class=\"btn btn-sm btn-default rounded-0 mt-1 ml-2 border-left-0\" (click)=\"changQuantity(item)\">\n                  <i class=\"fa fa-plus\"></i>\n                </button>\n              </div>\n            </div>\n            <button class=\"btn btn-link mr-auto\" title=\"Remove item\" (click)=\"show(remove, item)\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"mb-4\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"col-9 px-0\">\n\n              <input type=\"text\" [(ngModel)]=\"voucher_code\" name=\"voucher_code\" class=\"form-control mx-0 rounded-0\"\n                placeholder=\"Voucher\">\n            </div>\n            <div class=\"col-3 px-0\">\n              <button class=\"btn btn-primary rounded-0 mx-0\" (click)=\"applyVoucher()\">Apply</button>\n            </div>\n          </div>\n          <small *ngIf=\"voucher_invalid\" class=\"float-left text-danger\">* Invalid voucher code</small>\n        </div>\n        <h5>Order summary</h5>\n        <div class=\"col\">\n          <p class=\"text-muted\">Total sales\n            <small class=\"float-right pt-1\">{{ my_cart.total_sales }}</small>\n          </p>\n          <p class=\"text-muted\">Total VAT\n            <small class=\"float-right pt-1\">{{ my_cart.total_vat }}</small>\n          </p>\n          <p *ngIf=\"my_cart.discount\" class=\"text-muted\">Discount\n            <small class=\"float-right pt-1\">{{ my_cart.discount }}</small>\n          </p>\n          <p class=\"text-muted\"><small><strong>Amount payable</strong></small>\n            <small class=\"float-right pt-1\"><strong>{{ my_cart.amount_payable - my_cart.discount }}</strong></small>\n\n          </p>\n\n        </div>\n        <button class=\"btn btn-block btn-primary rounded-0\" (click)=\"saveOrder()\" [disabled]=\"saving\">\n          <i *ngIf=\"saving\" class=\"fa fa-spinner fa-spin\"></i>{{ saving ? ' PLACING ORDER' : 'PLACE ORDER' }}</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #remove let-modal let-c=\"close\">\n  <div class=\"modal-header rounded-0\">\n    <h4 class=\"modal-title\">Remove item</h4>\n    <button type=\"button\" class=\"btn btn-link text-secondary\" aria-label=\"Close\" (click)=\"cancel()\">\n      <span class=\"fa fa-times\"></span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p class=\"text-muted\">This item will be removed from your order.</p>\n  </div>\n\n  <div class=\"modal-footer rounded-0\">\n    <div class=\"form-group float-right mt-2 mb-1\">\n      <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default rounded-0 btn-sm\">\n        Cancel\n      </button>\n      <button type=\"submit\" (click)=\"removeItem()\" class=\"btn btn-primary rounded-0 btn-sm\">\n        Remove\n      </button>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.info.service */ "./src/app/services/cart.info.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CartComponent = /** @class */ (function () {
    function CartComponent(http, cart_svc, modal, router, ngFlashMessageService) {
        this.http = http;
        this.cart_svc = cart_svc;
        this.modal = modal;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.my_cart = {};
        this.current_item = [];
        this.voucher_code = '';
        this.voucher_invalid = false;
        this.saving = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cart_svc.object.subscribe(function () {
                            if (localStorage.getItem('cart') !== null) {
                                _this.my_cart = JSON.parse(atob(localStorage.getItem('cart')));
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartComponent.prototype.show = function (content, item) {
        this.current_item = item;
        this.open(content);
    };
    CartComponent.prototype.open = function (content) {
        this.modal.open(content, { centered: true, backdrop: 'static' });
    };
    CartComponent.prototype.cancel = function () {
        this.modal.dismissAll();
    };
    CartComponent.prototype.removeItem = function () {
        var idx = this.my_cart.items.indexOf(this.current_item);
        if (idx >= 0) {
            this.my_cart.items.splice(idx, 1);
            this.updateCart();
            this.cart_svc.applyCartChanges(this.my_cart);
            if (this.my_cart.items.length === 0) {
                this.router.navigate(['']);
            }
        }
        this.cancel();
    };
    CartComponent.prototype.changQuantity = function (item, add) {
        if (add === void 0) { add = true; }
        var qty = add ? (Number.isNaN(item.quantity) || !item.quantity) ? 1 : item.quantity + 1 :
            (Number.isNaN(item.quantity) || !item.quantity) ? 0 : item.quantity - 1;
        item.quantity = qty;
        this.addToCart(item);
    };
    CartComponent.prototype.addToCart = function (item) {
        var idx = this.my_cart.items.indexOf(this.my_cart.items.find(function (x) { return x.id === item.id; }));
        idx >= 0 ? this.my_cart.items[idx] = item : this.my_cart.items.push(item);
        this.updateCart();
        this.cart_svc.applyCartChanges(this.my_cart);
    };
    CartComponent.prototype.updateCart = function () {
        var total_sales = this.my_cart.items.map(function (item) { return item.price * item.quantity; })
            .reduce(function (sum, current) { return (sum * 1) + (current * 1); });
        var total_vat = this.my_cart.items.map(function (item) { return item.tax_amount * item.quantity; })
            .reduce(function (sum, current) { return (sum * 1) + (current * 1); });
        this.my_cart.total_sales = total_sales;
        this.my_cart.total_vat = total_vat;
        this.my_cart.amount_payable = total_sales + total_vat;
        this.my_cart.discount = 0;
    };
    CartComponent.prototype.applyVoucher = function () {
        var _this = this;
        this.http.get('api/check-voucher', this.voucher_code).subscribe(function (res) {
            _this.voucher_invalid = !res['count'];
            _this.my_cart.discount = _this.getDiscount();
            console.log(_this.my_cart.discount);
        });
    };
    CartComponent.prototype.getDiscount = function () {
        var less = 0.1;
        var computed_discount = less * this.my_cart.amount_payable;
        return this.voucher_invalid ? 0 : Math.round(computed_discount);
    };
    CartComponent.prototype.saveOrder = function () {
        var _this = this;
        this.saving = true;
        this.http.post('api/save-order', this.my_cart).subscribe(function (res) {
            var success = res['success'];
            if (success) {
                localStorage.clear();
                var flashMessage = {
                    messages: ['Order has been placed successfully.'],
                    timeout: 2000,
                    type: 'success',
                    dismissible: false
                };
                _this.cart_svc.applyCartChanges({ items: [] });
                _this.ngFlashMessageService.showFlashMessage(flashMessage);
                _this.router.navigate(['']);
            }
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            src_app_services_cart_info_service__WEBPACK_IMPORTED_MODULE_2__["CartInfoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/cart/cart.module.ts ***!
  \************************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/components/cart/cart-routing.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CartRoutingModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"centered\">\n      <span class=\"fa fa-circle-o-notch fa-spin\"></span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/loading/loading.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/components/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"is_loading else content\">\r\n    <app-loading></app-loading>\r\n</ng-container>\r\n\r\n<ng-template #content>\r\n\r\n    <div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\r\n        <div *ngFor=\"let category of items;index as i\" class=\"{{ getBg(i) }} {{ getText(i) }} mr-md-3  px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\r\n            <div class=\"mb-3 pb-3\">\r\n                <h2 class=\"display-5\">{{ category.name }}</h2>\r\n                <p class=\"lead\">{{ category.description }}</p>\r\n            </div>\r\n            <div *ngFor=\"let item of category.items\" class=\"bg-white shadow-sm mb-2\" style=\"width: 90%; height: 300px; border-radius: 21px 21px 21px 21px;\">\r\n                <img [src]=\"item.image_name\" class=\"img-fluid mt-2\" style=\"width: 70%; height: 150px;\" alt=\"item\">\r\n                <div class=\"mt-2\">\r\n                    <p class=\"text-muted mb-0\"><strong>{{ item.item_name }}</strong></p>\r\n                    <small class=\"text-muted mb-1\">{{ item.description }}</small>\r\n                    <p class=\"text-danger\">₱ {{item.selling_price}}</p>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-1 mx-0 px-0\">\r\n                            <button class=\"btn btn-sm btn-default rounded-0 mt-1 border-right-0\" [disabled]=\"!item.quantity\" (click)=\"changQuantity(item, false)\">\r\n                                <i class=\"fa fa-minus\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-2 mx-0 px-0\">\r\n                            <input type=\"number\" [(ngModel)]=\"item.quantity\" class=\"text-center form-control form-control-sm rounded-0 \">\r\n                        </div>\r\n                        <div class=\"col-1 mx-0 px-0\">\r\n                            <button class=\"btn btn-sm btn-default rounded-0 mt-1 border-left-0\" (click)=\"changQuantity(item)\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_constants_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/urls */ "./src/app/constants/urls.ts");
/* harmony import */ var src_app_services_cart_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.info.service */ "./src/app/services/cart.info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MainComponent = /** @class */ (function () {
    function MainComponent(http, cart_svc) {
        this.http = http;
        this.cart_svc = cart_svc;
        this.is_loading = true;
        this.my_cart = { items: [] };
    }
    MainComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItems()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.getItems = function () {
        var _this = this;
        this.http.get_list(Object(src_app_constants_urls__WEBPACK_IMPORTED_MODULE_2__["GET_ITEMS"])()).subscribe(function (res) {
            _this.items = res;
            _this.is_loading = false;
        });
    };
    MainComponent.prototype.getBg = function (idx) {
        return (idx % 2) === 0 ? 'bg-dark' : 'bg-light';
    };
    MainComponent.prototype.getText = function (idx) {
        return (idx % 2) === 0 ? 'text-white' : 'text-dark';
    };
    MainComponent.prototype.changQuantity = function (item, add) {
        if (add === void 0) { add = true; }
        var qty = add ? (Number.isNaN(item.quantity) || !item.quantity) ? 1 : item.quantity + 1 :
            (Number.isNaN(item.quantity) || !item.quantity) ? 0 : item.quantity - 1;
        item.quantity = qty;
        this.addToCart(item);
    };
    MainComponent.prototype.addToCart = function (item) {
        item.total = item.price * item.quantity;
        var idx = this.my_cart.items.indexOf(this.my_cart.items.find(function (x) { return x.id === item.id; }));
        idx >= 0 ? (item.quantity === 0) ? this.my_cart.items.splice(idx, 1) : this.my_cart.items[idx] = item : this.my_cart.items.push(item);
        this.updateCart();
        this.cart_svc.applyCartChanges(this.my_cart);
    };
    MainComponent.prototype.updateCart = function () {
        var total_sales = this.my_cart.items.map(function (item) { return item.price * item.quantity; })
            .reduce(function (sum, current) { return (sum * 1) + (current * 1); });
        var total_vat = this.my_cart.items.map(function (item) { return item.tax_amount * item.quantity; })
            .reduce(function (sum, current) { return (sum * 1) + (current * 1); });
        this.my_cart.total_sales = total_sales;
        this.my_cart.total_vat = total_vat;
        this.my_cart.amount_payable = total_sales + total_vat;
        this.my_cart.discount = 0;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            src_app_services_cart_info_service__WEBPACK_IMPORTED_MODULE_3__["CartInfoService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"content-wrapper\">\n  <section class=\"content\">\n    <div class=\"contatiner\"> -->\n      <div class=\"row justify-content-center mt-4-md\">\n        <div class=\"col-md-6 mt-4\">\n          <div class=\"error-template\">\n            <h1>\n              Oops!</h1>\n            <h2>\n              404 Not Found</h2>\n            <div class=\"error-details\">\n              Sorry, an error has occured, Requested page not found!\n            </div>\n            <div class=\"error-actions\">\n              <a routerLink=\"/\" class=\"btn btn-primary btn-lg\"><span class=\"fa fa-home\"></span>\n                Take me home\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- </div>\n  </section>\n</div> -->"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.error-actions .btn {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/constants/urls.ts":
/*!***********************************!*\
  !*** ./src/app/constants/urls.ts ***!
  \***********************************/
/*! exports provided: GET_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
var GET_ITEMS = function (extra_param) {
    if (extra_param === void 0) { extra_param = ''; }
    return "api/get-items-by-category" + extra_param;
};


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http, token) {
        var _this = this;
        this.http = http;
        this.token = token;
        this.HEADERS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        token.token.subscribe(function (val) {
            _this.HEADERS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + val);
        });
    }
    ApiService.prototype.post = function (url, data, options) {
        if (options === void 0) { options = {}; }
        return this.http.post(url, data, __assign({ headers: this.HEADERS }, options));
    };
    ApiService.prototype.get = function (url, id, options) {
        if (options === void 0) { options = {}; }
        return this.http.get(url + "/" + id, __assign({ headers: this.HEADERS }, options));
    };
    ApiService.prototype.get_list = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.get(url, __assign({ headers: this.HEADERS }, options));
    };
    ApiService.prototype.put = function (url, id, data, options) {
        if (options === void 0) { options = {}; }
        return this.http.put(url + "/" + id, data, __assign({ headers: this.HEADERS }, options));
    };
    ApiService.prototype.delete = function (url, id, options) {
        if (options === void 0) { options = {}; }
        return this.http.delete(url + "/" + id, __assign({ headers: this.HEADERS }, options));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/cart.info.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart.info.service.ts ***!
  \***********************************************/
/*! exports provided: CartInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartInfoService", function() { return CartInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartInfoService = /** @class */ (function () {
    function CartInfoService() {
        this.src = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.object = this.src.asObservable();
    }
    CartInfoService.prototype.applyCartChanges = function (data) {
        localStorage.setItem('cart', btoa(JSON.stringify(data)));
        if (localStorage.key['cart']) {
            data = JSON.parse(atob(localStorage.getItem('cart')));
        }
        this.src.next(data);
    };
    CartInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartInfoService);
    return CartInfoService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.token_name = 'token';
        this.src = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.token = this.src.asObservable();
        this.src.next(this.get());
    }
    TokenService.prototype.set = function (name, value) {
        localStorage.setItem(name, value);
    };
    TokenService.prototype.handle = function (token) {
        this.set('axs', btoa(JSON.stringify(token['access'])));
        this.set(this.token_name, token['access_token']);
        this.src.next(this.get());
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem(this.token_name);
    };
    TokenService.prototype.remove = function () {
        localStorage.clear();
        this.src.next(null);
    };
    TokenService.prototype.is_valid = function (token) {
        if (token === void 0) { token = ''; }
        if (token) {
            return this.get() === token;
        }
        return this.get() !== null;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
            ],
            declarations: [
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"],
            ],
            exports: [
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\order\order\public\ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map