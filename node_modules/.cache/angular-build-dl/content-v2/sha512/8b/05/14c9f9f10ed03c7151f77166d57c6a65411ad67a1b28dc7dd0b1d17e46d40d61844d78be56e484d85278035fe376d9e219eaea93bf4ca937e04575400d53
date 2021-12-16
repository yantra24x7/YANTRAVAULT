(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-filepath-filepath-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/edit.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/edit.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilepathEditHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal_sec\">\r\n    <mat-toolbar class=\"forum\">\r\n        <h3>File Path Registration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form\">\r\n        <div class=\"filter_sec\">\r\n            <form [formGroup]=\"login\" class=\"form_sec\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Ip</mat-label>\r\n                    <input matInput formControlName=\"ip\"  \r\n                     type=\"text\">\r\n                </mat-form-field>\r\n                <div class=\"row_sec\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>User Name</mat-label>\r\n                        <input matInput formControlName=\"user_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput formControlName=\"pass\" [type]=\" hide ? 'password' : 'text'\">\r\n                        <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n                        </mat-icon>\r\n                    </mat-form-field>\r\n                </div>\r\n                <p>File Location</p>\r\n\r\n                <mat-form-field appearance=\"outline\">\r\n                    <!-- <mat-label>Master Location</mat-label> -->\r\n                    <input matInput formControlName=\"master_location\" [readonly]=\"true\" placeholder=\"/home/part_program\" type=\"text\">\r\n                </mat-form-field>\r\n<!-- \r\n                <mat-form-field>\r\n                    <mat-label>Slave</mat-label>\r\n                    <input matInput formControlName=\"slave_location\" type=\"text\">\r\n                </mat-form-field> -->\r\n\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-select placeholder=\"Select Machine\" matNativeControl required formControlName=\"machine_id\">\r\n                        <mat-option *ngFor=\"let file of filepath_response\" [value]=\"file.id\">{{file.machine_name}}\r\n                        </mat-option>\r\n\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <div class=\"form-button text-right\">\r\n                    <button mat-raised-button [disabled]=\"login.invalid\" (click)=\"logintest()\"\r\n                        class=\"filter_btn btn_orange\">\r\n                        Save</button>\r\n                    <button mat-raised-button (click)=\"onNoClick()\" class=\"filter_btn btn_default ml-16\">Close</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/filepath.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/filepath.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilepathFilepathComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page\">\n  <div *ngIf=\"myLoader\" class=\"spinner\">\n    <img src=\"assets/images/spinner.gif\">\n  </div>\n  <div class=\"section_top_padding\">\n    <div class=\"container-fluid\">\n      <div class=\"page_title_sec\">\n        <h2 class=\"sub_title\">\n          <mat-icon class=\"v-align-middle display\">file_copy</mat-icon>\n          <span class=\"v-align-middle\">FilePath Registration</span>\n        </h2>\n        <div class=\"add_new\">\n          <mat-icon class=\"circle\" (click)=\"openDialog()\">add</mat-icon>\n        </div>\n      </div>\n      <mat-card class=\"card_sec\">\n        <mat-card-content class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>#</th>\n              <td mat-cell *matCellDef = \"let i=index;\"> {{i+1}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"machine_name\">\n              <th mat-header-cell *matHeaderCellDef> Machine Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.machine.machine_name || '---'}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"master_location\">\n              <th mat-header-cell *matHeaderCellDef> Master Path </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.master_location || '---'}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"slave_location\">\n              <th mat-header-cell *matHeaderCellDef> Slave Path </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.slave_location || '---'}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"action\">\n              <!-- <mat-header-cell *matHeaderCellDef> Action </mat-header-cell> -->\n\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <ul *matCellDef=\"let element\" class=\"table_action\">\n                <li>\n                  <mat-icon mat-button aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"filepath_edit(element,element.id)\"\n                    mattooltip=\"Edit\">edit\n                  </mat-icon>\n                </li>\n                <li>\n                  <mat-icon mat-button aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"filepath_delete(element.id)\"\n                    mattooltip=\"Delete\">delete\n                  </mat-icon>\n                </li>\n              </ul>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n         \n        </mat-card-content>\n        <mat-card-content *ngIf=\"result.length==0\" class=\"no_data_found\">\n          <h2>No data found</h2>\n        </mat-card-content> \n      </mat-card>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/popup.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/popup.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilepathPopupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal_sec\">\r\n    <mat-toolbar class=\"forum\">\r\n        <h3>File Path Registration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form\">\r\n        <div class=\"filter_sec\">\r\n            <form [formGroup]=\"login\" class=\"form_sec\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Ip</mat-label>\r\n                    <input matInput formControlName=\"ip\" \r\n                     type=\"text\">\r\n                </mat-form-field>\r\n                <div class=\"row_sec\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>User Name</mat-label>\r\n                        <input matInput formControlName=\"user_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput formControlName=\"pass\" [type]=\" hide ? 'password' : 'text'\">\r\n                        <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n                        </mat-icon>\r\n                    </mat-form-field>\r\n                </div>\r\n                <p>File Location</p>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <!-- <mat-label>Master Location</mat-label> -->\r\n                    <input matInput formControlName=\"master_location\"  [readonly]=\"true\" placeholder=\"/home/part_program\" >\r\n                </mat-form-field>\r\n\r\n                <!-- <mat-form-field>\r\n                    <mat-label>Slave</mat-label>\r\n                    <input matInput formControlName=\"slave_location\" type=\"text\">\r\n                </mat-form-field> -->\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-select placeholder=\"Select Machine\" matNativeControl required formControlName=\"machine_id\">\r\n                        <mat-option *ngFor=\"let file of filepath_response\" [value]=\"file.id\">{{file.machine_name}}\r\n                        </mat-option>\r\n\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n\r\n\r\n\r\n                <div class=\"form-button text-right\">\r\n                    <button mat-raised-button  (click)=\"loginform()\"\r\n                        class=\"filter_btn btn_orange\">\r\n                        Save</button>\r\n                    <button mat-raised-button (click)=\"onNoClick()\" class=\"filter_btn btn_default ml-16\">Close</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/filepath/filepath.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/filepath/filepath.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFilepathFilepathComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row_sec {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n  .row_sec .mat-form-field {\n    width: 48%; }\n  .row_sec .mat-form-field:first-child {\n      margin-right: 16px; }\n  .spinner {\n  background: #262932;\n  height: 100vh;\n  opacity: 0.9;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 999; }\n  .spinner img {\n  width: 90px;\n  margin-top: -130px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL2ZpbGVwYXRoL2ZpbGVwYXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZSxFQUFBO0VBRm5CO0lBSUksVUFBVSxFQUFBO0VBSmQ7TUFNUSxrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9maWxlcGF0aC9maWxlcGF0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dfc2Vje1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG4uc3Bpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyOTMyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzMHB4O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/filepath/filepath.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/filepath/filepath.component.ts ***!
    \***********************************************************/

  /*! exports provided: FilepathComponent, Popup, Edit */

  /***/
  function srcAppComponentsFilepathFilepathComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilepathComponent", function () {
      return FilepathComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Popup", function () {
      return Popup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Edit", function () {
      return Edit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Nav/navbar.service */
    "./src/app/Nav/navbar.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Service/app/filepath.service */
    "./src/app/Service/app/filepath.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");

    let FilepathComponent = class FilepathComponent {
      constructor(dialog, fb, nav, service) {
        this.dialog = dialog;
        this.fb = fb;
        this.nav = nav;
        this.service = service;
        this.displayedColumns = ['position', 'machine_name', 'master_location', 'slave_location', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.myLoader = false;
        this.nav.show();
        this.tenant = localStorage.getItem('tenant_id');
      }

      openDialog() {
        const dialogRef = this.dialog.open(Popup, {
          width: '450px',
          data: {
            new: 'new'
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }

      filepath_edit(shift, id) {
        const dialogRef = this.dialog.open(Edit, {
          width: '450px',
          data: {
            edit_shift: shift,
            shift_id: id
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }

      ngOnInit() {
        this.myLoader = true;
        this.service.show_filepath(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.myLoader = false;
          this.result = res;
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.result);
        });
      }

      filepath_delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
          title: 'Are you sure want to delete?',
          // type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(result => {
          if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Please Confirm'
            }).then(destroy => {
              if (destroy.value) {
                this.service.delete_row(id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
                  if (res === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Deleted Succesfully !");
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Delete Succesfully");
                  }

                  this.ngOnInit();
                });
              }
            });
          }
        });
      }

      ngOnDestroy() {}

    };

    FilepathComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]
    }, {
      type: src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]
    }];

    FilepathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filepath',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filepath.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/filepath.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filepath.component.scss */
      "./src/app/Components/filepath/filepath.component.scss")).default]
    })], FilepathComponent);
    let Popup = class Popup {
      constructor(service, dialogRef, data, fb, filepath) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.filepath = filepath;
        this.hide = true; //  this.value = data;

        this.tenant = localStorage.getItem('tenant_id');
      }

      onNoClick() {
        this.dialogRef.close();
      }

      ngOnInit() {
        // if (this.value.new) {
        //     this.login = this.fb.group({
        //       ip: ["",Validators.required],
        //       user_name: ["",Validators.required],
        //       pass: ["",Validators.required],
        //       master_location: ["",Validators.required],
        //       slave_location: ["",Validators.required],
        //       machine_id:["",Validators.required]
        //     })
        //   } else {
        //     this.login = this.fb.group({
        //       ip: [this.value.edit_shift.ip,],
        //       user_name: [this.value.edit_shift.user_name,],
        //       pass: [this.value.edit_shift.pass,],
        //       master_location: [this.value.edit_shift.master_location,],
        //       slave_location: [this.value.edit_shift.slave_location,],
        //       machine_id:[this.value.edit_shift.machine.machine_name,]
        //     })
        //   }
        this.login = this.fb.group({
          ip: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]{10}$')],
          user_name: [""],
          pass: [""],
          master_location: [""],
          machine_id: [""]
        });
        this.filepath.tenant_id().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.filepath_response = res;
        });
        this.service.machine(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {});
      }

      onSelect(id) {
        throw new Error("Method not implemented.");
      }

      loginform() {
        let scotch = {
          "ip": this.login.value.ip,
          "user_name": this.login.value.user_name,
          "pass": this.login.value.pass,
          "machine_id": this.login.value.machine_id,
          "master_location": "/home/part_program",
          "slave_location": "/home/part_program"
        };
        this.filepath.popup(scotch).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(res['status']);
          this.dialogRef.close();
        }); //if (this.value.new) {
        //this.myLoader = true;
        //this.filepath.popup(this.login.value).pipe(untilDestroyed(this)).subscribe(res => {
        //this.myLoader = false;
        //this.toast.success('Created Successfully')
        //this.dialogRef.close();
        //})
        //} else {
        //this.filepath.edit_filepath(this.value.shift_id,data).
        //pipe(untilDestroyed(t his)).subscribe( res => {
        //this.myLoader = false;
        //this.toast.success('Updated Successfully')
        //this.dialogRef.close();
        //})
        //}
      }

      keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

      output(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
          return true;
        }

        alert("You have entered an invalid IP address!");
        return false;
      }

      ngOnDestroy() {}

    };

    Popup.ctorParameters = () => [{
      type: src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: Popup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]
    }];

    Popup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'popup-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/popup.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filepath.component.scss */
      "./src/app/Components/filepath/filepath.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], Popup);
    let Edit = class Edit {
      constructor(service, dialogRef, data, fb, filepath) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.filepath = filepath;
        this.hide = true;
        this.value = data;
        this.tenant = localStorage.getItem('tenant_id');
      }

      onNoClick() {
        this.dialogRef.close();
      }

      output(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
          return true;
        }

        alert("You have entered an invalid IP address!");
        return false;
      }

      ngOnInit() {
        this.login = this.fb.group({
          ip: [this.value.edit_shift.ip],
          user_name: [this.value.edit_shift.user_name],
          pass: [this.value.edit_shift.pass],
          master_location: ["/home/part_program"],
          machine_id: [this.value.edit_shift.machine.id]
        });
        this.filepath.tenant_id().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.filepath_response = res;
        });
        this.service.machine(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {});
      }

      onSelect(id) {
        throw new Error("Method not implemented.");
      }

      logintest() {
        this.add_val = this.login.value;
        this.add_val["slave_location"] = "/home/part_program";
        this.filepath.edit(this.value.edit_shift.id, this.add_val).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Updated Successfully!");
          this.dialogRef.close();
        }); //if (this.value.new) {
        //this.myLoader = true;
        //this.filepath.popup(this.login.value).pipe(untilDestroyed(this)).subscribe(res => {
        //this.myLoader = false;
        //this.toast.success('Created Successfully')
        //this.dialogRef.close();
        //})
        //} else {
        //this.filepath.edit_filepath(this.value.shift_id,data).
        //pipe(untilDestroyed(t his)).subscribe( res => {
        //this.myLoader = false;
        //this.toast.success('Updated Successfully')
        //this.dialogRef.close();
        //})
        //}
      }

      keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

      ngOnDestroy() {}

    };

    Edit.ctorParameters = () => [{
      type: src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: Edit,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: src_app_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]
    }];

    Edit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'edit-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filepath/edit.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filepath.component.scss */
      "./src/app/Components/filepath/filepath.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], Edit);
    /***/
  },

  /***/
  "./src/app/Components/filepath/filepath.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Components/filepath/filepath.module.ts ***!
    \********************************************************/

  /*! exports provided: FilepathModule */

  /***/
  function srcAppComponentsFilepathFilepathModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilepathModule", function () {
      return FilepathModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _filepath_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filepath.component */
    "./src/app/Components/filepath/filepath.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/Components/shared/shared.module.ts");
    /* harmony import */


    var _Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Service/app/filepath.service */
    "./src/app/Service/app/filepath.service.ts");

    const routes = [{
      path: '',
      component: _filepath_component__WEBPACK_IMPORTED_MODULE_4__["FilepathComponent"]
    }];
    let FilepathModule = class FilepathModule {};
    FilepathModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_filepath_component__WEBPACK_IMPORTED_MODULE_4__["FilepathComponent"], _filepath_component__WEBPACK_IMPORTED_MODULE_4__["Popup"], _filepath_component__WEBPACK_IMPORTED_MODULE_4__["Edit"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      entryComponents: [_filepath_component__WEBPACK_IMPORTED_MODULE_4__["Popup"], _filepath_component__WEBPACK_IMPORTED_MODULE_4__["Edit"]],
      providers: [_Service_app_filepath_service__WEBPACK_IMPORTED_MODULE_6__["FilepathService"]]
    })], FilepathModule);
    /***/
  },

  /***/
  "./src/app/Service/app/filepath.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Service/app/filepath.service.ts ***!
    \*************************************************/

  /*! exports provided: FilepathService */

  /***/
  function srcAppServiceAppFilepathServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilepathService", function () {
      return FilepathService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/authentication/token.service */
    "./src/app/Service/core/authentication/token.service.ts");

    let FilepathService = class FilepathService {
      constructor(http, token) {
        this.http = http;
        this.token = token; // url = environment.serverUrl;

        this.tenantId = this.token.getTenantID();
        this.token1 = localStorage.getItem('token');
        let headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(this.token1)
        });
      }

      tenant_id() {
        return this.http.get('machines?tenant_id=' + this.tenantId, this.headers);
      }

      popup(params) {
        return this.http.post('/program_confs', params);
      }

      edit(id, value) {
        return this.http.put('program_confs/' + id, value);
      }

      machine(tenantid) {
        return this.http.get('/machines?tenant_id=' + tenantid);
      }

      show_filepath(tenantId) {
        return this.http.get('program_confs?tenant_id=' + tenantId);
      }

      delete_row(id) {
        return this.http.delete('program_confs/' + id);
      }

      file_list(id) {
        return this.http.get('file_list?id=' + id);
      }

    };

    FilepathService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
    }];

    FilepathService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FilepathService);
    /***/
  }
}]);
//# sourceMappingURL=Components-filepath-filepath-module-es5.js.map