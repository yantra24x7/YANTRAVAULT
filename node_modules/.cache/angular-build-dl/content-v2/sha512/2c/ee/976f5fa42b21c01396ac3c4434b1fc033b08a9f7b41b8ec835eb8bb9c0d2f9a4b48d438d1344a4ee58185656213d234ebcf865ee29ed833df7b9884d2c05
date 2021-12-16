(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-machine-registration-machine-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/add.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/add.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal_sec two_form\">\r\n    <mat-toolbar>\r\n        <h3>Machine Registration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"row_sec\">\r\n        <form [formGroup]=\"login\">\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Name</mat-label>\r\n                <input matInput formControlName=\"machine_type\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Type</mat-label>\r\n                <input matInput formControlName=\"machine_name\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Controller Model Number</mat-label>\r\n                <input matInput formControlName=\"machine_model\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Serial Number</mat-label>\r\n                <input matInput formControlName=\"machine_serial_no\" type=\"text\" required>\r\n            </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Machine IP</mat-label>\r\n                    <input matInput formControlName=\"machine_ip\" type=\"text\" required>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Select Unit</mat-label>\r\n                    <mat-select matNativeControl required formControlName=\"unit\" required>\r\n                        <mat-option value=\"Select unit\" disabled>Select Unit</mat-option>\r\n                        <mat-option value=\"Unit - 1\">Unit1</mat-option>\r\n                        <mat-option value=\"Unit - 2\">Unit2</mat-option>\r\n                        <mat-option value=\"Unit - 3\">Unit3</mat-option>\r\n                        <mat-option value=\"Unit - 4\">Unit4</mat-option>\r\n                        <mat-option value=\"Unit - 5\">Unit5</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Device ip (Eg:GTA-Y001-0001)</mat-label>\r\n                <input matInput formControlName=\"device_id\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Type</mat-label>\r\n                <mat-select matNativeControl required formControlName=\"controller_type\">\r\n                    <mat-option value=\"Select Machine\" disabled>Select Machine</mat-option>\r\n                    <mat-option value=\"Ethernet\" (click)=\"machineSelect('Ethernet')\">Ethernet</mat-option>\r\n                    <mat-option value=\"RS232\" (click)=\"machineSelect('RS232')\">RS232</mat-option>\r\n                    <!-- <mat-option value=\"CT&PT\" (click)=\"machineSelect('CT&PT')\">CT&PT</mat-option> -->\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\"  *ngIf=\"login.value.controller_type === 'RS232' \">\r\n                <mat-label>Border Rate</mat-label>\r\n                <input matInput formControlName=\"border_rate\" type=\"text\" required> \r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" *ngIf=\"login.value.controller_type === 'RS232' \">\r\n                <mat-label>T1 IP</mat-label>\r\n                <input matInput formControlName=\"t1_ip\" type=\"text\" required> \r\n            </mat-form-field>\r\n\r\n            <div class=\"form-button text-right\">\r\n                <button mat-raised-button (click)=\"form()\" [disabled]=\"login.invalid\" class=\"filter_btn btn_orange\">\r\n                    Save</button>\r\n                <button mat-raised-button (click)=\"onNoClick()\" (click)=\"cancel()\"\r\n                    class=\"filter_btn btn_default ml-16\">Close</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/edit.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/edit.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal_sec two_form\">\r\n    <mat-toolbar>\r\n        <h3>Machine Registration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <!-- class=\"dialog-form\" -->\r\n    <div class=\"row_sec\">\r\n        <form [formGroup]=\"login\">\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Name</mat-label>\r\n                <input matInput formControlName=\"machine_type\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Type</mat-label>\r\n                <input matInput formControlName=\"machine_name\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Controller Model Number</mat-label>\r\n                <input matInput formControlName=\"machine_model\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Serial Number</mat-label>\r\n                <input matInput formControlName=\"machine_serial_no\" type=\"text\" required>\r\n            </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Machine IP</mat-label>\r\n                    <input matInput formControlName=\"machine_ip\" type=\"text\" required>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Select Unit</mat-label>\r\n                    <mat-select matNativeControl required formControlName=\"unit\" required>\r\n                        <mat-option value=\"Select unit\" disabled>Select Unit</mat-option>\r\n                        <mat-option value=\"Unit - 1\">Unit1</mat-option>\r\n                        <mat-option value=\"Unit - 2\">Unit2</mat-option>\r\n                        <mat-option value=\"Unit - 3\">Unit3</mat-option>\r\n                        <mat-option value=\"Unit - 4\">Unit4</mat-option>\r\n                        <mat-option value=\"Unit - 5\">Unit5</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Device ip (Eg:GTA-Y001-0001)</mat-label>\r\n                <input matInput formControlName=\"device_id\" type=\"text\" required>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Machine Type</mat-label>\r\n                <mat-select matNativeControl required formControlName=\"controller_type\">\r\n                    <mat-option value=\"Select Machine\" disabled>Select Machine</mat-option>\r\n                    <mat-option value=\"Ethernet\" >Ethernet</mat-option>\r\n                    <mat-option value=\"RS232\" >RS232</mat-option>\r\n                    <!-- <mat-option value=\"CT&PT\" >CT&PT</mat-option> -->\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\"  *ngIf=\"login.value.controller_type === 'RS232' \">\r\n                <mat-label>Border Rate</mat-label>\r\n                <input matInput formControlName=\"border_rate\" type=\"text\" required> \r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" *ngIf=\"login.value.controller_type === 'RS232' \">\r\n                <mat-label>T1 IP</mat-label>\r\n                <input matInput formControlName=\"t1_ip\" type=\"text\" required> \r\n            </mat-form-field>\r\n            <div class=\"form-button text-right\">\r\n                <button mat-raised-button (click)=\"loginforum()\" [disabled]=\"login.invalid\" class=\"filter_btn btn_orange\">\r\n                    Save</button>\r\n                <button mat-raised-button (click)=\"onNoClick()\" (click)=\"cancel()\"\r\n                    class=\"filter_btn btn_default ml-16\">Close</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/machine-registration.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/machine-registration.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page\">\r\n    <div *ngIf=\"myLoader\" class=\"spinner\">\r\n        <img src=\"assets/images/spinner.gif\">\r\n      </div>\r\n    <div class=\"section_top_padding\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"page_title_sec\">\r\n                <h2 class=\"sub_title\">\r\n                    <mat-icon class=\"v-align-middle display\">laptop</mat-icon>\r\n                    <span class=\"v-align-middle\"> Machine Registration</span>\r\n                </h2>\r\n            <div class=\"add_new\">\r\n                <mat-icon class=\"circle\" (click)=\"add_registartion()\">add</mat-icon>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cards_collections\">\r\n                <div class=\"px-16\">\r\n                    <mat-card class=\"example-card\" *ngFor=\"let machine of machine_response ;let i=index\">\r\n                        <mat-card-content>\r\n                            <div class=\"switch_holder\">\r\n                                <!-- <div class=\"action_menus\">\r\n                                    <mat-icon (click)=\"setting_view(machine)\" class=\"v-align-middle edit\" matTooltip=\"Status Update\">\r\n                                        settings</mat-icon>\r\n                                    <mat-icon (click)=\"edit_view(machine)\" class=\"v-align-middle edit\" matTooltip=\"Edit\">\r\n                                        edit</mat-icon>\r\n                                    <mat-icon (click)=\"delete_view(machine.id)\" class=\"v-align-middle edit\" matTooltip=\"Delete\">\r\n                                        delete</mat-icon>\r\n                                </div> -->\r\n                            </div>\r\n                            <div class=\"action_menus\">\r\n                                <a [matMenuTriggerFor]=\"menu\" class=\"menu_open\">\r\n                                    <i class=\"material-icons\">\r\n                                        menu_open\r\n                                    </i>\r\n                                </a>\r\n                                <mat-menu #menu=\"matMenu\" class=\"actions\">\r\n                                    <button mat-menu-item (click)=\"edit_view(machine)\">\r\n                                        <!-- <i class=\"material-icons\">\r\n                                            edit\r\n                                        </i> -->\r\n                                        Edit\r\n                                    </button>\r\n                                    <button mat-menu-item (click)=\"delete_view(machine.id)\">\r\n                                        <!-- <i class=\"material-icons\">\r\n                                            delete\r\n                                        </i> -->\r\n                                        Delete\r\n                                    </button>\r\n                                    <!-- <button mat-menu-item  (click)=\"setting_view(machine)\" >\r\n                                       \r\n                                        Setting</button> -->\r\n                                </mat-menu>\r\n                            </div>\r\n\r\n                            <h2>{{machine.machine_name}}</h2>\r\n                            <h3>{{machine.machine_type}}</h3>\r\n                            <div class=\"content\">\r\n                                <div class=\"count\" >{{i+1}}</div>\r\n                                <div class=\"full_date\">\r\n                                    <p>\r\n                                        Controller  :\r\n                                        <span>{{machine.controller_type}}</span>\r\n                                    </p>\r\n                                \r\n                                    <p>\r\n                                        Model  :\r\n                                        <span>{{machine.machine_serial_no}}</span>\r\n                                    </p>\r\n                                    <p>\r\n                                        IP :\r\n                                        <span> {{machine.machine_ip}}</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n                <!-- <div class=\"px-16\">\r\n                    <mat-card class=\"example-card\">\r\n                        <mat-card-content>\r\n                            <div class=\"switch_holder\">\r\n                                <mat-slide-toggle class=\"status\"></mat-slide-toggle>\r\n                                <div class=\"action_menus\">\r\n                                    <mat-icon (click)=\"edit_view()\" class=\"v-align-middle edit\" matTooltip=\"Edit\">\r\n                                        edit</mat-icon>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <h2>RIPL/VMC/HW/EM-C22</h2>\r\n                            <div class=\"content\">\r\n                                <div class=\"count\">2</div>\r\n                                <div class=\"full_date\">\r\n                                    <p>\r\n                                        timeintervel :\r\n                                        <span>10</span>\r\n\r\n                                    </p>\r\n                                    <p>\r\n                                        Reason :\r\n                                        <span class=\"reason\"> idle</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"px-16\">\r\n                    <mat-card class=\"example-card\">\r\n                        <mat-card-content>\r\n                            <div class=\"switch_holder\">\r\n                                <mat-slide-toggle class=\"status\"></mat-slide-toggle>\r\n                                <div class=\"action_menus\">\r\n                                    <mat-icon (click)=\"edit_view()\" class=\"v-align-middle edit\" matTooltip=\"Edit\">\r\n                                        edit</mat-icon>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <h2>RIPL/VMC/HW/EM-C22</h2>\r\n                            <div class=\"content\">\r\n                                <div class=\"count\">3</div>\r\n                                <div class=\"full_date\">\r\n                                    <p>\r\n                                        timeintervel :\r\n                                        <span>10</span>\r\n\r\n                                    </p>\r\n                                    <p>\r\n                                        Reason :\r\n                                        <span class=\"reason\"> idle</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <div class=\"px-16 pr-0\">\r\n                    <mat-card class=\"example-card\">\r\n                        <mat-card-content>\r\n                            <div class=\"switch_holder\">\r\n                                <mat-slide-toggle class=\"status\"></mat-slide-toggle>\r\n                                <div class=\"action_menus\">\r\n                                    <mat-icon (click)=\"edit_view()\" class=\"v-align-middle edit\" matTooltip=\"Edit\">\r\n                                        edit</mat-icon>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <h2>RIPL/VMC/HW/EM-C22</h2>\r\n                            <div class=\"content\">\r\n                                <div class=\"count\">4</div>\r\n                                <div class=\"full_date\">\r\n                                    <p>\r\n                                        timeintervel :\r\n                                        <span>10</span>\r\n\r\n                                    </p>\r\n                                    <p>\r\n                                        Reason :\r\n                                        <span class=\"reason\"> idle</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div> -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/settings.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/settings.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal_sec\">\r\n    <mat-toolbar class=\"forum\">\r\n        <h3>Axis Values</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form\">\r\n        <div class=\"filter\" *ngFor=\"let s of status\">\r\n           <p>{{s.setting_name}}</p>\r\n     <mat-slide-toggle  [checked] = \"s.is_active == true\" (change)=\"notify($event,s)\"></mat-slide-toggle> \r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/Components/machine-registration/machine-registration.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/machine-registration/machine-registration.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row_sec {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n  .row_sec .mat-form-field {\n    width: 48% !important; }\n  .row_sec .mat-form-field:nth-child(odd) {\n      margin-right: 14px; }\n  .cards_collections {\n  margin-top: 24px; }\n  .cards_collections .px-16 {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap; }\n  .cards_collections .example-card {\n    position: relative;\n    width: 21%;\n    margin: 15px 10px 15px 0; }\n  .cards_collections .example-card h2 {\n      margin-top: 16px;\n      color: #000;\n      font-size: 1.3rem;\n      text-align: center;\n      margin-bottom: 0;\n      text-transform: capitalize; }\n  .cards_collections .example-card h3 {\n      color: #898888 !important;\n      margin-bottom: 18px;\n      text-align: center;\n      margin-top: 8px;\n      font-size: 18px;\n      font-weight: 500;\n      text-transform: capitalize; }\n  .cards_collections .example-card .content .count {\n      width: 40px;\n      height: 40px;\n      margin: 0 auto;\n      background: #f7941e;\n      border-radius: 50%;\n      color: #fff;\n      text-align: center;\n      line-height: 40px;\n      position: absolute;\n      top: 0;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  .cards_collections .example-card .content .full_date {\n      text-align: center; }\n  .cards_collections .example-card .content .full_date p {\n        color: #c7c7c7;\n        margin: 5px 0;\n        font-size: 16px; }\n  .cards_collections .example-card .content .full_date p span {\n          text-transform: lowercase;\n          font-size: 16px;\n          color: #8c8a8a; }\n  .cards_collections .example-card .content .switch_holder .status {\n      line-height: 25px;\n      color: #c7c7c7;\n      font-size: 11px; }\n  .cards_collections .example-card .content .switch_holder .actions {\n      float: right; }\n  .cards_collections .example-card .content .switch_holder .actions mat-icon {\n        font-size: 24px;\n        cursor: pointer; }\n  .cards_collections .example-card .content .switch_holder .actions mat-icon.edit {\n          color: #c1c1c1; }\n  .cards_collections .example-card .content .switch_holder .actions mat-icon.setting {\n          color: #909090; }\n  .cards_collections .example-card .content .switch_holder .actions mat-icon.delete {\n          color: #e03434; }\n  .cards_collections .example-card .action_menus {\n      text-align: right;\n      cursor: pointer; }\n  .filter_sec .setting_sec {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  .dialog-form {\n  display: -webkit-box;\n  display: flex; }\n  .dialog-form .filter {\n    margin: 0 12px 0 0;\n    padding: 0 16px; }\n  .dialog-form .filter p {\n      margin-bottom: 5px; }\n  .spinner {\n  background: #262932;\n  height: 100vh;\n  opacity: 0.9;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 999; }\n  .spinner img {\n  width: 90px;\n  margin-top: -130px; }\n  .two_form.modal_sec .mat-form-field {\n  width: 100%;\n  margin-right: 0; }\n  @media only screen and (max-width: 600px) {\n  .cards_collections .example-card {\n    position: relative;\n    width: 21%;\n    margin: 15px 10px 15px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL21hY2hpbmUtcmVnaXN0cmF0aW9uL21hY2hpbmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ1QsZUFBZSxFQUFBO0VBRnJCO0lBSU0scUJBQW9CLEVBQUE7RUFKMUI7TUFNVSxrQkFBa0IsRUFBQTtFQUk1QjtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBSm5CO0lBT0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix3QkFBd0IsRUFBQTtFQVQxQjtNQVdJLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsMEJBQTBCLEVBQUE7RUFoQjlCO01Bc0JJLHlCQUF3QjtNQUN4QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDBCQUEwQixFQUFBO0VBNUI5QjtNQWdDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sU0FBUztNQUNULHdDQUErQjtjQUEvQixnQ0FBK0IsRUFBQTtFQTNDbkM7TUE4Q00sa0JBQWtCLEVBQUE7RUE5Q3hCO1FBZ0RRLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZSxFQUFBO0VBbER2QjtVQW9EVSx5QkFBeUI7VUFDekIsZUFBZTtVQUNmLGNBQWMsRUFBQTtFQXREeEI7TUFxRVEsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUF2RXZCO01BMEVRLFlBQVksRUFBQTtFQTFFcEI7UUE0RVUsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQTdFekI7VUErRVksY0FBYyxFQUFBO0VBL0UxQjtVQWtGWSxjQUFjLEVBQUE7RUFsRjFCO1VBcUZZLGNBQWMsRUFBQTtFQXJGMUI7TUErRkksaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQVFuQjtFQUVFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQVNyQjtFQUNFLG9CQUFhO0VBQWIsYUFBYSxFQUFBO0VBRGY7SUFHRSxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBSmpCO01BTUcsa0JBQWtCLEVBQUE7RUFJckI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQVNwQjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFRakI7RUFDRTtJQUVFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0JBQXdCLEVBQUEsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21hY2hpbmUtcmVnaXN0cmF0aW9uL21hY2hpbmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd19zZWN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiA0OCUhaW1wb3J0YW50O1xyXG4gICAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbi5jYXJkc19jb2xsZWN0aW9uc3tcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIC5weC0xNntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gLmV4YW1wbGUtY2FyZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIxJTtcclxuICBtYXJnaW46IDE1cHggMTBweCAxNXB4IDA7XHJcbiAgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDUycHg7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBoM3tcclxuICAgIGNvbG9yOiAjODk4ODg4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgLmNvdW50e1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmNzk0MWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIH1cclxuICAgIC5mdWxsX2RhdGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcHtcclxuICAgICAgICBjb2xvcjogI2M3YzdjNztcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjOGM4YThhO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnN3aXRjaF9ob2xkZXJ7XHJcbiAgICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLnN0YXR1c3tcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBjb2xvcjogI2M3YzdjNztcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbnN7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJi5lZGl0e1xyXG4gICAgICAgICAgICBjb2xvcjogI2MxYzFjMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuc2V0dGluZ3tcclxuICAgICAgICAgICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmRlbGV0ZXtcclxuICAgICAgICAgICAgY29sb3I6ICNlMDM0MzQ7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG4gIC5hY3Rpb25fbWVudXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxufVxyXG5cclxuXHJcbi8vIHNldHRpbmcgbW9kYWwgc3R5bGVcclxuXHJcbi5maWx0ZXJfc2VjIHtcclxuICAuc2V0dGluZ19zZWN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIC5kaWFsb2ctZm9ybXtcclxuICAvLyAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAvLyAgIG1pbi1oZWlnaHQ6IDQ5M3B4IWltcG9ydGFudDtcclxuICAvLyAgIGhlaWdodDogNDAwcHg7XHJcbiAgLy8gICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuLmZpbHRlcntcclxuICBtYXJnaW46IDAgMTJweCAwIDA7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gcHtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gfVxyXG59XHJcbn1cclxuLnNwaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyNjI5MzI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogYXV0bztcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5zcGlubmVyIGltZyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEzMHB4O1xyXG59XHJcbi8vIC50d29fZm9ybS5tb2RhbF9zZWMgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4vLyAgICY6bnRoLWNoaWxkKDJuKXtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gICB9XHJcbi8vIH1cclxuLnR3b19mb3JtLm1vZGFsX3NlYyAubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuXHJcbi8vIFJlc3Bvc25pdmUgc3R5bGVzXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAuY2FyZHNfY29sbGVjdGlvbnN7XHJcbiAgIC5leGFtcGxlLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gICAgbWFyZ2luOiAxNXB4IDEwcHggMTVweCAwO1xyXG4gIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxyXG4gICAgICAgICAgICAgICAgICAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIFxyXG4gICAgICAgICAgICAgICAgICAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Components/machine-registration/machine-registration.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/machine-registration/machine-registration.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MachineRegistrationComponent, Add, Edit, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineRegistrationComponent", function() { return MachineRegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav/navbar.service */ "./src/app/Nav/navbar.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Service/app/machine.service */ "./src/app/Service/app/machine.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");








let MachineRegistrationComponent = class MachineRegistrationComponent {
    constructor(fb, dialog, nav, service) {
        this.fb = fb;
        this.dialog = dialog;
        this.nav = nav;
        this.service = service;
        this.myLoader = false;
        this.nav.show();
        this.tenant = localStorage.getItem('tenant_id');
    }
    add_registartion() {
        const dialogRef = this.dialog.open(Add, {
            width: '30%',
            height: 'auto',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    edit_view(data1) {
        const dialogRef = this.dialog.open(Edit, {
            width: '30%',
            height: 'auto',
            data: data1
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    setting_view(data) {
        const dialogRef = this.dialog.open(Settings, {
            width: '30%',
            height: 'auto%',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.myLoader = true;
        this.service.card(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
            this.myLoader = false;
            this.machine_response = res;
        });
    }
    delete_view(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure want to delete?',
            // type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Please Confirm'
                }).then((destroy) => {
                    if (destroy.value) {
                        this.service.delete_row(id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
                            if (res === true) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Deleted Succesfully !");
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Delete Failed");
                            }
                            this.ngOnInit();
                        });
                    }
                });
            }
        });
    }
    ngOnDestroy() {
    }
};
MachineRegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] },
    { type: _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__["MachineService"] }
];
MachineRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-machine-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./machine-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/machine-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machine-registration.component.scss */ "./src/app/Components/machine-registration/machine-registration.component.scss")).default]
    })
], MachineRegistrationComponent);

let Add = class Add {
    constructor(dialogRef, data, fb, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.tenant = localStorage.getItem('tenant_id');
    }
    onNoClick() {
        this.dialogRef.close();
    }
    cancel() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.login = this.fb.group({
            machine_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            machine_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            machine_model: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            machine_serial_no: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            machine_ip: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            device_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            controller_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            border_rate: ["",],
            t1_ip: ["",]
        });
    }
    form() {
        this.add_val = this.login.value;
        this.add_val["tenant_id"] = this.tenant;
        this.add_val["controller_type"] = this.controller_type;
        this.service.machine(this.login.value).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
            alert('created successfully');
            this.dialogRef.close();
        });
    }
    machineSelect(machine) {
        this.controller_type = machine;
    }
    ngOnDestroy() {
    }
};
Add.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__["MachineService"] }
];
Add = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/add.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machine-registration.component.scss */ "./src/app/Components/machine-registration/machine-registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], Add);

let Edit = class Edit {
    constructor(dialogRef, data1, fb, service) {
        this.dialogRef = dialogRef;
        this.data1 = data1;
        this.fb = fb;
        this.service = service;
        this.edit_data1 = data1;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.tenant = localStorage.getItem('tenant_id');
        this.login = this.fb.group({
            machine_type: [this.edit_data1.machine_type],
            machine_name: [this.edit_data1.machine_name],
            machine_model: [this.edit_data1.machine_model],
            machine_serial_no: [this.edit_data1.machine_serial_no],
            machine_ip: [this.edit_data1.machine_ip],
            device_id: [this.edit_data1.device_id],
            unit: [this.edit_data1.unit],
            controller_type: [this.edit_data1.controller_type],
            border_rate: [this.edit_data1.controller_type],
            t1_ip: [this.edit_data1.controller_type]
        });
    }
    loginforum() {
        this.add_val = this.login.value;
        this.add_val["tenant_id"] = this.tenant;
        this.service.edit(this.edit_data1.id, this.add_val).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Updated Successfully!");
            if (res === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Updated Suceesfully");
            }
            this.dialogRef.close();
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
    }
};
Edit.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__["MachineService"] }
];
Edit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/edit.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machine-registration.component.scss */ "./src/app/Components/machine-registration/machine-registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], Edit);

let Settings = class Settings {
    constructor(dialogRef, data, fb, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.tenant = localStorage.getItem('tenant_id');
        this.settings_data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.service.settinglist(this.settings_data.id, this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
            this.status = res;
        });
    }
    notify(e, s) {
        this.toggle_id = s.id;
        this.toggle_status = e.checked;
        this.service.statuschange(this.toggle_id, this.toggle_status).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(res => {
            if (res === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Updated Succesfully !");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Updated Sucessfully !");
            }
            this.dialogRef.close();
            this.ngOnInit();
        });
    }
    ngOnDestroy() {
    }
};
Settings.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__["MachineService"] }
];
Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/machine-registration/settings.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machine-registration.component.scss */ "./src/app/Components/machine-registration/machine-registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], Settings);



/***/ }),

/***/ "./src/app/Components/machine-registration/machine-registration.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/machine-registration/machine-registration.module.ts ***!
  \********************************************************************************/
/*! exports provided: MachineRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineRegistrationModule", function() { return MachineRegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine-registration.component */ "./src/app/Components/machine-registration/machine-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/Components/shared/shared.module.ts");
/* harmony import */ var _Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Service/app/machine.service */ "./src/app/Service/app/machine.service.ts");







const routes = [{ path: '', component: _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["MachineRegistrationComponent"] }];
let MachineRegistrationModule = class MachineRegistrationModule {
};
MachineRegistrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["MachineRegistrationComponent"], _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Add"], _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Edit"], _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Settings"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Add"], _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Edit"], _machine_registration_component__WEBPACK_IMPORTED_MODULE_3__["Settings"]],
        providers: [_Service_app_machine_service__WEBPACK_IMPORTED_MODULE_6__["MachineService"]]
    })
], MachineRegistrationModule);



/***/ }),

/***/ "./src/app/Service/app/machine.service.ts":
/*!************************************************!*\
  !*** ./src/app/Service/app/machine.service.ts ***!
  \************************************************/
/*! exports provided: MachineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineService", function() { return MachineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/authentication/token.service */ "./src/app/Service/core/authentication/token.service.ts");




let MachineService = class MachineService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.tenantId = this.token.getTenantID();
    }
    card(tenantId) {
        return this.http.get('machines?tenant_id=' + tenantId);
    }
    machine(value) {
        return this.http.post('machines', value);
    }
    settinglist(machine, tenant) {
        return this.http.get('machine_setting_list?machine_id=' + machine + '&&tenant_id=' + tenant);
    }
    edit(id, val) {
        return this.http.put('machines/' + id, val);
    }
    statuschange(id, active) {
        return this.http.get('machine_setting_update?machine_setting_list_id=' + id + '&&is_active=' + active);
    }
    delete_row(id) {
        return this.http.delete('machines/' + id);
    }
};
MachineService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
MachineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MachineService);



/***/ })

}]);
//# sourceMappingURL=Components-machine-registration-machine-registration-module-es2015.js.map