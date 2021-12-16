(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-wifi-wifi-module"],{

/***/ "./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js")) :
	undefined;
}(this, (function (exports,core,common) { 'use strict';

var CountdownTimer = (function () {
    /**
     * @param {?} el
     */
    function CountdownTimer(el) {
        this.el = el;
        this.zeroTrigger = new core.EventEmitter(true);
    }
    /**
     * @return {?}
     */
    CountdownTimer.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            if (_this.start) {
                _this.displayTime = _this.getTimeDiff(_this.start, true);
            }
            else {
                _this.displayTime = _this.getTimeDiff(_this.end);
            }
        }, 1000);
    };
    /**
     * @return {?}
     */
    CountdownTimer.prototype.ngOnDestroy = function () {
        this.stopTimer();
    };
    /**
     * @param {?} datetime
     * @param {?=} useAsTimer
     * @return {?}
     */
    CountdownTimer.prototype.getTimeDiff = function (datetime, useAsTimer) {
        if (useAsTimer === void 0) { useAsTimer = false; }
        datetime = new Date(datetime).getTime();
        var /** @type {?} */ now = new Date().getTime();
        if (isNaN(datetime)) {
            return "";
        }
        var /** @type {?} */ milisec_diff = datetime - now;
        if (useAsTimer) {
            milisec_diff = now - datetime;
        }
        // Zero Time Trigger
        if (milisec_diff <= 0) {
            this.zeroTrigger.emit("reached zero");
            return "00:00:00:00";
        }
        var /** @type {?} */ days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
        var /** @type {?} */ date_diff = new Date(milisec_diff);
        var /** @type {?} */ day_string = (days) ? this.twoDigit(days) + ":" : "";
        var /** @type {?} */ day_hours = days * 24;
        if (this.timeOnly) {
            var /** @type {?} */ hours = date_diff.getUTCHours() + day_hours;
            return this.twoDigit(hours) +
                ":" + this.twoDigit(date_diff.getMinutes()) + ":"
                + this.twoDigit(date_diff.getSeconds());
        }
        else {
            // Date() takes a UTC timestamp – getHours() gets hours in local time not in UTC. therefore we have to use getUTCHours()
            return day_string + this.twoDigit(date_diff.getUTCHours()) +
                ":" + this.twoDigit(date_diff.getMinutes()) + ":"
                + this.twoDigit(date_diff.getSeconds());
        }
    };
    /**
     * @param {?} number
     * @return {?}
     */
    CountdownTimer.prototype.twoDigit = function (number) {
        return number > 9 ? "" + number : "0" + number;
    };
    /**
     * @return {?}
     */
    CountdownTimer.prototype.stopTimer = function () {
        clearInterval(this.timer);
        this.timer = undefined;
    };
    return CountdownTimer;
}());
CountdownTimer.decorators = [
    { type: core.Component, args: [{
                selector: 'countdown-timer',
                template: "{{ displayTime }}"
            },] },
];
/**
 * @nocollapse
 */
CountdownTimer.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
CountdownTimer.propDecorators = {
    'start': [{ type: core.Input },],
    'end': [{ type: core.Input },],
    'zeroTrigger': [{ type: core.Output },],
    'timeOnly': [{ type: core.Input },],
};

var CountdownTimerModule = (function () {
    function CountdownTimerModule() {
    }
    /**
     * @return {?}
     */
    CountdownTimerModule.forRoot = function () {
        return {
            ngModule: CountdownTimerModule
        };
    };
    return CountdownTimerModule;
}());
CountdownTimerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    CountdownTimer,
                ],
                exports: [
                    CountdownTimer
                ]
            },] },
];
/**
 * @nocollapse
 */
CountdownTimerModule.ctorParameters = function () { return []; };

exports.CountdownTimerModule = CountdownTimerModule;
exports.CountdownTimer = CountdownTimer;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wifi/wifi.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wifi/wifi.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login_page\">\n  <div class=\"login_sec\">\n    <mat-card class=\"form_inner\">\n      <mat-card-content>\n\n        <p class=\"mb_space\"> Wifi Configuration</p>\n        <form [formGroup]=\"login\" (ngSubmit)=\"logintest()\" autocomplete=\"off\" class=\"login_form\">\n          <mat-form-field class=\"form\" appearance=\"outline\">\n            <mat-label>Network Name</mat-label>\n            <input matInput formControlName=\"user_name\" type=\"text\" required>\n\n           \n          </mat-form-field>\n\n          <mat-form-field class=\"form\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput formControlName=\"password\" placeholder=\"Password\" [type]=\" hide ? 'password' : 'text'\"\n              required>\n            <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\n            </mat-icon>\n\n          </mat-form-field>\n\n          <div class=\"form-btn\">\n            <!-- <button mat-raised-button class=\"Submit\" color=\"primary\" [disabled]=\"login.invalid\" \n             data-toggle=\"modal\" data-target=\"#count_wifi\">Connect</button> -->\n             <button mat-raised-button class=\"Submit\" color=\"primary\"\n             data-toggle=\"modal\" data-target=\"#count_wifi\">Connect</button>\n          </div>\n        </form>\n\n        <h3 class=\"list_title\">Wifi Name List:{{scanning}}\n          <mat-icon class=\"eye\" matSuffix>\n            <span class=\"material-icons\" (click)=\"wifi()\">\n              qr_code_scanner\n            </span>\n          </mat-icon>\n          \n        </h3>\n        <!-- <h2>{{retryMessage}}</h2>  -->\n      </mat-card-content>\n      <!-- \n<button mat-button (click)=\"openDialogWithRef(gokul_test)\">Open dialog with reference</button>\n\n<ng-template  #gokul_test>\n  <h2 matDialogTitle>Hello, world!</h2>\n  <p matDialogContent><em>Content for this dialog goes here...</em></p>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button matDialogClose>Dismiss</button>\n  </mat-dialog-actions>\n</ng-template> -->\n\n    </mat-card>\n\n  </div>\n\n\n  \n\n\n\n<!-- Modal -->\n<div class=\"modal fade\"  *ngIf=\"gokul_test == true\" id=\"count_wifi\" \ntabindex=\"-1\" role=\"dialog\" aria-labelledby=\"count_wifi\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Wifi Configuration</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n       <h2>Wait untill system reboot</h2>\n       <span>\n        {{retryMessage}}sec</span>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-raised-button type=\"button\" class=\"filter_btn btn_orange\">Save</button>\n        <button mat-raised-button type=\"button\" class=\"filter_btn btn_default ml-16\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/observable/interval.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/observable/interval.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/observable/timer.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].timer = rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"];
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/finally.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/finally.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/finally */ "./node_modules/rxjs-compat/_esm2015/operator/finally.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.finally = _operator_finally__WEBPACK_IMPORTED_MODULE_1__["_finally"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._finally = _operator_finally__WEBPACK_IMPORTED_MODULE_1__["_finally"];
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/takeUntil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/takeUntil.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_takeUntil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/takeUntil */ "./node_modules/rxjs-compat/_esm2015/operator/takeUntil.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.takeUntil = _operator_takeUntil__WEBPACK_IMPORTED_MODULE_1__["takeUntil"];
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/finally.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/finally.js ***!
  \***************************************************************/
/*! exports provided: _finally */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_finally", function() { return _finally; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function _finally(callback) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(callback)(this);
}
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/takeUntil.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/takeUntil.js ***!
  \*****************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function takeUntil(notifier) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./src/app/Components/wifi/wifi.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/wifi/wifi.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-transition: opacity 500ms;\n  transition: opacity 500ms;\n  visibility: hidden;\n  opacity: 0; }\n\ndiv.centered {\n  width: 500px;\n  height: 400px;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  margin-top: -200px;\n  margin-left: -250px; }\n\n.card2 {\n  margin-top: 150px;\n  height: 70%;\n  width: 80%; }\n\n.login_page {\n  overflow: hidden;\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  background: url('wifi_bg.jpg') no-repeat;\n  min-height: auto;\n  padding-bottom: 0;\n  background-size: cover; }\n\n.login_page .login_sec {\n    max-width: 100%;\n    width: 300px;\n    height: auto;\n    padding: 20px 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.login_page .login_sec .form_inner {\n      background: #fff;\n      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n      border-radius: 10px; }\n\n.login_page .login_sec .form_inner .brand_logo {\n        text-align: center; }\n\n.login_page .login_sec .form_inner .brand_logo img {\n          max-width: 100%;\n          width: 187px;\n          height: 48px;\n          -o-object-fit: contain;\n             object-fit: contain;\n          -o-object-position: center;\n             object-position: center; }\n\n.login_page .login_sec .form_inner p {\n        font-size: 16px;\n        font-weight: 500;\n        color: #555555;\n        margin-bottom: 0;\n        text-align: center;\n        line-height: 26px;\n        margin-top: 5px; }\n\n.login_page .login_sec .form_inner p.mb_space {\n          margin-bottom: 16px !important; }\n\n.login_page .login_sec .form_inner .login_form mat-form-field {\n        width: 100%;\n        font-size: 16px;\n        margin-bottom: unset; }\n\n.login_page .login_sec .form_inner .login_form .form-btn button {\n        color: #fff;\n        background-color: #ec6e17;\n        border-color: #ec6e17;\n        border: 1px solid transparent;\n        padding: 0.375rem 0.75rem;\n        font-size: 15px;\n        line-height: 1.5;\n        border-radius: 0.25rem;\n        width: 100%; }\n\n.login_page .login_sec .form_inner .login_form mat-icon {\n        cursor: pointer !important;\n        font-size: 18px;\n        cursor: pointer; }\n\n.login_page .login_sec .form_inner .login_form mat-icon span {\n          font-size: 18px;\n          cursor: pointer; }\n\n.login_page .login_sec .form_inner a {\n        color: #43a7fd;\n        text-decoration: none;\n        font-size: 16px;\n        display: block;\n        margin: 15px 0;\n        padding-left: 5px;\n        text-align: center;\n        cursor: pointer;\n        font-weight: 400; }\n\n.login_page .login_sec .form_inner a.sign_link {\n          margin: 0 5px; }\n\n.login_page .login_sec .form_inner .help_msg {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        border-top: 1px solid #ececec;\n        padding-top: 10px; }\n\n.list_title {\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 15px; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 1px;\n  position: initial; }\n\n.modal_sec .form-button.text-right {\n  text-align: right; }\n\n.modal#count_wifi .modal-body h2 {\n  font-size: 20px;\n  font-weight: 400; }\n\n.modal#count_wifi .modal-body span {\n  font-size: 18px;\n  font-weight: 500;\n  color: #f7941d; }\n\n::ng-deep .modal-backdrop.show {\n  opacity: 0 !important; }\n\n.btn_orange {\n  background: #f7941d;\n  border-color: #f7941d;\n  color: #fff; }\n\n.btn_default {\n  background-color: #e2e2e2;\n  border-color: #ccc;\n  color: #333 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL3dpZmkvd2lmaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNHLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUlkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdDQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQVIxQjtJQVVRLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNSLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUE7O0FBakI1QztNQW1CZ0IsZ0JBQWdCO01BQ2hCLDBDQUEwQztNQUMxQyxtQkFBbUIsRUFBQTs7QUFyQm5DO1FBdUJnQixrQkFBa0IsRUFBQTs7QUF2QmxDO1VBeUJnQixlQUFlO1VBQ2YsWUFBWTtVQUNaLFlBQVk7VUFDWixzQkFBbUI7YUFBbkIsbUJBQW1CO1VBQ25CLDBCQUF1QjthQUF2Qix1QkFBdUIsRUFBQTs7QUE3QnZDO1FBaUNZLGVBQWU7UUFDZixnQkFBZ0I7UUFDZixjQUFjO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBOztBQXZDM0I7VUF5Q2dCLDhCQUE2QixFQUFBOztBQXpDN0M7UUE4Q2dCLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysb0JBQW9CLEVBQUE7O0FBaERwQztRQW9Eb0IsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixXQUFXLEVBQUE7O0FBNUQvQjtRQWdFZ0IsMEJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlLEVBQUE7O0FBbEUvQjtVQW9Fb0IsZUFBZTtVQUNmLGVBQWUsRUFBQTs7QUFyRW5DO1FBNEVZLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGNBQWM7UUFDZCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7O0FBcEY1QjtVQXNGZ0IsYUFBYSxFQUFBOztBQXRGN0I7UUEwRlksb0JBQWE7UUFBYixhQUFhO1FBQ2Isd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLGlCQUFpQixFQUFBOztBQUs3QjtFQUNJLGVBQWU7RUFDZixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFJekI7RUFHWSxpQkFBaUIsRUFBQTs7QUFLN0I7RUFHUSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBSXRCO0VBRVEscUJBQW9CLEVBQUE7O0FBRzVCO0VBQ0EsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBRVg7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy93aWZpL3dpZmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBkaXYuY2VudGVyZWQge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxufVxyXG4uY2FyZDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuXHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG5cclxufVxyXG4ubG9naW5fcGFnZXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aWZpX2JnLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC5sb2dpbl9zZWN7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgLmZvcm1faW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLmJyYW5kX2xvZ297XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTg3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgJi5tYl9zcGFjZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbl9mb3Jte1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tYnRue1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzZlMTc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWM2ZTE3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogIzQzYTdmZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAmLnNpZ25fbGlua3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAuaGVscF9tc2d7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZWNlYztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn1cclxuLmxpc3RfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XHJcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsX3NlYyB7XHJcbiAgICAuZm9ybS1idXR0b257XHJcbiAgICAgICAgJi50ZXh0LXJpZ2h0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwjY291bnRfd2lmaXtcclxuLm1vZGFsLWJvZHl7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDs7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjZjc5NDFkO1xyXG4gICAgfVxyXG59XHJcbn1cclxuOjpuZy1kZWVwIC5tb2RhbC1iYWNrZHJvcHtcclxuICAgICYuc2hvdyB7XHJcbiAgICAgICAgb3BhY2l0eTogMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmJ0bl9vcmFuZ2V7XHJcbmJhY2tncm91bmQ6ICNmNzk0MWQ7XHJcbmJvcmRlci1jb2xvcjogI2Y3OTQxZDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bl9kZWZhdWx0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxuICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/Components/wifi/wifi.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/wifi/wifi.component.ts ***!
  \***************************************************/
/*! exports provided: WifiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiComponent", function() { return WifiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Service_app_wifi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/app/wifi.service */ "./src/app/Service/app/wifi.service.ts");
/* harmony import */ var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Nav/navbar.service */ "./src/app/Nav/navbar.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm2015/add/observable/interval.js");
/* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js");
/* harmony import */ var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/finally */ "./node_modules/rxjs-compat/_esm2015/add/operator/finally.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs-compat/_esm2015/add/operator/takeUntil.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");













let WifiComponent = class WifiComponent {
    constructor(route, fb, nav, service) {
        this.route = route;
        this.fb = fb;
        this.nav = nav;
        this.service = service;
        this.hide = true;
        this.gokul_test = false;
        this.nav.show();
    }
    ngOnInit() {
        this.login = this.fb.group({
            user_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    logintest() {
        // let times = -60;
        // setInterval(() => {
        //   this.gokul_test = true;
        //   console.log("start")
        //   this.retryMessage = times++;
        // }, 1000);
        // setInterval(() => {
        //  this.route.navigateByUrl('');
        //   this.gokul_test = true;
        //   console.log("completed")
        // }, 60000);
        var data = this.login.value.user_name;
        var data1 = this.login.value.password;
        this.service.submit(data, data1).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe(res => {
            console.log(status);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(res['status']);
            let times = -60;
            setInterval(() => {
                this.gokul_test = true;
                console.log("start");
                this.retryMessage = times++;
            }, 1000);
            setInterval(() => {
                this.route.navigateByUrl('');
                this.gokul_test = true;
                console.log("completed");
            }, 60000);
            // $timeout(function () {
            // $window.location = '/#!/login';
            // }, 60000);
            // }
        });
    }
    wifi() {
        this.service.scan().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe(res => {
            console.log(res);
            this.scanning = res.wifi_name_list;
            console.log(this.scanning);
        });
    }
    ngOnDestroy() {
    }
};
WifiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] },
    { type: _Service_app_wifi_service__WEBPACK_IMPORTED_MODULE_3__["WifiService"] }
];
WifiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wifi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wifi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wifi/wifi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wifi.component.scss */ "./src/app/Components/wifi/wifi.component.scss")).default]
    })
], WifiComponent);



/***/ }),

/***/ "./src/app/Components/wifi/wifi.module.ts":
/*!************************************************!*\
  !*** ./src/app/Components/wifi/wifi.module.ts ***!
  \************************************************/
/*! exports provided: WifiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiModule", function() { return WifiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/Components/shared/shared.module.ts");
/* harmony import */ var _Service_app_wifi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Service/app/wifi.service */ "./src/app/Service/app/wifi.service.ts");
/* harmony import */ var _wifi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wifi.component */ "./src/app/Components/wifi/wifi.component.ts");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countdown-timer */ "./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__);








const routes = [{ path: '', component: _wifi_component__WEBPACK_IMPORTED_MODULE_6__["WifiComponent"] }];
let WifiModule = class WifiModule {
};
WifiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_wifi_component__WEBPACK_IMPORTED_MODULE_6__["WifiComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerModule"].forRoot()
        ],
        providers: [_Service_app_wifi_service__WEBPACK_IMPORTED_MODULE_5__["WifiService"]],
    })
], WifiModule);



/***/ }),

/***/ "./src/app/Service/app/wifi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/app/wifi.service.ts ***!
  \*********************************************/
/*! exports provided: WifiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiService", function() { return WifiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/authentication/token.service */ "./src/app/Service/core/authentication/token.service.ts");




let WifiService = class WifiService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        // url = environment.serverUrl;
        this.tenantId = this.token.getTenantID();
    }
    scan() {
        return this.http.get('wifi_name_list');
    }
    submit(data, data1) {
        return this.http.get('wifi_config?user_name=' + data + '&&password=' + data1);
    }
};
WifiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
WifiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WifiService);



/***/ })

}]);
//# sourceMappingURL=Components-wifi-wifi-module-es2015.js.map