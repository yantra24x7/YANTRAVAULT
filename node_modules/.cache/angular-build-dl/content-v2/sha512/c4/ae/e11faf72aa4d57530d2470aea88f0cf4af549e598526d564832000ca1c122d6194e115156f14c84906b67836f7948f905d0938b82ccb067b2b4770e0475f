(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-master-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/delete.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/delete.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>Are You Sure You want to delete this file?</mat-toolbar>\r\n\r\n<form [formGroup]=\"login\" (ngSubmit)=\"logintest()\">\r\n    <mat-form-field>\r\n        <mat-label>UserName</mat-label>\r\n        <input matInput formControlName=\"user_name\" type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Reason</mat-label>\r\n        <input matInput formControlName=\"reason\" type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"control-section\">\r\n        \r\n        <div class=\"filter_field date_picker\">\r\n            <mat-form-field>\r\n              <mat-label>Choose a date</mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" [max]='maxDate' [min]='minDate'\r\n                (click)=\"picker.open()\" placeholder=\"Choose Date\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n    </div>\r\n\r\n    <button mat-raise-button [disabled]=\"login.invalid\">Save</button>\r\n    <button mat-raise-button (click)=\"onNoClick()\">Close</button>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/dialog.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/dialog.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal_sec\">\r\n    <mat-toolbar>\r\n        <h3>File Save</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form\">\r\n        <div class=\"filter_sec\">\r\n            <form [formGroup]=\"test\" class=\"form_sec\">\r\n                <!-- (ngSubmit)=\"testform(test.value)\"  -->\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-select placeholder=\"Select Machine\" matNativeControl required formControlName=\"machine_id\">\r\n                        <mat-option *ngFor=\"let machine of machine_response\" [value]=\"machine.id\">\r\n                            {{machine.machine_name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <p>Revision Number</p>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <!-- <mat-label>Revision Number</mat-label> -->\r\n                    <input matInput formControlName=\"revision_no\" placeholder=\"1\" type=\"text\" readonly>\r\n                </mat-form-field>\r\n                <div class=\"form-group custom_file_upload\">\r\n                    <label for=\"file\">Choose File</label><br /> <input type=\"file\" id=\"file\"\r\n                        (change)=\"fileUpload1($event)\">\r\n                </div>\r\n\r\n                <div class=\"form-button text-right\">\r\n                    <button mat-raised-button [disabled]=\"test.invalid\" (click)=\"logintest()\"\r\n                        class=\"filter_btn btn_orange\"> Save</button>\r\n                    <button mat-raised-button (click)=\"onNoClick()\" class=\"filter_btn btn_default ml-16\">Close</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/master.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/master.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page\">\n  <div *ngIf=\"myLoader\" class=\"spinner\">\n    <img src=\"assets/images/spinner.gif\">\n  </div>\n  <div class=\"section_top_padding\">\n    <div class=\"container-fluid\">\n      <div class=\"page_title_sec\">\n        <h2 class=\"sub_title\">\n          <mat-icon class=\"v-align-middle display\">list_alt\n          </mat-icon>\n          <span class=\"v-align-middle\">Program List</span>\n        </h2>\n        <!-- <h2>Priya</h2> -->\n        <div class=\"filter_sec\">\n          <div class=\"filter_field\">\n            <mat-form-field appearance=\"outline\">\n              <mat-select placeholder=\"Select Machine\" [(ngModel)]=\"machine_id\"\n                (selectionChange)=\"getmachine($event.value)\" matNativeControl required>\n                <mat-option *ngFor=\"let machine of machine_response\" [value]=\"machine.id\">\n                  {{machine.machine_name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </div>\n          <div class=\"form-button\">\n            <button class=\"subit\" (click)=\"openDialog(machine_id)\" class=\"upload_btn\">File Save</button>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"master_sec\">\n        <div class=\"col\">\n          <h1>Master</h1>\n          <mat-card class=\"card_sec\">\n            <mat-card-content class=\"table-responsive\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tr *ngFor=\"let master of masterate\">\n                  <td>{{master}}</td>\n                  <td class=\"action\">\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"new_download(master,'Master')\"><i\n                          class=\"fa fa-download\" aria-hidden=\"true\"></i></a></div>\n\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"upload(master)\"><i class=\"fa fa-send\"\n                          aria-hidden=\"true\"></i></a>\n                    </div>\n\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"new_check(master)\"><i\n                          class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></a></div>\n                  </td>\n                </tr>\n              </table>\n            </mat-card-content>\n          </mat-card>\n\n          \n\n        </div>\n        <div *ngIf=\"masterate.length==0\" class=\"no_data_found\">\n          <h2>No data found</h2>\n        </div>\n        <div class=\"col\">\n          <h1>Slave</h1>\n          <mat-card class=\"card_sec\">\n            <mat-card-content class=\"table-responsive\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tr *ngFor=\"let slave of slavate\">\n                  <td>{{slave}}</td>\n                  <td class=\"action\">\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"new_sdownload(slave,'Slave')\"><i\n                          class=\"fa fa-download\" aria-hidden=\"true\"></i></a></div>\n\n\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"openDialog2(slave)\"><i class=\"fa fa-trash-o\"\n                          aria-hidden=\"true\"></i></a></div>\n                  </td>\n                </tr>\n              </table>\n            </mat-card-content>\n          </mat-card>\n          <div *ngIf=\"slavate.length==0\" class=\"no_data_found\">\n            <h2>No data found</h2>\n          </div>\n       \n        </div>\n        \n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./src/app/Components/master/master.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/master/master.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  background: #262932;\n  height: 100vh;\n  opacity: 0.9;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 999; }\n\n.spinner img {\n  width: 90px;\n  margin-top: -130px; }\n\n.master_sec {\n  display: -webkit-box;\n  display: flex; }\n\n.master_sec .col {\n    width: calc(100% /1);\n    padding: 0; }\n\n.master_sec .col:first-child {\n      margin-right: 20px; }\n\n.master_sec .col h1 {\n      font-size: 18px;\n      font-weight: 400;\n      margin-top: 0; }\n\n.master_sec .master_card {\n    padding: 15px; }\n\n.master_sec .master_card .shift .edit {\n      position: absolute;\n      right: 10px;\n      bottom: 10px;\n      cursor: pointer; }\n\n.master_sec .master_card .shift .play_circle i {\n      font-size: 100px; }\n\n.master_sec .master_card .shift h2 {\n      font-size: 1.5rem;\n      margin-bottom: 0; }\n\n.master_sec .master_card .shift h3 {\n      font-size: 90px;\n      font-weight: 100;\n      margin: 0; }\n\n.master_sec .master_card .shift .status_icon {\n      display: -webkit-box;\n      display: flex;\n      justify-content: space-around; }\n\n.master_sec .master_card .shift .status_icon .status {\n        width: calc(100% /1); }\n\n.master_sec .master_card .shift .status_icon .status:first-child {\n          border-right: 1px solid #ccc; }\n\n.master_sec .master_card .shift .status_icon .status span {\n          color: #292929;\n          font-size: 24px; }\n\n.master_sec .master_card .shift .status_icon .status p {\n          margin-top: 0px;\n          color: #292929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBRGpCO0lBR1Esb0JBQW9CO0lBQ3BCLFVBQVUsRUFBQTs7QUFKbEI7TUFNWSxrQkFBa0IsRUFBQTs7QUFOOUI7TUFTWSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGFBQWEsRUFBQTs7QUFYekI7SUFnQlEsYUFBYSxFQUFBOztBQWhCckI7TUFtQlksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZSxFQUFBOztBQXRCM0I7TUEwQmdCLGdCQUFnQixFQUFBOztBQTFCaEM7TUE4QlksaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBOztBQS9CNUI7TUFrQ1ksZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixTQUFTLEVBQUE7O0FBcENyQjtNQXVDWSxvQkFBYTtNQUFiLGFBQWE7TUFDYiw2QkFBNkIsRUFBQTs7QUF4Q3pDO1FBMENnQixvQkFBb0IsRUFBQTs7QUExQ3BDO1VBNENvQiw0QkFBNEIsRUFBQTs7QUE1Q2hEO1VBK0NvQixjQUFjO1VBQ2QsZUFBZSxFQUFBOztBQWhEbkM7VUFtRG9CLGVBQWU7VUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyOTMyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzMHB4O1xyXG4gIH1cclxuXHJcblxyXG4ubWFzdGVyX3NlYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmNvbHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8xKTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hc3Rlcl9jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAuc2hpZnR7XHJcbiAgICAgICAgLmVkaXR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGxheV9jaXJjbGV7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhdHVzX2ljb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAuc3RhdHVze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvMSk7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/Components/master/master.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/master/master.component.ts ***!
  \*******************************************************/
/*! exports provided: MasterComponent, Dialog, Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Nav/navbar.service */ "./src/app/Nav/navbar.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Service/app/programlist.service */ "./src/app/Service/app/programlist.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let MasterComponent = class MasterComponent {
    // id:any;
    constructor(http, fb, dialog, nav, service) {
        this.http = http;
        this.fb = fb;
        this.dialog = dialog;
        this.nav = nav;
        this.service = service;
        this.myLoader = false;
        this.startDate = new Date(2020, 0, 1);
        this.today = new Date(new Date().toDateString());
        this.weekStart = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
        this.weekEnd = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
            - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString());
        this.monthStart = new Date(new Date(new Date().setDate(1)).toDateString());
        this.monthEnd = this.today;
        this.lastStart = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
        this.lastEnd = this.today;
        this.yearStart = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
        this.yearEnd = this.today;
        this.currentYear = this.today.getFullYear();
        this.currentMonth = this.today.getMonth();
        this.maxDate = new Date();
        this.minDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"];
        this.slave = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"];
        this.slavelist = ['position', 'name', 'weight', 'symbol', 'action'];
        this.nav.show();
        this.tenant = localStorage.getItem('tenant_id');
        // this.id = localStorage.getItem('machine_id')
        this.user = localStorage.getItem('user_id');
    }
    openDialog(machine) {
        const dialogRef = this.dialog.open(Dialog, {
            width: '250px',
            data: { edit_shift: machine }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    openDialog2(id) {
        const dialogRef = this.dialog.open(Delete, {
            width: '250px',
            data: { machine_id: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.service.machine(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            this.machine_response = res;
            // this.service.filelist( this.machine_response.id).subscribe(res =>{
            this.machine_id = this.machine_response[0].id;
            let data = this.machine_id;
            localStorage.setItem('machine_id', data);
            this.getmachine(this.machine_response[0].id);
        });
    }
    upload(demo) {
        this.service.cnc_upload(demo, this.machine_id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res.status);
            location.reload();
        });
    }
    new_download(idest, val) {
        let scotch = {
            "id": this.machine_id,
            "file_name": idest,
            "user_id": this.user,
            "position": val
        };
        this.service.download(scotch).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            var file = new Blob([res], {
                type: 'text/json;charset=utf-8'
            });
            var data = "text/json;charset=utf-8," + encodeURIComponent(data);
            Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(file, scotch.file_name);
        });
    }
    new_sdownload(latest, position) {
        let scotch = {
            "id": this.machine_id,
            "file_name": latest,
            "user_id": this.user,
            "position": position
        };
        this.service.downloaded(scotch).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            var file = new Blob([res], {
                type: 'text/json;charset=utf-8'
            });
            var data = "text/json;charset=utf-8," + encodeURIComponent(data);
            Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(file, scotch.file_name);
        });
    }
    reload() {
        throw new Error("Method not implemented.");
    }
    new_check(val) {
        this.service.cnc_receive(val, this.machine_id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res.status);
            location.reload();
        });
    }
    getmachine(id) {
        this.myLoader = true;
        this.service.display_reason(id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            this.myLoader = false;
            this.reason = res;
            this.masterate = res.master_location;
            this.slavate = res.slave_location;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.reason);
            this.slave = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.reason);
            if (res['status'] != null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res['status']);
            }
        });
    }
    ngOnDestroy() {
    }
};
MasterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] },
    { type: _Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__["ProgramListService"] }
];
MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/master.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master.component.scss */ "./src/app/Components/master/master.component.scss")).default]
    })
], MasterComponent);

let Dialog = class Dialog {
    constructor(http, dialogRef, data, fb, service) {
        this.http = http;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.tenant = localStorage.getItem('tenant_id');
        this.machine_id = localStorage.getItem('machine_id');
        // this.id = localStorage.getItem('machine_id')
        this.value = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    fileUpload1(event) {
        this.file2 = event.target.files[0];
    }
    ngOnInit() {
        this.test = this.fb.group({
            machine_id: [this.value.edit_shift],
            revision_no: ["",],
        });
        this.service.machine(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            this.machine_response = res;
        });
    }
    logintest() {
        this.add_val = this.test.value;
        this.add_val = this.value.edit_shift;
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            })
        };
        var fd = new FormData();
        fd.append('machine_id', this.test.value.machine_id);
        fd.append('revision_no', '1');
        fd.append('file', this.file2);
        this.http.post("http://yantra.local:40010/api/v1/file_upload", fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(res => {
            if (res['status'] != null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res['status']);
            }
            this.dialogRef.close();
        });
    }
    ngOnDestroy() {
    }
};
Dialog.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__["ProgramListService"] }
];
Dialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], Dialog);

let Delete = class Delete {
    // id:any;
    constructor(service, dialogRef, data, fb) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.startDate = new Date(2020, 0, 1);
        this.machine_id = localStorage.getItem('machine_id');
        // this.id = localStorage.getItem('machine_id')
        this.value = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.login = this.fb.group({
            user_name: ["",],
            reason: ["",],
            date: ["",]
        });
    }
    logintest() {
        this.add_val = this.login.value;
        this.add_val["id"] = this.machine_id;
        this.service.delete(this.login.value).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
            if (res['status'] != null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res['status']);
            }
            this.dialogRef.close();
        });
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    ngOnDestroy() {
    }
};
Delete.ctorParameters = () => [
    { type: _Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__["ProgramListService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Delete = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/master/delete.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], Delete);



/***/ }),

/***/ "./src/app/Components/master/master.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Components/master/master.module.ts ***!
  \****************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master.component */ "./src/app/Components/master/master.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/Components/shared/shared.module.ts");
/* harmony import */ var _Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Service/app/programlist.service */ "./src/app/Service/app/programlist.service.ts");







const routes = [{ path: '', component: _master_component__WEBPACK_IMPORTED_MODULE_4__["MasterComponent"] }];
let MasterModule = class MasterModule {
};
MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_master_component__WEBPACK_IMPORTED_MODULE_4__["MasterComponent"], _master_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"], _master_component__WEBPACK_IMPORTED_MODULE_4__["Delete"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_master_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"], _master_component__WEBPACK_IMPORTED_MODULE_4__["Delete"]],
        providers: [_Service_app_programlist_service__WEBPACK_IMPORTED_MODULE_6__["ProgramListService"]]
    })
], MasterModule);



/***/ }),

/***/ "./src/app/Service/app/programlist.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Service/app/programlist.service.ts ***!
  \****************************************************/
/*! exports provided: ProgramListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramListService", function() { return ProgramListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/authentication/token.service */ "./src/app/Service/core/authentication/token.service.ts");




let ProgramListService = class ProgramListService {
    constructor(token, http) {
        this.token = token;
        this.http = http;
        this.tenantId = this.token.getTenantID();
    }
    machine(tenantId) {
        return this.http.get('machines?tenant_id=' + tenantId);
    }
    file_upload(value) {
        return this.http.post('file_upload', value);
    }
    display_reason(id) {
        return this.http.get('file_list?id=' + id);
    }
    cnc_upload(demo, test) {
        return this.http.get('file_send_to_cnc?file_name=' + demo + '&&machine_id=' + test);
    }
    cnc_receive(val, ue) {
        return this.http.get('file_receive_from_cnc?file_name=' + val + '&&machine_id=' + ue);
    }
    delete(val) {
        return this.http.post('file_delete', val);
    }
    download(value) {
        return this.http.post('file_download', value, { responseType: 'blob' });
    }
    downloaded(slave) {
        return this.http.post('file_download', slave, { responseType: 'blob' });
    }
};
ProgramListService.ctorParameters = () => [
    { type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProgramListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgramListService);

// post_file(relativeUrlPath: string, body: any, params?: object): Observable<Blob> {
//   return this.http.post(relativeUrlPath, body, {responseType: 'blob'});
//   }


/***/ })

}]);
//# sourceMappingURL=Components-master-master-module-es2015.js.map