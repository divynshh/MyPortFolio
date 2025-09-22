function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function _src_app_about_aboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../resume-viewer/resume-viewer.component */
    "./src/app/resume-viewer/resume-viewer.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../skillset/skillset.component */
    "./src/app/skillset/skillset.component.ts");

    function AboutComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var img_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AboutComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var img_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AboutComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var img_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(dialog) {
        _classCallCheck(this, AboutComponent);

        this.dialog = dialog;
        this.images = ['assets/images/collage/1.jpg', 'assets/images/collage/me.jpg', 'assets/images/collage/3.jpg', 'assets/images/collage/4.jpg'];
      }

      return _createClass(AboutComponent, [{
        key: "viewResume",
        value: function viewResume() {
          this.openDialog();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ResumeViewerComponent"], {
            width: '95%',
            height: '90%',
            backdropClass: 'backDrop',
            panelClass: 'dialog-custom'
          });
          dialogRef.afterClosed().subscribe(function () {
            console.log('The dialog was closed');
          });
        }
      }]);
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 24,
      vars: 3,
      consts: [[1, "about-container"], [1, "header"], [1, "marquee-row"], [1, "marquee"], [1, "marquee-content"], ["alt", "profile", 3, "src", 4, "ngFor", "ngForOf"], [1, "intro-row"], [1, "title"], [1, "subtitle"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "skills-row"], [1, "skills-grid"], ["alt", "profile", 3, "src"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_img_6_Template, 1, 1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_img_7_Template, 1, 1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_img_8_Template, 1, 1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Who's this guy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I am a Software Engineer at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CARS24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Gurugram, IN.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I love solving problems. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_19_listener() {
            return ctx.viewResume();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " View Resume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-skillset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_5__["SkillsetComponent"]],
      styles: [".about-container[_ngcontent-%COMP%] {\n  background: #000;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 48px 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n}\n\n\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}\n\n\n\n.intro-row[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 60px;\n}\n\n.intro-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 5px;\n}\n\n.intro-row[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #ddd;\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n\nbutton[mat-flat-button][_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n  font-weight: 500;\n  border-radius: 12px;\n  padding: 8px 20px;\n  transition: transform 0.2s ease;\n}\n\nbutton[mat-flat-button][_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n\n\n.marquee-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  overflow: hidden;\n  border-radius: 14px;\n  box-shadow: 0 6px 30px rgba(255, 255, 255, 0.06);\n}\n\n.marquee[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200%;\n  height: 100%;\n}\n\n.marquee-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  height: 100%;\n  align-items: center;\n  animation: scroll-left 25s linear infinite;\n}\n\n.marquee-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 340px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);\n}\n\n\n\n@keyframes scroll-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n\n\n\n@media (max-width: 768px) {\n  .marquee-row[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n\n  .marquee-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n\n  .intro-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .intro-row[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFRSxnQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUNDSjs7QURFRSxjQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBRENFO0VBQ0Usc0JBQUE7QUNFSjs7QURDRSxnQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ0VKOztBRENFLGNBQUE7O0FBQ0E7RUFDRTtJQUFLLHdCQUFBO0VDR1A7RURGRTtJQUFPLDJCQUFBO0VDS1Q7QUFDRjs7QURIRSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0VDS0o7O0VESEU7SUFDRSxhQUFBO0VDTUo7O0VESkU7SUFDRSxlQUFBO0VDT0o7O0VETEU7SUFDRSxlQUFBO0VDUUo7QUFDRjs7QURMRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDQ4cHggNjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNraWxscyBHcmlkICovXHJcbiAgLnNraWxscy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSW50cm8gUm93ICovXHJcbiAgLmludHJvLXJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuaW50cm8tcm93IC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRyby1yb3cgLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl0ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICB9XHJcbiAgYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLyogTWFycXVlZSBSb3cgKi9cclxuICAubWFycXVlZS1yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWFycXVlZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwtbGVmdCAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAubWFycXVlZS1jb250ZW50IGltZyB7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAvKiBBbmltYXRpb24gKi9cclxuICBAa2V5ZnJhbWVzIHNjcm9sbC1sZWZ0IHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tYXJxdWVlLXJvdyB7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAubWFycXVlZS1jb250ZW50IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW50cm8tcm93IC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5pbnRyby1yb3cgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlcntcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59IiwiLmFib3V0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNDhweCA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDBweDtcbn1cblxuLyogU2tpbGxzIEdyaWQgKi9cbi5za2lsbHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5cbi8qIEludHJvIFJvdyAqL1xuLmludHJvLXJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5pbnRyby1yb3cgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbnRyby1yb3cgLnN1YnRpdGxlIHtcbiAgY29sb3I6ICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl0ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4vKiBNYXJxdWVlIFJvdyAqL1xuLm1hcnF1ZWUtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbn1cblxuLm1hcnF1ZWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXJxdWVlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzY3JvbGwtbGVmdCAyNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubWFycXVlZS1jb250ZW50IGltZyB7XG4gIGhlaWdodDogMzQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4vKiBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgc2Nyb2xsLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYXJxdWVlLXJvdyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5tYXJxdWVlLWNvbnRlbnQgaW1nIHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG5cbiAgLmludHJvLXJvdyAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5pbnRyby1yb3cgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");

    var routes = [{
      path: '',
      component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
    }, {
      path: '**',
      redirectTo: ''
    } // fallback
    ];

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! swiper */
    "./node_modules/swiper/swiper.esm.js");
    /* harmony import */


    var _shared_screen_size_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/screen-size.service */
    "./src/app/shared/screen-size.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    swiper__WEBPACK_IMPORTED_MODULE_4__["Swiper"].use([swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"]]);

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(breakpointObserver, screenSizeService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.screenSizeService = screenSizeService;
        this.title = 'My-Portfolio';
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayNameMap = new Map([[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall, 'XSmall'], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small, 'Small'], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium, 'Medium'], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large, 'Large'], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge, 'XLarge']]);
        breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(function (result) {
          var _a;

          for (var _i = 0, _Object$keys = Object.keys(result.breakpoints); _i < _Object$keys.length; _i++) {
            var query = _Object$keys[_i];

            if (result.breakpoints[query]) {
              _this.currentScreenSize = (_a = _this.displayNameMap.get(query), _a !== null && _a !== void 0 ? _a : 'Unknown');

              _this.screenSizeService.setScreenSize(_this.currentScreenSize); // update service

            }
          }
        });
      }

      return _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed.next();
          this.destroyed.complete();
        }
      }]);
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_screen_size_service__WEBPACK_IMPORTED_MODULE_5__["ScreenSizeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiLm5hdi1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]
        }, {
          type: _shared_screen_size_service__WEBPACK_IMPORTED_MODULE_5__["ScreenSizeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./herotitle/herotitle.component */
    "./src/app/herotitle/herotitle.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./herotitle2/herotitle2.component */
    "./src/app/herotitle2/herotitle2.component.ts");
    /* harmony import */


    var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./social-tray/social-tray.component */
    "./src/app/social-tray/social-tray.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./skill-scale/skill-scale.component */
    "./src/app/skill-scale/skill-scale.component.ts");
    /* harmony import */


    var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./skillset/skillset.component */
    "./src/app/skillset/skillset.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./projectcard/projectcard.component */
    "./src/app/projectcard/projectcard.component.ts");
    /* harmony import */


    var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./get-in-touch/get-in-touch.component */
    "./src/app/get-in-touch/get-in-touch.component.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _contact_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./contact.service */
    "./src/app/contact.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./resume-viewer/resume-viewer.component */
    "./src/app/resume-viewer/resume-viewer.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var swiper_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! swiper/angular */
    "./node_modules/swiper/__ivy_ngcc__/angular/fesm2015/swiper_angular.js");
    /* harmony import */


    var _medium_embed_medium_embed_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./medium-embed/medium-embed.component */
    "./src/app/medium-embed/medium-embed.component.ts");
    /* harmony import */


    var _shared_strip_html_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./shared/strip-html.pipe */
    "./src/app/shared/strip-html.pipe.ts"); // Import SwiperModule here
    // ✅ Adjust path


    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_contact_service__WEBPACK_IMPORTED_MODULE_28__["ContactService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_32__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_strip_html_pipe__WEBPACK_IMPORTED_MODULE_34__["StripHtmlPipe"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__["HerotitleComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"], _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__["Herotitle2Component"], _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__["SkillScaleComponent"], _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__["SkillsetComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__["ProjectcardComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__["GetInTouchComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__["ContactFormComponent"], _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_30__["ResumeViewerComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_31__["BlogComponent"], _medium_embed_medium_embed_component__WEBPACK_IMPORTED_MODULE_33__["MediumEmbedComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_32__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_strip_html_pipe__WEBPACK_IMPORTED_MODULE_34__["StripHtmlPipe"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__["HerotitleComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"], _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__["Herotitle2Component"], _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__["SkillScaleComponent"], _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__["SkillsetComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__["ProjectcardComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__["GetInTouchComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__["ContactFormComponent"], _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_30__["ResumeViewerComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_31__["BlogComponent"], _medium_embed_medium_embed_component__WEBPACK_IMPORTED_MODULE_33__["MediumEmbedComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_32__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"]],
          providers: [_contact_service__WEBPACK_IMPORTED_MODULE_28__["ContactService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // <-- Add this line

        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function _src_app_blog_blogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _medium_embed_medium_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../medium-embed/medium.service */
    "./src/app/medium-embed/medium.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _medium_embed_medium_embed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../medium-embed/medium-embed.component */
    "./src/app/medium-embed/medium-embed.component.ts");

    function BlogComponent_app_medium_embed_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-medium-embed", 13);
      }

      if (rf & 2) {
        var post_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r45);
      }
    }

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent(mediumService, router) {
        _classCallCheck(this, BlogComponent);

        this.mediumService = mediumService;
        this.router = router;
        this.posts = [];
      }

      return _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.mediumService.getPosts().subscribe(function (posts) {
            _this2.posts = posts;
          });
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['/']); // navigates to /blog route
        }
      }]);
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_medium_embed_medium_service__WEBPACK_IMPORTED_MODULE_1__["MediumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 16,
      vars: 2,
      consts: [[1, "nav-bar"], [1, "toolbar-div"], [1, "toolbar-title", 3, "click"], [2, "display", "flex", "justify-content", "flex-end"], [1, "hero-section"], ["mp4Src", "../../assets/videos/hero-blog.mp4", "webmSrc", "../../assets/videos/hero-blog.mp4", "m4vSrc", "../../assets/videos/hero-blog.mp4", 3, "screenSize"], [1, "hero-overlay"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], [1, "blog-container"], [1, "blog-grid"], ["class", "blog-card", 3, "post", 4, "ngFor", "ngForOf"], [1, "blog-card", 3, "post"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_div_click_2_listener() {
            return ctx.goToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-video", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dive Into Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Discover insights, tutorials, and guides to level up your coding journey. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BlogComponent_app_medium_embed_15_Template, 1, 1, "app-medium-embed", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _medium_embed_medium_embed_component__WEBPACK_IMPORTED_MODULE_6__["MediumEmbedComponent"]],
      styles: ["@charset \"UTF-8\";\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n  background: rgba(26, 26, 26, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  z-index: 1000;\n  color: white;\n}\n.brand[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: white;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.3s ease, transform 0.2s ease;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff8c42;\n  transform: translateY(-2px);\n}\n\n.blog-container[_ngcontent-%COMP%] {\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 6rem 2rem 4rem;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: #111;\n  margin-bottom: 0.5rem;\n}\n.blog-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #444;\n  max-width: 700px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.hero-vid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5vh;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.blog-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  width: 90%;\n  max-width: 1400px;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n\n  .blog-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0 1rem;\n  }\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 50vh;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-top: 64px;\n  \n}\n\n.hero-section[_ngcontent-%COMP%]   app-video[_ngcontent-%COMP%], .hero-section[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: 0;\n}\n\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));\n  z-index: 1;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 0 1.5rem;\n  animation: fadeInUp 1.2s ease-out forwards;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 1rem;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 400;\n  line-height: 1.6;\n  max-width: 600px;\n  margin: 0 auto;\n  color: #eaeaea;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    height: 60vh;\n  }\n\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0 1rem;\n  }\n}\n.nav-bar[_ngcontent-%COMP%] {\n  height: 80px;\n  background: black;\n  color: white;\n  box-shadow: 3px 1px 12px 4px #000000;\n  transition: all 0.2s;\n  border-radius: 0;\n  display: flex;\n  position: fixed;\n  \n  top: 0;\n  \n  width: 100%;\n  \n  z-index: 1;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.button[_ngcontent-%COMP%] {\n  min-width: 100px;\n  min-height: 30px;\n  font-weight: 400;\n  font-size: 14px;\n}\n.title[_ngcontent-%COMP%] {\n  min-width: 600px;\n  min-height: 60px;\n  font-weight: 400;\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n}\n.day-night[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n}\n.material-icons-sharp[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 20px;\n  vertical-align: middle;\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n}\n.toolbar-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n  text-align: center;\n  margin-right: auto;\n}\n.toolbar-div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 100%;\n  flex: 1 1 0;\n  min-width: 100%;\n  flex-direction: row;\n  text-align: left;\n  padding-left: 6%;\n  font-size: medium;\n  font-weight: 400;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 4px;\n}\n.side-nav[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #0000007a;\n  margin-top: 80px;\n}\n.toolbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  color: wheat;\n}\n.toolbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: auto;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2NhcnMyNC9QZXJzb25hbF9SZXBvcy9NeVBvcnRGb2xpby9zcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUJBQUE7QUFDQTtFQUNFLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBREVGO0FDQ0Esb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FERUY7QUNDQTtFQUNFLE9BQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7QURFRjtBQ0NBLG1CQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURFRjtBQ0NBLGdCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FERUY7QUNDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURFRjtBQ0NBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FERUY7QUNFQSxjQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0VBLHNCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEscURBQUE7QURBRjtBQ0dBO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBREFGO0FDR0Esc0JBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFREFGOztFQ0dBO0lBQ0UsaUJBQUE7RURBRjs7RUNHQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VEQUY7QUFDRjtBQ0lBLG9CQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQWMsdUNBQUE7RUFDZCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNEJBQUE7QURBcEI7QUNHQSx3QkFBQTtBQUNBOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxVQUFBO0FEQUY7QUNHQSxvQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUVBQUE7RUFJQSxVQUFBO0FESEY7QUNNQSxtQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FESEY7QUNNQSxlQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QURIRjtBQ01BLGtCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QURIRjtBQ01BLHdCQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFREhGO0VDS0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RURIRjtBQUNGO0FDTUEsNkJBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtFREpGOztFQ09BO0lBQ0UsaUJBQUE7RURKRjs7RUNPQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VESkY7QUFDRjtBQ09BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDRSxlQUFBO0VBQWlCLHFDQUFBO0VBQ2pCLE1BQUE7RUFBUSwrQ0FBQTtFQUNSLFdBQUE7RUFBYSxlQUFBO0VBQ2YsVUFBQTtBREZGO0FDU0U7RUFDSSxjQUFBO0FETk47QUNTRTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUROTjtBQ1NJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRE5OO0FDU0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FETlI7QUNTSTtFQUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QURQUjtBQ1dJO0VBQ0csZ0JBQUE7RUFDRCxNQUFBO0FEUk47QUNXSTtFQUNFO2dEQUFBO0VBRUQsY0FBQTtBRFJMO0FDVUc7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FEUEw7QUNXRztFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEUkw7QUNXRztFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUkw7QUNlRTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FEWkY7QUNlRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QURaSjtBQ2lCRTtFQUVFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBRGZKIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyog8J+MkCBHbG9iYWwgRm9udCAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIPCfjJ8gU2xlZWsgTmF2YmFyICovXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAycmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjYsIDAuODUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICB6LWluZGV4OiAxMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5uYXZiYXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmY4YzQyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi8qIEJsb2cgQ29udGFpbmVyICovXG4uYmxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnJlbSAycmVtIDRyZW07XG59XG5cbi8qIEJsb2cgSGVhZGVyICovXG4uYmxvZy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5ibG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMTExO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5ibG9nLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmhlcm8tdmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogQmxvZyBHcmlkICovXG4uYmxvZy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG5cbi8qIEJsb2cgQ2FyZCBTdHlsaW5nICovXG4uYmxvZy1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xufVxuXG4uYmxvZy1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi8qIFJlc3BvbnNpdmUgVHdlYWtzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5cbiAgLmJsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG5cbiAgLmJsb2ctc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbi8qIPCfjqUgSGVybyBTZWN0aW9uICovXG4uaGVyby1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICAvKiBBZGp1c3QgaGVpZ2h0IGZvciBhIGNpbmVtYXRpYyBmZWVsICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICAvKiBPZmZzZXQgZm9yIGZpeGVkIG5hdmJhciAqL1xufVxuXG4vKiDwn46sIEZ1bGxzY3JlZW4gVmlkZW8gKi9cbi5oZXJvLXNlY3Rpb24gYXBwLXZpZGVvLFxuLmhlcm8tc2VjdGlvbiB2aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMDtcbn1cblxuLyog8J+MkSBEYXJrIE92ZXJsYXkgZm9yIFJlYWRhYmlsaXR5ICovXG4uaGVyby1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIOKcqCBIZXJvIENvbnRlbnQgKi9cbi5oZXJvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAxLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4vKiBIZXJvIFRpdGxlICovXG4uaGVyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi8qIEhlcm8gU3VidGl0bGUgKi9cbi5oZXJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2VhZWFlYTtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4vKiDwn46tIFNpbXBsZSBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi8qIPCfk7EgTW9iaWxlIFJlc3BvbnNpdmVuZXNzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICB9XG5cbiAgLmhlcm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG5cbiAgLmhlcm8tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbi5uYXYtYmFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXG4gIHRvcDogMDtcbiAgLyogUG9zaXRpb24gdGhlIG5hdmJhciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIHotaW5kZXg6IDE7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kYXktbmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1zaGFycCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxuICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRvb2xiYXItZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b29sYmFyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZmxleDogMSAxIDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnNpZGUtbmF2IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2E7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi50b29sYmFyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgY29sb3I6IHdoZWF0O1xufVxuXG4udG9vbGJhci1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXg6IDE7XG59IiwiLyog8J+MkCBHbG9iYWwgRm9udCAqL1xyXG4qIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyog8J+MnyBTbGVlayBOYXZiYXIgKi9cclxuLm5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjYsIDAuODUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJyYW5kIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLm5hdmJhciBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmOGM0MjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi8qIEJsb2cgQ29udGFpbmVyICovXHJcbi5ibG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnJlbSAycmVtIDRyZW07XHJcbn1cclxuXHJcbi8qIEJsb2cgSGVhZGVyICovXHJcbi5ibG9nLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5ibG9nLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMTExO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmJsb2ctc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmhlcm8tdmlke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDV2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBcclxuXHJcbn1cclxuLyogQmxvZyBHcmlkICovXHJcbi5ibG9nLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxufVxyXG5cclxuLyogQmxvZyBDYXJkIFN0eWxpbmcgKi9cclxuLmJsb2ctY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJsb2ctY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBUd2Vha3MgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG5cclxuICAuYmxvZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcblxyXG4gIC5ibG9nLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiDwn46lIEhlcm8gU2VjdGlvbiAqL1xyXG4uaGVyby1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHZoOyAvKiBBZGp1c3QgaGVpZ2h0IGZvciBhIGNpbmVtYXRpYyBmZWVsICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXRvcDogNjRweDsgLyogT2Zmc2V0IGZvciBmaXhlZCBuYXZiYXIgKi9cclxufVxyXG5cclxuLyog8J+OrCBGdWxsc2NyZWVuIFZpZGVvICovXHJcbi5oZXJvLXNlY3Rpb24gYXBwLXZpZGVvLFxyXG4uaGVyby1zZWN0aW9uIHZpZGVvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi8qIPCfjJEgRGFyayBPdmVybGF5IGZvciBSZWFkYWJpbGl0eSAqL1xyXG4uaGVyby1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC42KVxyXG4gICk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyog4pyoIEhlcm8gQ29udGVudCAqL1xyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAxLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG4vKiBIZXJvIFRpdGxlICovXHJcbi5oZXJvLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHRleHQtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLyogSGVybyBTdWJ0aXRsZSAqL1xyXG4uaGVyby1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6ICNlYWVhZWE7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4vKiDwn46tIFNpbXBsZSBBbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLyog8J+TsSBNb2JpbGUgUmVzcG9uc2l2ZW5lc3MgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgfVxyXG5cclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYmFye1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjBzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2V0IHRoZSBuYXZiYXIgdG8gZml4ZWQgcG9zaXRpb24gKi9cclxuICAgIHRvcDogMDsgLyogUG9zaXRpb24gdGhlIG5hdmJhciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHotaW5kZXg6IDE7ICBcclxuICB9XHJcbiAgLy8gbWF0LXRvb2xiYXI6aG92ZXIge1xyXG4gIFxyXG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcclxuICBcclxuICAvLyB9XHJcbiAgLnNwYWNlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAgIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfSAgXHJcbiAgXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH0gIFxyXG4gIFxyXG4gICAgLmRheS1uaWdodHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdGVyaWFsLWljb25zLXNoYXJwe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgIH1cclxuICAgLmRyYXdlci1jb250YWluZXJ7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIFxyXG4gICB9XHJcbiAgXHJcbiAgIC50b29sYmFyLWRpdiBkaXZ7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgfVxyXG4gIFxyXG4gICAudG9vbGJhci1kaXZ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgZmxleDoxIDEgMDsgXHJcbiAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgXHJcbiAgICAgXHJcbiAgIH1cclxuICBcclxuICBcclxuICBcclxuICAuc2lkZS1uYXZ7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3YTtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhci1idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgLnRvb2xiYXItbWVudXtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmbGV4OjE7XHJcbiAgfVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [{
          type: _medium_embed_medium_service__WEBPACK_IMPORTED_MODULE_1__["MediumService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact-form/contact-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function _src_app_contactForm_contactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contact.service */
    "./src/app/contact.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ContactFormComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_form_0_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.onSubmit(ctx_r97.FormData.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r95.FormData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r95.FormData.valid);
      }
    }

    function ContactFormComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.onSubmit(ctx_r99.FormData.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r96.FormData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r96.FormData.valid);
      }
    }

    var ContactFormComponent =
    /*#__PURE__*/
    function () {
      function ContactFormComponent(builder, contact, _snackBar) {
        _classCallCheck(this, ContactFormComponent);

        this.builder = builder;
        this.contact = contact;
        this._snackBar = _snackBar;
      }

      return _createClass(ContactFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FormData = this.builder.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(FormData) {
          var _this3 = this;

          var templateParams = {
            name: FormData.fullname,
            email: FormData.email,
            message: FormData.comment
          };
          var data = {
            service_id: 'service_c1v8ygl',
            template_id: 'template_kqr4r1o',
            user_id: 'user_0YExjRBIbt7iorilBHzUi',
            template_params: templateParams
          };
          console.log(FormData);
          this.contact.sendEmail(data).subscribe(function (x) {
            console.log(x);

            if (x.status == 200) {
              _this3.openSnackBar("Message Sent! Divyansh will respond soon!", "OK");
            }

            _this3.FormData.reset();
          }, function (error) {
            console.log(error);

            if (error.status == 200) {
              _this3.openSnackBar("Message Sent! Divyansh will respond soon!", "OK");
            } else {
              _this3.openSnackBar("Message Failed!", "OK");
            }

            _this3.FormData.reset(); // get the status as error.status

          });
        }
      }]);
    }();

    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "form-big", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "form-lowres", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form-big", 3, "formGroup", "ngSubmit"], ["formControlName", "fullname", "name", "name", "type", "text", "placeholder", "Name", 1, "feedback-input"], ["formControlName", "email", "name", "email", "type", "text", "placeholder", "Email", 1, "feedback-input"], ["formControlName", "comment", "name", "text", "placeholder", "Comment", 1, "feedback-input"], ["type", "submit", "mat-raised-button", "", 3, "disabled"], [1, "form-lowres", 3, "formGroup", "ngSubmit"], ["formControlName", "fullname", "name", "name", "type", "text", "placeholder", "Name", 1, "feedback-input-low"], ["formControlName", "email", "name", "email", "type", "text", "placeholder", "Email", 1, "feedback-input-low"], ["formControlName", "comment", "name", "text", "placeholder", "Comment", 1, "feedback-input-low"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactFormComponent_form_0_Template, 6, 2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_form_1_Template, 6, 2, "form", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\nbody[_ngcontent-%COMP%] {\n  background: #1e1e28;\n}\n.form-big[_ngcontent-%COMP%] {\n  max-width: 320px;\n  margin: 30px auto;\n}\n.form-lowres[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin: 60px auto;\n}\n.feedback-input[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  border-radius: 5px;\n  line-height: 20px;\n  background-color: transparent;\n  border: 2px solid #a0a0a0;\n  transition: all 0.3s;\n  padding: 10px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\n.feedback-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0f0f0f;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type=submit][_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #4e4e4e;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: white;\n  font-size: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n.feedback-input-low[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  border-radius: 5px;\n  line-height: 20px;\n  background-color: transparent;\n  border: 2px solid #a0a0a0;\n  transition: all 0.3s;\n  padding: 10px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\n.feedback-input-low[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0f0f0f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVFQUFBO0FBRVI7RUFBTyxtQkFBQTtBQ0NQO0FEQUE7RUFBWSxnQkFBQTtFQUFpQixpQkFBQTtBQ0s3QjtBREhBO0VBQWUsZ0JBQUE7RUFBaUIsaUJBQUE7QUNRaEM7QUROQTtFQUNFLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDU0Y7QUROQTtFQUF3Qix5QkFBQTtBQ1V4QjtBRFJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNXRjtBRFJBO0VBQ0UsdURBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNXRjtBRE5BO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNTSjtBRE5FO0VBQTRCLHlCQUFBO0FDVTlCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xyXG5cclxuYm9keSB7IGJhY2tncm91bmQ6cmdiKDMwLDMwLDQwKTsgfVxyXG4uZm9ybS1iaWcgeyBtYXgtd2lkdGg6MzIwcHg7IG1hcmdpbjozMHB4IGF1dG87IH1cclxuXHJcbi5mb3JtLWxvd3JlcyB7IG1heC13aWR0aDoyMDBweDsgbWFyZ2luOjYwcHggYXV0bzsgfVxyXG5cclxuLmZlZWRiYWNrLWlucHV0IHtcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OjMwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjoycHggc29saWQgI2EwYTBhMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWlucHV0OmZvY3VzIHsgYm9yZGVyOjJweCBzb2xpZCAjMGYwZjBmOyB9XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxuICByZXNpemU6dmVydGljYWw7XHJcbn1cclxuXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IzRlNGU0ZTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBib3JkZXI6MDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6MjBweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgbWFyZ2luLXRvcDotNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5mZWVkYmFjay1pbnB1dC1sb3cge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjoycHggc29saWQgI2EwYTBhMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6MDtcclxuICB9XHJcbiAgXHJcbiAgLmZlZWRiYWNrLWlucHV0LWxvdzpmb2N1cyB7IGJvcmRlcjoycHggc29saWQgIzBmMGYwZjsgfSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMjg7XG59XG5cbi5mb3JtLWJpZyB7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uZm9ybS1sb3dyZXMge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDYwcHggYXV0bztcbn1cblxuLmZlZWRiYWNrLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGEwYTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMDtcbn1cblxuLmZlZWRiYWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMGYwZjtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuW3R5cGU9c3VibWl0XSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM0ZTRlNGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZmVlZGJhY2staW5wdXQtbG93IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGEwYTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMDtcbn1cblxuLmZlZWRiYWNrLWlucHV0LWxvdzpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjBmMGY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-form',
          templateUrl: './contact-form.component.html',
          styleUrls: ['./contact-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact.service.ts":
  /*!************************************!*\
    !*** ./src/app/contact.service.ts ***!
    \************************************/

  /*! exports provided: ContactService */

  /***/
  function _src_app_contactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
      }

      return _createClass(ContactService, [{
        key: "sendEmail",
        value: function sendEmail(data) {
          var headers = {
            'content-type': 'application/json'
          };
          var body = JSON.stringify(data);
          console.log(body);
          return this.http.post('https://api.emailjs.com/api/v1.0/email/send', body, {
            'headers': headers
          });
        }
      }]);
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function _src_app_experience_experienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var swiper_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! swiper/angular */
    "./node_modules/swiper/__ivy_ngcc__/angular/fesm2015/swiper_angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ExperienceComponent_6_ng_template_0_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var point_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r71);
      }
    }

    function ExperienceComponent_6_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_6_ng_template_0_li_10_Template, 2, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", exp_r68.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", exp_r68.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r68.location, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r68.role, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r68.duration, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r68.points);
      }
    }

    function ExperienceComponent_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_6_ng_template_0_Template, 11, 6, "ng-template", 5);
      }
    }

    var _c0 = function _c0() {
      return {
        delay: 1000,
        disableOnInteraction: true
      };
    };

    var ExperienceComponent =
    /*#__PURE__*/
    function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        // slickConfig = {
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
        //   dots: true,
        //   infinite: true,
        //   arrows: true,
        //   autoplay: false,
        //   responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
        // };
        this.experiences = [{
          company: 'Zscaler',
          logo: '../../assets/images/zscaler.png',
          location: 'Chandigarh, INDIA',
          role: 'Product Support Intern',
          duration: "Jan'2019 – Jun'2019",
          points: ["Worked as a Product Support Intern for 6 months and got recommended in Cloud Based Security Domain.", "Troubleshooting and resolving network and cloud firewall related issues."]
        }, {
          company: 'UnitedHealth Group',
          logo: '../../assets/images/UHG.png',
          location: 'Hyderabad, Telangana, INDIA',
          role: 'Software Engineer',
          duration: "Jul'2019 – Jul'2022",
          points: ["Worked alongside product managers to architect a multi-step manual process into a single page web-app, saving time and money.", "Built REST APIs that served Angular web apps handling 500,000+ concurrent users.", "Designed an Automation Test Framework validating >1 million regression test cases."]
        }, {
          company: 'Airtel Africa Digital Labs',
          logo: '../../assets/images/AAFL.jpeg',
          location: 'Gurugram, Haryana, INDIA',
          role: 'Senior Software Engineer',
          duration: "Jul'2022 – April'2024",
          points: ["Created a microservice connecting Airtel Payment with Zambia’s National Financial Switch, boosting traffic.", "Designed solutions for Bill Payments, Loans, and mobile money services, improving reliability by 30% and engagement by 20%.", "Implemented externalized logging, boosting performance and availability of logs."]
        }, {
          company: 'Cars24',
          logo: '../../assets/images/CARS24_logo.svg.png',
          location: 'Gurugram, Haryana, INDIA',
          role: 'Senior Software Engineer',
          duration: "April'2024 – Present",
          points: ["Designed & Enabled Autopilot scaling to 4 plus geographical regions in India, providing on demand driver service to end users.", "Crafted & Built Service Management Platform which enabled 6+ clients to manage their services centrally.", "Implemented platforms for multiple business lines for Cars24."]
        }];
      }

      return _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Screen Size:', this.screenSize);
        }
      }]);
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 7,
      vars: 8,
      consts: [[1, "body"], [1, "header"], [1, "sub-header"], [1, "experience-carousel", 3, "slidesPerView", "spaceBetween", "navigation", "autoplay", "loop", "freeMode"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "experience-card"], [1, "image-div"], [1, "company-logo", 3, "src", "alt"], [1, "subtitle"], [1, "work-ex-list", "check-list"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Companies I have worked with...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "swiper", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_6_Template, 1, 0, undefined, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slidesPerView", ctx.screenSize === "Large" || ctx.screenSize === "XLarge" ? 3 : 1)("spaceBetween", 50)("navigation", true)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("loop", true)("freeMode", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        }
      },
      directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperSlideDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]],
      styles: [".body[_ngcontent-%COMP%] {\n  color: #fffcfc;\n  background-color: white;\n  height: 80%;\n  margin-top: -10vh;\n  padding-bottom: 15vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.experience-grid[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 25px;\n}\n\n.experience-grid-mobile[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 25px;\n}\n\n.experience-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  border-radius: 16px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  margin: 20px;\n  height: 400px;\n}\n\n.experience-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);\n}\n\n.image-div[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n\n.company-logo[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 15px 0;\n  line-height: 1.5;\n}\n\n.work-ex-list[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  padding-left: 20px;\n}\n\n.check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.experience-carousel[_ngcontent-%COMP%] {\n  width: 90%;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.experience-carousel[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .experience-carousel[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  color: #000;\n  \n  background-color: rgba(255, 255, 255, 0.8);\n  \n  border-radius: 50%;\n  \n  width: 40px;\n  \n  height: 40px;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  \n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n\n.experience-carousel[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:hover, .experience-carousel[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  \n  color: #fff;\n  \n  transform: scale(1.1);\n  \n}\n\n.experience-carousel[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]::after, .experience-carousel[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]::after {\n  font-size: 16px;\n  \n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEb0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDakJKOztBRG9CQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2pCSjs7QURvQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUNqQko7O0FEb0JFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQ2pCSjs7QURvQkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2pCSjs7QURvQkU7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FDakJKOztBRG9CRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDakJKOztBRG9CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNqQko7O0FEb0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURvQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2pCSjs7QURvQkU7RUFDRSxrQkFBQTtBQ2pCSjs7QURxQkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2xCSjs7QURvQkk7O0VBRUUsV0FBQTtFQUFhLHdCQUFBO0VBQ2IsMENBQUE7RUFBNEMscUJBQUE7RUFDNUMsa0JBQUE7RUFBb0IsMEJBQUE7RUFDcEIsV0FBQTtFQUFhLHFCQUFBO0VBQ2IsWUFBQTtFQUFjLHNCQUFBO0VBQ2QsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUEwQyxlQUFBO0VBQzFDLDJEQUFBO0FDWk47O0FEZUk7O0VBRUUsb0NBQUE7RUFBc0MsK0JBQUE7RUFDdEMsV0FBQTtFQUFhLCtCQUFBO0VBQ2IscUJBQUE7RUFBdUIsOEJBQUE7QUNWN0I7O0FEYUk7O0VBRUUsZUFBQTtFQUFpQixxQkFBQTtFQUNqQixpQkFBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgY29sb3I6ICNmZmZjZmM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1dmg7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIC5oZWFkZXIge1xyXG4vLyAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vICAgICBjb2xvcjogIzAwMDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnN1Yi1oZWFkZXIge1xyXG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuLy8gICAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgIH1cclxuXHJcbiAgLmhlYWRlcntcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjI4cHg7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAuZXhwZXJpZW5jZS1ncmlkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuZXhwZXJpZW5jZS1ncmlkLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlcmllbmNlLWNhcmQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlcmllbmNlLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTRweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtZGl2IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbXBhbnktbG9nbyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLndvcmstZXgtbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2hlY2stbGlzdCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuZXhwZXJpZW5jZS1jYXJvdXNlbCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBcclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQsXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICAgICAgY29sb3I6ICMwMDA7IC8qIENoYW5nZSBidXR0b24gY29sb3IgKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBBZGQgYSBiYWNrZ3JvdW5kICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZSBidXR0b25zIGNpcmN1bGFyICovXHJcbiAgICAgIHdpZHRoOiA0MHB4OyAvKiBTZXQgYnV0dG9uIHdpZHRoICovXHJcbiAgICAgIGhlaWdodDogNDBweDsgLyogU2V0IGJ1dHRvbiBoZWlnaHQgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEFkZCBzaGFkb3cgKi9cclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTsgLyogRGFya2VyIGJhY2tncm91bmQgb24gaG92ZXIgKi9cclxuICAgICAgY29sb3I6ICNmZmY7IC8qIENoYW5nZSBpY29uIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgZW5sYXJnZSBvbiBob3ZlciAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dDo6YWZ0ZXIsXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2OjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IGljb24gc2l6ZSAqL1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuIiwiLmJvZHkge1xuICBjb2xvcjogI2ZmZmNmYztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW4tdG9wOiAtMTB2aDtcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgaGVpZ2h0OiA1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhwZXJpZW5jZS1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDI1cHg7XG59XG5cbi5leHBlcmllbmNlLWdyaWQtbW9iaWxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjVweDtcbn1cblxuLmV4cGVyaWVuY2UtY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uZXhwZXJpZW5jZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5pbWFnZS1kaXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLndvcmstZXgtbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2hlY2stbGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmV4cGVyaWVuY2UtY2Fyb3VzZWwge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uZXhwZXJpZW5jZS1jYXJvdXNlbCAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLmV4cGVyaWVuY2UtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGNvbG9yOiAjMDAwO1xuICAvKiBDaGFuZ2UgYnV0dG9uIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLyogQWRkIGEgYmFja2dyb3VuZCAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIE1ha2UgYnV0dG9ucyBjaXJjdWxhciAqL1xuICB3aWR0aDogNDBweDtcbiAgLyogU2V0IGJ1dHRvbiB3aWR0aCAqL1xuICBoZWlnaHQ6IDQwcHg7XG4gIC8qIFNldCBidXR0b24gaGVpZ2h0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBBZGQgc2hhZG93ICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuLmV4cGVyaWVuY2UtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tbmV4dDpob3Zlcixcbi5leHBlcmllbmNlLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIGhvdmVyICovXG4gIGNvbG9yOiAjZmZmO1xuICAvKiBDaGFuZ2UgaWNvbiBjb2xvciBvbiBob3ZlciAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC8qIFNsaWdodGx5IGVubGFyZ2Ugb24gaG92ZXIgKi9cbn1cbi5leHBlcmllbmNlLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHQ6OmFmdGVyLFxuLmV4cGVyaWVuY2UtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldjo6YWZ0ZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIEFkanVzdCBpY29uIHNpemUgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function _src_app_footer_footerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-tray/social-tray.component */
    "./src/app/social-tray/social-tray.component.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      return _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 1,
      consts: [[1, "body"], [2, "margin-right", "40px", "margin-left", "40px", "border-top", "1px solid #323232", "border-bottom", "1px solid rgb(84, 84, 84)"], [1, "sub-header-lowres"], [3, "screenSize"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Divyansh Chauhan \xA9 2022\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-social-tray", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", "Large");
        }
      },
      directives: [_social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_1__["SocialTrayComponent"]],
      styles: [".body[_ngcontent-%COMP%] {\n  background-color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  padding-bottom: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.sub-header-lowres[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlci1sb3dyZXN7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiA1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uc3ViLWhlYWRlci1sb3dyZXMge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/get-in-touch/get-in-touch.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/get-in-touch/get-in-touch.component.ts ***!
    \********************************************************/

  /*! exports provided: GetInTouchComponent */

  /***/
  function _src_app_getInTouch_getInTouchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function () {
      return GetInTouchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");

    function GetInTouchComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get in Touch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For business inquiries, Just drop a message below ! \uD83D\uDE03");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r93.screenSize);
      }
    }

    function GetInTouchComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get in Touch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For business inquiries, Just drop a message below ! \uD83D\uDE03");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r94.screenSize);
      }
    }

    var GetInTouchComponent =
    /*#__PURE__*/
    function () {
      function GetInTouchComponent() {
        _classCallCheck(this, GetInTouchComponent);
      }

      return _createClass(GetInTouchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    GetInTouchComponent.ɵfac = function GetInTouchComponent_Factory(t) {
      return new (t || GetInTouchComponent)();
    };

    GetInTouchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GetInTouchComponent,
      selectors: [["app-get-in-touch"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], ["class", "table-div-lowres", 4, "ngIf"], [1, "table-div"], [1, "header"], [1, "sub-header"], [3, "screenSize"], [1, "table-div-lowres"], [1, "header-lowres"], [1, "sub-header-lowres"]],
      template: function GetInTouchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetInTouchComponent_div_1_Template, 6, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GetInTouchComponent_div_2_Template, 6, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\n.body[_ngcontent-%COMP%] {\n  background-color: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 14vh;\n}\n.header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n.sub-header-lowres[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.image-div[_ngcontent-%COMP%] {\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.image[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n  padding: 20px;\n}\n.work-ex-list[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  margin-left: 10%;\n  text-align: justify;\n  padding-right: 50px;\n}\n.image-title[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  font-size: 22px;\n  font-weight: 300;\n}\n.table-div[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-right: 100px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: none;\n}\ntd[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.6;\n  text-align: center;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.table-div-lowres[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 5px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: black;\n}\n.table-div-lowres[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-div-lowres[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact-form-lowres[_ngcontent-%COMP%] {\n  transform: scale(40%);\n  margin-bottom: 50px;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9HQUFBO0FBRVI7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjtBREtBO0VBRUksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNISjtBRFNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDTko7QURXQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUko7QURjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNaSjtBRGVBO0VBQ0ksWUFBQTtBQ1pKO0FEZUU7RUFDRSxZQUFBO0VBQ0MsVUFBQTtBQ1pMO0FEZUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGdCQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEa0JBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNoQko7QURxQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ2xCSjtBRHVCQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDckJKO0FEeUJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDdEJKO0FEMEJBO0VBRUEsYUFBQTtBQ3hCQTtBRDRCQTtFQUVJLFdBQUE7QUMxQko7QUQ4QkE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDM0JKO0FEOEJBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL2dldC1pbi10b3VjaC9nZXQtaW4tdG91Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDsyMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHZoO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWItaGVhZGVyLWxvd3Jlc3tcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZS1kaXZ7XHJcbiAgICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5pbWFnZXtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ud29yay1leC1saXN0e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5pbWFnZS10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1kaXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxlLCB0ZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmltYWdlLWxvd3Jlc3tcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uaW1hZ2UtZGl2LWxvd3Jlc3tcclxuICAgICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udGFibGUtZGl2LWxvd3Jlc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5pbWFnZS1sb3dyZXN7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmltYWdlLWRpdi1sb3dyZXN7XHJcbiAgICAgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhZGVyLWxvd3Jlc3tcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbn1cclxuXHJcbi50YWJsZS1kaXYtbG93cmVzIHRyIHtcclxuXHJcbmRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4udGFibGUtZGl2LWxvd3JlcyB0ZCB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbi5jb250YWN0LWZvcm0tbG93cmVze1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0MCUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDsyMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXBcIik7XG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTR2aDtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zdWItaGVhZGVyLWxvd3JlcyB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlLWRpdiB7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1hZ2Uge1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLndvcmstZXgtbGlzdCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4uaW1hZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRhYmxlLWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUsIHRkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50ZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWxvd3JlcyB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW1hZ2UtZGl2LWxvd3JlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWJsZS1kaXYtbG93cmVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmltYWdlLWxvd3JlcyB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW1hZ2UtZGl2LWxvd3JlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbG93cmVzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50YWJsZS1kaXYtbG93cmVzIHRyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlLWRpdi1sb3dyZXMgdGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhY3QtZm9ybS1sb3dyZXMge1xuICB0cmFuc2Zvcm06IHNjYWxlKDQwJSk7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetInTouchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-get-in-touch',
          templateUrl: './get-in-touch.component.html',
          styleUrls: ['./get-in-touch.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/hero/hero.component.ts":
  /*!****************************************!*\
    !*** ./src/app/hero/hero.component.ts ***!
    \****************************************/

  /*! exports provided: HeroComponent */

  /***/
  function _src_app_hero_heroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../herotitle2/herotitle2.component */
    "./src/app/herotitle2/herotitle2.component.ts");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      return _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "body"], [1, "hero-vid"], ["mp4Src", "../../assets/videos/hero.mp4", "webmSrc", "../../assets/videos/hero.webm", "m4vSrc", "../../assets/videos/hero.m4v", 3, "screenSize"], [3, "screenSize"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-herotitle2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);
        }
      },
      directives: [_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"], _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_3__["Herotitle2Component"]],
      styles: [".body[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  height: 100%;\n}\n\n.hero-vid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5vh;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlcm8tdmlke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG5cclxufSIsIi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVyby12aWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          }))])])]
        }]
      }], null, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/herotitle/herotitle.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/herotitle/herotitle.component.ts ***!
    \**************************************************/

  /*! exports provided: HerotitleComponent */

  /***/
  function _src_app_herotitle_herotitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HerotitleComponent", function () {
      return HerotitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HerotitleComponent =
    /*#__PURE__*/
    function () {
      function HerotitleComponent() {
        _classCallCheck(this, HerotitleComponent);
      }

      return _createClass(HerotitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openResume",
        value: function openResume() {
          window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();
        }
      }]);
    }();

    HerotitleComponent.ɵfac = function HerotitleComponent_Factory(t) {
      return new (t || HerotitleComponent)();
    };

    HerotitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HerotitleComponent,
      selectors: [["app-herotitle"]],
      decls: 13,
      vars: 0,
      consts: [[1, "animated-title", 3, "click"], [1, "text-top"], [2, "font-size", "72px"], [2, "font-size", "96px"], [1, "text-bottom"], [2, "font-size", "54px"], [2, "font-size", "42px", "padding-bottom", "20px"]],
      template: function HerotitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerotitleComponent_Template_div_click_0_listener() {
            return ctx.openResume();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hey, It's me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DIVYANSH CHAUHAN. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Engineer, Traveller ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I am a Software Engineer based in Gurgaon, India. I like to build solid and scalable applications and software solutions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:700\");\n@keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  40%, 60% {\n    transform: translate3d(0, 50%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animated-title[_ngcontent-%COMP%] {\n  color: #fffbfb;\n  height: 650px;\n  position: absolute;\n  left: -15%;\n  width: 1200px;\n  transform: scale(0.4);\n  background-color: rgba(39, 39, 39, 0.788);\n  box-shadow: 3px 1px 12px 4px #000000;\n  padding-left: 20px;\n  border-radius: 12px;\n  transform: scale(50%, 50%);\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12vmin;\n  padding: 2vmin 0;\n  position: absolute;\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n  top: 0;\n  width: 95%;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: showTopText 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n  bottom: 0;\n  transform: translate(0, 100%);\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #ffffff;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-bottom[_ngcontent-%COMP%] {\n  width: 95%;\n  bottom: 0;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: showBottomText 0.5s;\n  animation-delay: 1.75s;\n  animation-fill-mode: forwards;\n  top: 0;\n  transform: translate(0, -100%);\n}\n.animated-title[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.664);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9oZXJvdGl0bGUvaGVyb3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvdGl0bGUvaGVyb3RpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRLGlFQUFBO0FBQ1I7RUFDRTtJQUFLLGtDQUFBO0VDQUw7RURDQTtJQUFXLGlDQUFBO0VDRVg7RUREQTtJQUFPLCtCQUFBO0VDSVA7QUFDRjtBREhBO0VBQ0U7SUFBSyxtQ0FBQTtFQ01MO0VETEE7SUFBTywrQkFBQTtFQ1FQO0FBQ0Y7QURQQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ1NGO0FEUEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNVRjtBRFJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDV0Y7QURUQTtFQUNFLGNBQUE7QUNZRjtBRFZBO0VBQ0UsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ2FGO0FEWEE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUNjRjtBRFpBO0VBQ0UsY0FBQTtBQ2VGO0FEYkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2dCRjtBRGJBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsTUFBQTtFQUNBLDhCQUFBO0FDZ0JGO0FEYkE7RUFFSSxzQ0FBQTtBQ2VKIiwiZmlsZSI6InNyYy9hcHAvaGVyb3RpdGxlL2hlcm90aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQU5pbWF0aW9uXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo3MDAnKTtcclxuQGtleWZyYW1lcyBzaG93VG9wVGV4dCB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyB9XHJcbiAgNDAlLCA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hvd0JvdHRvbVRleHQge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxyXG59XHJcbi5hbmltYXRlZC10aXRsZSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1MSwgMjUxKTtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0Oi0xNSU7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjc4OCk7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxMnB4IDRweCAjMDAwMDAwO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoNTAlLDUwJSk7XHJcbn1cclxuLmFuaW1hdGVkLXRpdGxlID4gZGl2IHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYgZGl2IHtcclxuICBmb250LXNpemU6IDEydm1pbjtcclxuICBwYWRkaW5nOiAydm1pbiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYgZGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LXRvcCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC10b3AgZGl2IHtcclxuICBhbmltYXRpb246IHNob3dUb3BUZXh0IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XHJcbn1cclxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtdG9wIGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC1ib3R0b20ge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIFxyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LWJvdHRvbSBkaXYge1xyXG4gIGFuaW1hdGlvbjogc2hvd0JvdHRvbVRleHQgMC41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNzVzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XHJcbn1cclxuXHJcbi5hbmltYXRlZC10aXRsZTpob3ZlciB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2NCk7XHJcblxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMFwiKTtcbkBrZXlmcmFtZXMgc2hvd1RvcFRleHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hvd0JvdHRvbVRleHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZiZmI7XG4gIGhlaWdodDogNjUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1JTtcbiAgd2lkdGg6IDEyMDBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuNzg4KTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxMnB4IDRweCAjMDAwMDAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoNTAlLCA1MCUpO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYge1xuICBoZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlID4gZGl2IGRpdiB7XG4gIGZvbnQtc2l6ZTogMTJ2bWluO1xuICBwYWRkaW5nOiAydm1pbiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdiBkaXYgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC10b3Age1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtdG9wIGRpdiB7XG4gIGFuaW1hdGlvbjogc2hvd1RvcFRleHQgMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LXRvcCBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC1ib3R0b20ge1xuICB3aWR0aDogOTUlO1xuICBib3R0b206IDA7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LWJvdHRvbSBkaXYge1xuICBhbmltYXRpb246IHNob3dCb3R0b21UZXh0IDAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS43NXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2NCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HerotitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-herotitle',
          templateUrl: './herotitle.component.html',
          styleUrls: ['./herotitle.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/herotitle2/herotitle2.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/herotitle2/herotitle2.component.ts ***!
    \****************************************************/

  /*! exports provided: Herotitle2Component */

  /***/
  function _src_app_herotitle2_herotitle2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Herotitle2Component", function () {
      return Herotitle2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../social-tray/social-tray.component */
    "./src/app/social-tray/social-tray.component.ts");

    function Herotitle2Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey! Its me,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Divyansh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Traveller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Engineer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Story Teller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I am a Software Engineer based in Gurgaon, India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " I like to build solid & scalable applications/software solutions. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-social-tray", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r48.screenSize);
      }
    }

    function Herotitle2Component_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-social-tray", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r49.screenSize);
      }
    }

    function Herotitle2Component_div_2_br_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
      }
    }

    function Herotitle2Component_div_2_br_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
      }
    }

    function Herotitle2Component_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey! Its me,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Divyansh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Traveller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Engineer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Story Teller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Software Engineer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Herotitle2Component_div_2_br_19_Template, 1, 0, "br", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " based in Gurgaon, India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Likes to Build solid & scalable ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Herotitle2Component_div_2_br_23_Template, 1, 0, "br", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " applications/software solutions.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.screenSize != "Large" && ctx_r50.screenSize != "XLarge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.screenSize != "Large" && ctx_r50.screenSize != "XLarge");
      }
    }

    var Herotitle2Component =
    /*#__PURE__*/
    function () {
      function Herotitle2Component() {
        _classCallCheck(this, Herotitle2Component);
      }

      return _createClass(Herotitle2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openResume",
        value: function openResume() {
          window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();
        }
      }]);
    }();

    Herotitle2Component.ɵfac = function Herotitle2Component_Factory(t) {
      return new (t || Herotitle2Component)();
    };

    Herotitle2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Herotitle2Component,
      selectors: [["app-herotitle2"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 3,
      vars: 3,
      consts: [["id", "container", 4, "ngIf"], ["class", "verticalSocialTray", 4, "ngIf"], ["id", "containersmall", 4, "ngIf"], ["id", "container"], [2, "font-size", "20px", "font-weight", "400", "text-transform", "capitalize"], [2, "text-transform", "capitalize", "font-weight", "400"], ["id", "flip"], [2, "text-transform", "none", "font-weight", "500", "font-size", "16px"], [3, "screenSize"], [1, "verticalSocialTray"], ["id", "containersmall"], [4, "ngIf"]],
      template: function Herotitle2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Herotitle2Component_div_0_Template, 23, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Herotitle2Component_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Herotitle2Component_div_2_Template, 25, 2, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_2__["SocialTrayComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n}\n#container[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  position: absolute;\n  left: 12%;\n  bottom: 30%;\n  display: block;\n  padding: 8px;\n  border-radius: 12px;\n  width: 30%;\n  text-shadow: 5px 0 5px black;\n  cursor: pointer;\n}\n#flip[_ngcontent-%COMP%] {\n  height: 50px;\n  overflow: hidden;\n}\n#flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 2px 6px;\n  height: 45px;\n  margin-bottom: 45px;\n  display: inline-block;\n  text-shadow: none;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  animation: show 6s linear infinite;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: rgba(180, 102, 0, 0.705);\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  background: #3475c0ad;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  background: #b94139c2;\n}\n@keyframes show {\n  0% {\n    margin-top: -270px;\n  }\n  5% {\n    margin-top: -180px;\n  }\n  33% {\n    margin-top: -180px;\n  }\n  38% {\n    margin-top: -90px;\n  }\n  66% {\n    margin-top: -90px;\n  }\n  71% {\n    margin-top: 0px;\n  }\n  99.99% {\n    margin-top: 0px;\n  }\n  100% {\n    margin-top: -270px;\n  }\n}\np[_ngcontent-%COMP%] {\n  width: 100%;\n  text-shadow: 5px 0 5px black;\n  font-size: 14px;\n  color: white;\n}\n#containersmall[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  font-weight: bold;\n  position: absolute;\n  font-family: \"Montserrat\", sans-serif;\n  left: 12%;\n  bottom: 30%;\n  display: block;\n  padding: 8px;\n  border-radius: 12px;\n  transform: scale(0.75);\n  cursor: pointer;\n}\n.verticalSocialTray[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9oZXJvdGl0bGUyL2hlcm90aXRsZTIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlcm90aXRsZTIvaGVyb3RpdGxlMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvR0FBQTtBQUVSO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0Usa0NBQUE7QUNERjtBRElBO0VBQ0Usb0NBQUE7QUNERjtBREdBO0VBQ0UscUJBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7QUNDRjtBREVBO0VBQ0U7SUFBSSxrQkFBQTtFQ0VKO0VEREE7SUFBSSxrQkFBQTtFQ0lKO0VESEE7SUFBSyxrQkFBQTtFQ01MO0VETEE7SUFBSyxpQkFBQTtFQ1FMO0VEUEE7SUFBSyxpQkFBQTtFQ1VMO0VEVEE7SUFBSyxlQUFBO0VDWUw7RURYQTtJQUFRLGVBQUE7RUNjUjtFRGJBO0lBQU0sa0JBQUE7RUNnQk47QUFDRjtBRGRBO0VBRUUsV0FBQTtFQUVBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNjRjtBRFZBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZUFBQTtBQ1dKO0FEUkU7RUFDRSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9oZXJvdGl0bGUyL2hlcm90aXRsZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOjBweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6MzZweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIGJvdHRvbTozMCU7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNTYpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDVweCAwIDVweCByZ2IoMCwgMCwgMCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZmxpcCB7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4jZmxpcCA+IGRpdiA+IGRpdiAge1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgcGFkZGluZzoycHggNnB4O1xyXG4gIGhlaWdodDo0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206NDVweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI2ZsaXAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBhbmltYXRpb246IHNob3cgNnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jZmxpcCBkaXYgZGl2IHtcclxuICBiYWNrZ3JvdW5kOnJnYmEoMTgwLCAxMDIsIDAsIDAuNzA1KTtcclxufVxyXG4jZmxpcCBkaXY6Zmlyc3QtY2hpbGQgZGl2IHtcclxuICBiYWNrZ3JvdW5kOiMzNDc1YzBhZDtcclxufVxyXG4jZmxpcCBkaXY6bGFzdC1jaGlsZCBkaXYge1xyXG4gIGJhY2tncm91bmQ6I2I5NDEzOWMyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG4gIDAlIHttYXJnaW4tdG9wOi0yNzBweDt9XHJcbiAgNSUge21hcmdpbi10b3A6LTE4MHB4O31cclxuICAzMyUge21hcmdpbi10b3A6LTE4MHB4O31cclxuICAzOCUge21hcmdpbi10b3A6LTkwcHg7fVxyXG4gIDY2JSB7bWFyZ2luLXRvcDotOTBweDt9XHJcbiAgNzElIHttYXJnaW4tdG9wOjBweDt9XHJcbiAgOTkuOTklIHttYXJnaW4tdG9wOjBweDt9XHJcbiAgMTAwJSB7bWFyZ2luLXRvcDotMjcwcHg7fVxyXG59XHJcblxyXG5wIHtcclxuICBcclxuICB3aWR0aDoxMDAlO1xyXG4gIFxyXG4gIHRleHQtc2hhZG93OiA1cHggMCA1cHggcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBcclxufVxyXG5cclxuI2NvbnRhaW5lcnNtYWxsIHtcclxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZWZ0OiAxMiU7XHJcbiAgICBib3R0b206MzAlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1Nik7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnZlcnRpY2FsU29jaWFsVHJheXtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICB9IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEyJTtcbiAgYm90dG9tOiAzMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAzMCU7XG4gIHRleHQtc2hhZG93OiA1cHggMCA1cHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ZsaXAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNmbGlwID4gZGl2ID4gZGl2IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuI2ZsaXAgZGl2OmZpcnN0LWNoaWxkIHtcbiAgYW5pbWF0aW9uOiBzaG93IDZzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuI2ZsaXAgZGl2IGRpdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxMDIsIDAsIDAuNzA1KTtcbn1cblxuI2ZsaXAgZGl2OmZpcnN0LWNoaWxkIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMzNDc1YzBhZDtcbn1cblxuI2ZsaXAgZGl2Omxhc3QtY2hpbGQgZGl2IHtcbiAgYmFja2dyb3VuZDogI2I5NDEzOWMyO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogLTI3MHB4O1xuICB9XG4gIDUlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHg7XG4gIH1cbiAgMzMlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHg7XG4gIH1cbiAgMzglIHtcbiAgICBtYXJnaW4tdG9wOiAtOTBweDtcbiAgfVxuICA2NiUge1xuICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICB9XG4gIDcxJSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIDk5Ljk5JSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IC0yNzBweDtcbiAgfVxufVxucCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXNoYWRvdzogNXB4IDAgNXB4IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRhaW5lcnNtYWxsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbGVmdDogMTIlO1xuICBib3R0b206IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmVydGljYWxTb2NpYWxUcmF5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Herotitle2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-herotitle2',
          templateUrl: './herotitle2.component.html',
          styleUrls: ['./herotitle2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function _src_app_material_materialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js"); // Material Form Controls
    // Material Navigation
    // Material Layout
    // Material Buttons & Indicators
    // Material Popups & Modals
    // Material Data tables


    var MaterialModule =
    /*#__PURE__*/
    _createClass(function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    });

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/medium-embed/medium-embed.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/medium-embed/medium-embed.component.ts ***!
    \********************************************************/

  /*! exports provided: MediumEmbedComponent */

  /***/
  function _src_app_mediumEmbed_mediumEmbedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediumEmbedComponent", function () {
      return MediumEmbedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_strip_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/strip-html.pipe */
    "./src/app/shared/strip-html.pipe.ts");

    var MediumEmbedComponent =
    /*#__PURE__*/
    function () {
      function MediumEmbedComponent() {
        _classCallCheck(this, MediumEmbedComponent);

        this.imageUrl = '';
      }

      return _createClass(MediumEmbedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageUrl = this.extractImageUrl(this.post.content);
        }
      }, {
        key: "extractImageUrl",
        value: function extractImageUrl(html) {
          if (!html) return 'https://via.placeholder.com/400x200?text=No+Image';
          var match = html.match(/<img[^>]+src="([^">]+)"/);
          return match ? match[1] : 'https://via.placeholder.com/400x200?text=No+Image';
        }
      }, {
        key: "openPost",
        value: function openPost(link) {
          window.open(link, '_blank');
        }
      }]);
    }();

    MediumEmbedComponent.ɵfac = function MediumEmbedComponent_Factory(t) {
      return new (t || MediumEmbedComponent)();
    };

    MediumEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MediumEmbedComponent,
      selectors: [["app-medium-embed"]],
      inputs: {
        post: "post"
      },
      decls: 20,
      vars: 16,
      consts: [[1, "medium-card", 3, "click"], [1, "image-container"], ["mat-card-image", "", 3, "src", "alt"], [1, "meta"], [1, "author"], [1, "date"], [1, "read-time"], [1, "title"], [1, "description"]],
      template: function MediumEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediumEmbedComponent_Template_mat_card_click_0_listener() {
            return ctx.openPost(ctx.post.link);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "stripHtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.post.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx.post.pubDate, "MMM d, y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.readTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, ctx.post.description), 0, 200), "... ");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _shared_strip_html_pipe__WEBPACK_IMPORTED_MODULE_3__["StripHtmlPipe"]],
      styles: [".medium-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  width: 500px;\n  margin: auto;\n  height: 500px;\n  padding: 20px;\n}\n.medium-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.medium-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  overflow: hidden;\n}\n.medium-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.medium-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.medium-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem;\n}\n.medium-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b6b6b;\n  margin-bottom: 0.5rem;\n  display: flex;\n  gap: 0.3rem;\n  flex-wrap: wrap;\n}\n.medium-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.medium-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #444;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9tZWRpdW0tZW1iZWQvbWVkaXVtLWVtYmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpdW0tZW1iZWQvbWVkaXVtLWVtYmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUNDTjtBREVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwrQkFBQTtBQ0FSO0FER007RUFDRSxzQkFBQTtBQ0RSO0FES0k7RUFDRSxvQkFBQTtBQ0hOO0FETUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL21lZGl1bS1lbWJlZC9tZWRpdW0tZW1iZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaXVtLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgfVxuICBcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG4gICAgICB9XG4gIFxuICAgICAgJjpob3ZlciBpbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDEuMnJlbTtcbiAgICB9XG4gIFxuICAgIC5tZXRhIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMC4zcmVtO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzExMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgfVxuICAiLCIubWVkaXVtLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tZWRpdW0tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLm1lZGl1bS1jYXJkIC5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZWRpdW0tY2FyZCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLm1lZGl1bS1jYXJkIC5pbWFnZS1jb250YWluZXI6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5tZWRpdW0tY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XG59XG4ubWVkaXVtLWNhcmQgLm1ldGEge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4zcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWVkaXVtLWNhcmQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLm1lZGl1bS1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediumEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-medium-embed',
          templateUrl: './medium-embed.component.html',
          styleUrls: ['./medium-embed.component.scss']
        }]
      }], null, {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/medium-embed/medium.service.ts":
  /*!************************************************!*\
    !*** ./src/app/medium-embed/medium.service.ts ***!
    \************************************************/

  /*! exports provided: MediumService */

  /***/
  function _src_app_mediumEmbed_mediumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediumService", function () {
      return MediumService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MediumService =
    /*#__PURE__*/
    function () {
      function MediumService(http) {
        _classCallCheck(this, MediumService);

        this.http = http;
        this.rssToJsonApiBaseUrl = 'https://api.rss2json.com/v1/api.json';
        this.mediumRssUrl = 'https://medium.com/feed/@divyansh28071997';
      }

      return _createClass(MediumService, [{
        key: "getPosts",
        value: function getPosts() {
          var url = "".concat(this.rssToJsonApiBaseUrl, "?rss_url=").concat(encodeURIComponent(this.mediumRssUrl));
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            if (response && response.items) {
              return response.items.map(function (item) {
                var imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                return {
                  title: item.title,
                  link: item.link,
                  categories: item.categories,
                  content: item.content,
                  description: item.description,
                  pubDate: item.pubDate,
                  image: imageMatch ? imageMatch[1] : null // ✅ extract first image if available

                };
              });
            } else {
              return [];
            }
          }));
        }
      }]);
    }();

    MediumService.ɵfac = function MediumService_Factory(t) {
      return new (t || MediumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MediumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MediumService,
      factory: MediumService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function _src_app_navbar_navbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_projects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../assets/projects.json */
    "./src/assets/projects.json");

    var _assets_projects_json__WEBPACK_IMPORTED_MODULE_1___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/projects.json */
    "./src/assets/projects.json", 1);
    /* harmony import */


    var _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../resume-viewer/resume-viewer.component */
    "./src/app/resume-viewer/resume-viewer.component.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_screen_size_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/screen-size.service */
    "./src/app/shared/screen-size.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../blog/blog.component */
    "./src/app/blog/blog.component.ts");

    var _c0 = ["drawer"];

    function NavbarComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_5_Template_mat_list_option_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.viewResume();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_5_Template_mat_list_option_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.scroll("about");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_5_Template_mat_list_option_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.scroll("experience");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_5_Template_mat_list_option_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.scroll("projects");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_5_Template_mat_list_option_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.goToBlog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blogs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_6_Template_mat_list_option_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.goToHome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.viewResume();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.scroll("about");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.scroll("experience");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.scroll("projects");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.goToBlog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blogs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_12_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.goToHome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_span_12_button_2_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_span_12_button_4_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_span_12_button_6_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_span_12_button_8_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_span_12_button_10_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_span_12_button_12_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBlog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBlog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBlog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBlog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBlog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isBlog);
      }
    }

    function NavbarComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_15_app_about_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 32);
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r36.screenSize);
      }
    }

    function NavbarComponent_span_15_app_about_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 33);
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r37.screenSize);
      }
    }

    function NavbarComponent_span_15_app_experience_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience", 34);
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r38.screenSize);
      }
    }

    function NavbarComponent_span_15_app_experience_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience", 35);
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r39.screenSize);
      }
    }

    function NavbarComponent_span_15_app_projects_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-projects", 36);
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r40.screenSize)("projectList", ctx_r40.projectList);
      }
    }

    function NavbarComponent_span_15_app_projects_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-projects", 37);
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("projectList", ctx_r41.projectList);
      }
    }

    function NavbarComponent_span_15_app_footer_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 38);
      }
    }

    function NavbarComponent_span_15_app_footer_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 39);
      }
    }

    function NavbarComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_span_15_app_about_3_Template, 1, 1, "app-about", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_span_15_app_about_4_Template, 1, 1, "app-about", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_span_15_app_experience_5_Template, 1, 1, "app-experience", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_span_15_app_experience_6_Template, 1, 1, "app-experience", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_span_15_app_projects_7_Template, 1, 2, "app-projects", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_span_15_app_projects_8_Template, 1, 2, "app-projects", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_span_15_app_footer_9_Template, 1, 0, "app-footer", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_span_15_app_footer_10_Template, 1, 0, "app-footer", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r5.screenSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize != "Large" && ctx_r5.screenSize != "XLarge" && ctx_r5.screenSize != "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize == "Large" || ctx_r5.screenSize == "XLarge" || ctx_r5.screenSize == "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize != "Large" && ctx_r5.screenSize != "XLarge" && ctx_r5.screenSize != "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize == "Large" || ctx_r5.screenSize == "XLarge" || ctx_r5.screenSize == "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize != "Large" && ctx_r5.screenSize != "XLarge" && ctx_r5.screenSize != "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize == "Large" || ctx_r5.screenSize == "XLarge" || ctx_r5.screenSize == "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize != "Large" && ctx_r5.screenSize != "XLarge" && ctx_r5.screenSize != "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.screenSize == "Large" || ctx_r5.screenSize == "XLarge" || ctx_r5.screenSize == "Medium");
      }
    }

    function NavbarComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-blog", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r6.screenSize);
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(breakpointObserver, dialog, router, screenSizeService) {
        _classCallCheck(this, NavbarComponent);

        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.router = router;
        this.screenSizeService = screenSizeService;
        this.isSideNavOpen = false;
        this.isBlog = false;
        this.projectList = _assets_projects_json__WEBPACK_IMPORTED_MODULE_1__;
      }

      return _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.screenSizeService.screenSize$.subscribe(function (size) {
            _this4.screenSize = size;
          });
        }
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav() {
          this.isSideNavOpen = !this.isSideNavOpen;
        }
      }, {
        key: "scroll",
        value: function scroll(el) {
          this.drawer.close();
          this.isBlog = false;
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000);
          el = document.getElementById(el);
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }, {
        key: "goToBlog",
        value: function goToBlog() {
          this.router.navigate(['/blog']); // navigates to /blog route

          this.isBlog = !this.isBlog;
          this.drawer.close();
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['/']); // navigates to /blog route

          this.isBlog = !this.isBlog;
          this.drawer.close();
        }
      }, {
        key: "viewResume",
        value: function viewResume() {
          console.log("Resume");
          this.openDialog(); //this.openFile();
        }
      }, {
        key: "openFile",
        value: function openFile() {
          window.open("../../assets/docs/Resume.pdf");
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ResumeViewerComponent"], {
            width: '95%',
            height: '90%',
            backdropClass: 'backDrop',
            panelClass: 'dialog-custom'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_screen_size_service__WEBPACK_IMPORTED_MODULE_8__["ScreenSizeService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      viewQuery: function NavbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        }
      },
      decls: 17,
      vars: 7,
      consts: [[1, "body"], [1, "drawer-container"], ["position", "end", "mode", "over", "appOpenSidebarOnSwipe", "", 1, "side-nav"], ["drawer", ""], [3, "multiple"], [4, "ngIf"], [1, "drawer-content"], [1, "nav-bar"], [1, "toolbar-div"], [1, "toolbar-title"], ["class", "toolbar-buttons", "style", "margin-left: 10%;", 4, "ngIf"], [1, "toolbar-menu"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "list-option", 3, "click"], ["value", "about", 1, "list-option", 3, "click"], ["value", "experience", 1, "list-option", 3, "click"], ["value", "projects", 1, "list-option", 3, "click"], ["value", "Blog", 1, "list-option", 3, "click"], [1, "toolbar-buttons", 2, "margin-left", "10%"], ["class", "button", "mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "button", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "hero", 3, "screenSize"], ["hero", ""], ["id", "about", "class", "about-lowres", 3, "screenSize", 4, "ngIf"], ["id", "about", "class", "about", 3, "screenSize", 4, "ngIf"], ["id", "experience", "class", "experience-lowres", 3, "screenSize", 4, "ngIf"], ["id", "experience", "class", "experience", 3, "screenSize", 4, "ngIf"], ["id", "projects", "class", "projects-lowres", 3, "screenSize", "projectList", 4, "ngIf"], ["id", "projects", "class", "projects", 3, "screenSize", "projectList", 4, "ngIf"], ["id", "footer", "class", "footer-lowres", 4, "ngIf"], ["id", "footer", "class", "footer", 4, "ngIf"], ["id", "about", 1, "about-lowres", 3, "screenSize"], ["id", "about", 1, "about", 3, "screenSize"], ["id", "experience", 1, "experience-lowres", 3, "screenSize"], ["id", "experience", 1, "experience", 3, "screenSize"], ["id", "projects", 1, "projects-lowres", 3, "screenSize", "projectList"], ["id", "projects", 1, "projects", 3, "screenSize", "projectList"], ["id", "footer", 1, "footer-lowres"], ["id", "footer", 1, "footer"], [3, "screenSize"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-selection-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_span_5_Template, 11, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_span_6_Template, 3, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-toolbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Divyansh Chauhan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_span_12_Template, 13, 6, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 3, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_span_15_Template, 11, 10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_span_16_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBlog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBlog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBlog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBlog);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_15__["HeroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"]],
      styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.nav-bar[_ngcontent-%COMP%] {\n  height: 80px;\n  background: rgba(0, 0, 0, 0.623);\n  color: white;\n  box-shadow: 3px 1px 12px 4px #000000;\n  transition: all 0.2s;\n  border-radius: 0;\n  display: flex;\n  position: fixed;\n  \n  top: 0;\n  \n  width: 100%;\n  \n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n  z-index: 1;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  min-width: 100px;\n  min-height: 30px;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.title[_ngcontent-%COMP%] {\n  min-width: 600px;\n  min-height: 60px;\n  font-weight: 400;\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.day-night[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.material-icons-sharp[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 20px;\n  vertical-align: middle;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n}\n\n.toolbar-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n  text-align: center;\n  margin-right: auto;\n}\n\n.toolbar-div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 100%;\n  flex: 1 1 0;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #0000007a;\n  margin-top: 80px;\n}\n\n.toolbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  min-width: 50%;\n  text-align: left;\n  align-items: flex-start;\n  padding-left: 6%;\n  font-size: medium;\n  font-weight: 400;\n  justify-content: center;\n  align-items: center;\n  padding-top: 4px;\n}\n\n.toolbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: auto;\n  flex: 1;\n}\n\n.hero[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100%;\n  background-color: aqua;\n  z-index: -1;\n}\n\n.drawer-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  color: white;\n  height: 120px;\n  font-size: large;\n  padding: 8px;\n  margin: 8px;\n}\n\n.about[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  top: -20vh;\n  height: 100%;\n  z-index: -1;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.about-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  top: -20vh;\n  height: 100%;\n  z-index: -1;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n  margin-bottom: 20vh;\n}\n\n.experience-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.projects[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: 100%;\n  max-width: 100%;\n  z-index: -1;\n  margin-bottom: 20vh;\n}\n\n.projects-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.getInTouch-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: -1;\n}\n\n.getInTouch[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n}\n\n.resume-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.resume[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 40vh;\n  max-width: 100%;\n  display: flex;\n  position: relative;\n  z-index: 1;\n  justify-content: center;\n}\n\n.footer-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 20vh;\n  position: relative;\n  z-index: -1;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 17vh;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n}\n\n.backDrop[_ngcontent-%COMP%] {\n  background-color: #00f;\n}\n\n.portfolio-components[_ngcontent-%COMP%] {\n  animation: expand 0.8s ease forwards;\n  transition: all 0.8s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURHQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0UsZUFBQTtFQUFpQixxQ0FBQTtFQUNqQixNQUFBO0VBQVEsK0NBQUE7RUFDUixXQUFBO0VBQWEsZUFBQTtFQUNmLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FDR0E7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRE47O0FESUU7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRk47O0FETUU7RUFDRyxnQkFBQTtFQUNELE1BQUE7QUNISjs7QURNRTtFQUNFO2dEQUFBO0VBRUQsY0FBQTtBQ0hIOztBREtDO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0ZIOztBRE1DO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISDs7QURNQztFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hIOztBRFFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNMQTs7QURRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRFFBO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURZQTtFQUVFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ1ZGOztBRGFBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNYRjs7QURlQTtFQUNFLFlBQUE7QUNaRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1pBOztBRGVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDYkY7O0FEaUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZEo7O0FEbUJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNoQk47O0FEb0JBO0VBQ1EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDakJSOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2xCRjs7QURxQkE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNuQkY7O0FEdUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDcEJGOztBRHVCQTtFQUVFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDckJGOztBRHlCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3RCRjs7QUR5QkE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN2QkY7O0FEMkJBO0VBRUUsc0JBQUE7QUN6QkY7O0FENEJBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ3pCRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIFxyXG59XHJcblxyXG4ubmF2LWJhcntcclxuaGVpZ2h0OiA4MHB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XHJcbnRyYW5zaXRpb246IGFsbCAwLjIwcztcclxuYm9yZGVyLXJhZGl1czogMDtcclxuZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXHJcbiAgdG9wOiAwOyAvKiBQb3NpdGlvbiB0aGUgbmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuei1pbmRleDogMTsgIFxyXG59XHJcbi8vIG1hdC10b29sYmFyOmhvdmVyIHtcclxuXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcclxuXHJcbi8vIH1cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4gIFxyXG4uYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSAgXHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH0gIFxyXG5cclxuICAuZGF5LW5pZ2h0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtaWNvbnMtc2hhcnB7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBcclxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLypUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guICBcclxuICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgZmxleDogMSAxIGF1dG87XHJcbiB9XHJcbiAuZHJhd2VyLWNvbnRhaW5lcntcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gfVxyXG5cclxuIC50b29sYmFyLWRpdiBkaXZ7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcblxyXG4gLnRvb2xiYXItZGl2e1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgIGZsZXg6MSAxIDA7IFxyXG4gfVxyXG5cclxuXHJcblxyXG4uc2lkZS1uYXZ7XHJcbndpZHRoOiBmaXQtY29udGVudDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG5tYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxle1xyXG4gIFxyXG4gIG1pbi13aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbi50b29sYmFyLW1lbnV7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmbGV4OjE7XHJcbn1cclxuXHJcbi5oZXJve1xyXG5cclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgXHJcbiAgei1pbmRleDogLTE7XHJcbiAgXHJcbn1cclxuXHJcbi5kcmF3ZXItY29udGVudHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5hYm91dHtcclxud2lkdGg6IDEwMCU7XHJcbm1heC13aWR0aDogMTAwJTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnRvcDotMjB2aDtcclxuaGVpZ2h0OiAxMDAlO1xyXG56LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5hYm91dC1sb3dyZXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHRvcDotMjB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuLmV4cGVyaWVuY2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHZoO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmV4cGVyaWVuY2UtbG93cmVze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdHN7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbi5wcm9qZWN0cy1sb3dyZXN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBcclxuICAgICAgICBcclxufVxyXG4uZ2V0SW5Ub3VjaC1sb3dyZXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmdldEluVG91Y2h7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgXHJcbn1cclxuXHJcbi5yZXN1bWUtbG93cmVze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnJlc3VtZXtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuXHJcbi5mb290ZXItbG93cmVze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTd2aDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgXHJcbn1cclxuXHJcbi5iYWNrRHJvcHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjtcclxufVxyXG5cclxuLnBvcnRmb2xpby1jb21wb25lbnRze1xyXG4gIGFuaW1hdGlvbjogZXhwYW5kIC44cyBlYXNlIGZvcndhcmRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZTtcclxufSIsImh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLm5hdi1iYXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMTJweCA0cHggIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2V0IHRoZSBuYXZiYXIgdG8gZml4ZWQgcG9zaXRpb24gKi9cbiAgdG9wOiAwO1xuICAvKiBQb3NpdGlvbiB0aGUgbmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kYXktbmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1zaGFycCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxuICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRvb2xiYXItZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b29sYmFyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZmxleDogMSAxIDA7XG59XG5cbi5zaWRlLW5hdiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi50b29sYmFyLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cblxuLmhlcm8ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmRyYXdlci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdC1vcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5hYm91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmFib3V0LWxvd3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XG59XG5cbi5leHBlcmllbmNlLWxvd3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2plY3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW4tYm90dG9tOiAyMHZoO1xufVxuXG4ucHJvamVjdHMtbG93cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZ2V0SW5Ub3VjaC1sb3dyZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5nZXRJblRvdWNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucmVzdW1lLWxvd3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmVzdW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwdmg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1sb3dyZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxN3ZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5iYWNrRHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGY7XG59XG5cbi5wb3J0Zm9saW8tY29tcG9uZW50cyB7XG4gIGFuaW1hdGlvbjogZXhwYW5kIDAuOHMgZWFzZSBmb3J3YXJkcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(-100%)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            transform: 'translateX(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            transform: 'translateX(-100%)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _shared_screen_size_service__WEBPACK_IMPORTED_MODULE_8__["ScreenSizeService"]
        }];
      }, {
        drawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['drawer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projectcard/projectcard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/projectcard/projectcard.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectcardComponent */

  /***/
  function _src_app_projectcard_projectcardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectcardComponent", function () {
      return ProjectcardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ProjectcardComponent_mat_card_0_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r86 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r86, " ");
      }
    }

    function ProjectcardComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectcardComponent_mat_card_0_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.navigate(ctx_r87.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectcardComponent_mat_card_0_span_10_Template, 2, 1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r83.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r83.details, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r83.techStack);
      }
    }

    function ProjectcardComponent_mat_card_1_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r90, " ");
      }
    }

    function ProjectcardComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectcardComponent_mat_card_1_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.navigate(ctx_r91.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectcardComponent_mat_card_1_span_10_Template, 2, 1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r84.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r84.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r84.details, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r84.techStack);
      }
    }

    var ProjectcardComponent =
    /*#__PURE__*/
    function () {
      function ProjectcardComponent() {
        _classCallCheck(this, ProjectcardComponent);
      }

      return _createClass(ProjectcardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("link" + this.link);
          console.log("title" + this.title);
        }
      }, {
        key: "navigate",
        value: function navigate(link) {
          window.open(this.link, "_blank");
        }
      }]);
    }();

    ProjectcardComponent.ɵfac = function ProjectcardComponent_Factory(t) {
      return new (t || ProjectcardComponent)();
    };

    ProjectcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectcardComponent,
      selectors: [["app-projectcard"]],
      inputs: {
        screenSize: "screenSize",
        title: "title",
        image: "image",
        details: "details",
        techStack: "techStack",
        link: "link"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "example-card", 3, "click", 4, "ngIf"], ["class", "example-card-lowres", 3, "click", 4, "ngIf"], [1, "example-card", 3, "click"], ["mat-card-image", "", 3, "src"], [2, "margin-left", "15px", "max-height", "50px", "min-height", "50px"], [2, "margin-bottom", "10px", "padding-bottom", "5px"], [1, "techStack"], ["class", "stackLabel", 4, "ngFor", "ngForOf"], [1, "stackLabel"], [1, "example-card-lowres", 3, "click"], [2, "margin-left", "15px", "height", "80px"]],
      template: function ProjectcardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectcardComponent_mat_card_0_Template, 11, 4, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectcardComponent_mat_card_1_Template, 11, 4, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: 350px;\n  border-radius: 10px;\n  margin-left: 5%;\n  margin-right: 5%;\n  transition: transform 0.2s;\n  \n}\n\n.example-card[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  cursor: pointer;\n  transform: scale(1.05);\n  box-shadow: 1px 1px 12px 1px #ffffffa6;\n}\n\n.example-card-lowres[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 10px;\n  transition: transform 0.2s;\n  \n  transform: scale(80%);\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.techStack[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-left: 30px;\n  margin-top: 45px;\n  margin-bottom: 10px;\n}\n\n.stackLabel[_ngcontent-%COMP%] {\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 18px;\n  padding: 5px;\n  background-color: black;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n  margin: 2px;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdGNhcmQvcHJvamVjdGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQTJCLGNBQUE7QUNDL0I7O0FERUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUVBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLDBCQUFBO0VBQTJCLGNBQUE7RUFDM0IscUJBQUE7QUNESjs7QURNRTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEo7O0FET0U7RUFFRSxXQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIC8vbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZDpob3ZlcntcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDFweCAjZmZmZmZmYTY7O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkLWxvd3JlcyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgLy9tYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg4MCUpO1xyXG59XHJcblxyXG5cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnRlY2hTdGFja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdGFja0xhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkIGltZ3tcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAvKiBBbmltYXRpb24gKi9cbn1cblxuLmV4YW1wbGUtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggMXB4ICNmZmZmZmZhNjtcbn1cblxuLmV4YW1wbGUtY2FyZC1sb3dyZXMge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLyogQW5pbWF0aW9uICovXG4gIHRyYW5zZm9ybTogc2NhbGUoODAlKTtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRlY2hTdGFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN0YWNrTGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAycHg7XG59XG5cbm1hdC1jYXJkIGltZyB7XG4gIGhlaWdodDogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projectcard',
          templateUrl: './projectcard.component.html',
          styleUrls: ['./projectcard.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        techStack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function _src_app_projects_projectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../resume-viewer/resume-viewer.component */
    "./src/app/resume-viewer/resume-viewer.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../projectcard/projectcard.component */
    "./src/app/projectcard/projectcard.component.ts");

    function ProjectsComponent_div_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-projectcard", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r76 = ctx.$implicit;

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r75.screenSize)("title", i_r76.title)("image", i_r76.image)("details", i_r76.details)("techStack", i_r76.techStack)("link", i_r76.link);
      }
    }

    function ProjectsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_1_span_4_Template, 2, 6, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For more details on corporate projects. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.viewResume();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Resume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r73.projectList);
      }
    }

    function ProjectsComponent_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-projectcard", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r80 = ctx.$implicit;

        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r79.screenSize)("title", i_r80.title)("image", i_r80.image)("details", i_r80.details)("techStack", i_r80.techStack)("link", i_r80.link);
      }
    }

    function ProjectsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_2_span_4_Template, 2, 6, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For more details on corporate projects. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_2_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.viewResume();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Resume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r74.projectList);
      }
    }

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(dialog) {
        _classCallCheck(this, ProjectsComponent);

        this.dialog = dialog;
      }

      return _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.projectList);
        }
      }, {
        key: "viewResume",
        value: function viewResume() {
          console.log("Resume");
          this.openDialog(); //this.openFile();
        }
      }, {
        key: "openFile",
        value: function openFile() {
          window.open("../../assets/docs/Resume.pdf");
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_resume_viewer_resume_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ResumeViewerComponent"], {
            width: '95%',
            height: '90%',
            backdropClass: 'backDrop',
            panelClass: 'dialog-custom'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      inputs: {
        screenSize: "screenSize",
        projectList: "projectList"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], [1, "table-div"], [1, "header"], [1, "project-list"], [4, "ngFor", "ngForOf"], [1, "subtitle-text"], ["onclick", "viewResume()", 1, "subtitle"], ["mat-button", "", 2, "color", "black", "background-color", "white", "margin", "0%", 3, "click"], [2, "padding-left", "5px", "padding-right", "5px"], [3, "screenSize", "title", "image", "details", "techStack", "link"], [1, "header-lowres"], [1, "project-list-lowres"], [1, "subtitle"], ["mat-button", "", 2, "color", "black", "background-color", "white", "margin", "5px", "cursor", "pointer", 3, "click"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 11, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_2_Template, 10, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_5__["ProjectcardComponent"]],
      styles: [".body[_ngcontent-%COMP%] {\n  background-color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 10vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 5px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%;\n  max-width: 100%;\n}\n\n.project-list-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%;\n  max-width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  pointer-events: none;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 10px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-align: center;\n}\n\n  .mat-dialog-container {\n  overflow: hidden !important;\n  background: #0f0f0f70;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtBO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FET0E7RUFFSSxvQkFBQTtBQ0xKOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURVQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEYUE7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG5cclxuLmhlYWRlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MjhweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbG93cmVze1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2plY3QtbGlzdHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtbG93cmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIFxyXG59XHJcblxyXG4uc3VidGl0bGUtdGV4dHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnN1YnRpdGxle1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGYwZjBmNzA7XHJcbiAgfSIsIi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGhlaWdodDogNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1sb3dyZXMge1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1saXN0LWxvd3JlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zdWJ0aXRsZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMGYwZjBmNzA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        projectList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-viewer/resume-viewer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/resume-viewer/resume-viewer.component.ts ***!
    \**********************************************************/

  /*! exports provided: ResumeViewerComponent */

  /***/
  function _src_app_resumeViewer_resumeViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeViewerComponent", function () {
      return ResumeViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeViewerComponent =
    /*#__PURE__*/
    function () {
      function ResumeViewerComponent() {
        _classCallCheck(this, ResumeViewerComponent);
      }

      return _createClass(ResumeViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    ResumeViewerComponent.ɵfac = function ResumeViewerComponent_Factory(t) {
      return new (t || ResumeViewerComponent)();
    };

    ResumeViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeViewerComponent,
      selectors: [["app-resume-viewer"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 1,
      vars: 0,
      consts: [["allowtransparency", "true", "src", "../../assets/docs/Resume.pdf#view=fitH", "width", "100%", "height", "100%", "scrolling", "yes"]],
      template: function ResumeViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS12aWV3ZXIvcmVzdW1lLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume-viewer',
          templateUrl: './resume-viewer.component.html',
          styleUrls: ['./resume-viewer.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/screen-size.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/screen-size.service.ts ***!
    \***********************************************/

  /*! exports provided: ScreenSizeService */

  /***/
  function _src_app_shared_screenSizeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenSizeService", function () {
      return ScreenSizeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ScreenSizeService =
    /*#__PURE__*/
    function () {
      function ScreenSizeService() {
        _classCallCheck(this, ScreenSizeService);

        this.screenSizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Unknown');
        this.screenSize$ = this.screenSizeSource.asObservable();
      }

      return _createClass(ScreenSizeService, [{
        key: "setScreenSize",
        value: function setScreenSize(size) {
          this.screenSizeSource.next(size);
        }
      }]);
    }();

    ScreenSizeService.ɵfac = function ScreenSizeService_Factory(t) {
      return new (t || ScreenSizeService)();
    };

    ScreenSizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScreenSizeService,
      factory: ScreenSizeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenSizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/strip-html.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/strip-html.pipe.ts ***!
    \*******************************************/

  /*! exports provided: StripHtmlPipe */

  /***/
  function _src_app_shared_stripHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripHtmlPipe", function () {
      return StripHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StripHtmlPipe =
    /*#__PURE__*/
    function () {
      function StripHtmlPipe() {
        _classCallCheck(this, StripHtmlPipe);
      }

      return _createClass(StripHtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          if (!value) return '';
          return value.replace(/<[^>]+>/g, ''); // Removes all HTML tags
        }
      }]);
    }();

    StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) {
      return new (t || StripHtmlPipe)();
    };

    StripHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "stripHtml",
      type: StripHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'stripHtml'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/skill-scale/skill-scale.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/skill-scale/skill-scale.component.ts ***!
    \******************************************************/

  /*! exports provided: SkillScaleComponent */

  /***/
  function _src_app_skillScale_skillScaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillScaleComponent", function () {
      return SkillScaleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillScaleComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r62 ? "fa-star filled" : "fa-star-o");
      }
    }

    var SkillScaleComponent =
    /*#__PURE__*/
    function () {
      function SkillScaleComponent() {
        _classCallCheck(this, SkillScaleComponent);

        this.ratingArray = [];
      }

      return _createClass(SkillScaleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.ratingArray = Array.from({
            length: 5
          }, function (_, i) {
            return i < _this5.rating;
          });
        }
      }]);
    }();

    SkillScaleComponent.ɵfac = function SkillScaleComponent_Factory(t) {
      return new (t || SkillScaleComponent)();
    };

    SkillScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillScaleComponent,
      selectors: [["app-skill-scale"]],
      inputs: {
        skillName: "skillName",
        rating: "rating"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "skill-scale"], [1, "skill-name"], [1, "stars"], [4, "ngFor", "ngForOf"], [1, "fa", 3, "ngClass"]],
      template: function SkillScaleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillScaleComponent_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".skill-scale[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  color: white;\n}\n\n.skill-name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n}\n\n.stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n\n.fa-star.filled[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.fa-star-o[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9za2lsbC1zY2FsZS9za2lsbC1zY2FsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGwtc2NhbGUvc2tpbGwtc2NhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGwtc2NhbGUvc2tpbGwtc2NhbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtc2NhbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNraWxsLW5hbWUge1xyXG4gIGZsZXg6IDE7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4uZmEtc3Rhci5maWxsZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5mYS1zdGFyLW8ge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuIiwiLnNraWxsLXNjYWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraWxsLW5hbWUge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3RhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJweDtcbn1cblxuLmZhLXN0YXIuZmlsbGVkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLXN0YXItbyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skill-scale',
          templateUrl: './skill-scale.component.html',
          styleUrls: ['./skill-scale.component.scss']
        }]
      }], null, {
        skillName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/skillset/skillset.component.ts":
  /*!************************************************!*\
    !*** ./src/app/skillset/skillset.component.ts ***!
    \************************************************/

  /*! exports provided: SkillsetComponent */

  /***/
  function _src_app_skillset_skillsetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsetComponent", function () {
      return SkillsetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function SkillsetComponent_div_1_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r66.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r66.level);
      }
    }

    function SkillsetComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsetComponent_div_1_li_4_Template, 4, 2, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r64.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r64.skills);
      }
    }

    var SkillsetComponent =
    /*#__PURE__*/
    function () {
      function SkillsetComponent() {
        _classCallCheck(this, SkillsetComponent);

        // ✅ Single unified skill structure
        this.categories = [{
          title: "Programming Languages",
          skills: [{
            name: "Java",
            level: 85
          }, {
            name: "TypeScript",
            level: 70
          }, {
            name: "Python",
            level: 80
          }]
        }, {
          title: "Front-End",
          skills: [{
            name: "Angular",
            level: 65
          }, {
            name: "HTML + CSS",
            level: 90
          }]
        }, {
          title: "Back-End",
          skills: [{
            name: "SpringBoot",
            level: 80
          }, {
            name: "Object Oriented Design",
            level: 95
          }, {
            name: "MySQL",
            level: 75
          }]
        }, {
          title: "DevOps",
          skills: [{
            name: "Git & GitHub",
            level: 85
          }, {
            name: "Jenkins",
            level: 70
          }, {
            name: "OpenShift",
            level: 55
          }, {
            name: "Docker",
            level: 60
          }]
        }, {
          title: "Other Cool Skills",
          skills: [{
            name: "Guitar",
            level: 60
          }, {
            name: "Piano",
            level: 40
          }, {
            name: "Video Editing",
            level: 55
          }]
        }];
        this.splitCategories = [];
      }

      return _createClass(SkillsetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.splitCategories = this.splitIntoColumns(this.categories, 2);
        } // ✅ Utility to split evenly into N columns

      }, {
        key: "splitIntoColumns",
        value: function splitIntoColumns(arr, columns) {
          var result = Array.from({
            length: columns
          }, function () {
            return [];
          });
          arr.forEach(function (item, index) {
            result[index % columns].push(item);
          });
          return result;
        }
      }]);
    }();

    SkillsetComponent.ɵfac = function SkillsetComponent_Factory(t) {
      return new (t || SkillsetComponent)();
    };

    SkillsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsetComponent,
      selectors: [["app-skillset"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "skills-grid"], ["class", "skill-card", 4, "ngFor", "ngForOf"], [1, "skill-card"], [1, "category-title"], [4, "ngFor", "ngForOf"], [1, "skill-name"], ["mode", "determinate", 1, "skill-bar", 3, "value"]],
      template: function SkillsetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsetComponent_div_1_Template, 5, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]],
      styles: [".skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n\n.skill-card[_ngcontent-%COMP%] {\n  background: rgba(69, 69, 69, 0.535);\n  padding: 20px;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.skill-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);\n}\n\n.skill-card[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 6px;\n}\n\n.skill-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.skill-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.skill-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: #ddd;\n}\n\n.skill-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n}\n\n\n\n  .mat-progress-bar-fill::after {\n  background-color: #691fa2;\n  \n}\n\n  .mat-progress-bar-buffer {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9za2lsbHNldC9za2lsbHNldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzZXQvc2tpbGxzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxxREFBQTtBQ0NKOztBRENJO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQ0NOOztBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtBQ0FOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0ROOztBREdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RWOztBRElRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRlY7O0FEUUUsaUNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixrQkFBQTtBQ0ovQjs7QURPRTtFQUNFLHVCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9za2lsbHNldC9za2lsbHNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY5LCA2OSwgNjksIDAuNTM1KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuICBcclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIFxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIFxyXG4gICAgICAgIC5za2lsbC1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc2tpbGwtYmFyIHtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBQcm9ncmVzcyBiYXIgY29sb3Igb3ZlcnJpZGVzICovXHJcbiAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTFmYTI7IC8qIGdvbGRlbiB5ZWxsb3cgKi9cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gICIsIi5za2lsbHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5za2lsbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2OSwgNjksIDY5LCAwLjUzNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cbi5za2lsbC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5za2lsbC1jYXJkIC5jYXRlZ29yeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4uc2tpbGwtY2FyZCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5za2lsbC1jYXJkIHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uc2tpbGwtY2FyZCB1bCBsaSAuc2tpbGwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBjb2xvcjogI2RkZDtcbn1cbi5za2lsbC1jYXJkIHVsIGxpIC5za2lsbC1iYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4vKiBQcm9ncmVzcyBiYXIgY29sb3Igb3ZlcnJpZGVzICovXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjkxZmEyO1xuICAvKiBnb2xkZW4geWVsbG93ICovXG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skillset',
          templateUrl: './skillset.component.html',
          styleUrls: ['./skillset.component.scss']
        }]
      }], null, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/social-tray/social-tray.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/social-tray/social-tray.component.ts ***!
    \******************************************************/

  /*! exports provided: SocialTrayComponent */

  /***/
  function _src_app_socialTray_socialTrayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialTrayComponent", function () {
      return SocialTrayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SocialTrayComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SocialTrayComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SocialTrayComponent =
    /*#__PURE__*/
    function () {
      function SocialTrayComponent() {
        _classCallCheck(this, SocialTrayComponent);
      }

      return _createClass(SocialTrayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    SocialTrayComponent.ɵfac = function SocialTrayComponent_Factory(t) {
      return new (t || SocialTrayComponent)();
    };

    SocialTrayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialTrayComponent,
      selectors: [["app-social-tray"]],
      inputs: {
        screenSize: "screenSize"
      },
      decls: 2,
      vars: 2,
      consts: [["style", "display: flex; flex-direction: row;", 4, "ngIf"], ["style", "display: flex; flex-direction: column;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row"], ["href", "https://www.linkedin.com/in/divyansh-chauhan", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://github.com/divynshh", "target", "_blank", 1, "fa", "fa-github"], ["href", "https://www.instagram.com/divynshh/", "target", "_blank", 1, "fa", "fa-instagram"], ["href", "https://twitter.com/divynshh", "target", "_blank", 1, "fa", "fa-twitter"], ["href", "https://www.youtube.com/channel/UC2SkaBqDP_eTE2mgnbHUU1g", "target", "_blank", 1, "fa", "fa-youtube-play"], ["href", "#", 1, "fa", "fa-envelope"], [2, "display", "flex", "flex-direction", "column"], ["href", "#getInTouch", 1, "fa", "fa-envelope"]],
      template: function SocialTrayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialTrayComponent_div_0_Template, 7, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialTrayComponent_div_1_Template, 7, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".fa[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n  border-radius: 50%;\n  text-shadow: none;\n  color: white;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 8px white;\n  text-decoration: none;\n}\n\n.fa-twitter[_ngcontent-%COMP%]:hover {\n  color: #44a2eb;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-linkedin[_ngcontent-%COMP%]:hover {\n  color: #68b5da;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-youtube-play[_ngcontent-%COMP%]:hover {\n  color: #fd3333;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-instagram[_ngcontent-%COMP%]:hover {\n  color: #ff59b4;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-github[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  background: rgba(168, 168, 168, 0.26);\n  box-shadow: 0 0px 8px black;\n}\n\n.fa-envelope[_ngcontent-%COMP%]:hover {\n  color: #d39b48;\n  background: rgba(0, 0, 0, 0.527);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC9zb2NpYWwtdHJheS9zb2NpYWwtdHJheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc29jaWFsLXRyYXkvc29jaWFsLXRyYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FET0E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUNKRjs7QURhQTtFQUVFLGNBQUE7RUFDQSxnQ0FBQTtBQ1hGOztBRGNBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDWEY7O0FEZUE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUNaRjs7QURnQkE7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtBQ2JGOztBRGlCQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsLXRyYXkvc29jaWFsLXRyYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiA1cHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLy8gLmZhLWZhY2Vib29rIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4vLyAgIGNvbG9yOiAjM0I1OTk4O1xyXG4vLyB9XHJcblxyXG4uZmEtdHdpdHRlcjpob3ZlciB7XHJcbiAgY29sb3I6ICM0NGEyZWI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgXHJcbn1cclxuXHJcbi8vIC5mYS1nb29nbGUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4uZmEtbGlua2VkaW46aG92ZXIge1xyXG4gIFxyXG4gIGNvbG9yOiAjNjhiNWRhO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG59XHJcblxyXG4uZmEteW91dHViZS1wbGF5OmhvdmVyIHtcclxuICBjb2xvcjogI2ZkMzMzMztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBcclxufVxyXG5cclxuLmZhLWluc3RhZ3JhbTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZjU5YjQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgXHJcbn1cclxuXHJcbi5mYS1naXRodWI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTY4LCAxNjgsIDE2OCwgMC4yNik7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IHJnYigwLCAwLCAwKTtcclxuICBcclxufVxyXG5cclxuLmZhLWVudmVsb3BlOmhvdmVyIHtcclxuICBjb2xvcjogI2QzOWI0ODtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBcclxufVxyXG5cclxuLy8gLmZhLXBpbnRlcmVzdCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2NiMjAyNztcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1zbmFwY2hhdC1naG9zdCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmZmMwMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1za3lwZSB7XHJcbi8vICAgYmFja2dyb3VuZDogIzAwYWZmMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1hbmRyb2lkIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjYTRjNjM5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWRyaWJiYmxlIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZWE0Yzg5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXZpbWVvIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjNDViYmZmO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXR1bWJsciB7XHJcbi8vICAgYmFja2dyb3VuZDogIzJjNDc2MjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS12aW5lIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMDBiNDg5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWZvdXJzcXVhcmUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICM0NWJiZmY7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtc3R1bWJsZXVwb24ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNlYjQ5MjQ7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZmxpY2tyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZjQwMDgzO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXlhaG9vIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjNDMwMjk3O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXNvdW5kY2xvdWQge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZjU1MDA7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtcmVkZGl0IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmY1NzAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXJzcyB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmNjYwMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH0iLCIuZmEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiA1cHggMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmEtdHdpdHRlcjpob3ZlciB7XG4gIGNvbG9yOiAjNDRhMmViO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcbn1cblxuLmZhLWxpbmtlZGluOmhvdmVyIHtcbiAgY29sb3I6ICM2OGI1ZGE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xufVxuXG4uZmEteW91dHViZS1wbGF5OmhvdmVyIHtcbiAgY29sb3I6ICNmZDMzMzM7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xufVxuXG4uZmEtaW5zdGFncmFtOmhvdmVyIHtcbiAgY29sb3I6ICNmZjU5YjQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xufVxuXG4uZmEtZ2l0aHViOmhvdmVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTY4LCAxNjgsIDE2OCwgMC4yNik7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCBibGFjaztcbn1cblxuLmZhLWVudmVsb3BlOmhvdmVyIHtcbiAgY29sb3I6ICNkMzliNDg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialTrayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-tray',
          templateUrl: './social-tray.component.html',
          styleUrls: ['./social-tray.component.scss']
        }]
      }], function () {
        return [];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/video/video.component.ts":
  /*!******************************************!*\
    !*** ./src/app/video/video.component.ts ***!
    \******************************************/

  /*! exports provided: VideoComponent */

  /***/
  function _src_app_video_videoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
      return VideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VideoComponent_video_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r46.mp4Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r46.webmSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r46.m4vSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function VideoComponent_video_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r47.mp4Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r47.webmSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r47.m4vSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var VideoComponent =
    /*#__PURE__*/
    function () {
      function VideoComponent(sanitizer) {
        _classCallCheck(this, VideoComponent);

        this.sanitizer = sanitizer;
      }

      return _createClass(VideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.safeMp4Src = this.sanitizer.bypassSecurityTrustResourceUrl(this.mp4Src);
          this.safeWebmSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.webmSrc);
          this.safeM4vSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.m4vSrc);
        }
      }]);
    }();

    VideoComponent.ɵfac = function VideoComponent_Factory(t) {
      return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoComponent,
      selectors: [["app-video"]],
      inputs: {
        screenSize: "screenSize",
        mp4Src: "mp4Src",
        webmSrc: "webmSrc",
        m4vSrc: "m4vSrc"
      },
      decls: 2,
      vars: 2,
      consts: [["preload", "auto", "loop", "", "id", "title-video", 3, "autoplay", "muted", 4, "ngIf"], ["loop", "", "id", "title-video-lowres", 3, "autoplay", "muted", 4, "ngIf"], ["preload", "auto", "loop", "", "id", "title-video", 3, "autoplay", "muted"], ["type", "video/mp4", 3, "src"], ["type", "video/webm", 3, "src"], ["loop", "", "id", "title-video-lowres", 3, "autoplay", "muted"]],
      template: function VideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_video_0_Template, 4, 5, "video", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoComponent_video_1_Template, 4, 5, "video", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["#title-video[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  min-width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  filter: brightness(70%);\n}\n\n#title-video-lowres[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  min-width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  filter: brightness(60%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJzMjQvUGVyc29uYWxfUmVwb3MvTXlQb3J0Rm9saW8vc3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUtdmlkZW8ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcclxuICB9XHJcblxyXG4gICN0aXRsZS12aWRlby1sb3dyZXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7IFxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDYwJSk7XHJcbiAgICBcclxuICAgIFxyXG4gIH0iLCIjdGl0bGUtdmlkZW8ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XG59XG5cbiN0aXRsZS12aWRlby1sb3dyZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video',
          templateUrl: './video.component.html',
          styleUrls: ['./video.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        screenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mp4Src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        webmSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        m4vSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/assets/projects.json":
  /*!**********************************!*\
    !*** ./src/assets/projects.json ***!
    \**********************************/

  /*! exports provided: 0, 1, 2, 3, 4, default */

  /***/
  function _src_assets_projectsJson(module) {
    module.exports = JSON.parse("[{\"title\":\"Chauferly by CARS24\",\"details\":\"A Driver on Demand Service in UAE launched by CARS24.\",\"image\":\"../../assets/images/Chauferly.png\",\"techStack\":[\"Java\",\"Springboot\",\"GCP\"],\"link\":\"https://www.cars24.ae/chauferly-safe-driver-dubai/\"},{\"title\":\"Airtel Money (Africa)\",\"details\":\"Mobile Financial Services provided by Airtel Africa in 14 Countries of African continent.\",\"image\":\"../../assets/images/AirtelAfrica.png\",\"techStack\":[\"Java\",\"Springboot\",\"Redis\",\"Kafka\"],\"link\":\"https://www.airtel.co.zm/airtel_money\"},{\"title\":\"Portfolio Website\",\"details\":\"A single page web application showcasing my skills, experience and interests.\",\"image\":\"../../assets/images/Project1.png\",\"techStack\":[\"Angular\",\"MaterialUI\"],\"link\":\"https://github.com/divynshh/MyPortFolio\"},{\"title\":\"Emotion Detector\",\"details\":\"A web application which detects stress/anxiety based on facial/voice expressions of a person.\",\"image\":\"../../assets/images/Project2.jpg\",\"techStack\":[\"Python\",\"Angular\",\"Tensorflow\"],\"link\":\"https://github.com/divynshh/Emotion-Detector/blob/main/README.md\"},{\"title\":\"AERO\",\"details\":\"Application for Emergence Response Operation, is a mobile application that displays the availability of beds in a nearby hospitals.\",\"image\":\"../../assets/images/Project3.png\",\"techStack\":[\"Android\",\"Java\",\"MySQL\"],\"link\":\"https://github.com/divynshh/AERO\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/cars24/Personal_Repos/MyPortFolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map