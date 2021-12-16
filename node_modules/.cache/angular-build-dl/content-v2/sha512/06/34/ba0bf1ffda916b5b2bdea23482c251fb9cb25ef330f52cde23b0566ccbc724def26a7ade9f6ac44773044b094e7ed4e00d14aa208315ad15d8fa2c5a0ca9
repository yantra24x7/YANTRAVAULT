(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/file-saver/dist/FileSaver.min.js":
  /*!*******************************************************!*\
    !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFileSaverDistFileSaverMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (a, b) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this, function () {
      "use strict";

      function b(a, b) {
        return "undefined" == typeof b ? b = {
          autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
          autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
          type: a.type
        }) : a;
      }

      function c(b, c, d) {
        var e = new XMLHttpRequest();
        e.open("GET", b), e.responseType = "blob", e.onload = function () {
          a(e.response, c, d);
        }, e.onerror = function () {
          console.error("could not download file");
        }, e.send();
      }

      function d(a) {
        var b = new XMLHttpRequest();
        b.open("HEAD", a, !1);

        try {
          b.send();
        } catch (a) {}

        return 200 <= b.status && 299 >= b.status;
      }

      function e(a) {
        try {
          a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
      }

      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
        var i = f.URL || f.webkitURL,
            j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
          i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function () {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
          var i = document.createElement("a");
          i.href = f, i.target = "_blank", setTimeout(function () {
            e(i);
          });
        }
      } : function (a, b, d, e) {
        if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
        var g = "application/octet-stream" === a.type,
            h = /constructor/i.test(f.HTMLElement) || f.safari,
            i = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((i || g && h) && "object" == typeof FileReader) {
          var j = new FileReader();
          j.onloadend = function () {
            var a = j.result;
            a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null;
          }, j.readAsDataURL(a);
        } else {
          var k = f.URL || f.webkitURL,
              l = k.createObjectURL(a);
          e ? e.location = l : location.href = l, e = null, setTimeout(function () {
            k.revokeObjectURL(l);
          }, 4E4);
        }
      });
      f.saveAs = a.saveAs = a, true && (module.exports = a);
    }); //# sourceMappingURL=FileSaver.min.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js ***!
    \********************************************************************************/

  /*! exports provided: untilDestroyed */

  /***/
  function node_modulesNgxTakeUntilDestroyFesm2015NgxTakeUntilDestroyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "untilDestroyed", function () {
      return untilDestroyed;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isFunction(value) {
      return typeof value === 'function';
    }
    /** @type {?} */


    const untilDestroyed = (componentInstance, destroyMethodName = 'ngOnDestroy') => source => {
      /** @type {?} */
      const originalDestroy = componentInstance[destroyMethodName];

      if (isFunction(originalDestroy) === false) {
        throw new Error("".concat(componentInstance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
      }

      if (!componentInstance['__takeUntilDestroy']) {
        componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        componentInstance[destroyMethodName] = function () {
          isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
          componentInstance['__takeUntilDestroy'].next(true);
          componentInstance['__takeUntilDestroy'].complete();
        };
      }

      return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentInstance['__takeUntilDestroy']));
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRha2UtdW50aWwtZGVzdHJveS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRha2UtdW50aWwtZGVzdHJveS9zcmMvdGFrZS11bnRpbC1kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3QgdW50aWxEZXN0cm95ZWQgPSAoXG4gIGNvbXBvbmVudEluc3RhbmNlLFxuICBkZXN0cm95TWV0aG9kTmFtZSA9ICduZ09uRGVzdHJveSdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBjb21wb25lbnRJbnN0YW5jZVtkZXN0cm95TWV0aG9kTmFtZV07XG4gIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIH0gaXMgdXNpbmcgdW50aWxEZXN0cm95ZWQgYnV0IGRvZXNuJ3QgaW1wbGVtZW50ICR7ZGVzdHJveU1ldGhvZE5hbWV9YFxuICAgICk7XG4gIH1cbiAgaWYgKCFjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pIHtcbiAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICBpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgJiYgb3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10ubmV4dCh0cnVlKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXS5jb21wbGV0ZSgpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRha2VVbnRpbDxUPihjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pKTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBR0Esb0JBQW9CLEtBQUs7SUFDdkIsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEM7O0FBRUQsTUFBYSxjQUFjLEdBQUcsQ0FDNUIsaUJBQWlCLEVBQ2pCLGlCQUFpQixHQUFHLGFBQWEsS0FDOUIsQ0FBSSxNQUFxQjs7SUFDNUIsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RCxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDekMsTUFBTSxJQUFJLEtBQUssQ0FDYixHQUNFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUNoQyxrREFBa0QsaUJBQWlCLEVBQUUsQ0FDdEUsQ0FBQztLQUNIO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDNUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXhELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEdBQUc7WUFDckMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEQsQ0FBQztLQUNIO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map