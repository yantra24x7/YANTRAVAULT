(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-user-management-user-management-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/edit.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/edit.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserManagementEditHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal_sec\">\r\n    <mat-toolbar class=\"forum\">\r\n        <h3>New User Registaration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form scroll_form\">\r\n        <div class=\"filter_sec\">\r\n                <form [formGroup]=\"login\" class=\"form_sec\">\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput formControlName=\"first_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput formControlName=\"last_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Email Id</mat-label>\r\n                        <input matInput formControlName=\"email_id\" type=\"email\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput formControlName=\"password\"  [type]=\" hide ? 'password' : 'text'\">\r\n                       <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n                        </mat-icon>\r\n\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Mobile Number</mat-label>\r\n                        <input matInput formControlName=\"phone_number\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Remarks</mat-label>\r\n                        <input matInput formControlName=\"remarks\" type=\"text\">\r\n                    </mat-form-field>\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-select placeholder=\"Select Role\" matNativeControl required formControlName=\"role_id\">\r\n                            <mat-option *ngFor=\"let role of roles_list\" [value]=\"role\">{{role}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n\r\n                    <div class=\"form-button text-right\">\r\n                        <button mat-raised-button [disabled]=\"login.invalid\" (click)=\"editdata()\"  class=\"filter_btn btn_orange\">\r\n                            Save</button>\r\n                        <button mat-raised-button (click)=\"cancel()\"\r\n                            class=\"filter_btn btn_default ml-16\" (click)=\"onNoClick()\">Close</button>\r\n                    </div>\r\n                </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user-management.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user-management.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserManagementUserManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page\">\n  <div *ngIf=\"myLoader\" class=\"spinner\">\n    <img src=\"assets/images/spinner.gif\">\n  </div>\n  <div class=\"section_top_padding\">\n    <div class=\"container-fluid\">\n      <div class=\"page_title_sec\">\n        <h2 class=\"sub_title\">\n          <mat-icon class=\"v-align-middle display\">alarm</mat-icon>\n          <span class=\"v-align-middle\">User Registration</span>\n        </h2>\n        <div class=\"add_new\">\n          <mat-icon class=\"circle\" (click)=\"user()\">add</mat-icon>\n        </div>\n      </div>\n      <mat-card class=\"card_sec table-responsive\">\n        <mat-card-content>\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"first_name\">\n              <th mat-header-cell *matHeaderCellDef> User Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.first_name || '---'}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"email_id\">\n              <th mat-header-cell *matHeaderCellDef> Email Id </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.email_id || '---'}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"phone_number\">\n              <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.phone_number || '---'}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"role_name\">\n              <th mat-header-cell *matHeaderCellDef> Role </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.role_name || '---'}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <!-- <mat-header-cell *matHeaderCellDef> Action </mat-header-cell> -->\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <ul *matCellDef=\"let element\" class=\"table_action\">\n                <li>\n                  <mat-icon mat-button aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"user_edit(element)\"\n                    mattooltip=\"Edit\">edit\n                  </mat-icon>\n                </li>\n                <li>\n                  <mat-icon mat-button aria-hidden=\"false\" aria-label=\"Example home icon\"\n                    (click)=\"user_delete(element.id)\" mattooltip=\"Delete\">delete\n                  </mat-icon>\n                </li>\n              </ul>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <!-- <iframe width=\"600\" height=\"450\" src=\"https://datastudio.google.com/embed/reporting/1P0hefuNqfWnr3rNlksljNEky8pZOixpf/page/gufNB\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe> -->\n  \n  <!-- <div>\n      \n    <iframe width=\"600\" height=\"450\" src=\"https://datastudio.google.com/embed/reporting/1AGRVsC43aOO1tIhSnJHxPSoSJ9p2KzWz/page/sIgNB\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </div> -->\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserManagementUserHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal_sec\">\r\n    <mat-toolbar class=\"forum\">\r\n        <h3>New User Registaration</h3>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <div class=\"dialog-form scroll_form\">\r\n        <div class=\"filter_sec\">\r\n                <form [formGroup]=\"login\" class=\"form_sec\">\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput formControlName=\"first_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput formControlName=\"last_name\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Email Id</mat-label>\r\n                        <input matInput formControlName=\"email_id\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" ng-reflect-pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a\" type=\"email\">\r\n                    </mat-form-field>\r\n                    <mat-error *ngIf=\"login.get('email_id').hasError('email')\"> Enter valid email address</mat-error>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput formControlName=\"password\" [type]=\" hide ? 'password' : 'text'\">\r\n                        <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n                            </mat-icon>\r\n\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Mobile Number</mat-label>\r\n                        <input matInput formControlName=\"phone_number\" maxlength=\"10\"  minlength=\"10\" (keypress)=\"keyPress($event)\" type=\"text\">\r\n                    </mat-form-field>\r\n                    <mat-error *ngIf=\"login.get('phone_number').hasError('text')\"> Enter valid email address</mat-error>\r\n                   \r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Remarks</mat-label>\r\n                        <input matInput formControlName=\"remarks\" type=\"text\">\r\n                    </mat-form-field>\r\n                    \r\n                    <mat-form-field  appearance=\"outline\">\r\n                        <mat-select placeholder=\"Select Role\"  matNativeControl required formControlName=\"role_id\">\r\n                            <mat-option *ngFor=\"let role of roles_list\" [value]=\"role\">{{role}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n    \r\n                    <div class=\"form-button text-right\">\r\n                        <button mat-raised-button [disabled]=\"login.invalid\" (click)=\"logintest()\" class=\"filter_btn btn_orange\"> Save</button>\r\n                        <button mat-raised-button ((click)=\"cancel()\"  (click)=\"onNoClick()\" class=\"filter_btn btn_default ml-16\">Close</button>\r\n                    </div>\r\n                </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/user-management/user-management.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/user-management/user-management.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserManagementUserManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row_sec {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n  .row_sec .mat-form-field {\n    width: 48%; }\n  .row_sec .mat-form-field:nth-child(odd) {\n      margin-right: 16px; }\n  .spinner {\n  background: #262932;\n  height: 100vh;\n  opacity: 0.9;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 999; }\n  .spinner img {\n  width: 90px;\n  margin-top: -130px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDVCxlQUFlLEVBQUE7RUFGdkI7SUFJUSxVQUFVLEVBQUE7RUFKbEI7TUFNWSxrQkFBa0IsRUFBQTtFQUsxQjtFQUNJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd19zZWN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2MjkzMjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNwaW5uZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTMwcHg7XHJcbiAgICAgIH1cclxuICAgICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/user-management/user-management.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/user-management/user-management.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserManagementComponent, User, Edit */

  /***/
  function srcAppComponentsUserManagementUserManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
      return UserManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
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


    var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Nav/navbar.service */
    "./src/app/Nav/navbar.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Service/app/user.service */
    "./src/app/Service/app/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");

    let UserManagementComponent = class UserManagementComponent {
      constructor(nav, fb, dialog, service) {
        this.nav = nav;
        this.fb = fb;
        this.dialog = dialog;
        this.service = service;
        this.displayedColumns = ['first_name', 'email_id', 'phone_number', 'role_name', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]();
        this.myLoader = false;
        this.hide = true;
        this.nav.show();
        this.tenant = localStorage.getItem('tenant_id');
      }

      user() {
        const dialogRef = this.dialog.open(User, {
          width: '450px',
          height: 'auto'
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }

      user_edit(data) {
        const dialogRef = this.dialog.open(Edit, {
          width: '450px',
          data: data
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
          this.ngOnInit();
        });
      }

      ngOnInit() {
        this.service.operator().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.roles_list = res;
        });
        this.myLoader = true;
        this.service.list(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.myLoader = false;
          this.back = res;
          this.roleid = this.back.role_id;
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.back);
        });
      }

      user_delete(id) {
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
                  alert("Deleted Successfully!");
                  this.ngOnInit();
                });
              }
            });
          }
        });
      }

      ngOnDestroy() {}

    };

    UserManagementComponent.ctorParameters = () => [{
      type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }, {
      type: _Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
    }];

    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-management.component.scss */
      "./src/app/Components/user-management/user-management.component.scss")).default]
    })], UserManagementComponent);
    let User = class User {
      constructor(service, dialogRef, data, fb) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.hide = true;
        this.tenant = localStorage.getItem('tenant_id');
        this.user = localStorage.getItem('usertype_id');
        this.approval = localStorage.getItem('approval_id');
        this.role = localStorage.getItem('role_id');
      }

      cancel() {
        this.dialogRef.close();
      }

      keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

      onNoClick() {
        this.dialogRef.close();
      }

      ngOnInit() {
        this.service.operator().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.roles_list = res;
          this.back_list = res.length;
        });
        this.login = this.fb.group({
          first_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          last_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          email_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          phone_number: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          remarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          role_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.service.operator().subscribe(res => {
          this.operator_role = res;
        });
      }

      logintest() {
        this.add_val = this.login.value;
        this.add_val["tenant_id"] = this.tenant;
        this.add_val["usertype_id"] = this.user;
        this.add_val["approval_id"] = this.approval; // this.add_val["role_id"] = this.role;

        this.service.user(this.login.value).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Created Successfully!");
          this.dialogRef.close();
        });
      }

      ngOnDestroy() {}

    };

    User.ctorParameters = () => [{
      type: _Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }];

    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'user-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/user.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-management.component.scss */
      "./src/app/Components/user-management/user-management.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], User);
    let Edit = class Edit {
      constructor(service, dialogRef, data, fb) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.hide = true;
        this.edit_data = data;
      }

      onNoClick() {
        this.dialogRef.close();
      }

      cancel() {
        this.dialogRef.close();
      }

      ngOnInit() {
        this.service.operator().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.roles_list = res;
        });
        this.tenant = localStorage.getItem('tenant_id');
        this.login = this.fb.group({
          first_name: [this.edit_data.first_name],
          last_name: [this.edit_data.last_name],
          email_id: [this.edit_data.email_id],
          password: [this.edit_data.password],
          phone_number: [this.edit_data.phone_number],
          remarks: [this.edit_data.remarks],
          role_id: [this.edit_data.role_name]
        });
        this.service.operator().pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.operator_role = res;
        });
      }

      editdata() {
        this.add_val = this.login.value;
        this.add_val["tenant_id"] = this.tenant;
        this.service.edit(this.edit_data.id, this.add_val).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Updated Successfully!");
          this.dialogRef.close();
        });
      }

      ngOnDestroy() {}

    };

    Edit.ctorParameters = () => [{
      type: _Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }];

    Edit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'edit-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/user-management/edit.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-management.component.scss */
      "./src/app/Components/user-management/user-management.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], Edit);
    /***/
  },

  /***/
  "./src/app/Components/user-management/user-management.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/user-management/user-management.module.ts ***!
    \**********************************************************************/

  /*! exports provided: UserManagementModule */

  /***/
  function srcAppComponentsUserManagementUserManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementModule", function () {
      return UserManagementModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/Components/shared/shared.module.ts");
    /* harmony import */


    var _user_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-management.component */
    "./src/app/Components/user-management/user-management.component.ts");
    /* harmony import */


    var _Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Service/app/user.service */
    "./src/app/Service/app/user.service.ts");

    const routes = [{
      path: '',
      component: _user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"]
    }];
    let UserManagementModule = class UserManagementModule {};
    UserManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"], _user_management_component__WEBPACK_IMPORTED_MODULE_5__["User"], _user_management_component__WEBPACK_IMPORTED_MODULE_5__["Edit"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      entryComponents: [_user_management_component__WEBPACK_IMPORTED_MODULE_5__["User"], _user_management_component__WEBPACK_IMPORTED_MODULE_5__["Edit"]],
      providers: [_Service_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
    })], UserManagementModule);
    /***/
  },

  /***/
  "./src/app/Service/app/user.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Service/app/user.service.ts ***!
    \*********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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

    let UserService = class UserService {
      constructor(http, token) {
        this.http = http;
        this.token = token; // url = environment.serverUrl;

        this.tenantId = this.token.getTenantID();
      }

      operator() {
        return this.http.get('roles');
      }

      user(value) {
        return this.http.post('users', value);
      }

      edit(id, val) {
        return this.http.put('users/' + id, val);
      }

      list(tenantId) {
        return this.http.get('users?tenant_id=' + tenantId);
      }

      delete_row(id) {
        return this.http.delete('users/' + id);
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  }
}]);
//# sourceMappingURL=Components-user-management-user-management-module-es5.js.map