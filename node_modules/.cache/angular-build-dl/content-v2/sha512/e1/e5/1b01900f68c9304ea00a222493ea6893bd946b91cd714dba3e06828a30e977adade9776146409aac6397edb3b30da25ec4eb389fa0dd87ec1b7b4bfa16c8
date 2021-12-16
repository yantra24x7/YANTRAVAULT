(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-reason-reason-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/reason/reason.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/reason/reason.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReasonReasonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <section class=\"page\">\n  <div class=\"section_top_padding\">\n    <div class=\"container-fluid\">\n      <div class=\"page_title_sec\">\n        <h2 class=\"sub_title\">\n          <mat-icon class=\"v-align-middle display\">laptop</mat-icon>\n          <span class=\"v-align-middle\">Reason</span>\n        </h2>\n        <div class=\"page_title_sec align_right\">\n          <div class=\"filter_sec\">\n                      \n               <div class=\"filter_field\">\n              <mat-form-field appearance=\"outline\">\n                <mat-select placeholder=\"Select Machine\"  required \n                [(ngModel)]=\"machine_id\">\n                  <mat-option *ngFor=\"let file of reason_response\" [value]=\"file.id\" (click)=\"code_compare(file.id)\">{{file.machine_name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n            <div class=\"table_search\">\n              <input class=\"form-control\" (keyup)=\"dolly($event.target.value)\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search\">\n                     </div>\n        </div>\n      </div>\n\n\n      <mat-card class=\"card_sec\">\n        <mat-card-content class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef> #</th>\n              <td mat-cell *matCellDef = \"let i=index;\"> {{i+1}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"user_name\">\n              <th mat-header-cell *matHeaderCellDef> User Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.user_name || '---'}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"machine_name\">\n              <th mat-header-cell *matHeaderCellDef> Machine Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.machine_name || '---'}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"description\">\n              <th mat-header-cell *matHeaderCellDef> Description </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.description || '---'}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"old_revision_no\">\n              <th mat-header-cell *matHeaderCellDef> Old Revision Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.old_revision_no || '---'}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"new_revision_no\">\n              <th mat-header-cell *matHeaderCellDef> New Revision Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.new_revision_no || '---'}} </td>\n            </ng-container>\n\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"file_name\">\n              <th mat-header-cell *matHeaderCellDef>File Name</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.file_name || '---' }} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </mat-card-content>\n        <mat-card-content *ngIf=\"reason.length==0\" class=\"no_data_found\">\n          <h2>No data found</h2>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./src/app/Components/reason/reason.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/reason/reason.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReasonReasonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL3JlYXNvbi9yZWFzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3JlYXNvbi9yZWFzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/reason/reason.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/reason/reason.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReasonComponent */

  /***/
  function srcAppComponentsReasonReasonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReasonComponent", function () {
      return ReasonComponent;
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


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Nav/navbar.service */
    "./src/app/Nav/navbar.service.ts");
    /* harmony import */


    var _Service_app_reason_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Service/app/reason.service */
    "./src/app/Service/app/reason.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); //navservice


    let ReasonComponent = class ReasonComponent {
      constructor(nav, service) {
        this.nav = nav;
        this.service = service;
        this.displayedColumns = ['position', 'user_name', 'machine_name', 'description', 'old_revision_no', 'new_revision_no', 'file_name'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();

        this.dolly = value => {
          this.dataSource.filter = value.trim().toLocaleLowerCase();
        };

        this.nav.show();
        this.tenant = localStorage.getItem('tenant_id');
      }

      ngOnInit() {
        this.service.tenant_id(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(res => {
          this.reason_response = res;
          this.machine_id = this.reason_response[0].id;
          this.service.display_reason(this.machine_id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(res => {
            this.reason = res;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.reason);
          });
        });
      }

      code_compare(id) {
        this.service.display_reason(id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(res => {
          this.reason = res;
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.reason);
        });
      }

      ngOnDestroy() {}

    };

    ReasonComponent.ctorParameters = () => [{
      type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]
    }, {
      type: _Service_app_reason_service__WEBPACK_IMPORTED_MODULE_4__["ReasonService"]
    }];

    ReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reason',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reason.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/reason/reason.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reason.component.scss */
      "./src/app/Components/reason/reason.component.scss")).default]
    })], ReasonComponent);
    /***/
  },

  /***/
  "./src/app/Components/reason/reason.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/Components/reason/reason.module.ts ***!
    \****************************************************/

  /*! exports provided: ReasonModule */

  /***/
  function srcAppComponentsReasonReasonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReasonModule", function () {
      return ReasonModule;
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


    var _reason_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reason.component */
    "./src/app/Components/reason/reason.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/Components/shared/shared.module.ts");

    const routes = [{
      path: '',
      component: _reason_component__WEBPACK_IMPORTED_MODULE_4__["ReasonComponent"]
    }];
    let ReasonModule = class ReasonModule {};
    ReasonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reason_component__WEBPACK_IMPORTED_MODULE_4__["ReasonComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ReasonModule);
    /***/
  },

  /***/
  "./src/app/Service/app/reason.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Service/app/reason.service.ts ***!
    \***********************************************/

  /*! exports provided: ReasonService */

  /***/
  function srcAppServiceAppReasonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReasonService", function () {
      return ReasonService;
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

    let ReasonService = class ReasonService {
      constructor(token, http) {
        this.token = token;
        this.http = http;
        this.tenantId = this.token.getTenantID();
      }

      tenant_id(tenantId) {
        return this.http.get('machines?tenant_id=' + tenantId);
      }

      display_reason(id) {
        return this.http.get('code_compare_reasons?id=' + id);
      }

    };

    ReasonService.ctorParameters = () => [{
      type: _core_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ReasonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReasonService);
    /***/
  }
}]);
//# sourceMappingURL=Components-reason-reason-module-es5.js.map