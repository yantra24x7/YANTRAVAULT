(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-backup-backup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBackupBackupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page\">\n  <div *ngIf=\"myLoader\" class=\"spinner\">\n    <img src=\"assets/images/spinner.gif\">\n  </div>\n  <div class=\"section_top_padding\">\n    <div class=\"container-fluid\">\n      <div class=\"page_title_sec\">\n        <h2 class=\"sub_title\">\n          <mat-icon class=\"v-align-middle display\">backup</mat-icon>\n          <span class=\"v-align-middle\">Backup</span>\n        </h2>\n\n        <div class=\"filter_sec\">\n          <div class=\"filter_field\">\n            <div class=\"filter_field\">\n              <mat-form-field appearance=\"outline\">\n                <mat-select placeholder=\"Select Machine\" [(ngModel)]=\"machine_id\"\n                  (selectionChange)=\"getmachine($event.value)\" matNativeControl required>\n                  <mat-option *ngFor=\"let machine of machine_response\" [value]=\"machine.id\">\n                    {{machine.machine_name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n            </div>\n          </div>\n          <div class=\"form-button\">\n            <button class=\"subit\" (click)=\"openDialog(machine_id)\" class=\"upload_btn\">File Upload</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"backup_sec\">\n        <div class=\"col\">\n          <!-- <h1>Backup</h1> -->\n          <mat-card class=\"card_sec\">\n            <mat-card-content class=\"table-responsive\">\n              <table>\n                <thead>\n                  <tr>\n                    <!-- <th>#</th> -->\n                    <th>Name</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tr *ngFor=\"let master of backup\">\n                  <!-- <td></td> -->\n                  <td>{{master}}</td>\n                  <td>\n\n                    <div><a class=\"Download\" matTooltip=\"Download\" (click)=\"new_download(master,'Backup')\"><i class=\"fa fa-download\"\n                          aria-hidden=\"true\"></i></a></div>\n\n\n\n                  </td>\n                </tr>\n              </table>\n            </mat-card-content>\n          </mat-card>\n\n        \n\n\n        </div>\n        <div *ngIf=\"backup.length==0\" class=\"no_data_found\">\n          <h2>No data found</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBackupBackupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal_sec\">\r\n  <mat-toolbar>\r\n    <h3>File Upload</h3>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n  </mat-toolbar>\r\n  <div class=\"dialog-form\">\r\n    <div class=\"filter_sec\">\r\n      <form [formGroup]=\"test\" (ngSubmit)=\"testform(test.value)\" class=\"form_sec\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-select placeholder=\"Select Machine\"   matNativeControl required formControlName=\"machine_id\">\r\n            <mat-option *ngFor=\"let machine of machine_response\" [value]=\"machine.id\">\r\n                {{machine.machine_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Reason</mat-label>\r\n          <input matInput formControlName=\"reason\" type=\"text\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"form-group custom_file_upload\">\r\n          <label for=\"file\">Choose File</label><br /> <input type=\"file\" id=\"file\" (change)=\"fileUpload1($event)\">\r\n        </div>\r\n        \r\n        <div class=\"form-button text-right\">\r\n          <button mat-raised-button [disabled]=\"test.invalid\" class=\"filter_btn btn_orange\">\r\n            Save</button>\r\n          <button mat-raised-button (click)=\"onNoClick()\" class=\"filter_btn btn_default ml-16\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/backup/backup.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/backup/backup.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBackupBackupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter_sec form {\n  display: -webkit-box;\n  display: flex; }\n\n.spinner {\n  background: #262932;\n  height: 100vh;\n  opacity: 0.9;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  z-index: 999; }\n\n.spinner img {\n  width: 90px;\n  margin-top: -130px; }\n\n.backup_sec {\n  display: -webkit-box;\n  display: flex; }\n\n.backup_sec .col {\n    width: calc(100% /1);\n    padding: 0; }\n\n.backup_sec .col h1 {\n      font-size: 18px;\n      font-weight: 400;\n      margin-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9Db21wb25lbnRzL2JhY2t1cC9iYWNrdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBRGY7SUFHTSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFBOztBQUpoQjtNQU1VLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9iYWNrdXAvYmFja3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcl9zZWMge1xyXG4gICAgZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxufVxyXG4uc3Bpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyOTMyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2t1cF9zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvMSk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/backup/backup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/backup/backup.component.ts ***!
    \*******************************************************/

  /*! exports provided: BackupComponent, Backup */

  /***/
  function srcAppComponentsBackupBackupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackupComponent", function () {
      return BackupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Backup", function () {
      return Backup;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Nav/navbar.service */
    "./src/app/Nav/navbar.service.ts");
    /* harmony import */


    var _Service_app_backup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Service/app/backup.service */
    "./src/app/Service/app/backup.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let BackupComponent = class BackupComponent {
      constructor(dialog, fb, nav, service) {
        this.dialog = dialog;
        this.fb = fb;
        this.nav = nav;
        this.service = service;
        this.myLoader = false;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.tenant = localStorage.getItem('tenant_id');
        this.user = localStorage.getItem('user_id');
        this.nav.show();
      }

      openDialog(machine) {
        const dialogRef = this.dialog.open(Backup, {
          width: '250px',
          data: {
            edit_shift: machine
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }

      ngOnInit() {
        this.service.machine(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.machine_response = res; // this.service.filelist( this.machine_response.id).subscribe(res =>{

          this.machine_id = this.machine_response[0].id;
          this.getmachine(this.machine_response[0].id);
        });
      }

      getmachine(id) {
        this.myLoader = true;
        this.service.display_reason(id).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.myLoader = false;
          this.backup = res.backup_location; // this.dataSource=new MatTableDataSource(this.backup)

          if (res['status'] != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(res['status']);
          }
        });
      }

      new_download(name, position) {
        let scotch = {
          "id": this.machine_id,
          "file_name": name,
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

      ngOnDestroy() {}

    };

    BackupComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]
    }, {
      type: _Service_app_backup_service__WEBPACK_IMPORTED_MODULE_5__["BackupService"]
    }];

    BackupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-backup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./backup.component.scss */
      "./src/app/Components/backup/backup.component.scss")).default]
    })], BackupComponent);
    let Backup = class Backup {
      constructor(http, dialogRef, data, fb, service) {
        this.http = http;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.tenant = localStorage.getItem('tenant_id');
        this.user_id = localStorage.getItem('user_id');
        this.value = data;
      }

      fileUpload1(event) {
        this.file2 = event.target.files[0];
      }

      onNoClick() {
        this.dialogRef.close();
      }

      ngOnInit() {
        this.test = this.fb.group({
          machine_id: [this.value.edit_shift],
          reason: [""]
        });
        this.service.machine_lock(this.tenant).pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this)).subscribe(res => {
          this.machine_response = res;
        });
      }

      testform(val) {
        let headers = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("token")
          })
        };
        this.add_val = val;
        this.add_val = this.value.edit_shift;
        var fd = new FormData();
        fd.append('machine_id', this.test.value.machine_id);
        fd.append('reason', this.test.value.reason);
        fd.append('user_id', this.user_id);
        fd.append('file', this.file2);
        this.http.post("http://yantra.local:40010/api/v1/backup_upload", fd, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }).subscribe(res => {
          if (res['status'] != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(res['status']);
          }

          this.dialogRef.close();
        });
      }

      ngOnDestroy() {}

    };

    Backup.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _Service_app_backup_service__WEBPACK_IMPORTED_MODULE_5__["BackupService"]
    }];

    Backup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'backup-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/backup/backup.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], Backup);
    /***/
  },

  /***/
  "./src/app/Components/backup/backup.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/Components/backup/backup.module.ts ***!
    \****************************************************/

  /*! exports provided: BackupModule */

  /***/
  function srcAppComponentsBackupBackupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackupModule", function () {
      return BackupModule;
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


    var _backup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./backup.component */
    "./src/app/Components/backup/backup.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/Components/shared/shared.module.ts"); //import { BackupService} from '../../Service/app/backup.service';


    const routes = [{
      path: '',
      component: _backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"]
    }];
    let BackupModule = class BackupModule {};
    BackupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"], _backup_component__WEBPACK_IMPORTED_MODULE_4__["Backup"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      entryComponents: [_backup_component__WEBPACK_IMPORTED_MODULE_4__["Backup"]]
    })], BackupModule);
    /***/
  },

  /***/
  "./src/app/Service/app/backup.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Service/app/backup.service.ts ***!
    \***********************************************/

  /*! exports provided: BackupService */

  /***/
  function srcAppServiceAppBackupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackupService", function () {
      return BackupService;
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

    let BackupService = class BackupService {
      constructor(http) {
        this.http = http;
      }

      machine(tenantId) {
        return this.http.get('machines?tenant_id=' + tenantId);
      }

      display_reason(id) {
        return this.http.get('backup_file_list?id=' + id);
      }

      machine_lock(tenantId) {
        return this.http.get('machines?tenant_id=' + tenantId);
      }

      backup_folder(value) {
        return this.http.post('backup_upload', value);
      }

      downloaded(slave) {
        return this.http.post('file_download', slave, {
          responseType: 'blob'
        });
      }

    };

    BackupService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    BackupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackupService);
    /***/
  }
}]);
//# sourceMappingURL=Components-backup-backup-module-es5.js.map