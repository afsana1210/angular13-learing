"use strict";
(self["webpackChunkvendor_onboarding"] = self["webpackChunkvendor_onboarding"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/layout/layout.component */ 1378);
/* harmony import */ var _features_user_auth_user_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/user-auth/user-auth.module */ 6066);
/* harmony import */ var _features_subcontractor_prequalification_subcontractor_prequalification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/subcontractor-prequalification/subcontractor-prequalification.module */ 1758);
/* harmony import */ var _features_vendor_prequalification_vendor_prequalification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/vendor-prequalification/vendor-prequalification.module */ 512);
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/admin-guard.service */ 440);
/* harmony import */ var _services_token_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.guard */ 9112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: 'auth',
        loadChildren: () => _features_user_auth_user_auth_module__WEBPACK_IMPORTED_MODULE_1__.UserAuthModule,
    },
    {
        path: 'subcontrator-prequalification',
        loadChildren: () => _features_subcontractor_prequalification_subcontractor_prequalification_module__WEBPACK_IMPORTED_MODULE_2__.SubcontractorPrequalificationModule,
    },
    {
        path: 'vendor-prequalification',
        loadChildren: () => _features_vendor_prequalification_vendor_prequalification_module__WEBPACK_IMPORTED_MODULE_3__.VendorPrequalificationModule,
    },
    {
        path: '',
        component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_qm-dashboard_qm-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/qm-dashboard/qm-dashboard.module */ 6687)).then((m) => m.QmDashboardModule),
                canActivate: [_services_token_guard__WEBPACK_IMPORTED_MODULE_5__.TokenGuard],
            },
            {
                path: 'vendor-request',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_vendor_vendor_module_ts"), __webpack_require__.e("default-src_app_features_vendor-request_components_view-user-detail_view-user-detail_componen-ea1a05"), __webpack_require__.e("src_app_features_vendor-request_vendor-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/vendor-request/vendor-request.module */ 4502)).then((m) => m.VendorRequestModule),
                canActivate: [_services_token_guard__WEBPACK_IMPORTED_MODULE_5__.TokenGuard],
            },
            {
                path: 'vendor/user',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/user/user.module */ 4852)).then((m) => m.UserModule),
                canActivate: [_services_token_guard__WEBPACK_IMPORTED_MODULE_5__.TokenGuard],
            },
            {
                path: 'approver-configuration',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_vendor-request_components_view-user-detail_view-user-detail_componen-ea1a05"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_approver-conf_approver-conf_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/approver-conf/approver-conf.module */ 2733)).then((m) => m.ApproverConfModule),
                canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_4__.AdminGuardService, _services_token_guard__WEBPACK_IMPORTED_MODULE_5__.TokenGuard],
            },
            {
                path: 'vendor',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_features_vendor_vendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/vendor/vendor.module */ 2787)).then((m) => m.VendorModule),
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/settings/settings.module */ 6867)).then((m) => m.SettingsModule),
                canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_4__.AdminGuardService, _services_token_guard__WEBPACK_IMPORTED_MODULE_5__.TokenGuard],
            },
            // {
            //   path: 'approved-request',
            //   component: ApprovedVendorRequestComponent,
            //   canActivate: [DbuserGuardService,TokenGuard],
            // },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ 2802);



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'vendor-onboarding';
        const loginTime = localStorage.getItem('loginTime');
        if (!loginTime && !location.pathname.startsWith('/auth')) {
            this.router.navigate(['/auth/login']);
        }
        const now = new Date().getTime();
        const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
        // Check if 6 hours have passed
        if (now - parseInt(loginTime, 10) > sixHours) {
            localStorage.removeItem('loginTime');
            this.router.navigate(['/auth/login']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "p-toast");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_2__.Toast], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/helpers */ 4825);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ 2070);
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/admin-guard.service */ 440);
/* harmony import */ var _services_approver_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/approver-guard.service */ 8236);
/* harmony import */ var _services_dbuser_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/dbuser-guard.service */ 8252);
/* harmony import */ var _services_token_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/token.guard */ 9112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
















class AppModule {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_3__.registerIocns)([
            'dashboard',
            'call',
            'ticket',
            'client',
            'setting',
            'opencall',
            'usercall',
            'upload',
            'callincoming',
            'more',
            'managecolumns',
            'edit',
            'delete',
            'open',
            'approver',
            'navsmallcircle',
            'smallarrownav',
            'vendoruser',
            'approvericon',
            'vendoruserselect',
            'solar-user-id',
            'backward2',
            'mail',
            'phone',
            'back_button',
            'active-step-start',
            'complete-start-step',
            'mid-step',
            'active-mid-step',
            'complete-mid-step',
            'end-step',
            'active-end-step',
            'complete-end-step',
            'microsoft-icon',
            'verified',
            'activity',
            'unsubscribe'
        ], this.matIconRegistry, this.domSanitizer);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
            useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor,
            multi: true
        },
        // {
        //   provide:HTTP_INTERCEPTORS,
        //   useClass:ErrorInterceptor,
        //   multi:true
        // },
        _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__.AdminGuardService,
        _services_approver_guard_service__WEBPACK_IMPORTED_MODULE_7__.ApproverGuardService,
        _services_dbuser_guard_service__WEBPACK_IMPORTED_MODULE_8__.DbuserGuardService,
        _services_token_guard__WEBPACK_IMPORTED_MODULE_9__.TokenGuard
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule] }); })();


/***/ }),

/***/ 507:
/*!********************************************************************!*\
  !*** ./src/app/core/components/navigation/navigation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _shared_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/tree/tree.component */ 9837);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
















function NavigationComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.parsedUser == null ? null : ctx_r1.parsedUser.first_name) + " " + (ctx_r1.parsedUser == null ? null : ctx_r1.parsedUser.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.parsedUser == null ? null : ctx_r1.parsedUser.type, " ");
  }
}

function NavigationComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r7.googleUser == null ? null : ctx_r7.googleUser.first_name) + " " + (ctx_r7.googleUser == null ? null : ctx_r7.googleUser.last_name), " ");
  }
}

function NavigationComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_div_37_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.googleUser == null ? null : ctx_r2.googleUser.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.googleUser == null ? null : ctx_r2.googleUser.email);
  }
}

function NavigationComponent_img_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 30);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function NavigationComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r4.parsedUser == null ? null : ctx_r4.parsedUser.first_name == null ? null : ctx_r4.parsedUser.first_name.split("")[0]) + (ctx_r4.parsedUser == null ? null : ctx_r4.parsedUser.last_name == null ? null : ctx_r4.parsedUser.last_name.split("")[0]) || (ctx_r4.googleUser == null ? null : ctx_r4.googleUser.first_name == null ? null : ctx_r4.googleUser.first_name.split("")[0]) + (ctx_r4.googleUser == null ? null : ctx_r4.googleUser.last_name == null ? null : ctx_r4.googleUser.last_name.split("")[0]), " ");
  }
}

function NavigationComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r8.navigateToUserProfile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

const _c0 = ["*"];
class NavigationComponent {
  constructor(breakpointObserver, router, location) {
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.location = location;
    this.fc = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('test');
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)());
    this.designations = ['EHS Coordinator East', 'EHS Coordinator West', 'EHS Coordinator Central', 'Procurement Director'];
    this.TandCLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/QM_IT_Terms_and_Conditions.pdf`;
    this.extUserLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/External_User_Guide_New.pdf`;
    this.faqLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/FAQ.pdf`;
    this.parsedUser = '';
    this.profileImg = '';

    if (router.url.startsWith('/vendor')) {
      this.list1 = [{
        name: 'Applications',
        icon: 'dashboard',
        hideButton: true,
        link: '/vendor',
        icon2: 'dashboard'
      }, {
        name: 'Account Holders',
        icon: 'vendoruser',
        hideButton: true,
        link: '/vendor/account-holders',
        icon2: 'vendoruser'
      } // {
      //   name: 'My Requests',
      //   icon: 'vendoruser',
      //   icon2: 'vendoruserselect',
      //   children: [
      //     {
      //       name: 'All',
      //       link: 'calls/recent-calls',
      //       // icon:'navsmallcircle',
      //       // icon2:'smallarrownav'
      //     },
      //   ],
      // },
      ];
    }
  }

  ngOnInit() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

    const user = localStorage.getItem('user');
    const google_login_user = localStorage.getItem('user-data');
    this.googleUser = JSON.parse(google_login_user);
    this.parsedUser = JSON.parse(user);

    if (this.parsedUser) {
      this.parsedUser = JSON.parse(user);

      if ((_b = (_a = this.parsedUser) === null || _a === void 0 ? void 0 : _a.image_url) === null || _b === void 0 ? void 0 : _b.split('./public')[1]) {
        this.profileImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + ((_d = (_c = this.parsedUser) === null || _c === void 0 ? void 0 : _c.image_url) === null || _d === void 0 ? void 0 : _d.split('./public')[1]);
      }
    }

    if (this.googleUser) {
      this.googleUser = JSON.parse(google_login_user);
      this.profileImg = (_e = this.googleUser) === null || _e === void 0 ? void 0 : _e.photoUrl;
    }

    if (this.router.url != '/vendor') {
      if (((_f = JSON.parse(user)) === null || _f === void 0 ? void 0 : _f.type) == 'approver') {
        this.list1 = [{
          name: 'dashboard',
          icon: 'dashboard',
          hideButton: true,
          link: '/dashboard',
          icon2: 'dashboard'
        }, {
          name: 'Approved',
          link: 'vendor-request/approved',
          hideButton: true,
          icon: 'verified',
          icon2: 'verified'
        }, {
          name: 'Vendor Request',
          icon: 'vendoruser',
          icon2: 'vendoruserselect',
          children: [{
            name: 'New',
            link: 'vendor-request/new'
          }, // {
          //   name: 'Approved',
          //   link: 'vendor-request/approved',
          // },
          {
            name: 'Processed Applications',
            link: 'vendor-request/worked'
          }]
        }, JSON.parse(user).QmDepartment.name === 'Procurement' && {
          name: 'Vendor Login Registration',
          icon: 'vendoruser',
          icon2: 'vendoruserselect',
          link: 'vendor-request/vendor-user-approval-list'
        }, this.designations.includes((_g = JSON.parse(user)) === null || _g === void 0 ? void 0 : _g.Designation.designation) && {
          name: ((_h = JSON.parse(user)) === null || _h === void 0 ? void 0 : _h.Designation.designation) === 'Procurement Director' ? 'Expiring Vendors' : 'Expiring Subcontractors',
          link: 'vendor-request/expiring',
          hideButton: true,
          icon: 'unsubscribe',
          icon2: 'unsubscribe'
        }, this.designations.includes((_j = JSON.parse(user)) === null || _j === void 0 ? void 0 : _j.Designation.designation) && {
          name: ((_k = JSON.parse(user)) === null || _k === void 0 ? void 0 : _k.Designation.designation) === 'Procurement Director' ? 'Expired Vendors' : 'Expired Subcontractors',
          link: 'vendor-request/expired',
          hideButton: true,
          icon: 'unsubscribe',
          icon2: 'unsubscribe'
        }];
      } else if (((_l = JSON.parse(user)) === null || _l === void 0 ? void 0 : _l.type) == 'admin') {
        this.list1 = [{
          name: 'dashboard',
          icon: 'dashboard',
          hideButton: true,
          link: '/dashboard',
          icon2: 'dashboard'
        }, {
          name: 'Approver Configuration',
          icon: 'vendoruser',
          icon2: 'vendoruserselect',
          children: [{
            name: 'Configuration',
            link: 'approver-configuration/configuration'
          }]
        }, {
          name: 'Approved',
          link: 'vendor-request/approved',
          hideButton: true,
          icon: 'verified',
          icon2: 'verified'
        }, {
          name: 'Vendor Portal Users',
          link: 'vendor-request/vendor-portal-users',
          hideButton: true,
          icon: 'activity',
          icon2: 'activity'
        }, {
          name: 'Vendor Login Registration',
          icon: 'vendoruser',
          icon2: 'vendoruserselect',
          link: 'vendor-request/vendor-user-approval-list'
        }, {
          name: 'Settings',
          icon: 'approvericon',
          icon2: 'approver',
          children: [{
            name: 'Department',
            link: 'settings/department'
          }, {
            name: 'Designation',
            link: 'settings/designation'
          }, {
            name: 'User',
            link: 'approver-configuration/list'
          }, {
            name: 'MFA Enabled Users',
            link: 'approver-configuration/mfa-code-enabled'
          }]
        }];
      } else if (((_m = JSON.parse(user)) === null || _m === void 0 ? void 0 : _m.type) == 'dbuser') {
        this.list1 = [{
          name: 'dashboard',
          icon: 'dashboard',
          hideButton: true,
          link: '/dashboard',
          icon2: 'dashboard'
        }, {
          name: 'Approved',
          link: 'vendor-request/approved',
          hideButton: true,
          icon: 'verified',
          icon2: 'verified'
        }];
      }
    }
  } // list1: any[] = [
  //   {
  //     name: 'dashboard',
  //     icon: 'dashboard',
  //     hideButton: true,
  //     link: '/dashboard',
  //   },
  //   {
  //     name: 'Vendor Request',
  //     icon: 'vendoruser',
  //     icon2: 'vendoruserselect',
  //     children: [
  //       // {
  //       //   name: 'All',
  //       //   link: 'calls/recent-calls',
  //       //   // icon:'navsmallcircle',
  //       //   // icon2:'smallarrownav'
  //       // },
  //       {
  //         name: 'New',
  //         link: 'vendor-request/new',
  //         // icon:'navsmallcircle',
  //         // icon2:'smallarrownav'
  //       },
  //       // {
  //       //   name: 'Pending for Approval',
  //       //   link: 'calls/lost-calls',
  //       //   // icon:'navsmallcircle',
  //       //   // icon2:'smallarrownav'
  //       // },
  //       // {
  //       //   name: 'Approved',
  //       //   link: 'vendor-request/approved',
  //       //   // icon:'navsmallcircle',
  //       //   // icon2:'smallarrownav'
  //       // },
  //       {
  //         name: 'Requests I have worked on ',
  //         link: 'vendor-request/worked',
  //         // icon:'navsmallcircle',
  //         // icon2:'smallarrownav'
  //       },
  //       // {
  //       //   name: 'Need More Information',
  //       //   link: 'calls/lost-calls',
  //       //   // icon:'navsmallcircle',
  //       //   // icon2:'smallarrownav'
  //       // },
  //     ],
  //   },
  //   {
  //     name: 'Approver Configuration',
  //     icon: 'approvericon',
  //     icon2: 'approver',
  //     children: [
  //       {
  //         name: 'Configuration',
  //         link: 'approver-configuration/configuration',
  //         // icon:'navsmallcircle',
  //         // icon2:'smallarrownav'
  //       },
  //       // {
  //       //   name: 'All Approver',
  //       //   link: 'approver-configuration/list',
  //       //   // icon:'navsmallcircle',
  //       //   // icon2:'smallarrownav'
  //       // },
  //     ],
  //   },
  //   {
  //     name: 'Settings',
  //     icon: 'approvericon',
  //     icon2: 'approver',
  //     children: [
  //       {
  //         name: 'Department',
  //         link: 'settings/department',
  //       },
  //       {
  //         name: 'Designation',
  //         link: 'settings/designation',
  //       },
  //       {
  //         name: 'User',
  //         link: 'approver-configuration/list',
  //       },
  //     ],
  //   },
  // ];


  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  goBack() {
    this.location.back();
  }

  navigateToUserProfile() {
    console.log('clicked');
    this.router.navigate(['/auth/profile']);
  }

}

NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
  return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
};

NavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavigationComponent,
  selectors: [["qmt-navigation"]],
  ngContentSelectors: _c0,
  decls: 50,
  vars: 17,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", "relative", 3, "mode", "opened"], ["drawer", ""], [1, "px-6"], ["src", "/assets/logo/logo.png", "alt", "", "srcset", "", 1, "h-[70px]", "mx-auto"], [1, "w-11/12", "!mt-0", "!mb-8", "!mx-auto"], [3, "data"], [1, "bg-white", "absolute", "bottom-0", "right-0", "left-0", "w-full", "p-2", "pt-1", "flex", "justify-between", "items-center", "gap-4"], [1, "flex", "justify-start", "!items-center", "gap-4", "text-black"], [1, "flex", "flex-col", "text-md", "gap-2", "text-blue-800"], ["target", "_blank", 1, "hover:underline", 3, "href"], [2, "font-size", "inherit"], ["color", "primary", 1, "sticky", "top-0", "!py-4", "!pl-8", "!pr-6", "border-b", "flex", "items-center", "justify-between", "z-50"], [1, "flex", "gap-5"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["src", "\\assets\\icons\\backward2.svg", "alt", "", "srcset", "", 1, "w-11", "h-11"], [1, "flex", "flex-col", "gap-1", "justify-center"], [1, "text-[#161616]", "text-lg", "leading-none", "font-medium"], [1, "text-[#0D3875]", "text-sm", "leading-none", "font-normal", "underline", "underline-offset-1"], [1, "flex", "items-center", "gap-5"], ["class", "text-sm font-normal", 4, "ngIf"], [1, "cursor-pointer", "ml-[10px]", "w-10", "h-10", "aspect-square", "bg-[#F1F1F9]", "flex", "justify-center", "items-center", "text-[#4A429E]", "text-5", "font-semibold", "uppercase", "rounded-full", 3, "matMenuTriggerFor"], ["alt", "", "class", "w-full rounded-full", "srcset", "", 3, "src", 4, "ngIf"], [4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "text-sm", "font-normal"], [1, "text-xs", "capitalize", "text-gray-A3"], [1, "text-xs", "text-gray-A3"], ["alt", "", "srcset", "", 1, "w-full", "rounded-full", 3, "src"]],
  template: function NavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider", 5)(7, "qmt-tree", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div")(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "External User Guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Frequently Asked Questions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "QM Terms and Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-sidenav-content")(27, "mat-toolbar", 12)(28, "div", 13)(29, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_29_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 16)(32, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "QM Vendor / Subcontractor Onboarding ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, NavigationComponent_div_36_Template, 4, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NavigationComponent_div_37_Template, 4, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, NavigationComponent_img_39_Template, 1, 1, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NavigationComponent_div_40_Template, 2, 1, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-menu", null, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, NavigationComponent_button_43_Template, 5, 0, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_44_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "side")("opened", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.list1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.extUserLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.faqLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.TandCLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", _r0.opened === true ? "" : "rotate(180deg)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.parsedUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.googleUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.profileImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.googleUser);
    }
  },
  directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _shared_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__.TreeComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 288px;\n  z-index: 1 !important;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n:[_nghost-%COMP%]     .mat-drawer-inner-container {\n  position: relative;\n  padding-bottom: 72px;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsWUFBQTtBQUVGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI4OHB4O1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4ubWF0LXRvb2xiYXItcm93LFxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IGF1dG87XG4gIC8vIHBhZGRpbmc6IDA7XG59XG4vLyAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICB0b3A6IDA7XG4vLyAgIHotaW5kZXg6IDE7XG4vLyB9XG46Omhvc3QgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDcycHg7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"]
});

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 507);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ 1378);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// import { SharedModule } from '../shared/shared.module';





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent] }); })();


/***/ }),

/***/ 1378:
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navigation/navigation.component */ 507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 2802);




class LayoutComponent {
    constructor() { }
    ngOnInit() { }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["qmt-layout"]], decls: 5, vars: 0, consts: [[1, "overflow-y-auto", "p-6", "min-h-[calc(100%_-_80px)]"], [1, "bg-white", "rounded-lg", "py-7", "px-9", "h-full", 2, "box-shadow", "0px 4px 6px -4px rgba(16, 24, 40, 0.1),\n          0px 10px 15px -3px rgba(16, 24, 40, 0.1)"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "qmt-navigation")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet")(4, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1789:
/*!**************************************************!*\
  !*** ./src/app/directive/uppercase.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UppercaseDirective": () => (/* binding */ UppercaseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class UppercaseDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.appUppercase = false; // Parameter to enable/disable uppercase
    }
    onInput(event) {
        var _a;
        const input = event.target;
        if (this.appUppercase) {
            input.value = input.value.toUpperCase();
            (_a = this.control.control) === null || _a === void 0 ? void 0 : _a.patchValue(input.value); // Update the form control
        }
    }
}
UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl)); };
UppercaseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: UppercaseDirective, selectors: [["", "appUppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } }, inputs: { appUppercase: "appUppercase" } });


/***/ }),

/***/ 2046:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/pages/subcon-layout/subcon-layout.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubconLayoutComponent": () => (/* binding */ SubconLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/stepper */ 1780);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var src_app_services_subcontractor_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/subcontractor-form.service */ 2904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _stepper_components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stepper-components/company-details/company-details.component */ 6581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _stepper_components_insurance_details_insurance_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stepper-components/insurance-details/insurance-details.component */ 2161);
/* harmony import */ var _stepper_components_wcb_wsib_wcb_wsib_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stepper-components/wcb-wsib/wcb-wsib.component */ 4464);
/* harmony import */ var _stepper_components_hsep_hsep_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stepper-components/hsep/hsep.component */ 3896);
/* harmony import */ var _stepper_components_safety_performance_safety_performance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stepper-components/safety-performance/safety-performance.component */ 6636);
/* harmony import */ var _stepper_components_policies_procedures_policies_procedures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../stepper-components/policies-procedures/policies-procedures.component */ 8829);
/* harmony import */ var _stepper_components_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../stepper-components/trainings/trainings.component */ 2820);
/* harmony import */ var _stepper_components_others_others_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../stepper-components/others/others.component */ 4326);
/* harmony import */ var _stepper_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../stepper-components/file-upload/file-upload.component */ 2351);
/* harmony import */ var _stepper_components_mitigation_plan_mitigation_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../stepper-components/mitigation-plan/mitigation-plan.component */ 4112);
/* harmony import */ var _stepper_components_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../stepper-components/acknowledgement/acknowledgement.component */ 207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);



























const _c0 = ["stepper"];
function SubconLayoutComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r13.createCompany(ctx_r13.subcontractorForm.get("companyDetails")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r15.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_28_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r17.goForward(ctx_r17.subcontractorForm.get("insuranceDetails")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_31_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r18.wcbUpdate(ctx_r18.subcontractorForm.get("wsb_wsib")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r20.goForward(ctx_r20.subcontractorForm.get("hsep")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_37_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r22.goForward(ctx_r22.subcontractorForm.get("safetyPerformance")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_40_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r24.goForward(ctx_r24.subcontractorForm.get("policies")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_43_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r26.goForward(ctx_r26.subcontractorForm.get("trainings")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_46_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r28.goForward(ctx_r28.subcontractorForm.get("communication")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_49_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r30.fileUploadSubmit(ctx_r30.subcontractorForm.get("fileUpload")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_mat_step_50_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_mat_step_50_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r33.fileUploadSubmit(ctx_r33.subcontractorForm.get("fileUpload")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} }
function SubconLayoutComponent_mat_step_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-step", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-mitigation-plan", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, SubconLayoutComponent_mat_step_50_div_2_Template, 9, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx_r10.subcontractorForm.get("fileUpload"))("files_json", ctx_r10.files_json)("forApproval", ctx_r10.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.showButtons);
} }
function SubconLayoutComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "button", 48)(2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubconLayoutComponent_div_53_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r35.submitConfirm($event, ctx_r35.subcontractorForm.get("acknowledgement")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} }
function SubconLayoutComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " arrow_drop_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { width: "50vw" }; };
class SubconLayoutComponent {
    constructor(fb, messageService, subcontractorService, router, utilsService, confirmationService) {
        this.fb = fb;
        this.messageService = messageService;
        this.subcontractorService = subcontractorService;
        this.router = router;
        this.utilsService = utilsService;
        this.confirmationService = confirmationService;
        this.forApproval = false;
        this.account_clearence = [];
        this.account_rate_sheet = [];
        this.signatureImg = '';
        this.insurance_certificate_url_img = '';
        this.cor_file_url_img = '';
        this.showButtons = true;
        this.terms_conditions = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
    }
    showBasicDialog() {
        this.displayBasic = true;
    }
    clearFormGroupValidators(formGroup) {
        Object.keys(formGroup.controls).forEach((key) => {
            const control = formGroup.get(key);
            if (control) {
                control.clearValidators();
                control.updateValueAndValidity();
            }
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        this.user = localStorage.getItem('user-data');
        this.qmUser = localStorage.getItem('user');
        this.subconFormID = this.router.url;
        // console.log(this.subconFormID.split(['/'])[2])
        if (!((_a = JSON.parse(this.user)) === null || _a === void 0 ? void 0 : _a.email) && !this.forApproval) {
            this.router.navigate(['/auth/login']);
        }
        this.utilsService.getCountry('usca').subscribe((data) => {
            this.allCountries = data.data.rows;
        });
        this.subcontractorForm = this.fb.group({
            companyDetails: this.fb.group({
                company_name: [
                    (_b = JSON.parse(localStorage.getItem('user-data'))) === null || _b === void 0 ? void 0 : _b.company_name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                city: [
                    (_c = JSON.parse(localStorage.getItem('user-data'))) === null || _c === void 0 ? void 0 : _c.city,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                postal_code: [
                    (_d = JSON.parse(localStorage.getItem('user-data'))) === null || _d === void 0 ? void 0 : _d.postal_code,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                state_id: [
                    (_e = JSON.parse(localStorage.getItem('user-data'))) === null || _e === void 0 ? void 0 : _e.state_id,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                country: [
                    (_f = JSON.parse(localStorage.getItem('user-data'))) === null || _f === void 0 ? void 0 : _f.country,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                state: [
                    (_g = JSON.parse(localStorage.getItem('user-data'))) === null || _g === void 0 ? void 0 : _g.state,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                country_id: [
                    (_h = JSON.parse(localStorage.getItem('user-data'))) === null || _h === void 0 ? void 0 : _h.country_id,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                company_address: [
                    (_j = JSON.parse(localStorage.getItem('user-data'))) === null || _j === void 0 ? void 0 : _j.address,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                company_address_2: [
                    (_k = JSON.parse(localStorage.getItem('user-data'))) === null || _k === void 0 ? void 0 : _k.address2,
                ],
                company_contact_number: [
                    (_l = JSON.parse(localStorage.getItem('user-data'))) === null || _l === void 0 ? void 0 : _l.contact_no,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                company_email: [
                    (_m = JSON.parse(localStorage.getItem('user-data'))) === null || _m === void 0 ? void 0 : _m.email,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email],
                ],
                company_operation_province: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                company_safety_contact_person: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                company_safety_contact_person_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                company_safety_contact_person_email: [
                    '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                company_operations_contact_person: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                company_operations_contact_person_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                company_operations_contact_person_email: [
                    '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                ],
                company_service_decription: [''],
                east: [false],
                west: [false],
                central: [false],
                created_by_email: [(_o = JSON.parse(this.user)) === null || _o === void 0 ? void 0 : _o.email],
                status_id: 1,
                qm_employee_contact: [
                    (_p = JSON.parse(localStorage.getItem('user-data'))) === null || _p === void 0 ? void 0 : _p.qm_first_name,
                ],
                owner_email: [(_q = JSON.parse(localStorage.getItem('user-data'))) === null || _q === void 0 ? void 0 : _q.email],
            }),
            insuranceDetails: this.fb.group({
                general_liability_amount: [''],
                general_liability_expire_date: [''],
                automative_liability_amount: [''],
                automative_liability_expire_date: [''],
                total_insurance_amount: [''],
                total_insurance_date: [''],
                insurance_certificate_url: [''],
            }),
            wsb_wsib: this.fb.group({
                wcb_safety_q1_wcb_account: [''],
                wcb_safety_q2_copy_of_summary: [''],
                account_clearence: this.fb.array([]),
                account_rate_sheet: this.fb.array([]),
                wcb_env_q1_safety_citations: [''],
                wcb_env_q2_judgements: [''],
                wcb_env_q2_details: [''],
                final_table: [''],
            }),
            hsep: this.fb.group({
                health_q1_full_time: [''],
                health_q2_formal: [''],
                health_q3_past_two_years: [''],
                health_spills_or_release_details: [''],
                health_q4_cor: [''],
                health_specify_cor: [''],
                health_date_of_cor: [''],
                health_score_achieved: [''],
                health_state_id: [''],
                health_country_id: [''],
                health_country: [''],
                health_state: [''],
                cor_file_url: [''],
            }),
            safetyPerformance: this.fb.group({
                yearly_safety_performance: this.fb.array([]),
            }),
            policies: this.fb.group({
                policies_q1_written_sps: [''],
                policies_q2_safety_resp: [''],
                policies_q3_evaluate_program: [''],
                policies_q4_early: [''],
                policies_q5_inspections: [''],
                policies_name_conducts: [''],
                policies_position: [''],
                policies_frequency: [''],
                policies_q6_maintenance: [''],
                policies_q7_hazard: [''],
                policies_q8_periodically_audited: [''],
                policies_q9_doc_gsr: [''],
                policies_q10_unsafe_work: [''],
                policies_q11_disciplinary: [''],
                policies_q12_alcohol_substance: [''],
                policies_compressed_gas_handling: [''],
                policies_confined_space_entry: [''],
                policies_lifting_device_program: [''],
                policies_equipment_safety_devices: [''],
                policies_flammable_materials: [''],
                policies_materials_handling: [''],
                policies_hazardious_goods: [''],
                policies_transferring_materials: [''],
                policies_stacking_materials: [''],
                policies_powered_mobile_equipments: [''],
                policies_power_line_clearances: [''],
                policies_power_tools: [''],
                policies_personal_protective_equipment: [''],
                policies_hot_work_permit_procedure: [''],
                policies_drug_alcohol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                policies_fatigue_management: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                policies_workplace_voilence_policy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                policies_workplace_harassment_policy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
                policies_working_alone: [''],
                policies_written_lockout: [''],
                policies_housekeeping_policy: [''],
                policies_msd: [''],
                policies_rescue: [''],
                policies_respiratory_equipment: [''],
                policies_list_other_procedure: [''],
                policies_q13_hazard_jobs: [''],
                policies_q14_erp: [''],
            }),
            trainings: this.fb.group({
                trainings_q1_supervisors: [''],
                trainings_q2_workers: [''],
                trainings_q3_all_emp: [''],
                trainings_q4_training_records: [''],
                trainings_safety_policies: [''],
                trainings_safety_meetings: [],
                trainings_injury_incident: [''],
                trainings_first_aid: [''],
                trainings_housekeeping: [''],
                trainings_drug_alcohol: [''],
                trainings_fatigue_management: [''],
                trainings_fire_protection: [''],
                trainings_defensive: [''],
                trainings_toxic_substances: [''],
                trainings_lockout: [''],
                trainings_waste_minimization: [''],
                trainings_industrial_hygiene: [''],
                trainings_emergency_equipment: [''],
                training_new_emp_ori_prog: [''],
            }),
            communication: this.fb.group({
                communication_q1_safety_meetings: [''],
                communication_q2_jh_sc: [''],
                communication_q3_pre_job: [''],
                investigation_q1_accident_reporting: [''],
                investigation_q2_procedure: [''],
                environmental_q1_waste_management: [''],
                environmental_q2_system_to_control: [''],
            }),
            fileUpload: this.fb.group({
                company_safety_policy_copy: [''],
                table_of_content_company_safety_manual: [''],
                current_clearance_letter: [''],
                wcb_last_3_years: [''],
                copy_of_cor: [''],
                desc_of_oh: [''],
                safety_meeting_minutes: [''],
                mitigation_plan_copy: [''],
                void_cheque: [''],
                pm_name: [''],
                pm_email: [''],
                mitigation_plan_required: [''],
                extra_upload: this.fb.array([]),
            }),
            acknowledgement: this.fb.group({
                ack_company_name: [''],
                ack_date: [(_s = (_r = new Date()) === null || _r === void 0 ? void 0 : _r.toISOString()) === null || _s === void 0 ? void 0 : _s.split('T')[0]],
                ack_name: [''],
                ack_signature: [''],
                status_id: [''],
                next_approver_id: [''],
                next_department_id: [''],
                created_by_email: [(_t = JSON.parse(this.user)) === null || _t === void 0 ? void 0 : _t.email],
                submission_date: [new Date()],
                re_submit: [''],
            }),
        });
        if (this.qmUser) {
            // console.log("isme aaya")
            this.clearFormGroupValidators(this.subcontractorForm.controls['companyDetails']);
            // this.clearFormGroupValidators(this.subcontractorForm.controls['insuranceDetails'])
            this.clearFormGroupValidators(this.subcontractorForm.controls['wsb_wsib']);
            this.clearFormGroupValidators(this.subcontractorForm.controls['hsep']);
            // this.clearFormGroupValidators(this.subcontractorForm.controls['safetyPerformance'])
            this.clearFormGroupValidators(this.subcontractorForm.controls['policies']);
            // this.clearFormGroupValidators(this.subcontractorForm.controls['trainings'])
            this.clearFormGroupValidators(this.subcontractorForm.controls['fileUpload']);
            // this.clearFormGroupValidators(this.subcontractorForm.controls['policies'])
        }
        if (((_u = this.subconFormID.split(['/'])) === null || _u === void 0 ? void 0 : _u[2]) ||
            localStorage.getItem('subcontractor-form-id')) {
            this.subcontractorService
                .getSubconFormByID(((_v = this.subconFormID.split(['/'])) === null || _v === void 0 ? void 0 : _v[2]) ||
                localStorage.getItem('subcontractor-form-id'))
                .subscribe((data) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
                if ((_a = data.data) === null || _a === void 0 ? void 0 : _a.id) {
                    localStorage.setItem('subcontractor-form-id', data.data.id);
                    this.generateForm(data.data);
                    this.yearly_safety_performance = data.data.YearlySafetyPerformances;
                    this.account_clearence = (_b = data.data) === null || _b === void 0 ? void 0 : _b.AccountClearences;
                    this.account_rate_sheet = (_c = data.data) === null || _c === void 0 ? void 0 : _c.AccountClearences;
                    this.files_json = (_d = data.data) === null || _d === void 0 ? void 0 : _d.files_json;
                    this.serverData = data.data;
                    this.terms_conditions.patchValue(((_e = data.data) === null || _e === void 0 ? void 0 : _e.Status.id) !== 1 ? true : false);
                    if ((_f = this.serverData) === null || _f === void 0 ? void 0 : _f.mitigation_plan_required) {
                        (_h = (_g = this.subcontractorForm
                            .get('fileUpload')) === null || _g === void 0 ? void 0 : _g.get('mitigation_plan_copy')) === null || _h === void 0 ? void 0 : _h.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
                    }
                    if (
                    // data.data?.Status?.id === 2 ||
                    // data.data?.Status?.id === 4 ||
                    // data.data?.Status?.id === 5
                    // data.data?.Status?.id !== 1 ||
                    // data.data?.Status?.id !== 3
                    ((_k = (_j = data.data) === null || _j === void 0 ? void 0 : _j.Status) === null || _k === void 0 ? void 0 : _k.id) != 1 &&
                        ((_m = (_l = data.data) === null || _l === void 0 ? void 0 : _l.Status) === null || _m === void 0 ? void 0 : _m.id) != 3) {
                        this.showButtons = false;
                        this.forApproval = true;
                    }
                    if ((_o = data.data) === null || _o === void 0 ? void 0 : _o.ack_signature) {
                        this.signatureImg =
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL +
                                data.data.ack_signature.split('./public')[1];
                    }
                    if ((_p = data.data) === null || _p === void 0 ? void 0 : _p.insurance_certificate_url) {
                        this.insurance_certificate_url_img =
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL +
                                data.data.insurance_certificate_url.split('./public')[1];
                    }
                    if ((_q = data.data) === null || _q === void 0 ? void 0 : _q.cor_file_url) {
                        this.cor_file_url_img =
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL +
                                data.data.cor_file_url.split('./public')[1];
                    }
                    if ((_r = data.data) === null || _r === void 0 ? void 0 : _r.health_date_of_cor) {
                        (_u = (_t = (_s = this.subcontractorForm) === null || _s === void 0 ? void 0 : _s.get('hsep')) === null || _t === void 0 ? void 0 : _t.get('health_date_of_cor')) === null || _u === void 0 ? void 0 : _u.patchValue((_w = (_v = data.data) === null || _v === void 0 ? void 0 : _v.health_date_of_cor) === null || _w === void 0 ? void 0 : _w.split('T')[0]);
                    }
                    if ((_x = data.data) === null || _x === void 0 ? void 0 : _x.ack_date) {
                        (_0 = (_z = (_y = this.subcontractorForm) === null || _y === void 0 ? void 0 : _y.get('acknowledgement')) === null || _z === void 0 ? void 0 : _z.get('ack_date')) === null || _0 === void 0 ? void 0 : _0.patchValue((_2 = (_1 = data.data) === null || _1 === void 0 ? void 0 : _1.ack_date) === null || _2 === void 0 ? void 0 : _2.split('T')[0]);
                    }
                    if ((_3 = data.data) === null || _3 === void 0 ? void 0 : _3.submission_date) {
                        (_6 = (_5 = (_4 = this.subcontractorForm) === null || _4 === void 0 ? void 0 : _4.get('acknowledgement')) === null || _5 === void 0 ? void 0 : _5.get('submission_date')) === null || _6 === void 0 ? void 0 : _6.patchValue((_8 = (_7 = data.data) === null || _7 === void 0 ? void 0 : _7.submission_date) === null || _8 === void 0 ? void 0 : _8.split('T')[0]);
                    }
                }
            });
        }
        (_y = (_x = (_w = this.subcontractorForm) === null || _w === void 0 ? void 0 : _w.get('companyDetails')) === null || _x === void 0 ? void 0 : _x.get('company_name')) === null || _y === void 0 ? void 0 : _y.valueChanges.subscribe((data) => {
            var _a, _b, _c;
            this.companyName = data;
            (_c = (_b = (_a = this.subcontractorForm) === null || _a === void 0 ? void 0 : _a.get('acknowledgement')) === null || _b === void 0 ? void 0 : _b.get('ack_company_name')) === null || _c === void 0 ? void 0 : _c.patchValue(data);
        });
    }
    get getCompanyDetails() {
        return this.subcontractorForm.controls['companyDetails'];
    }
    get getAcknowledgement() {
        return this.subcontractorForm.controls['acknowledgement'];
    }
    get currentStepIndex() {
        return this.myStepper.selectedIndex;
    }
    goBack() {
        this.myStepper.previous();
    }
    getGroupName(name) {
        return this.subcontractorForm.get(name);
    }
    generateForm(data) {
        var _a;
        let groupName;
        data['company_operation_province'] = JSON.parse(data === null || data === void 0 ? void 0 : data.company_operation_province);
        data['country'] = data === null || data === void 0 ? void 0 : data.Country;
        data['state'] = data === null || data === void 0 ? void 0 : data.State;
        data['health_country'] = data === null || data === void 0 ? void 0 : data.HealthCountry;
        data['health_state'] = data === null || data === void 0 ? void 0 : data.HealthState;
        for (groupName in this.subcontractorForm.controls) {
            let group = this.getGroupName(groupName);
            for (let controlName in group.controls) {
                let obj = {};
                // if (data?.Country) {
                //   obj['country'] = data?.Country;
                // }
                // if (data?.State) {
                //   obj['state'] = data?.State;
                // }
                obj[controlName] = data[controlName] === null ? '' : data[controlName];
                (_a = this.subcontractorForm.get(groupName)) === null || _a === void 0 ? void 0 : _a.patchValue(Object.assign({}, obj));
            }
        }
        return;
    }
    openSnackBar(msg) {
        this.messageService.add({
            severity: 'error',
            summary: 'Cannot Save',
            detail: msg ? msg : 'Please fill out required fields',
        });
    }
    fileUploadSubmit(form) {
        var _a, _b;
        const formData = new FormData();
        // if(this.myStepper.selected?.label === 'Mitigation Plan'){
        //   // console.log(form.valid)
        //   if(!form.valid){
        //     return this.openSnackBar("Please upload the Mitigation Plan");
        //   }
        // }
        (_a = Object.keys(form === null || form === void 0 ? void 0 : form.value)) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
            var _a, _b;
            if (key == 'extra_upload' && ((_a = form.value.extra_upload) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                form.value.extra_upload.forEach((element) => {
                    var _a;
                    formData.append(element.name, (_a = element.file) === null || _a === void 0 ? void 0 : _a[0]);
                });
                delete form.value['extra_upload'];
            }
            if (((_b = form.value[key]) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                if (key == 'pm_name' || key == 'pm_email') {
                    formData.append(key, form.value[key]);
                }
                else {
                    formData.append(key, form.value[key][0]);
                }
                // console.log(key, form.value[key])
            }
        });
        if ((_b = this.serverData) === null || _b === void 0 ? void 0 : _b.files_json) {
            const files = JSON.parse(this.serverData.files_json);
            let file_jsn = {};
            Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                file_jsn[file] = files.files[file];
            });
            formData.append('file_jsn', JSON.stringify(file_jsn));
        }
        const formId = localStorage.getItem('subcontractor-form-id');
        this.subcontractorService.fileUpload(formId, formData).subscribe((data) => {
            this.myStepper.next();
        });
    }
    goForward(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (form.status == 'INVALID') {
            return this.openSnackBar();
        }
        if ((_a = form === null || form === void 0 ? void 0 : form.value) === null || _a === void 0 ? void 0 : _a.yearly_safety_performance) {
            let arr = [];
            this.user = localStorage.getItem('user-data');
            (_b = form === null || form === void 0 ? void 0 : form.value) === null || _b === void 0 ? void 0 : _b.yearly_safety_performance.map((e) => {
                var _a, _b, _c;
                arr.push({
                    statistics: e.statistics,
                    year: new Date().getFullYear(),
                    value: e.col1,
                    created_by_email: (_a = JSON.parse(this.user)) === null || _a === void 0 ? void 0 : _a.email,
                }, {
                    statistics: e.statistics,
                    year: new Date().getFullYear() - 1,
                    value: e.col2,
                    created_by_email: (_b = JSON.parse(this.user)) === null || _b === void 0 ? void 0 : _b.email,
                }, {
                    statistics: e.statistics,
                    year: new Date().getFullYear() - 2,
                    value: e.col3,
                    created_by_email: (_c = JSON.parse(this.user)) === null || _c === void 0 ? void 0 : _c.email,
                });
            });
            form.value = { yearly_safety_performance: arr };
        }
        const formId = localStorage.getItem('subcontractor-form-id');
        Object.keys(form.value).forEach((key) => {
            if (typeof form.value[key] == 'string' && form.value[key] === '') {
                delete form.value[key];
            }
        });
        if ((_c = form === null || form === void 0 ? void 0 : form.value) === null || _c === void 0 ? void 0 : _c.insurance_certificate_url) {
            const formData = new FormData();
            formData.append('insurance_certificate_url', (_e = (_d = form === null || form === void 0 ? void 0 : form.value) === null || _d === void 0 ? void 0 : _d.insurance_certificate_url) === null || _e === void 0 ? void 0 : _e[0]);
            this.subcontractorService
                .updateInsuranceCertificate(formId, formData)
                .subscribe((data) => { });
            delete form.value['insurance_certificate_url'];
        }
        if ((_f = form === null || form === void 0 ? void 0 : form.value) === null || _f === void 0 ? void 0 : _f.cor_file_url) {
            const formData = new FormData();
            formData.append('cor_file_url', (_h = (_g = form === null || form === void 0 ? void 0 : form.value) === null || _g === void 0 ? void 0 : _g.cor_file_url) === null || _h === void 0 ? void 0 : _h[0]);
            this.subcontractorService
                .updateCor(formId, formData)
                .subscribe((data) => { });
            delete form.value['cor_file_url'];
        }
        this.subcontractorService
            .updateSubconForm(formId, form === null || form === void 0 ? void 0 : form.value)
            .subscribe((data) => {
            this.myStepper.next();
        });
    }
    submitForm(form) {
        var _a, _b;
        // this.showForm()
        // return
        if (form.status == 'INVALID') {
            return this.openSnackBar();
        }
        if (this.subcontractorForm.get('companyDetails').touched) {
            this.createCompany(this.subcontractorForm.get('companyDetails'));
        }
        if (this.subcontractorForm.get('wsb_wsib').touched) {
            this.wcbUpdate(this.subcontractorForm.get('wsb_wsib'));
        }
        if (this.subcontractorForm.get('fileUpload').touched) {
            this.fileUploadSubmit(this.subcontractorForm.get('fileUpload'));
        }
        if (this.subcontractorForm.get('insuranceDetails').touched) {
            this.goForward(this.subcontractorForm.get('insuranceDetails'));
        }
        if (this.subcontractorForm.get('hsep').touched) {
            this.goForward(this.subcontractorForm.get('hsep'));
        }
        if (this.subcontractorForm.get('policies').touched) {
            this.goForward(this.subcontractorForm.get('policies'));
        }
        if (this.subcontractorForm.get('safetyPerformance').touched) {
            this.goForward(this.subcontractorForm.get('safetyPerformance'));
        }
        if (this.subcontractorForm.get('trainings').touched) {
            this.goForward(this.subcontractorForm.get('trainings'));
        }
        if (this.subcontractorForm.get('communication').touched) {
            this.goForward(this.subcontractorForm.get('communication'));
        }
        const formData = new FormData();
        if (((_b = (_a = this.serverData) === null || _a === void 0 ? void 0 : _a.Status) === null || _b === void 0 ? void 0 : _b.id) === 3) {
            form.get('re_submit').setValue(true);
            form.get('status_id').setValue(3);
        }
        else {
            form.get('re_submit').setValue(false);
            form.get('status_id').setValue(2);
        }
        const formId = localStorage.getItem('subcontractor-form-id');
        // this.serverData?.company_name
        //   ? formData.append('company_name', this.serverData?.company_name)
        //   : formData.append(
        //       'company_name',
        //       this.subcontractorForm?.get('companyDetails')?.get('company_name')
        //         ?.value
        //     );
        Object.keys(form.value).forEach((key) => {
            if (typeof form.value[key] == 'string' && form.value[key] === '') {
                delete form.value[key];
                return;
            }
            // if (key == 'ack_signature' && this.signatureImg == '') {
            //   formData.append('ack_signature', form.value?.ack_signature?.[0]);
            //   return;
            // }
            formData.append(key, form.value[key]);
        });
        this.subcontractorService
            .ack_signatureSubconForm(formId, formData)
            .subscribe((data) => {
            this.showBasicDialog();
            localStorage.removeItem('subcontractor-form-id');
            setTimeout(() => {
                this.displayBasic = false;
                this.router.navigate(['/vendor']);
            }, 3000);
        });
    }
    createCompany(form) {
        var _a, _b;
        if (form.status == 'INVALID') {
            console.log(form, 'form');
            return this.openSnackBar();
        }
        const formId = localStorage.getItem('subcontractor-form-id');
        if (!formId) {
            this.subcontractorService
                .createSubconForm((_a = this.subcontractorForm.get('companyDetails')) === null || _a === void 0 ? void 0 : _a.value)
                .subscribe((data) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                localStorage.setItem('subcontractor-form-id', data.data.id);
                (_c = (_b = (_a = this.subcontractorForm) === null || _a === void 0 ? void 0 : _a.get('acknowledgement')) === null || _b === void 0 ? void 0 : _b.get('next_approver_id')) === null || _c === void 0 ? void 0 : _c.patchValue((_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.next_approver_id);
                (_g = (_f = (_e = this.subcontractorForm) === null || _e === void 0 ? void 0 : _e.get('acknowledgement')) === null || _f === void 0 ? void 0 : _f.get('next_department_id')) === null || _g === void 0 ? void 0 : _g.patchValue((_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.next_department_id);
                this.myStepper.next();
            });
        }
        else {
            this.subcontractorService
                .updateSubconForm(formId, (_b = this.subcontractorForm.get('companyDetails')) === null || _b === void 0 ? void 0 : _b.value)
                .subscribe((data) => {
                this.myStepper.next();
            });
        }
    }
    showForm() {
        console.log(this.subcontractorForm.get('insuranceDetails').touched, 'insuranceDetails');
        console.log(this.subcontractorForm.get('hsep').touched);
        console.log(this.subcontractorForm.get('fileUpload').dirty);
        console.log(this.subcontractorForm.getRawValue(), 'subcontractorForm');
    }
    wcbUpdate(form) {
        console.log(form);
        if (form.get('account_clearence').status == 'INVALID') {
            return this.openSnackBar('Please attach file for Clearence Letter.');
        }
        if (form.get('account_rate_sheet').status == 'INVALID') {
            return this.openSnackBar('Please attach file for Rate Sheet.');
        }
        if (form.status == 'INVALID') {
            return this.openSnackBar();
        }
        const formId = localStorage.getItem('subcontractor-form-id');
        // console.log(...form.value['account_clearence'],...form.value['account_rate_sheet'])
        const tableValues = [
            ...form.value['account_clearence'],
            ...form.value['account_rate_sheet'],
        ];
        // console.log(tableValues)
        form.get('final_table').setValue(tableValues);
        // console.log(form.get('final_table').value)
        const formData = new FormData();
        Object.keys(form.value).forEach((key) => {
            // console.log(key)
            if (key == 'final_table') {
                form.value[key].forEach((element, index) => {
                    var _a;
                    delete element['country'];
                    delete element['state'];
                    delete element['stateOptions'];
                    if ((_a = element === null || element === void 0 ? void 0 : element['file']) === null || _a === void 0 ? void 0 : _a[0]) {
                        formData.append(index, element['file'][0]);
                    }
                });
                return formData.append(key, JSON.stringify(form.value[key]));
            }
            // if (key == 'account_rate_sheet') {
            //   form.value[key].forEach((element: any, index: any) => {
            //     delete element['country'];
            //     delete element['state'];
            //     delete element['stateOptions'];
            //     if (element?.['file']?.[0]) {
            //       formData.append(index, element['file'][0]);
            //     }
            //   });
            //   return formData.append(key, JSON.stringify(form.value[key]));
            // }
            if (String(form.value[key]).length) {
                formData.append(key, form.value[key]);
            }
        });
        this.subcontractorService
            .wcb_signatureSubconForm(formId, formData)
            .subscribe((data) => {
            this.myStepper.next();
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
    submitConfirm(event, form) {
        if (this.terms_conditions.value === false) {
            this.messageService.add({
                severity: 'error',
                summary: 'Terms & Conditions',
                detail: 'Please agree to our terms and conditions',
            });
            return;
        }
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure you want to submit the form? Once agreed you will not be able to make any further changes!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                // this.showBasicDialog();
                this.submitForm(form);
            },
            reject: () => {
                //reject action
            },
        });
    }
}
SubconLayoutComponent.ɵfac = function SubconLayoutComponent_Factory(t) { return new (t || SubconLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_subcontractor_form_service__WEBPACK_IMPORTED_MODULE_1__.SubcontractorFormService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.ConfirmationService)); };
SubconLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: SubconLayoutComponent, selectors: [["app-subcon-layout"]], viewQuery: function SubconLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.myStepper = _t.first);
    } }, inputs: { componentFormGroup: "componentFormGroup", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__.STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false },
            },
        ])], decls: 62, vars: 59, consts: [[1, "bg-white", "subcontractor-layout"], [1, "flex", "subcontractor-header"], [1, "w-[150px]", "h-[147px]", "grid", "place-content-center", "border-[#F1F1F9]", "border"], ["src", "/assets/logo/logo.png", "alt", "", 1, "h-[70px]", "mx-auto"], [1, "flex", "flex-col", "w-full"], [1, "flex", "items-center", "justify-between", "border-b", "border-[#F1F1F9]", "p-6"], [1, "flex", "gap-3"], ["routerLink", "/vendor", 1, "grid", "place-content-center", "h-10", "w-10", "cursor-pointer", 2, "border-radius", "44px", "background", "#f1f1f9"], ["svgIcon", "back_button"], [1, "text-primary-dark", "text-lg", "font-semibold", "grid", "place-content-center"], [1, "flex", "items-center", "gap-5"], [1, "flex", "items-center", "px-6", "py-4", "gap-1", "border-b", "border-[#F1F1F9]"], ["svgIcon", "solar-user-id"], [1, "text-black", "text-base", "pl-1"], [1, "material-symbols-outlined"], [1, "stepper-custom"], [3, "formGroup"], ["linear", ""], ["stepper", ""], ["label", "Company Details", "state", "arrow", "formGroupName", "companyDetails", 3, "stepControl"], [3, "form", "allCountries", "forApproval"], ["class", "bg-white flex w-full justify-end px-9 !h-[72px] py-4 gap-3 button-wrapper", 4, "ngIf"], ["label", "Insurance Details", "state", "arrow", "formGroupName", "insuranceDetails", 3, "stepControl"], [3, "form", "forApproval", "file_data", "insurance_certificate_url_img"], ["label", "WCB/WSIB/Environmental Citations", "state", "arrow", "formGroupName", "wsb_wsib", 3, "stepControl"], [3, "form", "account_clearence", "account_rate_sheet", "allCountriesInput", "forApproval"], ["label", "Health, Safety & Environmental program information", "formGroupName", "hsep", "state", "arrow", 3, "stepControl"], [3, "form", "allCountries", "cor_file_url_img", "forApproval"], ["label", "Safety Performance", "state", "arrow", "formGroupName", "safetyPerformance", 3, "stepControl"], [3, "form", "yearly_safety_performance", "forApproval"], ["label", "Policies & Procedures", "state", "arrow", "formGroupName", "policies", 3, "stepControl"], [3, "form", "forApproval"], ["label", "Trainings", "state", "arrow", "formGroupName", "trainings", 3, "stepControl"], ["label", "Communication & Others", "state", "arrow", "formGroupName", "communication", 3, "stepControl"], ["label", "File Upload", "state", "arrow", "formGroupName", "fileUpload"], [3, "form", "files_json", "forApproval"], ["label", "Mitigation Plan", "state", "arrow", "formGroupName", "fileUpload", 4, "ngIf"], ["label", "Acknowledgement", "state", "arrow", "formGroupName", "acknowledgement", 3, "stepControl"], [3, "form", "companyForm", "signatureImg", "companyName", "terms_conditions", "forApproval"], ["matStepperIcon", "arrow"], [1, "submitted-dialog", 3, "visible", "visibleChange"], [1, "text-[#49A942]", "text-center", "text-4xl", "mb-5"], [1, "text-[#434343]", "text-lg", "text-center", "mb-6"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [1, "bg-white", "flex", "w-full", "justify-end", "px-9", "!h-[72px]", "py-4", "gap-3", "button-wrapper"], ["mat-button", "", 1, "!rounded-md", "!bg-primary-dark", "!text-sm", "!text-white", "!font-semibold", "!flex", "!justify-center", "!items-center", 2, "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04) !important", 3, "click"], [1, "material-symbols-rounded"], ["mat-button", "", "matStepperPrevious", "", 1, "!rounded-md", "!text-sm", "!text-primary-dark", "!font-semibold", "!flex", "!justify-center", "!items-center", 2, "border", "1px solid #0d3875", "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04)", 3, "click"], ["mat-button", "", "matStepperPrevious", "", 1, "!rounded-md", "!text-sm", "!text-primary-dark", "!font-semibold", "!flex", "!justify-center", "!items-center", 2, "border", "1px solid #0d3875", "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04)"], ["label", "Mitigation Plan", "state", "arrow", "formGroupName", "fileUpload"], ["mat-button", "", 1, "!rounded-md", "!bg-[#49A942]", "!text-sm", "!text-white", "!font-semibold", "!flex", "!justify-center", "!items-center", "!w-28", 2, "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04) !important", 3, "click"], [2, "transform", "scale(1.5) rotate(-90deg)", "color", "black"]], template: function SubconLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Subcontractor Prequalification Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div")(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, " arrow_drop_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 15)(20, "form", 16)(21, "mat-stepper", 17, 18)(23, "mat-step", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "app-company-details", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, SubconLayoutComponent_div_25_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "mat-step", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "app-insurance-details", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, SubconLayoutComponent_div_28_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "mat-step", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "app-wcb-wsib", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, SubconLayoutComponent_div_31_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "mat-step", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "app-hsep", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, SubconLayoutComponent_div_34_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "mat-step", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "app-safety-performance", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, SubconLayoutComponent_div_37_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "mat-step", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "app-policies-procedures", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, SubconLayoutComponent_div_40_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "mat-step", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "app-trainings", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, SubconLayoutComponent_div_43_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "mat-step", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "app-others", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, SubconLayoutComponent_div_46_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "mat-step", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "app-file-upload", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, SubconLayoutComponent_div_49_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, SubconLayoutComponent_mat_step_50_Template, 3, 4, "mat-step", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "mat-step", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](52, "app-acknowledgement", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, SubconLayoutComponent_div_53_Template, 7, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, SubconLayoutComponent_ng_template_54_Template, 2, 0, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "p-dialog", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("visibleChange", function SubconLayoutComponent_Template_p_dialog_visibleChange_56_listener($event) { return ctx.displayBasic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "SUCCESS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, " You have successfully submitted your request. The request is in our system and we will review it as soon as possible. Thank You! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](61, "p-confirmDialog", 43);
    } if (rf & 2) {
        let tmp_9_0;
        let tmp_46_0;
        let tmp_46_1;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.subcontractorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("companyDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("companyDetails"))("allCountries", ctx.allCountries)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("insuranceDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("insuranceDetails"))("forApproval", ctx.forApproval)("file_data", (tmp_9_0 = ctx.subcontractorForm.get("insuranceDetails")) == null ? null : tmp_9_0.get("insurance_certificate_url").value)("insurance_certificate_url_img", ctx.insurance_certificate_url_img);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("wsb_wsib"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("wsb_wsib"))("account_clearence", ctx.account_clearence)("account_rate_sheet", ctx.account_rate_sheet)("allCountriesInput", ctx.allCountries)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("hsep"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("hsep"))("allCountries", ctx.allCountries)("cor_file_url_img", ctx.cor_file_url_img)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("safetyPerformance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("safetyPerformance"))("yearly_safety_performance", ctx.yearly_safety_performance)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("policies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("policies"))("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("trainings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("trainings"))("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("communication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("communication"))("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("fileUpload"))("files_json", ctx.files_json)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_46_0 = ctx.subcontractorForm.get("fileUpload")) == null ? null : (tmp_46_1 = tmp_46_0.get("mitigation_plan_required")) == null ? null : tmp_46_1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stepControl", ctx.subcontractorForm.get("acknowledgement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.subcontractorForm.get("acknowledgement"))("companyForm", ctx.subcontractorForm.get("companyDetails"))("signatureImg", ctx.signatureImg)("companyName", ctx.companyName)("terms_conditions", ctx.terms_conditions)("forApproval", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](58, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", ctx.displayBasic);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _stepper_components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _stepper_components_insurance_details_insurance_details_component__WEBPACK_IMPORTED_MODULE_4__.InsuranceDetailsComponent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperPrevious, _stepper_components_wcb_wsib_wcb_wsib_component__WEBPACK_IMPORTED_MODULE_5__.WcbWsibComponent, _stepper_components_hsep_hsep_component__WEBPACK_IMPORTED_MODULE_6__.HsepComponent, _stepper_components_safety_performance_safety_performance_component__WEBPACK_IMPORTED_MODULE_7__.SafetyPerformanceComponent, _stepper_components_policies_procedures_policies_procedures_component__WEBPACK_IMPORTED_MODULE_8__.PoliciesProceduresComponent, _stepper_components_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_9__.TrainingsComponent, _stepper_components_others_others_component__WEBPACK_IMPORTED_MODULE_10__.OthersComponent, _stepper_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__.FileUploadComponent, _stepper_components_mitigation_plan_mitigation_plan_component__WEBPACK_IMPORTED_MODULE_12__.MitigationPlanComponent, _stepper_components_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_13__.AcknowledgementComponent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperIcon, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.Dialog, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__.ConfirmDialog], styles: ["[_nghost-%COMP%]     .stepper-custom mat-stepper {\n  display: flex;\n  flex-direction: row-reverse;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-divider-horizontal {\n  position: relative !important;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-left: 1px solid #DBDBDE;\n  width: 30%;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container .cdk-focused {\n  border-left: 2px solid #0D3875;\n  background: #F5F5F5;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container .mat-step-header {\n  width: 85%;\n  height: 50px !important;\n  margin: 10px 0px;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container .mat-step-icon {\n  background: transparent;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container .mat-step-icon-selected {\n  background: transparent !important;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-stepper-header-container .mat-step-text-label {\n  color: var(--neutral-700, #393939);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-stepper-horizontal-line {\n  display: none;\n}\n[_nghost-%COMP%]     .stepper-custom mat-stepper .mat-horizontal-content-container {\n  width: 100%;\n}\n[_nghost-%COMP%]     .submitted-dialog .p-dialog-content {\n  border-top: 4px solid #49A942;\n  padding-top: 1.5rem;\n}\n[_nghost-%COMP%]     .submitted-dialog .p-dialog-header {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNvbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUVRO0VBQ0ksNkJBQUE7QUFBWjtBQUdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFEWjtBQUdZO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQURoQjtBQUlZO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7QUFNWTtFQUNJLHVCQUFBO0FBSmhCO0FBT1k7RUFDSSxrQ0FBQTtBQUxoQjtBQVFZO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFVUTtFQUNJLGFBQUE7QUFSWjtBQVdRO0VBQ0ksV0FBQTtBQVRaO0FBb0JJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWpCUjtBQW1CSTtFQUNJLGFBQUE7QUFqQlIiLCJmaWxlIjoic3ViY29uLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuc3RlcHBlci1jdXN0b20ge1xuICAgIG1hdC1zdGVwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gICAgICAgIC5tYXQtZGl2aWRlci1ob3Jpem9udGFse1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQkRCREU7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuXG4gICAgICAgICAgICAuY2RrLWZvY3VzZWQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzBEMzg3NTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWF0LXN0ZXAtaGVhZGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1hdC1zdGVwLXRleHQtbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTcwMCwgIzM5MzkzOSk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gLnN0ZXBwZXItYnV0dG9uc3tcblxuLy8gfVxuXG46aG9zdCA6Om5nLWRlZXAgLnN1Ym1pdHRlZC1kaWFsb2d7XG4gICAgXG4gICAgLnAtZGlhbG9nLWNvbnRlbnR7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNDlBOTQyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtIDtcbiAgICB9XG4gICAgLnAtZGlhbG9nLWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 207:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/acknowledgement/acknowledgement.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcknowledgementComponent": () => (/* binding */ AcknowledgementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);









function AcknowledgementComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r3 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r2, " ");
} }
function AcknowledgementComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "I have read the terms & conditions before applying as subcontractor of QM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.terms_conditions);
} }
class AcknowledgementComponent {
    constructor() {
        this.signatureImg = '';
        this.companyName = '';
        this.expansionData = [
            `QM Environmental expects all Subcontractors to work to QM Environmental – Environment, Health & Safety standards as a
    minimum. Subcontractors without safety programs will operate under the QM Environmental EHS program while engaged in
    work for QM Environmental.`,
            `Subcontractors will ensure that work is performed safely in accordance with QM Environmental procedures and current
    legislation. All hazards associated with the Subcontractor’s tasks will be reviewed with the QM Environmental site
    representative.`,
            `Subcontractors will be responsible for following the applicable QM Environmental EHS procedures during their activities and will
    inform QM Environmental of any hazards presented by the Subcontractor’s work, or of any hazards found during the
    Subcontractor’s work, and how these hazards will be managed.`,
            `Subcontractors shall be prepared to define to the QM Environmental site representative the way in which they intend to
    execute their tasks safely.`,
            `Subcontractors will confine their personnel to areas that are applicable to the work. Subcontractors will ensure that all of their
    employees comply with all security procedures required by the work.`,
            `Subcontractors will provide tools and equipment, including personal protective equipment, which is properly maintained and
    appropriate for safe accomplishment of the task. Any temporary construction services will be in accordance with all local
    regulations, codes and practices, and site rules. Any certification of tools or equipment required by regulation shall be provided
    by the Subcontractor.`,
            `Subcontractors will review arrangements with the QM Environmental representative for first aid and medical services.`,
            `Subcontractors will notify QM Environmental immediately of all incidents involving their employees while on-site, including near
    misses, injuries, damage, or environmental mishaps. This notification will be done in accordance with QM Environmental Health
    and Safety Management System.`,
            `Subcontractors will ensure that none of their activities endanger QM Environmental employees, other personnel, the public, or
    property.`,
        ];
    }
    ngOnInit() {
    }
}
AcknowledgementComponent.ɵfac = function AcknowledgementComponent_Factory(t) { return new (t || AcknowledgementComponent)(); };
AcknowledgementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AcknowledgementComponent, selectors: [["app-acknowledgement"]], inputs: { form: "form", companyForm: "companyForm", signatureImg: "signatureImg", companyName: "companyName", terms_conditions: "terms_conditions", forApproval: "forApproval" }, decls: 23, vars: 15, consts: [[1, "p-10"], ["title", "Acknowledgement", 1, "mb-10", 3, "divider"], [1, "!h-auto", "bg-[#F5F5F5]"], [1, "!text-base", "!text-[#393939]", "py-4"], [1, "!m-auto"], [1, "text-black"], ["class", "pt-9 expansion-data", 4, "ngFor", "ngForOf"], [1, "mt-16", "mb-4", "text-[#616161]"], [1, "mt-16"], [1, "flex", "justify-between", "items-center", "gap-11", "form"], ["label", "Name", 1, "w-1/2", 3, "required", "control", "disabled"], ["label", "Position", 1, "w-1/2", 3, "required", "control", "disabled"], ["label", "Company Name", 1, "w-1/2", 3, "required", "control", "disabled"], ["label", "Date", "type", "date", 1, "w-1/2", 3, "required", "control", "disabled"], ["class", "mt-16", 4, "ngIf"], [1, "pt-9", "expansion-data"], [1, "flex", "text-base", "text-[#616161]", "gap-1"], [1, "mb-4"], ["color", "primary", 1, "example-margin", 3, "formControl"]], template: function AcknowledgementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "qmt-page-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-accordion")(3, "mat-expansion-panel")(4, "mat-expansion-panel-header", 2)(5, "mat-panel-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " You (Subcontractor) are required to read and understand the following as part of your employment agreement. Your actions while under contract to QM Environmental shall comply with our environment, health and safety procedures and expectations. Failure to comply may result in and up to and including termination of the agreement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-panel-description", 4)(8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "expand_circle_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AcknowledgementComponent_div_10_Template, 7, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Signing this document is confirmation that you have shared the requirements herein with the employees of your organization who will be working for and on behalf of QM Environmental and that the information you have supplied is both accurate and truthful. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "qmt-new-input", 10)(17, "qmt-new-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8)(19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "qmt-new-input", 12)(21, "qmt-new-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AcknowledgementComponent_div_22_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.expansionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("control", ctx.form.get("ack_name"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("control", ctx.form == null ? null : ctx.form.get("ack_signature"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("control", ctx.form.get("ack_company_name"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("control", ctx.form.get("ack_date"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.forApproval);
    } }, directives: [_shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelDescription, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_1__.NewInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective], styles: ["[_nghost-%COMP%]     mat-accordion .mat-expansion-indicator {\n  display: none;\n}\n[_nghost-%COMP%]     mat-accordion .expansion-data:last-child mat-divider {\n  display: none;\n}\n[_nghost-%COMP%]     .field p {\n  font-size: 14px !important;\n  font-weight: 400;\n  color: var(--g-2, #5f6d7e);\n  font-family: \"Open Sans\";\n}\n[_nghost-%COMP%]     .field input, [_nghost-%COMP%]     .field textarea {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFja25vd2xlZGdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBT0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUpKO0FBTUU7O0VBRUUsZ0JBQUE7QUFKSiIsImZpbGUiOiJhY2tub3dsZWRnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbWF0LWFjY29yZGlvbiB7XG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZXhwYW5zaW9uLWRhdGE6bGFzdC1jaGlsZCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5maWVsZCB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLWctMiwgIzVmNmQ3ZSk7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6581:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/company-details/company-details.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsComponent": () => (/* binding */ CompanyDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helpers */ 4825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/multiselect */ 2460);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);










class CompanyDetailsComponent {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    ngOnInit() {
        var _a, _b, _c;
        this.utilsService.getAllState().subscribe((data) => {
            var _a;
            this.allProvinceOperations = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
        });
        (_a = this.form.get('country')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a, _b;
            if ((data === null || data === void 0 ? void 0 : data.id) && ((_a = this.form.get('country')) === null || _a === void 0 ? void 0 : _a.touched)) {
                (_b = this.form.get('country_id')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.id);
                this.utilsService.getState(data === null || data === void 0 ? void 0 : data.id).subscribe((data) => {
                    var _a;
                    this.allStates = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
                });
            }
        });
        (_b = this.form.get('state')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.id) {
                (_a = this.form.get('state_id')) === null || _a === void 0 ? void 0 : _a.patchValue(data === null || data === void 0 ? void 0 : data.id);
            }
        });
        (_c = this.form.get('company_operation_province')) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe((data) => {
            const { east, west, central } = (0,src_app_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.getRegion)(data);
            // console.log({east,west,central})
            this.form.get('east').patchValue(east);
            this.form.get('west').patchValue(west);
            this.form.get('central').patchValue(central);
        });
    }
}
CompanyDetailsComponent.ɵfac = function CompanyDetailsComponent_Factory(t) { return new (t || CompanyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService)); };
CompanyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CompanyDetailsComponent, selectors: [["app-company-details"]], inputs: { form: "form", allCountries: "allCountries", forApproval: "forApproval" }, decls: 45, vars: 55, consts: [[1, "p-10", "company-details"], [3, "formGroup"], ["title", "Company Details", 1, "mb-10"], [1, "!p-6"], ["title", "Company Information", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center", "gap-11", "form"], ["label", "Company Name", 1, "w-1/3", 3, "required", "control", "disabled"], [1, "mt-8", "form", "flex", "flex-col", "gap-8"], ["label", "Address line 1", 1, "w-full", 3, "required", "control", "disabled"], ["label", "Address Line 2", 1, "w-full", 3, "control", "disabled"], [1, "flex", "justify-start", "items-center", "gap-11", "form", "mt-8"], ["label", "City", 1, "w-1/3", 3, "required", "control", "disabled"], [1, "w-1/3"], ["label", "Country (Please select country first)", "field", "country", 1, "w-1/3", 3, "required", "options", "control", "disabled"], ["label", "State/Province", "field", "state", 1, "w-1/3", 3, "required", "options", "control", "disabled"], ["label", "Postal Code", 1, "w-1/3", 3, "required", "control", "disabled"], ["label", "Company Contact Number", "svgName", "phone", "type", "tel", 1, "w-1/3", 3, "required", "control", "disabled"], ["label", "Email Address", "svgName", "mail", "type", "email", 1, "w-1/3", 3, "required", "control", "disabled"], [1, "w-full", "multiselect"], [1, "text-sm", "font-normal", "text-[#5F6D7E]"], [1, "text-red-500"], ["optionLabel", "state", 3, "options", "formControl"], [1, "!mt-8", "!p-6"], ["title", "Safety Person Information", 1, "mb-8", 3, "divider"], ["label", "Safety Contact Person", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Contact Number", "type", "tel", "svgName", "phone", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Email Address", "svgName", "mail", "type", "email", 1, "w-1/3", 3, "required", "disabled", "control"], ["title", "Operations Person Information", 1, "mb-8", 3, "divider"], ["label", "Operations Contact Person", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Contact Number", "svgName", "phone", "type", "tel", 1, "w-1/3", 3, "required", "disabled", "control"], [1, "mt-8"], ["title", "Description", 1, "mb-8", 3, "divider"], [1, "form"], ["label", "Description of Service Provided", 1, "address", 3, "disabled", "control"]], template: function CompanyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "qmt-page-heading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "qmt-page-heading", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "qmt-new-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "qmt-new-input", 8)(9, "qmt-new-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "qmt-new-input", 11)(12, "div", 12)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "qmt-new-autocomplete", 13)(16, "qmt-new-autocomplete", 14)(17, "qmt-new-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "qmt-new-input", 16)(20, "qmt-new-input", 17)(21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 10)(23, "div", 18)(24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Province of Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "p-multiSelect", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "qmt-page-heading", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "qmt-new-input", 24)(33, "qmt-new-input", 25)(34, "qmt-new-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "qmt-page-heading", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "qmt-new-input", 28)(39, "qmt-new-input", 29)(40, "qmt-new-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "qmt-page-heading", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "qmt-new-textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form == null ? null : ctx.form.get("company_name"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form == null ? null : ctx.form.get("company_address"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form == null ? null : ctx.form.get("company_address_2"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form.get("city"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("options", ctx.allCountries)("control", ctx.form.get("country"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("options", ctx.allStates)("control", ctx.form.get("state"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form.get("postal_code"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form == null ? null : ctx.form.get("company_contact_number"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("control", ctx.form == null ? null : ctx.form.get("company_email"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.allProvinceOperations)("formControl", ctx.form == null ? null : ctx.form.get("company_operation_province"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_safety_contact_person"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_safety_contact_person_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_safety_contact_person_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_operations_contact_person"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_operations_contact_person_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", true)("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_operations_contact_person_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form == null ? null : ctx.form.get("company_service_decription"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__.PageHeadingComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_3__.NewInputComponent, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.NewAutocompleteComponent, primeng_multiselect__WEBPACK_IMPORTED_MODULE_9__.MultiSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__.NewTextareaComponent], styles: ["[_nghost-%COMP%]     .form .field p {\n  font-size: 14px !important;\n  font-weight: 400;\n  color: var(--g-2, #5F6D7E);\n  font-family: \"Open Sans\";\n}\n[_nghost-%COMP%]     .form .field input, [_nghost-%COMP%]     .form .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .form .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n[_nghost-%COMP%]     .multiselect .p-multiselect {\n  margin-top: 12px !important;\n  height: 40px !important;\n  width: 100% !important;\n  border-radius: 8px !important;\n  border-color: #dae0e6 !important;\n}\n[_nghost-%COMP%]     .multiselect .p-multiselect .p-multiselect-label {\n  padding: 0.5rem 0.5rem;\n}\n[_nghost-%COMP%]     .multiselect .p-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon.pi-check:before {\n  top: 8px !important;\n  left: 3px !important;\n}\n[_nghost-%COMP%]     .multiselect .p-multiselect-filter-container .p-inputtext {\n  padding: 0.2rem 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBRFo7QUFJUTs7RUFFSSxnQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSFo7QUFVSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFQUjtBQVFRO0VBQ0ksc0JBQUE7QUFOWjtBQVVJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQVJSO0FBV1E7RUFDSSxzQkFBQTtBQVRaIiwiZmlsZSI6ImNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuZm9ybSB7XG4gICAgLmZpZWxkIHtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1nLTIsICM1RjZEN0UpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjpob3N0IDo6bmctZGVlcCAubXVsdGlzZWxlY3R7XG4gICAgLnAtbXVsdGlzZWxlY3R7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICNkYWUwZTYgIWltcG9ydGFudCA7XG4gICAgICAgIC5wLW11bHRpc2VsZWN0LWxhYmVse1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC5wLWNoZWNrYm94IC5wLWNoZWNrYm94LWJveC5wLWhpZ2hsaWdodCAucC1jaGVja2JveC1pY29uLnBpLWNoZWNrOmJlZm9yZSB7XG4gICAgICAgIHRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucC1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVye1xuICAgICAgICAucC1pbnB1dHRleHR7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 2351:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/file-upload/file-upload.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);










function FileUploadComponent_qmt_file_upload_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.get("company_safety_policy_copy"));
} }
function FileUploadComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.form.value["company_safety_policy_copy"] == null ? null : ctx_r1.form.value["company_safety_policy_copy"][0] == null ? null : ctx_r1.form.value["company_safety_policy_copy"][0].name);
} }
function FileUploadComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r2.fileUpload.get("company_safety_policy_copy")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_ng_template_9_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.app);
} }
function FileUploadComponent_qmt_file_upload_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r5.form.get("table_of_content_company_safety_manual"));
} }
function FileUploadComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r6.form.value["table_of_content_company_safety_manual"] == null ? null : ctx_r6.form.value["table_of_content_company_safety_manual"][0] == null ? null : ctx_r6.form.value["table_of_content_company_safety_manual"][0].name, " ");
} }
function FileUploadComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r7.fileUpload.get("table_of_content_company_safety_manual")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_ng_template_18_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_ng_template_18_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.app);
} }
function FileUploadComponent_qmt_file_upload_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r10.form.get("wcb_last_3_years"));
} }
function FileUploadComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.form.value["wcb_last_3_years"] == null ? null : ctx_r11.form.value["wcb_last_3_years"][0] == null ? null : ctx_r11.form.value["wcb_last_3_years"][0].name);
} }
function FileUploadComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r12.fileUpload.get("wcb_last_3_years")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_ng_template_27_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.app);
} }
function FileUploadComponent_qmt_file_upload_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r15.form.get("desc_of_oh"));
} }
function FileUploadComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.form.value["desc_of_oh"] == null ? null : ctx_r16.form.value["desc_of_oh"][0] == null ? null : ctx_r16.form.value["desc_of_oh"][0].name);
} }
function FileUploadComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r17.fileUpload.get("desc_of_oh")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_ng_template_36_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_ng_template_36_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.app);
} }
function FileUploadComponent_qmt_file_upload_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r20.form.get("safety_meeting_minutes"));
} }
function FileUploadComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.form.value["safety_meeting_minutes"] == null ? null : ctx_r21.form.value["safety_meeting_minutes"][0] == null ? null : ctx_r21.form.value["safety_meeting_minutes"][0].name);
} }
function FileUploadComponent_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r22.fileUpload.get("safety_meeting_minutes")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_ng_template_45_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_ng_template_45_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r24.app);
} }
function FileUploadComponent_mat_card_47_qmt_file_upload_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 17);
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r34.form.get("void_cheque"));
} }
function FileUploadComponent_mat_card_47_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r35.form.value["void_cheque"] == null ? null : ctx_r35.form.value["void_cheque"][0] == null ? null : ctx_r35.form.value["void_cheque"][0].name);
} }
function FileUploadComponent_mat_card_47_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r36.fileUpload.get("void_cheque")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_mat_card_47_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_mat_card_47_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_mat_card_47_ng_template_7_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r38.app);
} }
function FileUploadComponent_mat_card_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "qmt-page-heading", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FileUploadComponent_mat_card_47_qmt_file_upload_3_Template, 1, 1, "qmt-file-upload", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FileUploadComponent_mat_card_47_small_4_Template, 2, 1, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FileUploadComponent_mat_card_47_a_6_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FileUploadComponent_mat_card_47_ng_template_7_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r25.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r25.form.get("void_cheque")) == null ? null : tmp_2_0.value)("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r25.fileUpload.get("void_cheque")) == null ? null : tmp_4_0.value)("ngIfElse", _r37);
} }
function FileUploadComponent_div_50_div_1_qmt_file_upload_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "qmt-file-upload", 28);
} if (rf & 2) {
    const file_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", file_r40.get("file"));
} }
function FileUploadComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "qmt-new-input", 24)(2, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FileUploadComponent_div_50_div_1_qmt_file_upload_3_Template, 1, 1, "qmt-file-upload", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileUploadComponent_div_50_div_1_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const i_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r45.remove(i_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", file_r40.get("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r42.forApproval);
} }
function FileUploadComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FileUploadComponent_div_50_div_1_Template, 6, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r26.forApproval);
} }
function FileUploadComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileUploadComponent_div_51_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r49.addMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " + Add More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function FileUploadComponent_div_52_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", (tmp_0_0 = file_r51.get("file")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](file_r51.get("name").value);
} }
function FileUploadComponent_div_52_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileUploadComponent_div_52_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FileUploadComponent_div_52_ng_template_3_div_0_Template, 2, 0, "div", 19);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r54.app);
} }
function FileUploadComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FileUploadComponent_div_52_a_2_Template, 2, 2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FileUploadComponent_div_52_ng_template_3_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r51 = ctx.$implicit;
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = file_r51.get("file")) == null ? null : tmp_0_0.value)("ngIfElse", _r53);
} }
class FileUploadComponent {
    // displayForm = this.fb.group({
    //   company_safety_policy_copy: [''],
    //   table_of_content_company_safety_manual: [''],
    //   current_clearance_letter: [''],
    //   wcb_last_3_years: [''],
    //   copy_of_cor: [''],
    //   desc_of_oh: [''],
    //   safety_meeting_minutes: [''],
    //   extra_upload: this.fb.array([]),
    // });
    constructor(fb) {
        this.fb = fb;
        this.forApproval = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        // isGet: boolean = false;
        this.extraUpload = [];
        this.fileUpload = this.fb.group({
            company_safety_policy_copy: [''],
            table_of_content_company_safety_manual: [''],
            current_clearance_letter: [''],
            wcb_last_3_years: [''],
            copy_of_cor: [''],
            desc_of_oh: [''],
            safety_meeting_minutes: [''],
            mitigation_plan_copy: [''],
            void_cheque: [''],
            extra_upload: this.fb.array([]),
        });
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        if ((_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b['mitigation_plan_required']) {
            (_c = this.fileUpload.get('mitigation_plan_copy')) === null || _c === void 0 ? void 0 : _c.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
            (_d = this.fileUpload.get('mitigation_plan_copy')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
        }
        if (changes['files_json'].currentValue) {
            const files = JSON.parse(changes['files_json'].currentValue);
            Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                var _a;
                const value = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + (files === null || files === void 0 ? void 0 : files.files[file].split('./public')[1]);
                if (this.fileUpload.get(file)) {
                    (_a = this.fileUpload.get(file)) === null || _a === void 0 ? void 0 : _a.patchValue(value);
                }
                else {
                    const extraUpload = this.fb.group({
                        name: [file],
                        file: [value],
                    });
                    this.getExtraUpload.push(extraUpload);
                }
            });
        }
    }
    get getExtraUpload() {
        return this.fileUpload.controls['extra_upload'];
    }
    get getExtraFiles() {
        return this.form.controls['extra_upload'];
    }
    ngOnInit() {
        this.form.valueChanges.subscribe((data) => {
            // console.log("changes")
            this.form.markAllAsTouched();
        });
    }
    addMore() {
        const extraUpload = this.fb.group({
            name: [''],
            file: [''],
        });
        this.getExtraFiles.push(extraUpload);
    }
    remove(id) {
        this.getExtraFiles.removeAt(id);
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], inputs: { form: "form", files_json: "files_json", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 53, vars: 36, consts: [[1, "p-10"], [3, "formGroup"], [1, "!p-6"], ["title", "Copy of your Company Safety Policy", 1, "mb-8", 3, "divider"], ["text", "Upload file here", 3, "control", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["target", "_blank", "class", "underline text-lg text-primary font-medium", 3, "href", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "!mt-8", "!p-6"], ["title", "Table of Contents from your Company Safety Manual", 1, "mb-8", 3, "divider"], ["title", "WCB/WISB/WSBC Last 3 years Rate Sheets", 1, "mb-8", 3, "divider"], ["title", "Description of OH&S citations written against your company by an\n    OH&S regulator (if applicable)", 1, "mb-8", 3, "divider"], ["title", "Latest Safety Meeting minutes", 1, "mb-8", 3, "divider"], ["class", "!mt-8 !p-6", 4, "ngIf"], ["title", "Add Additional files", 1, "mb-8", 3, "divider"], [4, "ngFor", "ngForOf"], ["class", "text-primary text-sm text-end cursor-pointer mt-5 underline", 4, "ngIf"], ["text", "Upload file here", 3, "control"], ["target", "_blank", 1, "underline", "text-lg", "text-primary", "font-medium", 3, "href"], ["class", "text-sm text-gray-A3", 4, "ngIf"], [1, "text-sm", "text-gray-A3"], ["title", "VOID Cheque", 1, "mb-8", 3, "divider"], ["class", "flex justify-between items-center", 4, "ngIf"], [1, "flex", "justify-between", "items-center"], ["label", "Name", 1, "w-[45%]", 3, "control"], ["svgIcon", "back_button", 2, "transform", "rotate(180deg)", "margin-top", "20px"], ["class", "w-[45%] mt-5", "text", "Upload file here", 3, "control", 4, "ngIf"], [1, "!w-[18px]", "!h-[18px]", "mt-4", "text-[#E2341D]", "cursor-pointer", 3, "click"], ["text", "Upload file here", 1, "w-[45%]", "mt-5", 3, "control"], [1, "text-primary", "text-sm", "text-end", "cursor-pointer", "mt-5", "underline"], [3, "click"], [1, "mb-4"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "qmt-page-heading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileUploadComponent_qmt_file_upload_5_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FileUploadComponent_small_6_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FileUploadComponent_a_8_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FileUploadComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "qmt-page-heading", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FileUploadComponent_qmt_file_upload_14_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FileUploadComponent_small_15_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FileUploadComponent_a_17_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FileUploadComponent_ng_template_18_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "qmt-page-heading", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FileUploadComponent_qmt_file_upload_23_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, FileUploadComponent_small_24_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, FileUploadComponent_a_26_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, FileUploadComponent_ng_template_27_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "qmt-page-heading", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, FileUploadComponent_qmt_file_upload_32_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, FileUploadComponent_small_33_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, FileUploadComponent_a_35_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, FileUploadComponent_ng_template_36_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "qmt-page-heading", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, FileUploadComponent_qmt_file_upload_41_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, FileUploadComponent_small_42_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, FileUploadComponent_a_44_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, FileUploadComponent_ng_template_45_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, FileUploadComponent_mat_card_47_Template, 9, 6, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "qmt-page-heading", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, FileUploadComponent_div_50_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, FileUploadComponent_div_51_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, FileUploadComponent_div_52_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        let tmp_3_0;
        let tmp_5_0;
        let tmp_9_0;
        let tmp_11_0;
        let tmp_15_0;
        let tmp_17_0;
        let tmp_21_0;
        let tmp_23_0;
        let tmp_27_0;
        let tmp_29_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("company_safety_policy_copy")) == null ? null : tmp_3_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.fileUpload.get("company_safety_policy_copy")) == null ? null : tmp_5_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.form.get("table_of_content_company_safety_manual")) == null ? null : tmp_9_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.fileUpload.get("table_of_content_company_safety_manual")) == null ? null : tmp_11_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.form.get("wcb_last_3_years")) == null ? null : tmp_15_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.fileUpload.get("wcb_last_3_years")) == null ? null : tmp_17_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx.form.get("desc_of_oh")) == null ? null : tmp_21_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_23_0 = ctx.fileUpload.get("desc_of_oh")) == null ? null : tmp_23_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx.form.get("safety_meeting_minutes")) == null ? null : tmp_27_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_29_0 = ctx.fileUpload.get("safety_meeting_minutes")) == null ? null : tmp_29_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.type) !== "dbuser" || (ctx.user == null ? null : ctx.user.type) !== "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getExtraFiles.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getExtraUpload.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__.PageHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_3__.NewInputComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: ["[_nghost-%COMP%]     .upload button {\n  width: 100%;\n  border: 1px #4D4D4D;\n  border-style: dashed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  color: #4D4D4D !important;\n}\n\n[_nghost-%COMP%]     .field p {\n  font-size: 14px !important;\n  font-weight: 400;\n  color: var(--g-2, #5F6D7E);\n  font-family: \"Open Sans\";\n}\n\n[_nghost-%COMP%]     .field input, [_nghost-%COMP%]     .field textarea {\n  margin-top: 12px;\n}\n\n[_nghost-%COMP%]     .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUF6Qko7O0FBOEJNO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUEzQlY7O0FBOEJNOztFQUVJLGdCQUFBO0FBNUJWOztBQStCTTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUE3QlYiLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCA6Om5nLWRlZXAgLnAtZmlsZXVwbG9hZCB7XG4vLyAgIC5wLWZpbGV1cGxvYWQtYnV0dG9uYmFyIHtcbi8vICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgICAucC1maWxldXBsb2FkLWNob29zZSB7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICAgICAgYm9yZGVyOiAxcHggIzRkNGQ0ZDtcbi8vICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuLy8gICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4vLyAgICAgICAucC1idXR0b24taWNvbiB7XG4vLyAgICAgICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5wLWJ1dHRvbi1sYWJlbCB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBwLWJ1dHRvbntcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgLnAtZmlsZXVwbG9hZC1jb250ZW50IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4vLyB9XG46aG9zdCA6Om5nLWRlZXAgLnVwbG9hZHtcbiAgYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4ICM0RDRENEQ7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogIzRENEQ0RCAhaW1wb3J0YW50O1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZmllbGQge1xuICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nLTIsICM1RjZEN0UpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgfVxuXG4gICAgICBpbnB1dCxcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3896:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/hsep/hsep.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HsepComponent": () => (/* binding */ HsepComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);












function HsepComponent_qmt_new_textarea_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-textarea", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.forApproval)("required", (tmp_1_0 = ctx_r0.form.get("health_q3_past_two_years")) == null ? null : tmp_1_0.value)("control", ctx_r0.form.get("health_spills_or_release_details"));
} }
function HsepComponent_div_27_qmt_file_upload_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-file-upload", 27);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.form.get("cor_file_url"));
} }
function HsepComponent_div_27_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.form.value["cor_file_url"] == null ? null : ctx_r3.form.value["cor_file_url"][0] == null ? null : ctx_r3.form.value["cor_file_url"][0].name);
} }
function HsepComponent_div_27_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r4.cor_file_url_img, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function HsepComponent_div_27_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No file uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HsepComponent_div_27_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, HsepComponent_div_27_ng_template_17_div_0_Template, 2, 0, "div", 29);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.app);
} }
function HsepComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "qmt-new-autocomplete", 13)(3, "qmt-new-autocomplete", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "qmt-new-input", 17)(7, "qmt-new-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div")(9, "div", 19)(10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Copy of your Certificate of Recognition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, HsepComponent_div_27_qmt_file_upload_13_Template, 1, 1, "qmt-file-upload", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, HsepComponent_div_27_small_14_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, HsepComponent_div_27_a_16_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, HsepComponent_div_27_ng_template_17_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_5_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("required", (tmp_1_0 = ctx_r1.form.get("health_country")) == null ? null : tmp_1_0.value)("options", ctx_r1.allCountries)("control", ctx_r1.form.get("health_country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("required", (tmp_5_0 = ctx_r1.form.get("health_state")) == null ? null : tmp_5_0.value)("options", ctx_r1.allStates)("control", ctx_r1.form.get("health_state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("required", (tmp_9_0 = ctx_r1.form.get("health_q4_cor")) == null ? null : tmp_9_0.value)("control", ctx_r1.form.get("health_date_of_cor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("required", (tmp_12_0 = ctx_r1.form.get("health_q4_cor")) == null ? null : tmp_12_0.value)("control", ctx_r1.form.get("health_score_achieved"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r1.form.get("cor_file_url")) == null ? null : tmp_15_0.value)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cor_file_url_img);
} }
class HsepComponent {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if ((_a = changes['cor_file_url_img']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            (_b = this.form.get('cor_file_url')) === null || _b === void 0 ? void 0 : _b.patchValue('');
        }
        // console.log(changes['form']?.currentValue?.value)
        // if (changes['form'].currentValue) {
        //   this.form.get('health_date_of_cor')?.valueChanges.subscribe((data) => {
        //     this.form.get('health_date_of_cor')?.setValue(data.split('T')[0])
        //   console.log(typeof data, data.split('T')[0]);
        // });
        //   // console.log(this.form?.get('health_date_of_cor'))
        //   // console.log(this.form?.get('health_date_of_cor')?.value)
        // }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        (_a = this.form.get('health_q4_cor')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            if (data === true) {
                (_a = this.form.get('health_country')) === null || _a === void 0 ? void 0 : _a.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_b = this.form.get('health_country')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
                (_c = this.form.get('health_state')) === null || _c === void 0 ? void 0 : _c.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_d = this.form.get('health_state')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
                (_e = this.form.get('health_date_of_cor')) === null || _e === void 0 ? void 0 : _e.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_f = this.form.get('health_date_of_cor')) === null || _f === void 0 ? void 0 : _f.updateValueAndValidity();
                (_g = this.form.get('health_score_achieved')) === null || _g === void 0 ? void 0 : _g.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_h = this.form.get('health_score_achieved')) === null || _h === void 0 ? void 0 : _h.updateValueAndValidity();
            }
            if (data === false) {
                (_j = this.form.get('health_country')) === null || _j === void 0 ? void 0 : _j.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_k = this.form.get('health_country')) === null || _k === void 0 ? void 0 : _k.updateValueAndValidity();
                (_l = this.form.get('health_state')) === null || _l === void 0 ? void 0 : _l.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_m = this.form.get('health_state')) === null || _m === void 0 ? void 0 : _m.updateValueAndValidity();
                (_o = this.form.get('health_date_of_cor')) === null || _o === void 0 ? void 0 : _o.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_p = this.form.get('health_date_of_cor')) === null || _p === void 0 ? void 0 : _p.updateValueAndValidity();
                (_q = this.form.get('health_score_achieved')) === null || _q === void 0 ? void 0 : _q.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_r = this.form.get('health_score_achieved')) === null || _r === void 0 ? void 0 : _r.updateValueAndValidity();
                return;
            }
        });
        (_b = this.form
            .get('health_q3_past_two_years')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => {
            var _a, _b, _c, _d;
            if (data === true) {
                (_a = this.form
                    .get('health_spills_or_release_details')) === null || _a === void 0 ? void 0 : _a.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_b = this.form
                    .get('health_spills_or_release_details')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            }
            if (data === false) {
                (_c = this.form
                    .get('health_spills_or_release_details')) === null || _c === void 0 ? void 0 : _c.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_d = this.form
                    .get('health_spills_or_release_details')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
                return;
            }
        });
        (_c = this.form.get('health_country')) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe((data) => {
            var _a, _b;
            if ((data === null || data === void 0 ? void 0 : data.id) && ((_a = this.form.get('health_country')) === null || _a === void 0 ? void 0 : _a.touched)) {
                (_b = this.form.get('health_country_id')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.id);
                this.utilsService.getState(data === null || data === void 0 ? void 0 : data.id).subscribe((data) => {
                    var _a;
                    this.allStates = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
                });
            }
        });
        (_d = this.form.get('health_state')) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.id) {
                (_a = this.form.get('health_state_id')) === null || _a === void 0 ? void 0 : _a.patchValue(data === null || data === void 0 ? void 0 : data.id);
            }
        });
        (_e = this.form.get('cor_file_url')) === null || _e === void 0 ? void 0 : _e.valueChanges.subscribe((data) => {
            console.log("first");
            this.form.markAllAsTouched();
        });
    }
}
HsepComponent.ɵfac = function HsepComponent_Factory(t) { return new (t || HsepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService)); };
HsepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HsepComponent, selectors: [["app-hsep"]], inputs: { form: "form", allCountries: "allCountries", cor_file_url_img: "cor_file_url_img", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 28, vars: 11, consts: [[1, "p-10"], [1, "!p-6"], ["title", "Health, Safety & Environmental program information", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "font-medium", "text-gray-A3"], [3, "disabled", "control"], [1, "w-full", "!mt-5"], [1, "flex", "justify-between", "items-center", "!mt-6"], [1, "flex", "justify-between", "items-center", "!mt-6", "!mb-5"], ["label", "Spills or releases details", "class", "address", 3, "disabled", "required", "control", 4, "ngIf"], [4, "ngIf"], ["label", "Spills or releases details", 1, "address", 3, "disabled", "required", "control"], [1, "flex", "gap-11", "justify-between", "items-center"], ["label", "Country", "field", "country", 1, "w-1/2", 3, "disabled", "required", "options", "control"], ["label", "State/Province", "field", "state", 1, "w-1/2", 3, "disabled", "required", "options", "control"], [1, "w-full", "!mt-5", "!mb-6"], [1, "flex", "justify-between", "items-center", "gap-11", "form", "!mt-5", "!mb-6"], ["label", "Date of the COR audit:", "type", "date", 1, "w-1/2", 3, "disabled", "required", "control"], ["label", "Score Achieved:", "type", "number", 1, "w-1/2", 3, "disabled", "required", "control"], [1, "flex", "justify-start", "items-center", "mt-6"], [1, "text-[#5F6D7E]", "mr-4", "mb-2"], [1, "!w-1/3"], ["text", "Upload file here", 3, "control", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "mt-2"], ["target", "_blank", "class", "underline text-lg text-primary font-medium", 3, "href", 4, "ngIf"], ["elseBlock", ""], ["text", "Upload file here", 3, "control"], ["target", "_blank", 1, "underline", "text-lg", "text-primary", "font-medium", 3, "href"], ["class", "text-sm text-gray-A3", 4, "ngIf"], [1, "text-sm", "text-gray-A3"]], template: function HsepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "qmt-page-heading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Q. Does your company have a full time EHS/HSE representative? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Q. Does your company have a formal Safety Program? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8)(16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Q. Has your company been involved in any reportable spills or releases in the past two years? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, HsepComponent_qmt_new_textarea_20_Template, 1, 3, "qmt-new-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 8)(23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Q. Does your company have a Certificate of Recognition (COR)? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, HsepComponent_div_27_Template, 19, 18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_7_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("health_q1_full_time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("health_q2_formal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("health_q3_past_two_years"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.form.get("health_q3_past_two_years")) == null ? null : tmp_7_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("health_q4_cor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.form.get("health_q4_cor")) == null ? null : tmp_10_0.value);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__.PageHeadingComponent, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.YesNoCheckboxComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__.NewTextareaComponent, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.NewAutocompleteComponent, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_5__.NewInputComponent, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__.FileUploadComponent], styles: ["[_nghost-%COMP%]     .address .field p {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--g-2, #5F6D7E);\n}\n[_nghost-%COMP%]     .address .field input, [_nghost-%COMP%]     .address .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .address .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n[_nghost-%COMP%]     .form .field p {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--g-2, #5F6D7E);\n}\n[_nghost-%COMP%]     .form .field input, [_nghost-%COMP%]     .form .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .form .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhzZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFEWjtBQUlROztFQUVJLGdCQUFBO0FBRlo7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFIWjtBQVlRO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBVFo7QUFZUTs7RUFFSSxnQkFBQTtBQVZaO0FBYVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWFoiLCJmaWxlIjoiaHNlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYWRkcmVzcyB7XG4gICAgLmZpZWxkIHtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWctMiwgIzVGNkQ3RSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mb3Jte1xuICAgIC5maWVsZCB7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1nLTIsICM1RjZEN0UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 2161:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/insurance-details/insurance-details.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuranceDetailsComponent": () => (/* binding */ InsuranceDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);









function InsuranceDetailsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Type of Insurance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 15)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Amount of Coverage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 18)(10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Expiry Date of Insurance Certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "more");
} }
function InsuranceDetailsComponent_ng_template_6_td_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 27);
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", row_r7.control1)("formControl", ctx_r12.form.get(row_r7.control1));
} }
function InsuranceDetailsComponent_ng_template_6_td_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "currency");
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, (tmp_0_0 = ctx_r13.form.get(row_r7.control1)) == null ? null : tmp_0_0.value), " ");
} }
function InsuranceDetailsComponent_ng_template_6_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24)(1, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InsuranceDetailsComponent_ng_template_6_td_3_ng_template_2_Template, 1, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InsuranceDetailsComponent_ng_template_6_td_3_ng_template_3_Template, 2, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r8.forApproval ? "userSelectDisable" : "");
} }
function InsuranceDetailsComponent_ng_template_6_td_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 27);
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", row_r7.control1)("formControl", ctx_r16.form.get(row_r7.control1));
} }
function InsuranceDetailsComponent_ng_template_6_td_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "currency");
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, (tmp_0_0 = ctx_r17.form.get(row_r7.control1)) == null ? null : tmp_0_0.value), " ");
} }
function InsuranceDetailsComponent_ng_template_6_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InsuranceDetailsComponent_ng_template_6_td_4_ng_template_2_Template, 1, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InsuranceDetailsComponent_ng_template_6_td_4_ng_template_3_Template, 2, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r9.forApproval ? "userSelectDisable" : "");
} }
function InsuranceDetailsComponent_ng_template_6_6_ng_template_0_Template(rf, ctx) { }
function InsuranceDetailsComponent_ng_template_6_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InsuranceDetailsComponent_ng_template_6_6_ng_template_0_Template, 0, 0, "ng-template");
} }
function InsuranceDetailsComponent_ng_template_6_td_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 29);
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", row_r7.control2)("formControl", ctx_r21.form.get(row_r7.control2));
} }
function InsuranceDetailsComponent_ng_template_6_td_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, (tmp_0_0 = ctx_r22.form.get(row_r7.control2)) == null ? null : tmp_0_0.value, "MMM d, y"), " ");
} }
function InsuranceDetailsComponent_ng_template_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InsuranceDetailsComponent_ng_template_6_td_7_ng_template_2_Template, 1, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InsuranceDetailsComponent_ng_template_6_td_7_ng_template_3_Template, 2, 4, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r11.forApproval ? "userSelectDisable" : "");
} }
function InsuranceDetailsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InsuranceDetailsComponent_ng_template_6_td_3_Template, 4, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InsuranceDetailsComponent_ng_template_6_td_4_Template, 4, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InsuranceDetailsComponent_ng_template_6_6_Template, 1, 0, null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InsuranceDetailsComponent_ng_template_6_td_7_Template, 4, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", row_r7.control1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r7.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "total_insurance_amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", row_r7.control2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "total_insurance_date");
} }
function InsuranceDetailsComponent_qmt_file_upload_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "qmt-file-upload", 30);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r2.form.get("insurance_certificate_url"));
} }
function InsuranceDetailsComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.form.value["insurance_certificate_url"] == null ? null : ctx_r3.form.value["insurance_certificate_url"][0] == null ? null : ctx_r3.form.value["insurance_certificate_url"][0].name);
} }
function InsuranceDetailsComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r4.insurance_certificate_url_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function InsuranceDetailsComponent_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function InsuranceDetailsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InsuranceDetailsComponent_ng_template_15_div_0_Template, 2, 0, "div", 32);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.app);
} }
class InsuranceDetailsComponent {
    constructor(fb) {
        this.fb = fb;
        this.forApproval = false;
        this.insurance_details = this.fb.group({
            insurance_certificate_url: ['']
        });
    }
    // rows = [
    //   {
    //     'type':'General Liability',
    //     'amount':'',
    //     'expiry_date':''
    //   },
    //   {
    //     'type':'Automotive Liability',
    //     'amount':'',
    //     'expiry_date':''
    //   },
    //   {
    //     'type':'Total Amount of Insurance',
    //     'amount':'',
    //     'expiry_date':''
    //   }
    // ]
    ngOnChanges(changes) {
        var _a, _b;
        if ((_a = changes['insurance_certificate_url_img']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            (_b = this.form.get('insurance_certificate_url')) === null || _b === void 0 ? void 0 : _b.patchValue('');
            // const files = JSON.parse(changes['files_json'].currentValue);
            // Object.keys(files?.files).forEach((file: any) => {
            //   const value =
            //     environment.BE_BASE_URL + files?.files[file].split('./public')[1];
            //   if (this.fileUpload.get(file)) {
            //     this.fileUpload.get(file)?.patchValue(value);
            //   } else {
            //     const extraUpload = this.fb.group({
            //       name: [file],
            //       file: [value],
            //     });
            //     this.getExtraUpload.push(extraUpload);
            //   }
            // });
            // console.log(changes['file_data'].currentValue)
            // const value = environment.BE_BASE_URL + changes['file_data'].currentValue.split('./public')[1];
            // console.log(value)
            // this.insurance_details.get('insurance_certificate_url')?.patchValue(value)
            // // this.form.get('insurance_certificate_url')?.patchValue('')
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.form.controls['general_liability_amount'].valueChanges.subscribe((data) => {
            var _a;
            this.form.controls['total_insurance_amount'].patchValue((+data) + (+((_a = this.form.controls['automative_liability_amount']) === null || _a === void 0 ? void 0 : _a.value)));
        });
        this.form.controls['automative_liability_amount'].valueChanges.subscribe((data) => {
            var _a;
            this.form.controls['total_insurance_amount'].patchValue((+data) + (+((_a = this.form.controls['general_liability_amount']) === null || _a === void 0 ? void 0 : _a.value)));
        });
        this.form.controls['insurance_certificate_url'].valueChanges.subscribe((data) => {
            this.form.markAllAsTouched();
        });
        this.rows = [
            {
                type: 'General Liability',
                amount: (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.controls['general_liability_amount']) === null || _b === void 0 ? void 0 : _b.value,
                expiry_date: (_d = (_c = this.form) === null || _c === void 0 ? void 0 : _c.controls['general_liability_expire_date']) === null || _d === void 0 ? void 0 : _d.value,
                control1: 'general_liability_amount',
                control2: 'general_liability_expire_date',
                disabled: this.forApproval
            },
            {
                type: 'Automotive Liability',
                amount: (_f = (_e = this.form) === null || _e === void 0 ? void 0 : _e.controls['automative_liability_amount']) === null || _f === void 0 ? void 0 : _f.value,
                expiry_date: (_h = (_g = this.form) === null || _g === void 0 ? void 0 : _g.controls['automative_liability_expire_date']) === null || _h === void 0 ? void 0 : _h.value,
                control1: 'automative_liability_amount',
                control2: 'automative_liability_expire_date',
                disabled: this.forApproval
            },
            {
                type: 'Total Amount of Insurance',
                amount: (_k = (_j = this.form) === null || _j === void 0 ? void 0 : _j.controls['total_insurance_amount']) === null || _k === void 0 ? void 0 : _k.value,
                expiry_date: (_m = (_l = this.form) === null || _l === void 0 ? void 0 : _l.controls['total_insurance_date']) === null || _m === void 0 ? void 0 : _m.value,
                control1: 'total_insurance_amount',
                control2: 'total_insurance_date',
                disabled: this.forApproval
            },
        ];
    }
}
InsuranceDetailsComponent.ɵfac = function InsuranceDetailsComponent_Factory(t) { return new (t || InsuranceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
InsuranceDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InsuranceDetailsComponent, selectors: [["app-insurance-details"]], inputs: { form: "form", forApproval: "forApproval", file_data: "file_data", insurance_certificate_url_img: "insurance_certificate_url_img" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 7, consts: [[1, "p-10"], ["title", "Insurance Details", 1, "mb-8", 3, "divider"], [3, "formGroup"], [1, "card", 2, "border", "1px solid var(--neutral-500, #efeff1)"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "flex", "justify-start", "items-center", "mt-6"], [1, "text-[#5F6D7E]", "mr-4", "mb-2"], [1, "!w-1/3"], ["text", "Upload file here", 3, "control", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "mt-2"], ["target", "_blank", "class", "underline text-lg text-primary font-medium", 3, "href", 4, "ngIf"], ["elseBlock", ""], [1, "!bg-[#F5F8F9]", "w-1/3", 2, "border-right", "1px solid #efeff1"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [1, "!w-[20px]", "!h-[30px]", 3, "svgIcon"], [1, "!bg-[#F5F8F9]", "w-1/3"], [3, "ngSwitch"], [1, "text-sm", "text-primary-dark", "font-medium", 2, "font-family", "Inter"], ["pEditableColumn", "", "class", "!p-2", "colspan", "2", 3, "ngClass", 4, "ngSwitchCase"], ["pEditableColumn", "", "class", "!p-2", 3, "ngClass", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["pEditableColumn", "", "colspan", "2", 1, "!p-2", 3, "ngClass"], ["pTemplate", "input"], ["pTemplate", "output"], ["pInputText", "", "type", "number", 1, "h-8", "w-full", 3, "name", "formControl"], ["pEditableColumn", "", 1, "!p-2", 3, "ngClass"], ["pInputText", "", "type", "date", 1, "h-8", "w-full", 3, "name", "formControl"], ["text", "Upload file here", 3, "control"], ["target", "_blank", 1, "underline", "text-lg", "text-primary", "font-medium", 3, "href"], ["class", "text-sm text-gray-A3", 4, "ngIf"], [1, "text-sm", "text-gray-A3"]], template: function InsuranceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "qmt-page-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2)(3, "div", 3)(4, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InsuranceDetailsComponent_ng_template_5_Template, 13, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InsuranceDetailsComponent_ng_template_6_Template, 8, 5, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Insurance Certificate Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InsuranceDetailsComponent_qmt_file_upload_11_Template, 1, 1, "qmt-file-upload", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, InsuranceDetailsComponent_small_12_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, InsuranceDetailsComponent_a_14_Template, 2, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, InsuranceDetailsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.form.get("insurance_certificate_url")) == null ? null : tmp_4_0.value)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.insurance_certificate_url_img);
    } }, directives: [_shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, primeng_table__WEBPACK_IMPORTED_MODULE_4__.EditableColumn, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, primeng_table__WEBPACK_IMPORTED_MODULE_4__.CellEditor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4112:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/mitigation-plan/mitigation-plan.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MitigationPlanComponent": () => (/* binding */ MitigationPlanComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);







function MitigationPlanComponent_qmt_file_upload_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "qmt-file-upload", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx_r0.form.get("mitigation_plan_copy"));
} }
function MitigationPlanComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.form.value["mitigation_plan_copy"] == null ? null : ctx_r1.form.value["mitigation_plan_copy"][0] == null ? null : ctx_r1.form.value["mitigation_plan_copy"][0].name);
} }
function MitigationPlanComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", (tmp_0_0 = ctx_r2.fileUpload.get("mitigation_plan_copy")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function MitigationPlanComponent_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No file uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MitigationPlanComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MitigationPlanComponent_ng_template_9_div_0_Template, 2, 0, "div", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.app);
} }
class MitigationPlanComponent {
    constructor(fb) {
        this.fb = fb;
        this.forApproval = false;
        this.fileUpload = this.fb.group({
            mitigation_plan_copy: [''],
        });
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // console.log(this.fileUpload.get('mitigation_plan_copy')?.value)
        // if(this.form?.value?.['mitigation_plan_required'] && this.fileUpload.get('mitigation_plan_copy')?.value){
        //   this.fileUpload.get('mitigation_plan_copy')?.addValidators(Validators.required)
        //   this.fileUpload.get('mitigation_plan_copy')?.updateValueAndValidity()
        // }
        if (changes['files_json'].currentValue) {
            const files = JSON.parse(changes['files_json'].currentValue);
            Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                var _a;
                const value = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + (files === null || files === void 0 ? void 0 : files.files[file].split('./public')[1]);
                if (this.fileUpload.get(file)) {
                    (_a = this.fileUpload.get(file)) === null || _a === void 0 ? void 0 : _a.patchValue(value);
                }
            });
        }
    }
}
MitigationPlanComponent.ɵfac = function MitigationPlanComponent_Factory(t) { return new (t || MitigationPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
MitigationPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MitigationPlanComponent, selectors: [["app-mitigation-plan"]], inputs: { form: "form", files_json: "files_json", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 7, consts: [[1, "p-10"], [3, "formGroup"], [1, "!p-6", "!mb-8"], ["title", "Mitgation Plan", 1, "mb-8", 3, "divider"], ["text", "Upload file here", 3, "control", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["target", "_blank", "class", "underline text-lg text-primary font-medium", 3, "href", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["text", "Upload file here", 3, "control"], ["target", "_blank", 1, "underline", "text-lg", "text-primary", "font-medium", 3, "href"], ["class", "text-sm text-gray-A3", 4, "ngIf"], [1, "text-sm", "text-gray-A3"]], template: function MitigationPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "qmt-page-heading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MitigationPlanComponent_qmt_file_upload_5_Template, 1, 1, "qmt-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MitigationPlanComponent_small_6_Template, 2, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MitigationPlanComponent_a_8_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MitigationPlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        let tmp_3_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("mitigation_plan_copy")) == null ? null : tmp_3_0.value)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fileUpload == null ? null : (tmp_5_0 = ctx.fileUpload.get("mitigation_plan_copy")) == null ? null : tmp_5_0.value)("ngIfElse", _r3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_1__.PageHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXRpZ2F0aW9uLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4326:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/others/others.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OthersComponent": () => (/* binding */ OthersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 9975);





class OthersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OthersComponent.ɵfac = function OthersComponent_Factory(t) { return new (t || OthersComponent)(); };
OthersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OthersComponent, selectors: [["app-others"]], inputs: { form: "form", forApproval: "forApproval" }, decls: 46, vars: 17, consts: [[1, "p-10"], [1, "!p-6"], ["title", "Communication", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "font-medium", "text-gray-A3"], [3, "disabled", "control"], [1, "w-full", "!mt-5"], [1, "flex", "justify-between", "items-center", "!mt-6"], [1, "!mt-8", "!p-6"], ["title", "Investigation & analysis", 1, "mb-8", 3, "divider"], ["title", "Environmental Controls", 1, "mb-8", 3, "divider"]], template: function OthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "qmt-page-heading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Q. Do you hold regular safety meetings? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Q. Do you have a functioning Joint Health and Safety Committee? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Q. Do you hold pre-job (tailgate) safety meetings? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "qmt-page-heading", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3)(23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Q. Do you have an accident and incident reporting system in place? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7)(29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Q. Do you have a procedure in place to investigate and follow-up on accidents and incidents? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "qmt-page-heading", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 3)(36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Q. Do you have a waste management policy in place? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 7)(42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Q. Do you have a system in place to control hazardous materials that will be brought to, used on, and removed from the workplace? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("communication_q1_safety_meetings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("communication_q2_jh_sc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("communication_q3_pre_job"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("investigation_q1_accident_reporting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("investigation_q2_procedure"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("environmental_q1_waste_management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("environmental_q2_system_to_control"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.YesNoCheckboxComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8829:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/policies-procedures/policies-procedures.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliciesProceduresComponent": () => (/* binding */ PoliciesProceduresComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);














function PoliciesProceduresComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "qmt-new-input", 15)(3, "qmt-new-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "What\u2019s the frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "mat-radio-group", 18)(9, "mat-radio-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-radio-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", (tmp_0_0 = ctx_r0.form.get("policies_q5_inspections")) == null ? null : tmp_0_0.value)("control", ctx_r0.form.get("policies_name_conducts"))("disabled", ctx_r0.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", (tmp_3_0 = ctx_r0.form.get("policies_q5_inspections")) == null ? null : tmp_3_0.value)("control", ctx_r0.form.get("policies_position"))("disabled", ctx_r0.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.form.get("policies_frequency"))("disabled", ctx_r0.forApproval);
} }
function PoliciesProceduresComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Do you have specialized rules/practices in place for the following: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "more");
} }
function PoliciesProceduresComponent_ng_template_78_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PoliciesProceduresComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PoliciesProceduresComponent_ng_template_78_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-yes-no-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r3.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", row_r3.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.forApproval)("control", ctx_r2.form.get(row_r3.answer));
} }
class PoliciesProceduresComponent {
    constructor() {
        this.labelPosition = 'daily';
        this.rows = [
            {
                question: 'Compressed Gas Handling',
                answer: 'policies_compressed_gas_handling',
            },
            {
                question: 'Confined Space Entry',
                answer: 'policies_confined_space_entry',
            },
            {
                question: 'Lifting Device Program',
                answer: 'policies_lifting_device_program',
            },
            {
                question: 'Equipment Safety Devices',
                answer: 'policies_equipment_safety_devices',
            },
            {
                question: 'Flammable Materials',
                answer: 'policies_flammable_materials',
            },
            {
                question: 'Materials Handling',
                answer: 'policies_materials_handling',
            },
            {
                question: 'Hazardous Goods',
                answer: 'policies_hazardious_goods',
            },
            {
                question: 'Transferring Materials',
                answer: 'policies_transferring_materials',
            },
            {
                question: 'Stacking Materials',
                answer: 'policies_stacking_materials',
            },
            {
                question: 'Powered Mobile Equipment',
                answer: 'policies_powered_mobile_equipments',
            },
            {
                question: 'Power Line Clearances',
                answer: 'policies_power_line_clearances',
            },
            {
                question: 'Power Tools',
                answer: 'policies_power_tools',
            },
            {
                question: 'Personal Protective Equipment (Use and Maintenance)',
                answer: 'policies_personal_protective_equipment',
            },
            {
                question: 'Hot Work Permit and Procedure',
                answer: 'policies_hot_work_permit_procedure',
            },
            {
                question: 'Does your company have a formal Fit for Duty Drug and Alcohol Policy',
                answer: 'policies_drug_alcohol',
                required: true,
            },
            {
                question: 'Does your company have a formal Fit for Duty – Fatigue Management Policy',
                answer: 'policies_fatigue_management',
                required: true,
            },
            {
                question: 'Workplace Violence Policy',
                answer: 'policies_workplace_voilence_policy',
                required: true,
            },
            {
                question: 'Workplace Harassment & Discrimination Policy',
                answer: 'policies_workplace_harassment_policy',
                required: true,
            },
            {
                question: 'Working Alone or Isolation Program',
                answer: 'policies_working_alone',
            },
            {
                question: 'Written Lockout/ Tagout Procedures',
                answer: 'policies_written_lockout',
            },
            {
                question: 'Housekeeping Policy',
                answer: 'policies_housekeeping_policy',
            },
            {
                question: 'Musculoskeletal Disorders (MSD) and Ergonomics',
                answer: 'policies_msd',
            },
            {
                question: 'Fall Prevention and Rescue Procedures',
                answer: 'policies_rescue',
            },
            {
                question: 'Respiratory Equipment',
                answer: 'policies_respiratory_equipment',
            },
        ];
    }
    ngOnInit() {
        var _a;
        (_a = this.form.get('policies_q5_inspections')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (data === true) {
                (_a = this.form
                    .get('policies_name_conducts')) === null || _a === void 0 ? void 0 : _a.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_b = this.form.get('policies_name_conducts')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
                (_c = this.form.get('policies_position')) === null || _c === void 0 ? void 0 : _c.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_d = this.form.get('policies_position')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
                (_e = this.form.get('policies_frequency')) === null || _e === void 0 ? void 0 : _e.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_f = this.form.get('policies_frequency')) === null || _f === void 0 ? void 0 : _f.updateValueAndValidity();
            }
            if (data === false) {
                (_g = this.form
                    .get('policies_name_conducts')) === null || _g === void 0 ? void 0 : _g.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_h = this.form.get('policies_name_conducts')) === null || _h === void 0 ? void 0 : _h.updateValueAndValidity();
                (_j = this.form
                    .get('policies_position')) === null || _j === void 0 ? void 0 : _j.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_k = this.form.get('policies_position')) === null || _k === void 0 ? void 0 : _k.updateValueAndValidity();
                (_l = this.form
                    .get('policies_frequency')) === null || _l === void 0 ? void 0 : _l.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
                (_m = this.form.get('policies_frequency')) === null || _m === void 0 ? void 0 : _m.updateValueAndValidity();
                return;
            }
        });
    }
}
PoliciesProceduresComponent.ɵfac = function PoliciesProceduresComponent_Factory(t) { return new (t || PoliciesProceduresComponent)(); };
PoliciesProceduresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PoliciesProceduresComponent, selectors: [["app-policies-procedures"]], inputs: { form: "form", forApproval: "forApproval" }, decls: 94, vars: 33, consts: [[1, "p-10"], [1, "!p-6"], ["title", "Policies & Procedures", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "font-medium", "text-gray-A3"], [3, "disabled", "control"], [1, "w-full", "!mt-5"], [1, "flex", "justify-between", "items-center", "!mt-6"], [4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "mt-8", "form"], ["label", "List any other work procedures with specialized rules/practices in place:", 1, "address", 3, "control", "disabled"], [1, "flex", "justify-between", "items-center", "gap-11", "form", "mt-6"], ["label", "Name (Who conducts)", 1, "w-1/2", 3, "required", "control", "disabled"], ["label", "Position", 1, "w-1/2", 3, "required", "control", "disabled"], [1, "flex", "items-center", "!mt-6", "gap-10"], [1, "flex", "items-center", "justify-between", "gap-5", 3, "formControl", "disabled"], ["color", "primary", "value", "daily", 1, "example-margin"], ["color", "primary", "value", "weekly", 1, "example-margin"], ["color", "primary", "value", "monthly", 1, "example-margin"], ["color", "primary", "value", "yearly", 1, "example-margin"], [1, "!bg-[#F5F8F9]", "!text-[#5F6D7E]", "w-2/3", 2, "border-right", "1px solid #efeff1"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [1, "!w-[20px]", "!h-[30px]", 3, "svgIcon"], [1, "!bg-[#F5F8F9]", "w-1/3", 2, "border-right", "1px solid #efeff1"], [1, "text-gray-A3"], ["class", "text-red-500 ml-1", 4, "ngIf"], ["width", "max-width: 100px", 3, "disabled", "control"], [1, "text-red-500", "ml-1"]], template: function PoliciesProceduresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "qmt-page-heading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Q. Do you have a written Safety Policy Statement? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Q. Do you have clearly defined safety responsibilities for managers, supervisors and workers? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Q. Do you evaluate your safety program to ensure it is effective and that areas for improvement are identified? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Q. Does your company have an Early and Safe Return to Work Policy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7)(28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Q. Do you conduct on-site and equipment inspections? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PoliciesProceduresComponent_div_32_Template, 17, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7)(35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Q. Do you have a preventive maintenance program? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 7)(41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Q. Do you have hazard identification and monitoring procedures? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 7)(47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Q. Are your company\u2019s work sites and procedures periodically audited by an accredited safety auditor to measure the effectiveness of your safety program? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 7)(53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Q. Do you have a document stating General Safety Rules? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 7)(59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Q. Do you have a \u201Cright to refuse Unsafe Work\u201D policy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 7)(65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " Q. Do you have a disciplinary policy and procedure? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 7)(71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Q. Do you have an alcohol and substance abuse policy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, PoliciesProceduresComponent_ng_template_77_Template, 7, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, PoliciesProceduresComponent_ng_template_78_Template, 6, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "qmt-new-textarea", 13)(82, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 7)(84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Q. Do you have standard work procedures in place for key or potentially hazardous jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 7)(90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " Q. Do you have Emergency Response Plans in place for your worksites? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q1_written_sps"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q2_safety_resp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q3_evaluate_program"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q4_early"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q5_inspections"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.form.get("policies_q5_inspections")) == null ? null : tmp_11_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q6_maintenance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q7_hazard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q8_periodically_audited"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q9_doc_gsr"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q10_unsafe_work"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q11_disciplinary"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q12_alcohol_substance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.get("policies_list_other_procedure"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q13_hazard_jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("policies_q14_erp"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.YesNoCheckboxComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__.NewInputComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__.NewTextareaComponent], styles: ["[_nghost-%COMP%]     .form .field p {\n  font-size: 16px !important;\n  font-weight: 400;\n  color: #5F6D7E !important;\n  font-family: \"Open Sans\";\n}\n[_nghost-%COMP%]     .form .field input, [_nghost-%COMP%]     .form .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .form .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljaWVzLXByb2NlZHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQURaO0FBSVE7O0VBRUksZ0JBQUE7QUFGWjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUhaIiwiZmlsZSI6InBvbGljaWVzLXByb2NlZHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmZvcm0ge1xuICAgIC5maWVsZCB7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogIzVGNkQ3RSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 6636:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/safety-performance/safety-performance.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyPerformanceComponent": () => (/* binding */ SafetyPerformanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 5583);








function SafetyPerformanceComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Statistics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 9)(11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 9)(16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, ctx_r0.year, "yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 10, ctx_r0.year, "yyyy") - 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 13, ctx_r0.year, "yyyy") - 2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "more");
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", product_r2.get("col1"));
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.get("col1").value, " ");
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", product_r2.get("col2"));
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.get("col2").value, " ");
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", product_r2.get("col3"));
} }
function SafetyPerformanceComponent_ng_template_5_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.get("col3").value, " ");
} }
function SafetyPerformanceComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 11)(4, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SafetyPerformanceComponent_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SafetyPerformanceComponent_ng_template_5_ng_template_6_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 11)(8, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SafetyPerformanceComponent_ng_template_5_ng_template_9_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SafetyPerformanceComponent_ng_template_5_ng_template_10_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 11)(12, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SafetyPerformanceComponent_ng_template_5_ng_template_13_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SafetyPerformanceComponent_ng_template_5_ng_template_14_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.get("statistics").value);
} }
class SafetyPerformanceComponent {
    constructor(fb) {
        this.fb = fb;
        this.year = new Date();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.columns = [
            'Total Number of Employees',
            'Total Employee Hours Worked',
            'Number of Fatalities',
            'Total Recordable Incidents',
            'Lost Workday Cases',
            'Lost Workdays',
            // 'Total Recordable Incident Rate',
            // 'Lost Time Incident Rate',
            // 'Severity Rate',
            'Industry WCB Rate',
            'Employers WCB/WSIB Rate',
            // 'Discount Surcharge',
        ];
        this.rows = [
            {
                'statistics': "Total Number of Employees",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Total Employee Hours Worked",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Number of Fatalities",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Total Recordable Incidents",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Lost Workday Cases",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Lost Workdays",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Total Recordable Incident Rate",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Severity Rate",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Industry WCB Rate",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Employers WCB/WSIB Rate",
                'col1': '',
                'col2': '',
                'col3': '',
            },
            {
                'statistics': "Discount Surcharge",
                'col1': '',
                'col2': '',
                'col3': '',
            },
        ];
    }
    ngOnChanges(changes) {
        var _a, _b;
        const currentYear = this.year.getFullYear();
        if (changes['yearly_safety_performance'].currentValue) {
            let myArr = [];
            let myObj = {};
            // for (let index = 0; index < changes['yearly_safety_performance'].currentValue.length - 1; index+=3) {
            //   console.log(index,changes['yearly_safety_performance'].currentValue[index])
            //   myObj = {
            //     statistics: changes['yearly_safety_performance'].currentValue[index]['statistics'],
            //     col1: changes['yearly_safety_performance'].currentValue[index]['value'],
            //     col2: changes['yearly_safety_performance'].currentValue[index+1]['value'],
            //     col3: changes['yearly_safety_performance'].currentValue[index+2]['value'],
            //   }
            //   console.log(myObj)
            //   myArr.push(myObj)
            // }
            for (const iteratorObj of changes['yearly_safety_performance'].currentValue) {
                // if(['Total Recordable Incident Rate',
                //   'Lost Time Incident Rate',
                //   'Severity Rate',
                //   'Discount Surcharge'].includes(iteratorObj['statistics']) && !this.user){
                //   return
                // }
                const objToUpdate = myArr.find(obj => obj['statistics'] === iteratorObj['statistics']);
                // console.log(objToUpdate,iteratorObj['statistics'])
                if (objToUpdate) {
                    if (iteratorObj['year'] == currentYear) {
                        objToUpdate['col1'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                    if (iteratorObj['year'] == currentYear - 1) {
                        objToUpdate['col2'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                    if (iteratorObj['year'] == currentYear - 2) {
                        objToUpdate['col3'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                }
                else {
                    let obj = {
                        'statistics': iteratorObj['statistics'],
                        'col1': '',
                        'col2': '',
                        'col3': '',
                    };
                    if (iteratorObj['year'] == currentYear) {
                        obj['col1'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                    if (iteratorObj['year'] == currentYear - 1) {
                        obj['col2'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                    if (iteratorObj['year'] == currentYear - 2) {
                        obj['col3'] = iteratorObj === null || iteratorObj === void 0 ? void 0 : iteratorObj.value;
                    }
                    if (this.user ||
                        !['Total Recordable Incident Rate',
                            'Lost Time Incident Rate',
                            'Severity Rate',
                            'Discount Surcharge'].includes(iteratorObj['statistics'])) {
                        myArr.push(obj);
                    }
                }
            }
            (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('yearly_safety_performance')) === null || _b === void 0 ? void 0 : _b.patchValue(myArr);
        }
    }
    get getYearlySafetyPerformance() {
        return this.form.controls['yearly_safety_performance'];
    }
    ngOnInit() {
        if (this.user) {
            this.columns = [...this.columns, 'Total Recordable Incident Rate',
                'Lost Time Incident Rate',
                'Severity Rate',
                'Discount Surcharge'];
        }
        for (let col of this.columns) {
            const yearlyForm = this.fb.group({
                statistics: [col],
                col1: [""],
                col2: [""],
                col3: [""]
            });
            // if(col === 'Total Employee Hours Worked'){
            //   yearlyForm.get('col1').valueChanges.subscribe((data)=>{
            //     // console.log(data,"datad",this.getYearlySafetyPerformance.value)
            //     let newValue = data * 200000
            //     this.getYearlySafetyPerformance.value.forEach((val:any,index:number)=>{
            //       if(val['statistics'] === 'Total Recordable Incident Rate'){
            //       }
            //       // val
            //       if(val['statistics'] === 'Total Recordable Incident Rate'){
            //         this.getYearlySafetyPerformance.at(index).get('col1').patchValue(newValue)
            //       } 
            //     })
            //   })
            //   yearlyForm.get('col2').valueChanges.subscribe((data)=>{
            //     console.log(data,"datad2")
            //   })
            //   yearlyForm.get('col3').valueChanges.subscribe((data)=>{
            //     console.log(data,"datad3")
            //   })
            // }
            this.getYearlySafetyPerformance.push(yearlyForm);
        }
    }
}
SafetyPerformanceComponent.ɵfac = function SafetyPerformanceComponent_Factory(t) { return new (t || SafetyPerformanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
SafetyPerformanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SafetyPerformanceComponent, selectors: [["app-safety-performance"]], inputs: { form: "form", yearly_safety_performance: "yearly_safety_performance", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [[1, "p-10"], ["title", "Safety Performance", 1, "mb-10", 3, "divider"], [1, "card", 2, "border", "1px solid var(--neutral-500, #EFEFF1)"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value", "ngClass"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "!bg-[#F5F8F9]", "w-1/4", 2, "border-right", "1px solid #EFEFF1"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [1, "!w-[20px]", "!h-[30px]", 3, "svgIcon"], [1, "!bg-[#F5F8F9]", "w-1/4"], [1, "text-sm", "text-primary-dark", "font-medium", 2, "font-family", "Inter"], ["pEditableColumn", "", 1, "!p-2"], ["pTemplate", "input"], ["pTemplate", "output"], ["pInputText", "", "type", "number", 1, "h-8", "w-full", 3, "formControl"]], template: function SafetyPerformanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "qmt-page-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "p-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SafetyPerformanceComponent_ng_template_4_Template, 20, 16, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SafetyPerformanceComponent_ng_template_5_Template, 15, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.getYearlySafetyPerformance.controls)("ngClass", ctx.forApproval ? "userSelectDisable" : "");
    } }, directives: [_shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, primeng_table__WEBPACK_IMPORTED_MODULE_3__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_3__.CellEditor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktcGVyZm9ybWFuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2820:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/trainings/trainings.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsComponent": () => (/* binding */ TrainingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 1122);







function TrainingsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TrainingsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-yes-no-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r2.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("control", ctx_r1.form.get(row_r2.answer));
} }
class TrainingsComponent {
    constructor() {
        this.rows = [
            {
                question: 'Safety Policies, Responsibilities and Rules',
                answer: 'trainings_safety_policies',
            },
            {
                question: 'Safety Meetings',
                answer: 'trainings_safety_meetings',
            },
            {
                question: 'Injury and Incident Reporting',
                answer: 'trainings_injury_incident',
            },
            {
                question: 'First Aid & CPR Procedures',
                answer: 'trainings_first_aid',
            },
            {
                question: 'Housekeeping',
                answer: 'trainings_housekeeping',
            },
            {
                question: 'Fit for Duty - Drug and Alcohol Policy',
                answer: 'trainings_drug_alcohol',
            },
            {
                question: 'Fit for Duty – Fatigue Management Policy',
                answer: 'trainings_fatigue_management',
            },
            {
                question: 'Fire Protection',
                answer: 'trainings_fire_protection',
            },
            {
                question: 'Defensive and Off-road Driving Safety',
                answer: 'trainings_defensive',
            },
            {
                question: 'Toxic Substances',
                answer: 'trainings_toxic_substances',
            },
            {
                question: 'Lockout/Tagout',
                answer: 'trainings_lockout',
            },
            {
                question: 'Waste Minimization',
                answer: 'trainings_waste_minimization',
            },
            {
                question: 'Industrial Hygiene',
                answer: 'trainings_industrial_hygiene',
            },
            {
                question: 'Emergency Equipment',
                answer: 'trainings_emergency_equipment',
            },
        ];
    }
    ngOnInit() { }
}
TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) { return new (t || TrainingsComponent)(); };
TrainingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrainingsComponent, selectors: [["app-trainings"]], inputs: { form: "form", forApproval: "forApproval" }, decls: 36, vars: 12, consts: [[1, "p-10"], [1, "!p-6"], ["title", "Trainings", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "font-medium", "text-gray-A3"], [3, "disabled", "control"], [1, "w-full", "!mt-5"], [1, "flex", "justify-between", "items-center", "!mt-6"], [1, "w-full", "!mt-5", "!mb-6"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["colspan", "2", 1, "!bg-[#F5F8F9]", "!text-[#5F6D7E]", "w-2/3", 2, "border-right", "1px solid #efeff1"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [1, "text-gray-A3"], ["width", "max-width: 100px", 3, "disabled", "control"]], template: function TrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "qmt-page-heading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Q. Do you provide safety, technical and/or professional training to your company supervisors? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Q. Do you provide safety and/or technical training to your workers? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Q. Do you provide on-the-job training to all employees? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Q. Do you keep training records detailing participants, topics, dates, materials provided and follow-up programs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7)(28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Do you offer a \u201CNew Employee Orientation Program\u201D? If so, does it cover the following: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "app-yes-no-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TrainingsComponent_ng_template_34_Template, 3, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, TrainingsComponent_ng_template_35_Template, 5, 3, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("trainings_q1_supervisors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("trainings_q2_workers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("trainings_q3_all_emp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("trainings_q4_training_records"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("training_new_emp_ori_prog"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rows);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__.PageHeadingComponent, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.YesNoCheckboxComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4464:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/stepper-components/wcb-wsib/wcb-wsib.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WcbWsibComponent": () => (/* binding */ WcbWsibComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);

















function WcbWsibComponent_div_16_ng_template_3_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WcbWsibComponent_div_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 21)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Province ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 21)(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Account /Classification Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 24)(14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Clearance letter attached? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 25)(18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, WcbWsibComponent_div_16_ng_template_3_th_21_Template, 3, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.forApproval);
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-autocomplete", 35);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r9.allCountries)("control", product_r7 == null ? null : product_r7.get("country"))("disabled", ctx_r9.forApproval);
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r7 == null ? null : (tmp_0_0 = product_r7.get("country")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.country, " ");
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-autocomplete", 36);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", product_r7 == null ? null : product_r7.get("state"))("options", product_r7 == null ? null : (tmp_1_0 = product_r7.get("stateOptions")) == null ? null : tmp_1_0.value)("disabled", ctx_r11.forApproval);
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r7 == null ? null : (tmp_0_0 = product_r7.get("state")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.state, " ");
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 37);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", product_r7.get("account_unit"))("disabled", ctx_r13.forApproval);
} }
function WcbWsibComponent_div_16_ng_template_4_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r7.get("account_unit").value, " ");
} }
function WcbWsibComponent_div_16_ng_template_4_div_16_qmt_file_upload_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-file-upload", 41);
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", product_r7.get("file"));
} }
function WcbWsibComponent_div_16_ng_template_4_div_16_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", (tmp_0_0 = product_r7.get("display_file")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function WcbWsibComponent_div_16_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WcbWsibComponent_div_16_ng_template_4_div_16_qmt_file_upload_1_Template, 1, 1, "qmt-file-upload", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_16_ng_template_4_div_16_a_3_Template, 2, 1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r15.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = product_r7.get("display_file")) == null ? null : tmp_1_0.value);
} }
function WcbWsibComponent_div_16_ng_template_4_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WcbWsibComponent_div_16_ng_template_4_td_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowIndex; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.remove(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
function WcbWsibComponent_div_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 29)(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_16_ng_template_4_ng_template_3_Template, 1, 3, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WcbWsibComponent_div_16_ng_template_4_ng_template_4_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 29)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WcbWsibComponent_div_16_ng_template_4_ng_template_7_Template, 1, 3, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WcbWsibComponent_div_16_ng_template_4_ng_template_8_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 32)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, WcbWsibComponent_div_16_ng_template_4_ng_template_11_Template, 1, 2, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WcbWsibComponent_div_16_ng_template_4_ng_template_12_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "app-yes-no-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WcbWsibComponent_div_16_ng_template_4_div_16_Template, 4, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, WcbWsibComponent_div_16_ng_template_4_td_17_Template, 4, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r4.forApproval ? "userSelectDisable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r4.forApproval)("control", product_r7.get("is_clearence_sheet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = product_r7.get("is_clearence_sheet")) == null ? null : tmp_3_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.forApproval);
} }
function WcbWsibComponent_div_16_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WcbWsibComponent_div_16_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r31.addMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " + Add more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WcbWsibComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_16_ng_template_3_Template, 22, 6, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WcbWsibComponent_div_16_ng_template_4_Template, 18, 5, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WcbWsibComponent_div_16_div_5_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.getAccClearence.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.forApproval);
} }
function WcbWsibComponent_div_17_ng_template_3_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WcbWsibComponent_div_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 21)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Province ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 21)(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Account /Classification Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 24)(14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Rate sheet attached? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 25)(18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, WcbWsibComponent_div_17_ng_template_3_th_21_Template, 3, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r33.forApproval);
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-autocomplete", 35);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r39.allCountries)("control", product_r37 == null ? null : product_r37.get("country"))("disabled", ctx_r39.forApproval);
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r37 == null ? null : (tmp_0_0 = product_r37.get("country")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.country, " ");
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-autocomplete", 36);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", product_r37 == null ? null : product_r37.get("state"))("options", product_r37 == null ? null : (tmp_1_0 = product_r37.get("stateOptions")) == null ? null : tmp_1_0.value)("disabled", ctx_r41.forApproval);
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r37 == null ? null : (tmp_0_0 = product_r37.get("state")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.state, " ");
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 37);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", product_r37.get("account_unit"))("disabled", ctx_r43.forApproval);
} }
function WcbWsibComponent_div_17_ng_template_4_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r37.get("account_unit").value, " ");
} }
function WcbWsibComponent_div_17_ng_template_4_div_16_qmt_file_upload_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-file-upload", 41);
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", product_r37.get("file"));
} }
function WcbWsibComponent_div_17_ng_template_4_div_16_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "View File");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", (tmp_0_0 = product_r37.get("display_file")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function WcbWsibComponent_div_17_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WcbWsibComponent_div_17_ng_template_4_div_16_qmt_file_upload_1_Template, 1, 1, "qmt-file-upload", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_17_ng_template_4_div_16_a_3_Template, 2, 1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r45.forApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = product_r37.get("display_file")) == null ? null : tmp_1_0.value);
} }
function WcbWsibComponent_div_17_ng_template_4_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WcbWsibComponent_div_17_ng_template_4_td_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowIndex; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r58.removeRateSheet(i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
function WcbWsibComponent_div_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 29)(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_17_ng_template_4_ng_template_3_Template, 1, 3, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WcbWsibComponent_div_17_ng_template_4_ng_template_4_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 29)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WcbWsibComponent_div_17_ng_template_4_ng_template_7_Template, 1, 3, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WcbWsibComponent_div_17_ng_template_4_ng_template_8_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 32)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, WcbWsibComponent_div_17_ng_template_4_ng_template_11_Template, 1, 2, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WcbWsibComponent_div_17_ng_template_4_ng_template_12_Template, 1, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "app-yes-no-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WcbWsibComponent_div_17_ng_template_4_div_16_Template, 4, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, WcbWsibComponent_div_17_ng_template_4_td_17_Template, 4, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r37 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r34.forApproval ? "userSelectDisable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r34.forApproval)("control", product_r37.get("is_clearence_sheet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = product_r37.get("is_clearence_sheet")) == null ? null : tmp_3_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r34.forApproval);
} }
function WcbWsibComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WcbWsibComponent_div_17_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r61.addMoreRateCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " + Add more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WcbWsibComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WcbWsibComponent_div_17_ng_template_3_Template, 22, 6, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WcbWsibComponent_div_17_ng_template_4_Template, 18, 5, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WcbWsibComponent_div_17_div_5_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.getAccRateSheet.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.forApproval);
} }
function WcbWsibComponent_qmt_new_textarea_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "qmt-new-textarea", 47);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.forApproval)("required", (tmp_1_0 = ctx_r2.form.get("wcb_env_q2_judgements")) == null ? null : tmp_1_0.value)("control", ctx_r2.form.get("wcb_env_q2_details"));
} }
class WcbWsibComponent {
    constructor(utilsService, fb) {
        this.utilsService = utilsService;
        this.fb = fb;
        this.forApproval = false;
        this.allCountries = [];
    }
    ngOnChanges(changes) {
        var _a, _b, _c;
        if ((_a = changes['allCountriesInput']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.allCountries = this.allCountriesInput;
        }
        if ((_b = changes['account_clearence']) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.user = localStorage.getItem('user-data');
            changes['account_clearence'].currentValue.map((data) => {
                if ((data === null || data === void 0 ? void 0 : data.type) === 'clearence_letter' || (data === null || data === void 0 ? void 0 : data.type) !== 'rate_sheet') {
                    let file_url = '';
                    let display_file = '';
                    const country = this.allCountries.find((country) => country.id === data.country_id);
                    if (data === null || data === void 0 ? void 0 : data.file_url) {
                        file_url = data.file_url;
                        display_file =
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + data.file_url.split('./public')[1];
                    }
                    if (data === null || data === void 0 ? void 0 : data.country_id) {
                        this.utilsService.getState(data.country_id).subscribe((stateData) => {
                            var _a, _b, _c, _d;
                            const state = (_a = stateData === null || stateData === void 0 ? void 0 : stateData.data) === null || _a === void 0 ? void 0 : _a.rows.find((state) => state.id === data.state_id);
                            const accClearenceForm = this.fb.group({
                                country_id: [data.country_id],
                                country: [country],
                                state: [state],
                                state_id: [data.state_id],
                                stateOptions: [(_b = stateData === null || stateData === void 0 ? void 0 : stateData.data) === null || _b === void 0 ? void 0 : _b.rows],
                                account_unit: [data.account_unit],
                                is_clearence_sheet: [data.is_clearence_sheet],
                                created_by_email: (_c = JSON.parse(this.user)) === null || _c === void 0 ? void 0 : _c.email,
                                type: [data.type],
                                file: [''],
                                file_url,
                                display_file,
                            });
                            (_d = accClearenceForm.get('is_clearence_sheet')) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe((data) => {
                                console.log("first", data);
                                if (data === true) {
                                    accClearenceForm.get('file').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                                    accClearenceForm.get('file').updateValueAndValidity();
                                    console.log(accClearenceForm.get('file'));
                                }
                                if (data === false) {
                                    accClearenceForm.get('file').clearValidators();
                                    accClearenceForm.get('file').updateValueAndValidity();
                                    accClearenceForm.get('display_file').setValue(null);
                                    // console.log(accClearenceForm.get('file'))
                                }
                            });
                            this.getAccClearence.push(accClearenceForm);
                        });
                    }
                }
            });
        }
        if ((_c = changes['account_rate_sheet']) === null || _c === void 0 ? void 0 : _c.currentValue) {
            this.user = localStorage.getItem('user-data');
            changes['account_rate_sheet'].currentValue.map((data) => {
                if ((data === null || data === void 0 ? void 0 : data.type) === 'rate_sheet') {
                    let file_url = '';
                    let display_file = '';
                    const country = this.allCountries.find((country) => country.id === data.country_id);
                    if (data === null || data === void 0 ? void 0 : data.file_url) {
                        file_url = data.file_url;
                        display_file =
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + data.file_url.split('./public')[1];
                    }
                    if (data === null || data === void 0 ? void 0 : data.country_id) {
                        this.utilsService.getState(data.country_id).subscribe((stateData) => {
                            var _a, _b, _c, _d;
                            const state = (_a = stateData === null || stateData === void 0 ? void 0 : stateData.data) === null || _a === void 0 ? void 0 : _a.rows.find((state) => state.id === data.state_id);
                            const accRateSheetForm = this.fb.group({
                                country_id: [data.country_id],
                                country: [country],
                                state: [state],
                                state_id: [data.state_id],
                                stateOptions: [(_b = stateData === null || stateData === void 0 ? void 0 : stateData.data) === null || _b === void 0 ? void 0 : _b.rows],
                                account_unit: [data.account_unit],
                                is_clearence_sheet: [data.is_clearence_sheet],
                                created_by_email: (_c = JSON.parse(this.user)) === null || _c === void 0 ? void 0 : _c.email,
                                type: [data.type],
                                file: [''],
                                file_url,
                                display_file,
                            });
                            (_d = accRateSheetForm.get('is_clearence_sheet')) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe((data) => {
                                console.log("first", data);
                                if (data === true) {
                                    accRateSheetForm.get('file').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                                    accRateSheetForm.get('file').updateValueAndValidity();
                                }
                                if (data === false) {
                                    accRateSheetForm.get('file').clearValidators();
                                    accRateSheetForm.get('file').updateValueAndValidity();
                                    accRateSheetForm.get('display_file').setValue(null);
                                }
                            });
                            this.getAccRateSheet.push(accRateSheetForm);
                        });
                    }
                }
            });
        }
    }
    get getAccClearence() {
        return this.form.controls['account_clearence'];
    }
    get getAccRateSheet() {
        return this.form.controls['account_rate_sheet'];
    }
    ngOnInit() {
        var _a;
        // this.utilsService.getCountry('usca').subscribe((data: any) => {
        //   return this.allCountries = data.data.rows;
        // });
        (_a = this.form.get('wcb_env_q2_judgements')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a, _b, _c, _d;
            if (data === true) {
                (_a = this.form.get('wcb_env_q2_details')) === null || _a === void 0 ? void 0 : _a.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_b = this.form.get('wcb_env_q2_details')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            }
            if (data === false) {
                (_c = this.form
                    .get('wcb_env_q2_details')) === null || _c === void 0 ? void 0 : _c.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                (_d = this.form.get('wcb_env_q2_details')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
                return;
            }
        });
    }
    addMore() {
        var _a, _b, _c, _d;
        this.user = localStorage.getItem('user-data');
        const accClearenceForm = this.fb.group({
            country_id: [''],
            country: [''],
            state: [''],
            state_id: [''],
            stateOptions: [''],
            account_unit: [''],
            is_clearence_sheet: [''],
            created_by_email: (_a = JSON.parse(this.user)) === null || _a === void 0 ? void 0 : _a.email,
            type: ['clearence_letter'],
            file: [''],
            file_url: [''],
            display_file: [''],
        });
        (_b = accClearenceForm.get('country')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => {
            var _a;
            (_a = accClearenceForm.get('country_id')) === null || _a === void 0 ? void 0 : _a.setValue(data.id);
            this.utilsService.getState(data.id).subscribe((data) => {
                var _a, _b, _c;
                (_a = accClearenceForm.get('stateOptions')) === null || _a === void 0 ? void 0 : _a.reset();
                (_b = accClearenceForm.get('stateOptions')) === null || _b === void 0 ? void 0 : _b.setValue((_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.rows);
            });
        });
        (_c = accClearenceForm.get('state')) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe((data) => {
            var _a;
            (_a = accClearenceForm.get('state_id')) === null || _a === void 0 ? void 0 : _a.setValue(data.id);
        });
        (_d = accClearenceForm.get('is_clearence_sheet')) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe((data) => {
            console.log("first", data);
            if (data === true) {
                accClearenceForm.get('file').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                accClearenceForm.get('file').updateValueAndValidity();
                accClearenceForm.get('display_file').setValue(null);
                console.log(accClearenceForm.get('file'));
            }
            if (data === false) {
                accClearenceForm.get('file').clearValidators();
                accClearenceForm.get('file').updateValueAndValidity();
            }
        });
        this.getAccClearence.push(accClearenceForm);
    }
    addMoreRateCard() {
        var _a, _b, _c, _d;
        this.user = localStorage.getItem('user-data');
        const accRateSheetForm = this.fb.group({
            country_id: [''],
            country: [''],
            state: [''],
            state_id: [''],
            stateOptions: [''],
            account_unit: [''],
            is_clearence_sheet: [''],
            created_by_email: (_a = JSON.parse(this.user)) === null || _a === void 0 ? void 0 : _a.email,
            type: ['rate_sheet'],
            file: [''],
            file_url: [''],
            display_file: [''],
        });
        (_b = accRateSheetForm.get('country')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => {
            var _a;
            (_a = accRateSheetForm.get('country_id')) === null || _a === void 0 ? void 0 : _a.setValue(data.id);
            this.utilsService.getState(data.id).subscribe((data) => {
                var _a, _b, _c;
                (_a = accRateSheetForm.get('stateOptions')) === null || _a === void 0 ? void 0 : _a.reset();
                (_b = accRateSheetForm.get('stateOptions')) === null || _b === void 0 ? void 0 : _b.setValue((_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.rows);
            });
            // accRateSheetForm.get('c')
        });
        (_c = accRateSheetForm.get('state')) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe((data) => {
            var _a;
            (_a = accRateSheetForm.get('state_id')) === null || _a === void 0 ? void 0 : _a.setValue(data.id);
            // accRateSheetForm.get('c')
        });
        (_d = accRateSheetForm.get('is_clearence_sheet')) === null || _d === void 0 ? void 0 : _d.valueChanges.subscribe((data) => {
            console.log("first", data);
            if (data === true) {
                accRateSheetForm.get('file').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                accRateSheetForm.get('file').updateValueAndValidity();
            }
            if (data === false) {
                accRateSheetForm.get('file').clearValidators();
                accRateSheetForm.get('file').updateValueAndValidity();
                accRateSheetForm.get('display_file').setValue(null);
            }
        });
        this.getAccRateSheet.push(accRateSheetForm);
    }
    remove(id) {
        this.getAccClearence.removeAt(id);
    }
    removeRateSheet(id) {
        this.getAccRateSheet.removeAt(id);
    }
    displayForm() {
        console.log(this.form);
    }
}
WcbWsibComponent.ɵfac = function WcbWsibComponent_Factory(t) { return new (t || WcbWsibComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
WcbWsibComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: WcbWsibComponent, selectors: [["app-wcb-wsib"]], inputs: { form: "form", account_clearence: "account_clearence", account_rate_sheet: "account_rate_sheet", allCountriesInput: "allCountriesInput", forApproval: "forApproval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 33, vars: 14, consts: [[1, "p-10"], [3, "formGroup"], [1, "!p-6"], ["title", "Worker Compensation Board/Workplace Safety & Insurance Board", 1, "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "font-medium", "text-gray-A3"], [3, "control", "disabled"], [1, "w-full", "!mt-5"], [1, "flex", "justify-between", "items-center", "!mt-6"], [3, "disabled", "control"], [4, "ngIf"], [1, "!mt-8", "!p-6"], ["title", "WCB/WSIB/Environmental Citations", 1, "mt-10", "mb-8", 3, "divider"], [1, "flex", "justify-between", "items-center", "mt-6"], [1, "w-full", "!mt-5", "!mb-5"], ["label", "Please provide details", "class", "address", 3, "disabled", "required", "control", 4, "ngIf"], [1, "card", "mt-6", 2, "border", "1px solid var(--neutral-500, #efeff1)"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["class", "text-end mt-3", 4, "ngIf"], [1, "!bg-[#F5F8F9]", "w-1/5", 2, "border-right", "1px solid #efeff1"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [1, "!w-[20px]", "!h-[30px]", 3, "svgIcon"], [1, "!bg-[#F5F8F9]", "w-1/5"], [1, "!bg-[#F5F8F9]", "min-w-[215px]"], ["class", "!bg-[#F5F8F9]", 4, "ngIf"], [1, "!bg-[#F5F8F9]"], [1, "!flex", "!justify-center", "!items-center", "!h-full", "!w-full"], ["pEditableColumn", "", 1, "!p-2"], ["pTemplate", "input"], ["pTemplate", "output"], ["pEditableColumn", "", 1, "!p-2", 3, "ngClass"], ["width", "max-width: 175px ; min-width:150px", 3, "disabled", "control"], ["class", "flex flex-col items-start justify-center gap-2", 4, "ngIf"], ["field", "country", 1, "h-8", "w-full", 3, "options", "control", "disabled"], ["field", "state", 1, "h-8", "w-full", 3, "control", "options", "disabled"], ["pInputText", "", "type", "text", 1, "h-8", "w-full", 3, "formControl", "disabled"], [1, "flex", "flex-col", "items-start", "justify-center", "gap-2"], ["text", "Upload file here", 3, "control", 4, "ngIf"], ["target", "_blank", "class", "underline text-primary", 3, "href", 4, "ngIf"], ["text", "Upload file here", 3, "control"], ["target", "_blank", 1, "underline", "text-primary", 3, "href"], [1, "grid", "place-content-center"], [1, "text-base", "text-primary", "cursor-pointer", "underline", 3, "click"], [1, "text-end", "mt-3"], [1, "text-primary", "underline", 3, "click"], ["label", "Please provide details", 1, "address", 3, "disabled", "required", "control"]], template: function WcbWsibComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "qmt-page-heading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Q. Does your company have a WCB/WSIB account in good standing for all jurisdictions in which your company performs work? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-yes-no-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Q. Provide a current copy of your WCB/WSIB Injury Summary Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "app-yes-no-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WcbWsibComponent_div_16_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, WcbWsibComponent_div_17_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "qmt-page-heading", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13)(21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Q. Has your company received any health, safety or environmental related warnings or citations in the past three years? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "app-yes-no-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13)(27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Q. Are there any judgements, claims or suits pending or outstanding against your company? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "app-yes-no-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, WcbWsibComponent_qmt_new_textarea_32_Template, 1, 3, "qmt-new-textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_13_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.form.get("wcb_safety_q1_wcb_account"))("disabled", ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("wcb_safety_q2_copy_of_summary"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("wcb_safety_q2_copy_of_summary").value === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("wcb_safety_q2_copy_of_summary").value === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("wcb_env_q1_safety_citations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.form.get("wcb_env_q2_judgements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.form.get("wcb_env_q2_judgements")) == null ? null : tmp_13_0.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__.PageHeadingComponent, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.YesNoCheckboxComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, primeng_table__WEBPACK_IMPORTED_MODULE_12__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.CellEditor, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.NewAutocompleteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.FileUploadComponent, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__.NewTextareaComponent], styles: ["[_nghost-%COMP%]     .address .field p {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--g-2, #5F6D7E);\n}\n[_nghost-%COMP%]     .address .field input, [_nghost-%COMP%]     .address .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .address .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndjYi13c2liLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBRFo7QUFJUTs7RUFFSSxnQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSFoiLCJmaWxlIjoid2NiLXdzaWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmFkZHJlc3Mge1xuICAgIC5maWVsZCB7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1nLTIsICM1RjZEN0UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 7031:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/subcontractor-prequalification-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcontractorPrequalificationRoutingModule": () => (/* binding */ SubcontractorPrequalificationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/subcon-layout/subcon-layout.component */ 2046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_0__.SubconLayoutComponent
    },
    {
        path: ':id',
        component: _pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_0__.SubconLayoutComponent
    },
];
class SubcontractorPrequalificationRoutingModule {
}
SubcontractorPrequalificationRoutingModule.ɵfac = function SubcontractorPrequalificationRoutingModule_Factory(t) { return new (t || SubcontractorPrequalificationRoutingModule)(); };
SubcontractorPrequalificationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SubcontractorPrequalificationRoutingModule });
SubcontractorPrequalificationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubcontractorPrequalificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1758:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/subcontractor-prequalification/subcontractor-prequalification.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcontractorPrequalificationModule": () => (/* binding */ SubcontractorPrequalificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _subcontractor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcontractor-prequalification-routing.module */ 7031);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/subcon-layout/subcon-layout.component */ 2046);
/* harmony import */ var _stepper_components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepper-components/company-details/company-details.component */ 6581);
/* harmony import */ var _stepper_components_insurance_details_insurance_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper-components/insurance-details/insurance-details.component */ 2161);
/* harmony import */ var _stepper_components_wcb_wsib_wcb_wsib_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper-components/wcb-wsib/wcb-wsib.component */ 4464);
/* harmony import */ var _stepper_components_hsep_hsep_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper-components/hsep/hsep.component */ 3896);
/* harmony import */ var _stepper_components_safety_performance_safety_performance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper-components/safety-performance/safety-performance.component */ 6636);
/* harmony import */ var _stepper_components_policies_procedures_policies_procedures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepper-components/policies-procedures/policies-procedures.component */ 8829);
/* harmony import */ var _stepper_components_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stepper-components/trainings/trainings.component */ 2820);
/* harmony import */ var _stepper_components_others_others_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stepper-components/others/others.component */ 4326);
/* harmony import */ var _stepper_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stepper-components/file-upload/file-upload.component */ 2351);
/* harmony import */ var _stepper_components_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stepper-components/acknowledgement/acknowledgement.component */ 207);
/* harmony import */ var src_app_services_subcontractor_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/subcontractor-form.service */ 2904);
/* harmony import */ var _stepper_components_mitigation_plan_mitigation_plan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stepper-components/mitigation-plan/mitigation-plan.component */ 4112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);

















class SubcontractorPrequalificationModule {
}
SubcontractorPrequalificationModule.ɵfac = function SubcontractorPrequalificationModule_Factory(t) { return new (t || SubcontractorPrequalificationModule)(); };
SubcontractorPrequalificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: SubcontractorPrequalificationModule });
SubcontractorPrequalificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [src_app_services_subcontractor_form_service__WEBPACK_IMPORTED_MODULE_13__.SubcontractorFormService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _subcontractor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcontractorPrequalificationRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SubcontractorPrequalificationModule, { declarations: [_pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_2__.SubconLayoutComponent, _stepper_components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsComponent, _stepper_components_insurance_details_insurance_details_component__WEBPACK_IMPORTED_MODULE_4__.InsuranceDetailsComponent, _stepper_components_wcb_wsib_wcb_wsib_component__WEBPACK_IMPORTED_MODULE_5__.WcbWsibComponent, _stepper_components_hsep_hsep_component__WEBPACK_IMPORTED_MODULE_6__.HsepComponent, _stepper_components_safety_performance_safety_performance_component__WEBPACK_IMPORTED_MODULE_7__.SafetyPerformanceComponent, _stepper_components_policies_procedures_policies_procedures_component__WEBPACK_IMPORTED_MODULE_8__.PoliciesProceduresComponent, _stepper_components_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_9__.TrainingsComponent, _stepper_components_others_others_component__WEBPACK_IMPORTED_MODULE_10__.OthersComponent, _stepper_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__.FileUploadComponent, _stepper_components_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_12__.AcknowledgementComponent, _stepper_components_mitigation_plan_mitigation_plan_component__WEBPACK_IMPORTED_MODULE_14__.MitigationPlanComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _subcontractor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcontractorPrequalificationRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_stepper_components_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsComponent, _pages_subcon_layout_subcon_layout_component__WEBPACK_IMPORTED_MODULE_2__.SubconLayoutComponent] }); })();


/***/ }),

/***/ 601:
/*!***************************************************************************************!*\
  !*** ./src/app/features/user-auth/pages/forgot-password/forgot-password.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent),
/* harmony export */   "passwordValidator": () => (/* binding */ passwordValidator)
/* harmony export */ });
/* harmony import */ var _home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 2802);














const _c0 = function () {
  return ["/auth/login"];
};

function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}

const _c1 = function (a0) {
  return {
    "color": a0
  };
};

function ForgotPasswordComponent_div_9_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Time remaining: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r8.timeRemaining.minutes > 0 ? "green" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r8.timeRemaining.minutes, " minutes and ", ctx_r8.timeRemaining.seconds, " seconds");
  }
}

function ForgotPasswordComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "The One-Time Password (OTP) generated for your authentication will remain valid for a duration of 20 minutes. Please ensure that you complete the authentication process within this time frame.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordComponent_div_9_div_2_div_9_Template, 4, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.timeRemaining);
  }
}

function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "qmt-new-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_div_9_div_2_Template, 10, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", true)("control", ctx_r1.myForm.get("otp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isgetOTP && !ctx_r1.isVerified);
  }
}

function ForgotPasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r9.handleOTP();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " get OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function ForgotPasswordComponent_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " *Password should be at least 8 characters length with special character, upper case, lower case and number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function ForgotPasswordComponent_div_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " *Passwords do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function ForgotPasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_11_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.showPassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordComponent_div_11_div_9_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 33)(11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_11_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r15.showConfirmPassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ForgotPasswordComponent_div_11_div_18_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.myForm.value.showPassword ? "text" : "password")("minlength", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.myForm.value.showPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.myForm.get("password").hasError("passwordInvalid") && !ctx_r3.myForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.myForm.value.showConfirmPassword ? "text" : "password")("minlength", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.myForm.value.showConfirmPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.myForm.get("confirm_password").hasError("passwordNotMatch") && !ctx_r3.myForm.get("confirm_password").hasError("required"));
  }
}

function ForgotPasswordComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 14)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_12_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r16.back();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

function ForgotPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r18.handleChangePassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Update Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.myForm.invalid);
  }
}

function ForgotPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r20.handleVerifyOTP();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " verify OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

class ForgotPasswordComponent {
  constructor(formBuilder, messageService, httpClient, router, location, authService) {
    this.formBuilder = formBuilder;
    this.messageService = messageService;
    this.httpClient = httpClient;
    this.router = router;
    this.location = location;
    this.authService = authService;
    this.submitted = false;
    this.isVerified = false;
    this.isgetOTP = false;
    this.myOTP = '1234';
    this.otpToken = '';
    this.expirationTime = 1200; // 20 minutes in seconds
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, passwordValidator()]),
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, passwordValidator()]),
      otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', []),
      showPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
      showConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false)
    }, {
      validator: this.passwordMatchValidator
    });
    this.myForm.get('confirm_password').valueChanges.subscribe(value => {
      if (this.myForm.get('password').value !== value) {
        this.myForm.get('confirm_password').setErrors({
          passwordNotMatch: true
        });
      }
    });
  }

  startTimer() {
    const startTime = new Date().getTime();
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(0, 1000).subscribe(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const remainingSeconds = this.expirationTime - elapsedTime; // console.log(  (this.expirationTime - (currentTime -  startTime)/1000)/60)

      if (remainingSeconds >= 0) {
        this.timeRemaining = {
          minutes: Math.floor(remainingSeconds / 60),
          seconds: remainingSeconds % 60
        };
      } else {
        this.timerSubscription.unsubscribe(); // Handle OTP expiration, e.g., show a message or reset the form

        this.messageService.add({
          severity: 'error',
          summary: 'OTP expired'
        });
        this.router.navigate(['/auth/login']);
      }
    });
  }

  showPassword() {
    this.myForm.get('showPassword').patchValue(!this.myForm.value.showPassword);
  }

  showConfirmPassword() {
    this.myForm.get('showConfirmPassword').patchValue(!this.myForm.value.showConfirmPassword);
  }

  passwordMatchValidator(group) {
    var _a, _b;

    return ((_a = group.get('password')) === null || _a === void 0 ? void 0 : _a.value) === ((_b = group.get('confirm_password')) === null || _b === void 0 ? void 0 : _b.value) ? null : {
      mismatch: true
    };
  }

  handleOTP() {
    var _this = this;

    if (this.myForm.get("email").valid) {
      this.submitted = true;
      this.startTimer();
      this.authService.getForgetPasswordOTP({
        email: this.myForm.value.email
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Error',
          detail: err.error.msg
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err.error.msg);
      })).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res.data);

          if (res) {
            _this.isgetOTP = !_this.isgetOTP;
            _this.otpToken = res === null || res === void 0 ? void 0 : res.otp;
            _this.submitted = false;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }

  handleVerifyOTP() {
    var _this2 = this;

    if (this.myForm.get('otp').valid) {
      this.submitted = true;
      this.authService.verifyOTP({
        email: this.myForm.value.email,
        token: this.otpToken,
        otp: this.myForm.value.otp
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Forget Password Error',
          detail: err.error.msg
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err.error.msg);
      })).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            _this2.isVerified = res.valid;

            if (_this2.isVerified === false) {
              _this2.messageService.add({
                severity: 'error',
                summary: 'OTP Error'
              });
            }

            _this2.submitted = false;
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }

  handleChangePassword() {
    var _this3 = this;

    if (this.myForm.get("password").valid || this.myForm.get("email").valid) {
      this.submitted = true;
      this.authService.changePassword({
        email: this.myForm.value.email,
        password: this.myForm.value.password
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Password Change Error',
          detail: err.error.msg
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err.error.msg);
      })).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,_home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            _this3.submitted = false;

            _this3.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Password Changed Successfully'
            });

            _this3.router.navigate(['/auth/login']);
          }
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}

ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  decls: 16,
  vars: 10,
  consts: [[1, "flex", "justify-center", "items-center", "h-screen", "w-screen", "relative"], ["src", "../../../../../assets/login-bottom-left-design.png", "alt", "", 1, "absolute", "bottom-0", "left-0"], ["src", "../../../../../assets/login-top-right-design.png", "alt", "", 1, "absolute", "top-0", "right-0"], [1, "border", "border-gray-A2", "rounded-lg", "p-10", "border-solid", "!bg-white", "w-[700px]", "h-auto", "flex", "flex-col", "justify-center", "gap-9", 3, "formGroup"], [1, "text-primary-dark", "text-[52px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, "my-5"], ["label", "Email", "type", "email", 1, "mb-3", "w-full", 3, "required", "control"], ["class", "flex justify-end items-center mb-4", 4, "ngIf"], ["class", "my-5", 4, "ngIf"], ["class", "flex justify-end items-center mt-1", 4, "ngIf"], ["class", "mt-5 mb-2", 4, "ngIf"], ["class", "flex justify-end items-center mt-1 ", 4, "ngIf"], ["class", "mt-14", 4, "ngIf"], [1, "flex", "justify-end", "items-center", "mb-4"], [1, "text-black", "font-medium", "text-sm", "underline", "cursor-pointer"], [3, "routerLink"], ["label", "OTP", 1, "mb-3", "w-full", 3, "required", "control"], [4, "ngIf"], ["role", "alert", 1, "bg-teal-100", "border-t-4", "border-teal-500", "rounded-b", "text-teal-900", "px-4", "py-3", "shadow-md", "mt-2"], [1, "flex"], [1, "py-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-6", "w-6", "text-teal-500", "mr-4"], ["d", "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"], [1, "text-sm"], [3, "ngStyle"], [1, "flex", "justify-end", "items-center", "mt-1"], [1, "py-2", "px-3", "text-center", "rounded", "bg-primary-dark", "text-white", "font-semibold", "w-full", "text-lg", "hover:opacity-80", 3, "click"], [1, "mt-5", "mb-2"], [1, "text-[#1E1E1E]", "text-base", "mb-1"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "px-4", "py-[14px]", "border-solid", "border-[#5B5B5B]", "border", "rounded-lg", "w-full", "outline-primary-dark", "text-[#5B5B5B]", "text-sm", 3, "type", "minlength"], [1, "absolute", "top-1/2", "right-5", "-translate-y-1/2", "flex", "justify-center", "items-center", "cursor-pointer", 3, "click"], [1, "material-icons-outlined"], [1, "mt-6"], ["id", "password", "formControlName", "confirm_password", "placeholder", "Enter your password", 1, "px-4", "py-[14px]", "border-solid", "border-[#5B5B5B]", "border", "rounded-lg", "w-full", "outline-primary-dark", "text-[#5B5B5B]", "text-sm", 3, "type", "minlength"], [1, "text-red-500", "text-sm"], [3, "click"], [1, "mt-14"], [1, "py-4", "px-6", "text-center", "rounded", "bg-primary-dark", "text-white", "font-semibold", "w-full", "text-lg", "hover:opacity-80", 3, "disabled", "click"], [1, "py-4", "px-6", "text-center", "rounded", "bg-primary-dark", "text-white", "font-semibold", "w-full", "text-lg", "hover:opacity-80", 3, "click"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1)(2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Forgot Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "qmt-new-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ForgotPasswordComponent_div_8_Template, 4, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordComponent_div_9_Template, 3, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ForgotPasswordComponent_div_10_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ForgotPasswordComponent_div_11_Template, 19, 8, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForgotPasswordComponent_div_12_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ForgotPasswordComponent_div_13_Template, 3, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForgotPasswordComponent_div_14_Template, 3, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", true)("control", ctx.myForm.get("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isgetOTP && !ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isgetOTP && !ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isgetOTP && !ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isgetOTP && ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isgetOTP && !ctx.isVerified);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__.NewInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
});
function passwordValidator() {
  return control => {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLengthValid = value.length >= 8;

    if (!hasUpperCase || !hasLowerCase || !hasNumeric || !hasSpecialChar || !isLengthValid) {
      return {
        passwordInvalid: true
      };
    }

    return null;
  };
}

/***/ }),

/***/ 1480:
/*!***********************************************************************************!*\
  !*** ./src/app/features/user-auth/pages/inactive-user/inactive-user.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InactiveUserComponent": () => (/* binding */ InactiveUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);



class InactiveUserComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.getMe().subscribe((values) => {
            this.user = values.data;
            localStorage.setItem('user-data', JSON.stringify(values.data));
            if (this.user.status === 'Request Change') {
                this.router.navigate(['/auth/profile']);
            }
            else if (this.user.status === 'Approved') {
                this.router.navigate(['/vendor']);
            }
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
}
InactiveUserComponent.ɵfac = function InactiveUserComponent_Factory(t) { return new (t || InactiveUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
InactiveUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InactiveUserComponent, selectors: [["app-inactive-user"]], decls: 8, vars: 1, consts: [[1, "flex", "justify-center", "items-center", "h-screen", "w-screen", "relative"], ["src", "../../../../../assets/login-bottom-left-design.png", "alt", "", 1, "absolute", "bottom-0", "left-0"], ["src", "../../../../../assets/login-top-right-design.png", "alt", "", 1, "absolute", "top-0", "right-0"], [1, "border", "border-gray-A2", "rounded-lg", "p-10", "border-solid", "!bg-white", "w-[1000px]", "h-auto", "flex", "flex-col", "justify-center", "gap-9"], [1, "text-primary-dark", "text-[52px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, "text-center", "text-gray-500"]], template: function InactiveUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " QM Vendor Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.user == null ? null : ctx.user.status) === "Rejected" ? "Thank you for registering at the QM Vendor Portal. We regret to inform you that we are unable to move forward with your application at this time." : "Thank you for registering as a User at QM Vendor Portal. We are currently reviewing your profile and will notify you once verification as a User is complete.", " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYWN0aXZlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiaW5hY3RpdmUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8155:
/*!*******************************************************************!*\
  !*** ./src/app/features/user-auth/pages/login/login.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mfa-qr-code/mfa-qr-code.component */ 8946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 9531);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 2802);



















function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Choose Form Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_container_6_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return ["/auth/forgot-password"]; };
const _c1 = function () { return ["/auth/register"]; };
function LoginComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "qmt-new-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_ng_container_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.googleEmailFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "div", 18)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "If you are registered as a QM supplier and have verified your login credentials, please refrain from submitting a new vendor application when attempting to upload invoice.Should you encounter any difficulties logging into the Portal, kindly reach out to our Procurement team via email at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Procurement@QMenv.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " for assistance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "asl-google-signin-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_ng_container_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.OutlookLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Sign in with Microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 25)(21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 27)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "If you have previously logged in with Microsoft or Google credentials, please use those to log in. Do not create a new user profile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "qmt-new-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 30)(29, "div")(30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 33)(35, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function LoginComponent_ng_container_6_Template_input_blur_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.myForm.get("password").markAsTouched(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 35)(37, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_ng_container_6_Template_mat_icon_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.showPasswordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, LoginComponent_ng_container_6_div_39_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 37)(41, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Forgot Password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_ng_container_6_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 40)(46, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Create an account with email and password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx_r2.googleEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "microsoft-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx_r2.myForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("px-[0.857rem] py-[0.6rem] border rounded-lg w-full outline-primary text-[#5B5B5B] text-sm \n                  ", ctx_r2.myForm.get("password").touched && ctx_r2.myForm.get("password").invalid ? "border-red-500" : "border-[#dae0e6]", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r2.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.showPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.myForm.get("password").touched && !ctx_r2.myForm.get("password").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c1));
} }
function LoginComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 44)(2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Vendor Prequalification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Subcontractor Prequalification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoginComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "qmt-new-input", 48)(3, "qmt-new-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 50)(5, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_ng_container_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.qmUserLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx_r4.myForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx_r4.myForm.get("password"));
} }
class LoginComponent {
    constructor(formBuilder, messageService, router, authService, socialAuthService, utilsService, msalService, dialog) {
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.router = router;
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.utilsService = utilsService;
        this.msalService = msalService;
        this.dialog = dialog;
        this.submitted = false;
        this.requestPage = false;
        this.qmUser = false;
        this.extUserLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/External_User_Guide_New.pdf`;
        this.faqLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/FAQ.pdf`;
        this.TandCLink = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL}/pdf/QM_IT_Terms_and_Conditions.pdf`;
        this.googleEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
        this.showPassword = false;
    }
    googleEmailFunction() {
        if (this.googleEmail.value.length) {
            const user = {
                email: this.googleEmail.value,
                firstName: ' ',
                lastName: ' ',
            };
            localStorage.setItem('user-data', JSON.stringify(user));
            this.router.navigate(['/vendor']);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_1__.MfaQrCodeComponent, {
            width: '700px',
            minHeight: '400px',
            disableClose: true,
            data: {
                email: this.myForm.value.email,
                loginData: this.loginData
            },
        });
        dialogRef.afterClosed().subscribe((res) => {
            var _a, _b;
            // console.log(res)
            if (res === null || res === void 0 ? void 0 : res.verified) {
                console.log(this.loginData, "login");
                if (res === null || res === void 0 ? void 0 : res.qr_code_mode) {
                    this.authService.update({ id: (_b = (_a = this.loginData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id, qr_code_mode: true }).subscribe();
                }
                this.onLoginSuccess(this.loginData);
            }
        });
    }
    ngOnInit() {
        if (this.router.url == '/auth/request-type') {
            this.requestPage = true;
            this.qmUser = false;
        }
        if (this.router.url == '/auth/login/qm-user') {
            this.qmUser = true;
            this.requestPage = false;
        }
        if (this.router.url == '/auth/login/temp-uat-login') {
            this.qmUser = true;
            this.requestPage = false;
        }
        if (this.router.url == '/auth/login') {
            localStorage.clear();
        }
        this.socialAuthService.authState.subscribe((user) => {
            this.authService
                .login(Object.assign(Object.assign({}, user), { loginType: 'gmail-login' }))
                .subscribe((res) => {
                if (res.data) {
                    this.onLoginSuccess(res.data);
                    return;
                }
                return;
            });
            // this.authService
            //   .QmLogin({email:user?.email,password:"1234567890",idToken:user?.idToken})
            //   .subscribe((res: any) => {
            //     if (res.data) {
            //       localStorage.setItem('token', res.data.access_token);
            //       localStorage.setItem('user', JSON.stringify(res.data.userObj));
            //       this.router.navigate(['/']);
            //       return
            //     }else{
            //       localStorage.setItem('user-data', JSON.stringify(user));
            //       this.router.navigate(['/vendor']).then(() => {
            //         window.location.reload();
            //       });
            //       return
            //     }
            //   })
            // localStorage.setItem('user-data', JSON.stringify(user));
            // this.router.navigate(['/vendor']).then(() => {
            //   window.location.reload();
            // });
            return;
        });
        // this.socialAuthService.authState.subscribe((user) => {
        //   localStorage.setItem('user-data', JSON.stringify(user));
        //   this.utilsService.isApproved(user.email).subscribe((data: any) => {
        //     if (data?.data) {
        //       // window.location.href = `http://localhost:3000/sign-in?token=${user.idToken}`;
        //      this.utilsService
        //         .odooLogin({ jsonrpc: '2.0', params: { idToken: user?.idToken } })
        //         .subscribe((data: any) => {
        //           // console.log(data,"-----")
        //           if (data?.success) {
        //             // localStorage.setItem("userObj",JSON.stringify(data?.response[0]))
        //             window.location.href = `${environment.REACT_BASE_URL}/sign-in?token=${user.idToken}`;
        //           }
        //           else{
        //             this.router.navigate(['/vendor']).then(() => {
        //               window.location.reload();
        //             });
        //           }
        //         });
        //       return
        //     }
        //     else{
        //       this.router.navigate(['/vendor']).then(() => {
        //         window.location.reload();
        //       });
        //     }
        //   });
        // });
        this.myForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        });
    }
    showPasswordClick() {
        this.showPassword = !this.showPassword;
    }
    // qmUserLogin(email:string,password:string,idToken:string) {
    //     this.authService
    //       .QmLogin({email,password,idToken})
    //       .subscribe((res: any) => {
    //         if (res.data) {
    //           localStorage.setItem('token', res.data.access_token);
    //           localStorage.setItem('user', JSON.stringify(res.data.userObj));
    //           this.router.navigate(['/']);
    //           return
    //         }
    //       });
    // }
    qmUserLogin() {
        console.log(this.myForm.get('password').value, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.QM_USER_PASSWORD);
        const passCheck = this.router.url == '/auth/login/qm-user' ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.QM_USER_PASSWORD : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.TEMP_UATUSER_PASSWORD;
        if (this.myForm.get('password').value !== passCheck) {
            this.messageService.add({
                severity: 'error',
                summary: 'Credentials not correct',
                detail: 'Email or Password is does not match!',
            });
            return;
        }
        if (this.myForm.valid) {
            this.authService
                .QmLoginTemp(this.myForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Login Error',
                    detail: err.error.msg,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(err.msg);
            }))
                .subscribe((res) => {
                if (res.data) {
                    localStorage.setItem('token', res.data.access_token);
                    localStorage.setItem('user', JSON.stringify(res.data.userObj));
                    this.setLoginTime();
                    this.router.navigate(['/']);
                }
            });
        }
    }
    get registerFormControl() {
        return this.myForm.controls;
    }
    isError(field) {
        if (field) {
            return (this.registerFormControl[field] &&
                (this.registerFormControl[field].touched || this.submitted) &&
                this.registerFormControl[field].errors &&
                this.registerFormControl[field]['errors']['required']);
        }
        return false;
    }
    onSubmit() {
        // this.submitted = true;
        // this.httpClient
        //   .post(API_URL + '/user/auth/login-user', this.myForm.value)
        //   .pipe(
        //     catchError((err: any) => {
        //       this.messageService.add({
        //         severity: 'error',
        //         summary: 'Login Error',
        //         detail: err.error.message,
        //       });
        //       return throwError(err.error.message);
        //     })
        //   )
        //   .subscribe((res: any) => {
        //     if (res.data) {
        //       localStorage.setItem('token', res.data.token);
        //       localStorage.setItem('user', JSON.stringify(res.data.user));
        //       this.router.navigate(['/dashboard']);
        //       this.submitted = false;
        //     }
        //   });
    }
    isLoggedIn() {
        return this.msalService.instance.getActiveAccount() != null;
    }
    OutlookLogin() {
        this.msalService
            .loginPopup({ scopes: ['User.Read'] })
            .subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.authService
                .login(Object.assign(Object.assign({}, response.account), { firstName: ((_c = (_b = (_a = response.account) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) || null, lastName: ((_f = (_e = (_d = response.account) === null || _d === void 0 ? void 0 : _d.name) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1]) || null, email: (_h = (_g = response.account) === null || _g === void 0 ? void 0 : _g.username) === null || _h === void 0 ? void 0 : _h.toLowerCase(), idToken: response.accessToken, loginType: 'outlook-login' }))
                .subscribe((res) => {
                if (res.data) {
                    if (res.data.qmUser) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user', JSON.stringify(Object.assign(Object.assign({}, res.data.user), { idToken: response.accessToken })));
                        this.setLoginTime();
                        this.router.navigate(['/']);
                    }
                    else {
                        this.onLoginSuccess(res.data);
                    }
                    return;
                }
                return;
            });
            // this.msalService.instance.setActiveAccount (response.account)
            // this.qmUserLogin(response.account?.username,"1234567890",response.accessToken)
            //   this.authService
            //     .QmLogin({
            //       email: response.account?.username?.toLowerCase(),
            //       password: '1234567890',
            //       idToken: response.accessToken,
            //     })
            //     .subscribe((res: any) => {
            //       if (res.data) {
            //         localStorage.setItem('token', res.data.access_token);
            //         localStorage.setItem(
            //           'user',
            //           JSON.stringify({
            //             ...res.data.userObj,
            //             idToken: response.accessToken,
            //           })
            //         );
            //         this.router.navigate(['/']);
            //         return;
            //       } else {
            //         localStorage.setItem(
            //           'user-data',
            //           JSON.stringify({
            //             email: response.account?.username?.toLowerCase(),
            //             ...response.account,
            //             idToken: response.accessToken,
            //           })
            //         );
            //         this.router.navigate(['/vendor']).then(() => {
            //           // window.location.reload()
            //         });
            //       }
            //       return;
            //     });
        });
    }
    login() {
        this.myForm.markAllAsTouched();
        if (this.myForm.valid) {
            this.authService
                .login(Object.assign(Object.assign({}, this.myForm.getRawValue()), { loginType: 'email-password' }))
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
                if (err.error.msg === 'Please try with different login method!') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Login Error',
                        detail: "You chose Google/ Microsoft sign-in option while creating your account. Please chose the same option.",
                    });
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)("Please try with other login method!");
                }
                this.messageService.add({
                    severity: 'error',
                    summary: 'Incorrect Credentials',
                    detail: "Please Check your email and password!",
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(err.error.msg);
            }))
                .subscribe((res) => {
                if (res.data) {
                    this.loginData = res.data;
                    this.openDialog();
                    return;
                }
                return;
            });
        }
    }
    setLoginTime() {
        const now = new Date();
        localStorage.setItem('loginTime', now.getTime().toString());
    }
    onLoginSuccess(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user-data', JSON.stringify(Object.assign({}, data.user)));
        this.setLoginTime();
        this.router.navigate(['/vendor']).then(() => {
            window.location.reload();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["qmt-login"]], decls: 28, vars: 9, consts: [[1, "flex", "justify-center", "items-center", "min-h-screen", "relative", 3, "formGroup"], ["src", "../../../../../assets/login-bottom-left-design.png", "alt", "", 1, "absolute", "bottom-0", "left-0"], ["src", "../../../../../assets/login-top-right-design.png", "alt", "", 1, "absolute", "top-0", "right-0"], [1, "border", "border-gray-A2", "rounded-lg", "p-10", "border-solid", "!bg-white", "h-auto", "flex", "flex-col", "justify-center", "gap-6"], ["class", "text-primary-dark text-[52px] font-semibold text-center border-b border-solid border-gray-A1 pb-3", 4, "ngIf"], ["class", "text-primary-dark text-[32px] font-semibold text-center mb-7 border-b border-solid border-gray-A1 pb-3", 4, "ngIf"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "flex", "justify-start", "!items-center", "gap-4", "text-black"], [1, "flex", "flex-col", "text-md", "gap-2", "text-blue-800"], ["target", "_blank", 1, "hover:underline", 3, "href"], [2, "font-size", "inherit"], [1, "text-primary-dark", "text-[52px]", "font-semibold", "text-center", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, "text-primary-dark", "text-[32px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, "flex", "gap-3", "items-center", 2, "display", "none"], ["label", "Google Email", "type", "email", 1, "mb-3", "w-2/3", 3, "required", "control"], ["mat-flat-button", "", "color", "primary", 1, "w-1/3", "text-center", "!justify-center", "!flex", "!items-center", "h-9", 3, "click"], [1, "m-auto"], [1, "w-[550px]", "mb-0", "border-2", "p-2", "text-blue-800", "rounded-md", "text-base"], ["href", "mailto:Procurement@QMenv.com", 1, "underline", "text-blue-600", "cursor-pointer", "font-medium"], [1, "px-5"], ["type", "standard", "shape", "rectangular", "size", "medium", "width", "400", "text", "Sign In With Google"], [1, "!w-[402px]", "mx-auto", "px-1", "py-1", "mt-2", "rounded-[4px]", "flex", "justify-between", "microsoft-login", "text-[#000]", "hover:bg-blue-50", 2, "border", "1px solid #dadce0", "font-family", "'Roboto', sans-serif", "letter-spacing", "0.25px", 3, "click"], [1, "!w-[14px]", "ml-2", 3, "svgIcon"], [1, "text-[13.5px]", "font-[400]", "!normal-case"], [1, "h-[1px]", "border-b", "border-gray-A1", "my-10", "relative"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "bg-white", "px-2", "text-sm", "text-gray-400"], [1, "w-[550px]", "border-2", "p-2", "text-blue-800", "rounded-md", "text-base", "mb-5"], [1, "flex", "flex-col", "gap-1"], ["label", "Email", "type", "email", 1, "mb-3", "w-full", 3, "required", "control"], [1, "grid"], [1, "text-[#525252]", "text-base"], [1, "text-red-500"], [1, "relative"], ["id", "password", "formControlName", "password", 3, "type", "blur"], [1, "absolute", "top-1/2", "right-5", "-translate-y-1/2", "flex", "justify-center", "items-center", "cursor-pointer"], [1, "material-icons-outlined", 3, "click"], [1, "text-black", "text-end", "font-medium", "text-sm", "underline", "cursor-pointer", "mb-3"], [3, "routerLink"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "text-center", "!justify-center", "!flex", "!items-center", "h-9", 3, "click"], [1, "flex", "justify-end", "items-center"], [1, "text-gray-400"], [1, "font-semibold", "text-gray-500", "underline", "cursor-pointer", 3, "routerLink"], [1, "text-red-500", "text-sm"], [1, "flex", "flex-col", "justify-center", "items-center", "gap-5"], ["mat-button", "", "routerLink", "/vendor-prequalification", 1, "!rounded", "!py-3", "!grid", "!place-content-center", "!w-full", "!text-lg", "!font-semibold", "!text-[#757575]", "!text-center", 2, "border", "0.853px solid var(--primary-700, #0d3875)"], ["mat-button", "", "routerLink", "/subcontrator-prequalification", 1, "!rounded", "!py-3", "!grid", "!place-content-center", "!w-full", "!text-lg", "!font-semibold", "!text-[#757575]", "!text-center", 2, "border", "0.853px solid var(--primary-700, #0d3875)"], [3, "formGroup"], ["label", "Email", "type", "email", 1, "w-[380px]", "mb-3", 3, "required", "control"], ["label", "Password", "type", "password", 1, "w-[380px]", 3, "required", "control"], [1, "pb-5", "pt-6", "w-[380px]"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "text-center", "!justify-center", "!flex", "!items-center", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoginComponent_ng_container_6_Template, 50, 15, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoginComponent_ng_container_7_Template, 8, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LoginComponent_ng_container_8_Template, 7, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div")(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "External User Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Frequently Asked Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div")(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "QM Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.requestPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requestPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.requestPage && !ctx.qmUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requestPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.qmUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.extUserLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.faqLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.TandCLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__.NewInputComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.GoogleSigninButtonDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.Toast], styles: [".microsoft-login[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  border-color: #d2e3fc !important;\n  outline: none;\n  text-transform: lowercase;\n}\n\n[_nghost-%COMP%]  asl-google-signin-button {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  padding: 0 !important;\n  font-size: 13px !important;\n  font-family: \"Inter\", sans-serif;\n}\n\n[_nghost-%COMP%]  asl-google-signin-button .nsm7Bb-HzV7m-LgbsSe-BPrWId {\n  font-size: 13px !important;\n  font-family: \"Inter\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKOztBQU9JO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBSlI7O0FBTVE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0FBSloiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWljcm9zb2Z0LWxvZ2luOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDJlM2ZjICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5cblxuOmhvc3Q6Om5nLWRlZXAge1xuICBcblxuICAgIGFzbC1nb29nbGUtc2lnbmluLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBcbiAgICAgICAgJiAubnNtN0JiLUh6VjdtLUxnYnNTZS1CUHJXSWR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG59Il19 */"] });


/***/ }),

/***/ 8946:
/*!*******************************************************************************!*\
  !*** ./src/app/features/user-auth/pages/mfa-qr-code/mfa-qr-code.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MfaQrCodeComponent": () => (/* binding */ MfaQrCodeComponent)
/* harmony export */ });
/* harmony import */ var _home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ 7572);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-otp-input */ 641);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);













const _c0 = ["qrCodeImg"];

function MfaQrCodeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfaQrCodeComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r3.changeMode("qr_code");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfaQrCodeComponent_div_4_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r5.changeMode("email");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function MfaQrCodeComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Step 1. Open Authenticator App in your device.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Step 2. Scan the below QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Step 3. Enter the 6 digit number from the App.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.qr_code_img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function MfaQrCodeComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Step 1. Open Authenticator App in your device.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Step 2. Click QM Vendor Onboarding App.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Step 3. Enter the 6 digit number from the App.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

const _c1 = function () {
  return {
    length: 6
  };
};

function MfaQrCodeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MfaQrCodeComponent_div_5_div_1_Template, 9, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MfaQrCodeComponent_div_5_div_2_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ng-otp-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13)(5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfaQrCodeComponent_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.verify();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formCtrl", ctx_r1.tokenControl)("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
  }
}

const _c2 = function (a0) {
  return {
    "color": a0
  };
};

function MfaQrCodeComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Time remaining: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c2, ctx_r10.timeRemaining.minutes > 0 ? "green" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r10.timeRemaining.minutes, " minutes and ", ctx_r10.timeRemaining.seconds, " seconds");
  }
}

function MfaQrCodeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " An OTP has been sent to your registered email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18)(4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div")(9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "The One-Time Password (OTP) generated for your authentication will remain valid for a duration of 20 minutes. Please ensure that you complete the authentication process within this time frame.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MfaQrCodeComponent_div_6_div_11_Template, 4, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ng-otp-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfaQrCodeComponent_div_6_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.verifyEmailOTP();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.timeRemaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formCtrl", ctx_r2.tokenControl)("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
  }
}

class MfaQrCodeComponent {
  constructor(authService, dialogRef, data, messageService, router) {
    this.authService = authService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.messageService = messageService;
    this.router = router;
    this.otpToken = '';
    this.expirationTime = 1200; // 20 minutes in seconds

    this.mfaMode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
    this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.showQR = true;
  }

  ngOnInit() {
    var _a, _b, _c;

    this.authService.getMFAUrl({
      email: (_a = this.data) === null || _a === void 0 ? void 0 : _a.email
    }).subscribe(res => {
      this.drawQr(res === null || res === void 0 ? void 0 : res.url);
    }); // console.log(this.data.loginData)

    this.showQR = ((_c = (_b = this.data.loginData) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.qr_code_mode) ? false : true;
  }

  changeMode(val) {
    var _a;

    this.mfaMode.setValue(val);

    if (val == 'email') {
      this.startTimer();
      this.authService.getForgetPasswordOTP({
        email: (_a = this.data) === null || _a === void 0 ? void 0 : _a.email,
        loginAuth: true
      }).subscribe(res => {
        if (res) {
          this.otpToken = res === null || res === void 0 ? void 0 : res.otp;
        }
      });
    }
  }

  drawQr(url) {
    qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(url, (err, data_url) => {
      this.qr_code_img = data_url;
    });
  }

  verify() {
    var _a;

    if (this.tokenControl.valid) {
      this.authService.verifyQR({
        email: (_a = this.data) === null || _a === void 0 ? void 0 : _a.email,
        token: this.tokenControl.value
      }).subscribe(res => {
        if (res.verified === false) {
          this.messageService.add({
            severity: 'error',
            summary: 'Credentials not correct' // detail: '!',

          });
          return;
        } else {
          this.dialogRef.close({
            verified: true,
            qr_code_mode: true
          });
        }
      });
    }
  }

  verifyEmailOTP() {
    var _this = this;

    if (this.tokenControl.valid) {
      console.log(this.otpToken);
      this.authService.verifyOTP({
        email: this.data.email,
        token: this.otpToken,
        otp: this.tokenControl.value
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'OTP Login Error',
          detail: err.error.msg
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.msg);
      })).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_apsis_pc_5_Dev_subcontructor_vendor_onboarding_FE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            if (res.valid === false) {
              _this.messageService.add({
                severity: 'error',
                summary: 'OTP Error'
              });
            } else {
              _this.dialogRef.close({
                verified: true,
                email_mode: true
              });
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }

  startTimer() {
    const startTime = new Date().getTime();
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(0, 1000).subscribe(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const remainingSeconds = this.expirationTime - elapsedTime; // console.log(  (this.expirationTime - (currentTime -  startTime)/1000)/60)

      if (remainingSeconds >= 0) {
        this.timeRemaining = {
          minutes: Math.floor(remainingSeconds / 60),
          seconds: remainingSeconds % 60
        };
      } else {
        this.timerSubscription.unsubscribe(); // Handle OTP expiration, e.g., show a message or reset the form

        this.messageService.add({
          severity: 'error',
          summary: 'OTP expired'
        });
        this.router.navigate(['/auth/login']);
      }
    });
  }

}

MfaQrCodeComponent.ɵfac = function MfaQrCodeComponent_Factory(t) {
  return new (t || MfaQrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

MfaQrCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MfaQrCodeComponent,
  selectors: [["app-mfa-qr-code"]],
  viewQuery: function MfaQrCodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.qrCodeImg = _t.first);
    }
  },
  decls: 7,
  vars: 4,
  consts: [[1, "flex", "justify-center", "items-center", "relative"], [1, "rounded-lg", "p-5", "!bg-white", "w-[500px]", "h-auto", "flex", "flex-col", "justify-center", "gap-6"], [1, "text-primary-dark", "text-[32px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], ["class", "flex justify-between items-center", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-between", "items-center"], [1, "flex", "flex-col", "justify-center", "p-5", "border", "border-solid", "border-gray-200", "rounded-sm", "cursor-pointer", 3, "click"], [1, "text-xl", "text-primary"], ["src", "../../../../../assets/qr_code.svg", "alt", "", 1, "w-20"], [1, "text-xl", "text-primary", "text-center"], ["src", "../../../../../assets/email.svg", "alt", "", 1, "w-20"], ["class", " my-5", 4, "ngIf"], [2, "display", "flex", "justify-content", "center", 3, "formCtrl", "config"], [1, "bg-white", "flex", "w-full", "justify-center", "px-9", "!h-[72px]", "py-4", "mt-5", "gap-3", "button-wrapper"], ["mat-button", "", 1, "!rounded-md", "!bg-[#49A942]", "!text-sm", "!text-white", "!font-semibold", "!flex", "!justify-center", "!items-center", "!w-28", 2, "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04) !important", 3, "click"], [1, "grid", "place-items-center", "my-5"], ["alt", "", 3, "src"], [1, "my-5"], ["role", "alert", 1, "bg-teal-100", "border-t-4", "border-teal-500", "rounded-b", "text-teal-900", "px-4", "py-3", "shadow-md", "mt-2"], [1, "flex"], [1, "py-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-6", "w-6", "text-teal-500", "mr-4"], ["d", "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"], [1, "text-sm"], [2, "display", "flex", "justify-content", "center", "margin-top", "20px", 3, "formCtrl", "config"], [3, "ngStyle"]],
  template: function MfaQrCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MfaQrCodeComponent_div_4_Template, 10, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MfaQrCodeComponent_div_5_Template, 8, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MfaQrCodeComponent_div_6_Template, 16, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.mfaMode.value == "qr_code" ? "QR Code" : ctx.mfaMode.value == "email" ? "Email" : "Choose Authentication Mode", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.mfaMode.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mfaMode.value === "qr_code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mfaMode.value === "email");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_12__.NgOtpInputComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle],
  styles: ["[_nghost-%COMP%]     .mat-dialog-container {\n  height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1mYS1xci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6Im1mYS1xci1jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDcwdmg7XG59Il19 */"]
});

/***/ }),

/***/ 7652:
/*!***********************************************************************!*\
  !*** ./src/app/features/user-auth/pages/profile/profile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 2802);












class ProfileComponent {
    constructor(formBuilder, authService, router, messageService, utilsService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.utilsService = utilsService;
        this.userData = JSON.parse(localStorage.getItem('user-data'));
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {
        var _a;
        this.formGroup = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            contact_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            login_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('email-password', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            // qm_first_name: new FormControl('', [Validators.required]),
            // qm_last_name: new FormControl('', [Validators.required]),
            // qm_email: new FormControl('', [Validators.required]),
            // qm_phone: new FormControl(''),
            // qm_note: new FormControl(''),
        });
        this.utilsService.getCountry().subscribe((data) => {
            return (this.allCountries = data.data.rows);
        });
        (_a = this.formGroup.get('country')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            if (data === null || data === void 0 ? void 0 : data.id) {
                this.utilsService.getState(data === null || data === void 0 ? void 0 : data.id).subscribe((data) => {
                    var _a;
                    this.allStates = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
                });
            }
        });
        this.authService.getMe().subscribe((values) => {
            this.userData = values.data;
            localStorage.setItem('user-data', JSON.stringify(values.data));
            this.formGroup.patchValue(Object.assign({}, this.userData));
        });
    }
    update() {
        this.formGroup.markAllAsTouched();
        // console.log(this.formGroup)
        // console.log(this.formGroup.valid)
        if (this.formGroup.valid) {
            const user = JSON.parse(localStorage.getItem('user-data'));
            if (this.userData.status === "Request Change") {
                this.authService
                    .update(Object.assign(Object.assign({}, this.formGroup.getRawValue()), { status: 'Approval Pending', country_id: this.formGroup.getRawValue().country.id, state_id: this.formGroup.getRawValue().state.id, id: user.id }))
                    .subscribe((res) => {
                    this.messageService.add({
                        severity: 'success',
                        detail: 'User Profile updated successfully',
                    });
                    localStorage.setItem('user-data', JSON.stringify(Object.assign(Object.assign({}, this.userData), this.formGroup.getRawValue())));
                    this.router.navigate(['/auth/inactive-user']);
                    return;
                });
            }
            else {
                this.authService
                    .update(Object.assign(Object.assign({}, this.formGroup.getRawValue()), { country_id: this.formGroup.getRawValue().country.id, state_id: this.formGroup.getRawValue().state.id, id: user.id }))
                    .subscribe((res) => {
                    this.messageService.add({
                        severity: 'success',
                        detail: 'User Profile updated successfully',
                    });
                    localStorage.setItem('user-data', JSON.stringify(Object.assign(Object.assign({}, this.userData), this.formGroup.getRawValue())));
                    this.router.navigate(['/vendor']);
                    return;
                });
            }
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 28, vars: 24, consts: [[1, "flex", "justify-center", "items-center", "relative"], ["src", "../../../../../assets/login-bottom-left-design.png", "alt", "", 1, "absolute", "bottom-0", "left-0"], ["src", "../../../../../assets/login-top-right-design.png", "alt", "", 1, "absolute", "top-0", "right-0"], [1, "border", "border-gray-A2", "rounded-lg", "p-10", "border-solid", "!bg-white", "w-[1000px]", "h-auto", "flex", "flex-col", "justify-center", "gap-9"], [1, "text-primary-dark", "text-[52px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, "px-5", "grid", "grid-cols-2", "gap-5"], ["label", "First Name", 3, "required", "control"], ["label", "Last Name", 3, "required", "control"], ["label", "Email", "type", "email", 3, "required", "control"], ["label", "Contact No", 3, "required", "control"], ["label", "Company Name", 3, "required", "control"], [1, "mt-5", "font-semibold", "col-span-2"], [1, "col-span-2"], ["label", "Country", "field", "country", 3, "required", "control", "options"], ["label", "Address Line 1", 1, "col-span-2", 3, "required", "control"], ["label", "Address Line 2", 1, "col-span-2", 3, "control"], ["label", "City", 3, "required", "control"], ["label", "State/Province", "field", "state", 3, "required", "control", "options"], ["label", "Postal Code", 3, "required", "control"], [1, "col-span-2", "flex", "justify-between", "items-center"], ["mat-flat-button", "", "color", "primary", 1, "text-center", "!justify-center", "!flex", "!items-center", "h-9", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " User Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "qmt-new-input", 6)(8, "qmt-new-input", 7)(9, "qmt-new-input", 8)(10, "qmt-new-input", 9)(11, "qmt-new-input", 10)(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Company Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "mat-divider", 12)(16, "qmt-new-autocomplete", 13)(17, "qmt-new-input", 14)(18, "qmt-new-input", 15)(19, "qmt-new-input", 16)(20, "div")(21, "qmt-new-autocomplete", 17)(22, "qmt-new-input", 18)(23, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_25_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("contact_no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("company_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("country"))("options", ctx.allCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.formGroup.get("address2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("state"))("options", ctx.allStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("postal_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Update ", ctx.userData.status === "Request Change" ? " & Send For Approval" : "", " ");
    } }, directives: [_shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_2__.NewInputComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__.NewAutocompleteComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4514:
/*!*************************************************************************!*\
  !*** ./src/app/features/user-auth/pages/register/register.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ 601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 2802);


















function RegisterComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " *Password should be at least 8 characters length with special character, upper case, lower case and number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " *Passwords do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return ["/auth/login"]; };
class RegisterComponent {
    constructor(formBuilder, authService, router, utilsService, messageService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.utilsService = utilsService;
        this.messageService = messageService;
        this.mask = null;
        this.isUpdatingPostalCode = false;
    }
    ngOnInit() {
        var _a, _b;
        this.formGroup = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, (0,_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.passwordValidator)()]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, (0,_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.passwordValidator)()]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            contact_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            login_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('email-password', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            qm_first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            qm_last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            qm_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            qm_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            qm_note: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            showPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false),
            showConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false),
        });
        this.utilsService.getCountry().subscribe((data) => {
            return (this.allCountries = data.data.rows);
        });
        (_a = this.formGroup.get('country')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.id) {
                if ((data === null || data === void 0 ? void 0 : data.country) === 'USA') {
                    this.mask = '99999?-9999';
                }
                else if ((data === null || data === void 0 ? void 0 : data.country) === 'Canada') {
                    this.mask = 'a9a 9a9';
                }
                else {
                    this.mask = null;
                }
                (_a = this.formGroup.get('country_id')) === null || _a === void 0 ? void 0 : _a.patchValue(data === null || data === void 0 ? void 0 : data.id);
                this.utilsService.getState(data === null || data === void 0 ? void 0 : data.id).subscribe((data) => {
                    var _a;
                    this.allStates = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
                });
            }
            else {
                this.mask = null;
            }
        });
        // this.formGroup.get('postal_code')?.valueChanges.subscribe((data: any) => {
        //   console.log('in postal onchange',data,this.isUpdatingPostalCode)
        //   if (data && this.isUpdatingPostalCode == false) {
        //     this.isUpdatingPostalCode=true
        //     this.formGroup.get('postal_code')?.setValue(data, { emitEvent: false });
        //     this.isUpdatingPostalCode=false
        //   }
        // });
        (_b = this.formGroup.get('state')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.id) {
                (_a = this.formGroup.get('state_id')) === null || _a === void 0 ? void 0 : _a.patchValue(data === null || data === void 0 ? void 0 : data.id);
            }
        });
        this.formGroup.get('confirm_password').valueChanges.subscribe((value) => {
            if (this.formGroup.get('password').value !== value) {
                this.formGroup
                    .get('confirm_password')
                    .setErrors({ passwordNotMatch: true });
            }
        });
        this.formGroup.get('qm_email').valueChanges.subscribe((value) => {
            if (!this.formGroup.get('qm_email').value.toLowerCase().endsWith("@qmenv.com")) {
                this.formGroup
                    .get('qm_email')
                    .setErrors({ qmEmailNotValid: true });
            }
        });
    }
    showPassword() {
        this.formGroup.get('showPassword').patchValue(!this.formGroup.value.showPassword);
    }
    showConfirmPassword() {
        this.formGroup.get('showConfirmPassword').patchValue(!this.formGroup.value.showConfirmPassword);
    }
    register() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.valid) {
            this.authService
                .register(Object.assign(Object.assign({}, this.formGroup.getRawValue()), { country_id: this.formGroup.getRawValue().country.id, state_id: this.formGroup.getRawValue().state.id })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)((err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Registration Error',
                    detail: err.error.msg,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err.msg);
            }))
                .subscribe((res) => {
                if (res.data) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user-data', JSON.stringify(Object.assign({}, res.data.user)));
                    this.router.navigate(['/vendor']);
                    return;
                }
                return;
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 64, vars: 48, consts: [[1, "flex", "justify-center", "items-center", "relative"], ["src", "../../../../../assets/login-bottom-left-design.png", "alt", "", 1, "absolute", "bottom-0", "left-0"], ["src", "../../../../../assets/login-top-right-design.png", "alt", "", 1, "absolute", "top-0", "right-0"], [1, "border", "border-gray-A2", "rounded-lg", "p-10", "border-solid", "!bg-white", "w-[1000px]", "h-auto", "flex", "flex-col", "justify-center", "gap-9", 3, "formGroup"], [1, "text-primary-dark", "text-[52px]", "font-semibold", "text-center", "mb-7", "border-b", "border-solid", "border-gray-A1", "pb-3"], [1, ""], [1, "px-4", "mt-6", "mb-16"], ["title", "Company Information", 1, "mb-8", 3, "divider"], [1, "grid", "grid-cols-2", "gap-5"], ["label", "First Name", 3, "required", "control"], ["label", "Last Name", 3, "required", "control"], ["label", "Email", "type", "email", 3, "required", "control"], ["label", "Contact No", "type", "tel", 3, "required", "control"], ["label", "Company Name", 3, "required", "control"], ["label", "Country", "field", "country", 3, "required", "control", "options"], ["label", "Address Line 1", 1, "col-span-2", 3, "required", "control"], ["label", "Address Line 2", 1, "col-span-2", 3, "control"], ["label", "City", 3, "required", "control"], ["label", "State/Province", "field", "state", 3, "required", "control", "options"], ["label", "Postal Code", 3, "required", "control", "mask"], ["title", "QM ENV Contact Person Details", 1, "mb-8", 3, "divider"], ["label", "Email", 3, "required", "control"], ["label", "Phone", "type", "tel", 3, "required", "control"], ["title", "Note", 1, "mb-8", 3, "divider"], ["label", "Note", 1, "col-span-2", 3, "control"], ["title", "Password", 1, "mb-8", 3, "divider"], [1, "text-[#1E1E1E]", "text-base", "mb-1"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "px-4", "py-[14px]", "border-solid", "border-[#5B5B5B]", "border", "rounded-lg", "w-full", "outline-primary-dark", "text-[#5B5B5B]", "text-sm", 3, "type", "minlength"], [1, "absolute", "top-1/2", "right-5", "-translate-y-1/2", "flex", "justify-center", "items-center", "cursor-pointer", 3, "click"], [1, "material-icons-outlined"], [4, "ngIf"], ["id", "password", "formControlName", "confirm_password", "placeholder", "Enter your password", 1, "px-4", "py-[14px]", "border-solid", "border-[#5B5B5B]", "border", "rounded-lg", "w-full", "outline-primary-dark", "text-[#5B5B5B]", "text-sm", 3, "type", "minlength"], [1, "col-span-2", "flex", "justify-between", "items-center"], [1, "text-gray-400"], [1, "font-semibold", "text-gray-500", "underline", "cursor-pointer", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 1, "text-center", "!justify-center", "!flex", "!items-center", "h-9", 3, "click"], [1, "text-red-500", "text-sm"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "qmt-page-heading", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "qmt-new-input", 9)(11, "qmt-new-input", 10)(12, "qmt-new-input", 11)(13, "qmt-new-input", 12)(14, "qmt-new-input", 13)(15, "div")(16, "qmt-new-autocomplete", 14)(17, "qmt-new-input", 15)(18, "qmt-new-input", 16)(19, "qmt-new-input", 17)(20, "div")(21, "qmt-new-autocomplete", 18)(22, "qmt-new-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "qmt-page-heading", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "qmt-new-input", 9)(27, "qmt-new-input", 10)(28, "qmt-new-input", 21)(29, "qmt-new-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "qmt-page-heading", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "qmt-new-textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "qmt-page-heading", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 8)(37, "div")(38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_42_listener() { return ctx.showPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, RegisterComponent_div_45_Template, 3, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div")(47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Confirm Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_51_listener() { return ctx.showConfirmPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, RegisterComponent_div_54_Template, 3, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 33)(57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Already have an account? login with email and password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_61_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("contact_no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("company_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("country"))("options", ctx.allCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formGroup.get("address2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("state"))("options", ctx.allStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("postal_code"))("mask", ctx.mask);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("qm_first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("qm_last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("qm_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.formGroup.get("qm_phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formGroup.get("qm_note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.formGroup.value.showPassword ? "text" : "password")("minlength", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formGroup.value.showPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup.get("password").hasError("passwordInvalid") && !ctx.formGroup.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.formGroup.value.showConfirmPassword ? "text" : "password")("minlength", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formGroup.value.showConfirmPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup.get("confirm_password").hasError("passwordNotMatch") && !ctx.formGroup.get("confirm_password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](47, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__.PageHeadingComponent, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__.NewInputComponent, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__.NewAutocompleteComponent, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__.NewTextareaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2776:
/*!****************************************************************!*\
  !*** ./src/app/features/user-auth/user-auth-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAuthRoutingModule": () => (/* binding */ UserAuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 8155);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register/register.component */ 4514);
/* harmony import */ var _pages_inactive_user_inactive_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/inactive-user/inactive-user.component */ 1480);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.component */ 7652);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 601);
/* harmony import */ var _pages_mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/mfa-qr-code/mfa-qr-code.component */ 8946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'inactive-user',
        component: _pages_inactive_user_inactive_user_component__WEBPACK_IMPORTED_MODULE_2__.InactiveUserComponent,
    },
    {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent,
    },
    {
        path: 'request-type',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'login/qm-user',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    // {
    //   path: 'login/temp-uat-login',
    //   component: LoginComponent,
    // },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
    },
    {
        path: 'forgot-password',
        component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent,
    },
    {
        path: 'authenticator',
        component: _pages_mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_5__.MfaQrCodeComponent,
    },
];
class UserAuthRoutingModule {
}
UserAuthRoutingModule.ɵfac = function UserAuthRoutingModule_Factory(t) { return new (t || UserAuthRoutingModule)(); };
UserAuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserAuthRoutingModule });
UserAuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserAuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 6066:
/*!********************************************************!*\
  !*** ./src/app/features/user-auth/user-auth.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MSALInstanceFactory": () => (/* binding */ MSALInstanceFactory),
/* harmony export */   "UserAuthModule": () => (/* binding */ UserAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _user_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-auth-routing.module */ 2776);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 8155);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 9531);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-browser */ 9790);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ 4514);
/* harmony import */ var _pages_inactive_user_inactive_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inactive-user/inactive-user.component */ 1480);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ 7652);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 601);
/* harmony import */ var _pages_mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/mfa-qr-code/mfa-qr-code.component */ 8946);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-otp-input */ 641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
















const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1;
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__.PublicClientApplication({
        auth: {
            clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.microsoftClientID,
            authority: 'https://login.microsoftonline.com/common',
            redirectUri: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.redirectUri, // This is your redirect URI
        },
        cache: {
            cacheLocation: 'sessionStorage',
            storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        },
    });
}
class UserAuthModule {
}
UserAuthModule.ɵfac = function UserAuthModule_Factory(t) { return new (t || UserAuthModule)(); };
UserAuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: UserAuthModule });
UserAuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.GoogleLoginProvider(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.googleClientID),
                    },
                ],
                onError: (err) => {
                    console.error(err);
                },
            },
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_13__.MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_13__.MsalService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _user_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserAuthRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.SocialLoginModule,
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_13__.MsalModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](UserAuthModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
        _pages_inactive_user_inactive_user_component__WEBPACK_IMPORTED_MODULE_6__.InactiveUserComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
        _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordComponent,
        _pages_mfa_qr_code_mfa_qr_code_component__WEBPACK_IMPORTED_MODULE_9__.MfaQrCodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _user_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserAuthRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.SocialLoginModule,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_13__.MsalModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputModule] }); })();


/***/ }),

/***/ 3305:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/vendor-prequalification/pages/vendor-pre/vendor-pre.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorPreComponent": () => (/* binding */ VendorPreComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var src_app_services_vendor_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vendor-form.service */ 7767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/new/input/input.component */ 4758);
/* harmony import */ var _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/new/textarea/textarea.component */ 3185);
/* harmony import */ var _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/new/file-upload/file-upload.component */ 7903);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);






















function VendorPreComponent_qmt_new_input_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "qmt-new-input", 68);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.forApproval)("control", ctx_r0.vendorPrequalificationForm.get("payment_term_other"));
} }
function VendorPreComponent_qmt_new_input_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "qmt-new-input", 69);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.forApproval)("control", ctx_r1.vendorPrequalificationForm.get("payment_terms_note"))("required", true);
} }
function VendorPreComponent_mat_card_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "qmt-page-heading", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "qmt-new-input", 72)(4, "qmt-new-input", 73)(5, "qmt-new-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "qmt-new-input", 76)(8, "qmt-new-input", 77)(9, "qmt-new-input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 79)(11, "div", 80)(12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " 24 Hrs Response Provided ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-yes-no-checkbox", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "div", 22)(17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("qm_employee_contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("division"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("accessor_ehs"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("post_job_safety"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("deadline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("required", true)("disabled", ctx_r2.forApproval)("control", ctx_r2.vendorPrequalificationForm.get("service_provided"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r2.vendorPrequalificationForm.get("response_provided"))("disabled", ctx_r2.forApproval);
} }
function VendorPreComponent_div_78_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](file_r8.value["file"] == null ? null : file_r8.value["file"][0] == null ? null : file_r8.value["file"][0].name);
} }
function VendorPreComponent_div_78_div_1_qmt_file_upload_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "qmt-file-upload", 91);
} if (rf & 2) {
    const file_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", file_r8.get("file"));
} }
function VendorPreComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "qmt-new-input", 85)(2, "mat-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, VendorPreComponent_div_78_div_1_small_4_Template, 2, 1, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, VendorPreComponent_div_78_div_1_qmt_file_upload_5_Template, 1, 1, "qmt-file-upload", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function VendorPreComponent_div_78_div_1_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.remove(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r10.forApproval)("control", file_r8.get("name"))("disabled", file_r8.get("name").value === "VOID Cheque" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = file_r8.get("file")) == null ? null : tmp_3_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r10.forApproval);
} }
function VendorPreComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, VendorPreComponent_div_78_div_1_Template, 8, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.forApproval);
} }
function VendorPreComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function VendorPreComponent_div_79_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r19.addMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " + Add More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function VendorPreComponent_div_80_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", (tmp_0_0 = file_r21.get("file")) == null ? null : tmp_0_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](file_r21.get("name").value);
} }
function VendorPreComponent_div_80_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No file uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function VendorPreComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, VendorPreComponent_div_80_a_2_Template, 2, 2, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, VendorPreComponent_div_80_ng_template_3_Template, 2, 0, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r21 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_0_0 = file_r21.get("file")) == null ? null : tmp_0_0.value)("ngIfElse", _r23);
} }
function VendorPreComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 99)(1, "mat-checkbox", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "I have read the terms & conditions before applying as vendor of QM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r6.terms_conditions);
} }
function VendorPreComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 101)(1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function VendorPreComponent_div_82_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r26.submitConfirm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return ["N0", "N15", "N30", "N45", "N60", "N90", "Other"]; };
const _c1 = function () { return ["Cheque", "EFT", "Wire"]; };
const _c2 = function () { return ["Employee", "Staffing", "Accommodation & Travel", "Consulting", "Information Technology", "ECC", "Subcontracting", "Job-Waste Disposal", "Facilities & Office Supplies", "Heavy Equipment", "Transport", "Job Materials", "Fuel (Vehicle,Equipment,Tanks and Accessories)", "Marketing", "Advertising"]; };
const _c3 = function () { return { width: "50vw" }; };
class VendorPreComponent {
    // public customPatterns = { '0': { pattern: new RegExp('^\d{9}RT\d{4}$')} };
    constructor(fb, messageService, vendorFormService, router, utilsService, confirmationService) {
        this.fb = fb;
        this.messageService = messageService;
        this.vendorFormService = vendorFormService;
        this.router = router;
        this.utilsService = utilsService;
        this.confirmationService = confirmationService;
        this.isGetAPI = false;
        this.forApproval = false;
        this.forDatabase = false;
        this.showButtons = true;
        this.terms_conditions = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
        this.showOtherPayment = false;
        this.showOtherPaymentNote = false;
        this.qmUser = JSON.parse(localStorage.getItem('user'));
        this.payment_terms_title = "Payment Terms Note";
    }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes['files_json']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            const files = JSON.parse(changes['files_json'].currentValue);
            if (Object.keys(files === null || files === void 0 ? void 0 : files.files).length) {
                Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                    const value = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL + (files === null || files === void 0 ? void 0 : files.files[file].split('./public')[1]);
                    const extraUpload = this.fb.group({
                        name: [file],
                        file: [value],
                    });
                    this.getExtraFiles.push(extraUpload);
                });
            }
        }
    }
    // previousRoute(): void {
    //   window.history.back();
    // }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        console.log(((_a = this.qmUser) === null || _a === void 0 ? void 0 : _a.type) !== 'dbuser', ((_b = this.qmUser) === null || _b === void 0 ? void 0 : _b.type) !== 'approver', "qmUser?.type !== 'dbuser' || qmUser?.type !== 'approver'qmUser?.type !== 'dbuser' || qmUser?.type !== 'approver'");
        this.user = localStorage.getItem('user-data');
        this.vendorFormID = this.router.url;
        if (!((_c = JSON.parse(this.user)) === null || _c === void 0 ? void 0 : _c.email) && !this.forApproval) {
            this.router.navigate(['/auth/login']);
        }
        this.vendorPrequalificationForm = this.fb.group({
            legal_name: [(_d = JSON.parse(localStorage.getItem('user-data'))) === null || _d === void 0 ? void 0 : _d.company_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            trade_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            company_address: [(_e = JSON.parse(localStorage.getItem('user-data'))) === null || _e === void 0 ? void 0 : _e.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            company_address_2: [(_f = JSON.parse(localStorage.getItem('user-data'))) === null || _f === void 0 ? void 0 : _f.address2],
            city: [(_g = JSON.parse(localStorage.getItem('user-data'))) === null || _g === void 0 ? void 0 : _g.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            state_id: [(_h = JSON.parse(localStorage.getItem('user-data'))) === null || _h === void 0 ? void 0 : _h.state_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            country: [(_j = JSON.parse(localStorage.getItem('user-data'))) === null || _j === void 0 ? void 0 : _j.country],
            state: [(_k = JSON.parse(localStorage.getItem('user-data'))) === null || _k === void 0 ? void 0 : _k.state],
            postal_code: [(_l = JSON.parse(localStorage.getItem('user-data'))) === null || _l === void 0 ? void 0 : _l.postal_code, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            country_id: [(_m = JSON.parse(localStorage.getItem('user-data'))) === null || _m === void 0 ? void 0 : _m.country_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            phone_no: [(_o = JSON.parse(localStorage.getItem('user-data'))) === null || _o === void 0 ? void 0 : _o.contact_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            fax_no: [''],
            email: [(_p = JSON.parse(localStorage.getItem('user-data'))) === null || _p === void 0 ? void 0 : _p.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
            contact_first_name: [(_q = JSON.parse(localStorage.getItem('user-data'))) === null || _q === void 0 ? void 0 : _q.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            contact_last_name: [(_r = JSON.parse(localStorage.getItem('user-data'))) === null || _r === void 0 ? void 0 : _r.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            payment_term_code: [''],
            payment_term_other: [''],
            payment_method_code: [''],
            tax_liable: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            vendor_category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            gst_hst_registration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            pst_registration: [''],
            bank_name: [''],
            bank_address: [''],
            institution: [''],
            branch: [''],
            account: [''],
            account_name: [''],
            comments: [''],
            file_upload: this.fb.array([]),
            display_files: this.fb.array([]),
            created_by_email: [(_s = JSON.parse(this.user)) === null || _s === void 0 ? void 0 : _s.email],
            status_id: 1,
            re_submit: [''],
            qm_employee_contact: [(_t = JSON.parse(localStorage.getItem('user-data'))) === null || _t === void 0 ? void 0 : _t.qm_first_name],
            division: [''],
            accessor_ehs: [''],
            post_job_safety: [''],
            response_provided: [''],
            deadline: [''],
            service_provided: [''],
            submission_date: [new Date().toISOString()],
            payment_terms_note: [''],
            owner_email: [(_u = JSON.parse(localStorage.getItem('user-data'))) === null || _u === void 0 ? void 0 : _u.email]
            // payment_terms_note : []
        });
        this.utilsService.getCountry().subscribe((data) => {
            return (this.allCountries = data.data.rows);
        });
        if ((_v = this.vendorFormID.split(['/'])) === null || _v === void 0 ? void 0 : _v[2]) {
            this.vendorFormService
                .getVendorFormByID((_w = this.vendorFormID.split(['/'])) === null || _w === void 0 ? void 0 : _w[2])
                .subscribe((data) => {
                var _a, _b, _c, _d, _e, _f, _g;
                this.terms_conditions.patchValue(((_a = data.data) === null || _a === void 0 ? void 0 : _a.Status.id) !== 1 ? true : false);
                if (
                // data.data?.Status?.id === 2 ||
                // data.data?.Status?.id === 4 ||
                // data.data?.Status?.id === 5 ||
                // data.data?.Status?.id === 6
                // data.data?.Status?.id !== 1 ||
                // data.data?.Status?.id !== 3
                ((_c = (_b = data.data) === null || _b === void 0 ? void 0 : _b.Status) === null || _c === void 0 ? void 0 : _c.id) != 1 &&
                    ((_e = (_d = data.data) === null || _d === void 0 ? void 0 : _d.Status) === null || _e === void 0 ? void 0 : _e.id) != 3) {
                    this.showButtons = false;
                    this.forApproval = true;
                }
                this.generateForm(data === null || data === void 0 ? void 0 : data.data);
                this.serverData = data === null || data === void 0 ? void 0 : data.data;
                if ((_f = data.data) === null || _f === void 0 ? void 0 : _f.files_json) {
                    const files = JSON.parse((_g = data.data) === null || _g === void 0 ? void 0 : _g.files_json);
                    if (Object.keys(files === null || files === void 0 ? void 0 : files.files).length) {
                        Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                            var _a, _b;
                            if (file === 'VOID Cheque' &&
                                (((_a = this.qmUser) === null || _a === void 0 ? void 0 : _a.type) == 'dbuser' ||
                                    ((_b = this.qmUser) === null || _b === void 0 ? void 0 : _b.type) == 'admin')) {
                                return;
                            }
                            const value = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL +
                                (files === null || files === void 0 ? void 0 : files.files[file].split('./public')[1]);
                            const extraUpload = this.fb.group({
                                name: [file],
                                file: [value],
                            });
                            this.getDisplayFiles.push(extraUpload);
                            if (file === 'VOID Cheque') {
                                this.getExtraFiles.removeAt(0);
                            }
                        });
                    }
                }
            });
        }
        (_x = this.vendorPrequalificationForm
            .get('country')) === null || _x === void 0 ? void 0 : _x.valueChanges.subscribe((data) => {
            var _a, _b;
            if ((data === null || data === void 0 ? void 0 : data.id) &&
                ((_a = this.vendorPrequalificationForm.get('country')) === null || _a === void 0 ? void 0 : _a.touched)) {
                (_b = this.vendorPrequalificationForm
                    .get('country_id')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.id);
                this.utilsService.getState(data === null || data === void 0 ? void 0 : data.id).subscribe((data) => {
                    var _a;
                    this.allStates = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.rows;
                });
            }
        });
        (_y = this.vendorPrequalificationForm
            .get('state')) === null || _y === void 0 ? void 0 : _y.valueChanges.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.id) {
                (_a = this.vendorPrequalificationForm.get('state_id')) === null || _a === void 0 ? void 0 : _a.patchValue(data === null || data === void 0 ? void 0 : data.id);
            }
        });
        (_z = this.vendorPrequalificationForm
            .get('payment_term_code')) === null || _z === void 0 ? void 0 : _z.valueChanges.subscribe((data) => {
            var _a, _b, _c, _d;
            if (data !== 'N60') {
                this.showOtherPaymentNote = true;
                (_a = this.vendorPrequalificationForm
                    .get('payment_terms_note')) === null || _a === void 0 ? void 0 : _a.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                (_b = this.vendorPrequalificationForm
                    .get('payment_terms_note')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            }
            else {
                this.showOtherPaymentNote = false;
                (_c = this.vendorPrequalificationForm
                    .get('payment_terms_note')) === null || _c === void 0 ? void 0 : _c.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                (_d = this.vendorPrequalificationForm
                    .get('payment_terms_note')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            }
            if (data == 'Other') {
                this.showOtherPayment = true;
            }
            else {
                this.showOtherPayment = false;
            }
        });
        const voidChequeUpload = this.fb.group({
            name: ['VOID Cheque'],
            file: [''],
        });
        this.getExtraFiles.push(voidChequeUpload);
    }
    generateForm(data) {
        let controlName;
        this.isGetAPI = true;
        for (controlName in this.vendorPrequalificationForm.controls) {
            let obj = {};
            if (data === null || data === void 0 ? void 0 : data.Country) {
                obj['country'] = data === null || data === void 0 ? void 0 : data.Country;
            }
            if (data === null || data === void 0 ? void 0 : data.State) {
                obj['state'] = data === null || data === void 0 ? void 0 : data.State;
            }
            // if(data?.files_json){
            // }
            obj[controlName] = data[controlName] === null ? '' : data[controlName];
            // if(controlName === 'file_upload'){
            //   const files = JSON.parse(changes['files_json'].currentValue);
            // Object.keys(files?.files).forEach((file: any) => {
            //   const value =
            //     environment.BE_BASE_URL + files?.files[file].split('./public')[1];
            //   if (this.fileUpload.get(file)) {
            //     this.fileUpload.get(file)?.patchValue(value);
            //   } else {
            //     const extraUpload = this.fb.group({
            //       name: [file],
            //       file: [value],
            //     });
            //     this.getExtraUpload.push(extraUpload);
            //   }
            // });
            // }
            this.vendorPrequalificationForm.patchValue(Object.assign({}, obj));
        }
        return;
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
    get getExtraFiles() {
        return this.vendorPrequalificationForm.controls['file_upload'];
    }
    get getDisplayFiles() {
        return this.vendorPrequalificationForm.controls['display_files'];
    }
    addMore() {
        const extraUpload = this.fb.group({
            name: [''],
            file: [''],
        });
        this.getExtraFiles.push(extraUpload);
    }
    showBasicDialog() {
        this.displayBasic = true;
    }
    openSnackBar() {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Please fill out required fields',
        });
    }
    submitForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (this.vendorPrequalificationForm.valid) {
            const formData = new FormData();
            this.vendorFormID = this.router.url;
            if (((_b = (_a = this.serverData) === null || _a === void 0 ? void 0 : _a.Status) === null || _b === void 0 ? void 0 : _b.id) === 3) {
                (_c = this.vendorPrequalificationForm.get('re_submit')) === null || _c === void 0 ? void 0 : _c.setValue(true);
                (_d = this.vendorPrequalificationForm.get('status_id')) === null || _d === void 0 ? void 0 : _d.setValue(3);
            }
            else {
                (_e = this.vendorPrequalificationForm.get('re_submit')) === null || _e === void 0 ? void 0 : _e.setValue(false);
                (_f = this.vendorPrequalificationForm.get('status_id')) === null || _f === void 0 ? void 0 : _f.setValue(2);
            }
            Object.keys(this.vendorPrequalificationForm.value).forEach((key) => {
                var _a, _b;
                if (key == 'file_upload' &&
                    ((_a = this.vendorPrequalificationForm.value.file_upload) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.vendorPrequalificationForm.value.file_upload.forEach((element) => {
                        var _a;
                        formData.append(element.name, (_a = element.file) === null || _a === void 0 ? void 0 : _a[0]);
                    });
                    delete this.vendorPrequalificationForm.value['file_upload'];
                }
                else {
                    // if(this.vendorPrequalificationForm.value[key]){
                    if (key === 'submission_date') {
                        // console.log(this.vendorPrequalificationForm.value[key])
                        this.vendorPrequalificationForm.value[key] = this.vendorPrequalificationForm.value[key] ? this.vendorPrequalificationForm.value[key] : (_b = this.serverData) === null || _b === void 0 ? void 0 : _b.created_at;
                        // console.log(this.vendorPrequalificationForm.value[key])
                    }
                    ![
                        'service_provided',
                        'qm_employee_contact',
                        'division',
                        'accessor_ehs',
                        'post_job_safety',
                        'response_provided',
                        'deadline',
                    ].includes(key) &&
                        formData.append(key, this.vendorPrequalificationForm.value[key]);
                    // }
                }
            });
            if ((_g = this.serverData) === null || _g === void 0 ? void 0 : _g.files_json) {
                const files = JSON.parse(this.serverData.files_json);
                let file_jsn = {};
                Object.keys(files === null || files === void 0 ? void 0 : files.files).forEach((file) => {
                    file_jsn[file] = files.files[file];
                });
                formData.append('file_jsn', JSON.stringify(file_jsn));
            }
            if ((_h = this.vendorFormID.split(['/'])) === null || _h === void 0 ? void 0 : _h[2]) {
                return this.vendorFormService
                    .updateVendorForm((_j = this.vendorFormID.split(['/'])) === null || _j === void 0 ? void 0 : _j[2], formData)
                    .subscribe((data) => {
                    this.showBasicDialog();
                    setTimeout(() => {
                        this.displayBasic = false;
                        this.router.navigate(['/vendor']);
                    }, 3000);
                });
            }
            // formData.set('status_id', '2');
            return this.vendorFormService
                .createVendorForm(formData)
                .subscribe((data) => {
                this.showBasicDialog();
                setTimeout(() => {
                    this.displayBasic = false;
                    this.router.navigate(['/vendor']);
                }, 3000);
            });
        }
        else {
            return this.openSnackBar();
        }
    }
    submitConfirm(event) {
        if (this.terms_conditions.value === false) {
            this.messageService.add({
                severity: 'error',
                summary: 'Terms & Conditions',
                detail: 'Please agree to our terms and conditions',
            });
            return;
        }
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure you want to submit the form? Once agreed you will not be able to make any further changes!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                // this.showBasicDialog();
                this.submitForm();
            },
            reject: () => { },
        });
    }
    remove(id) {
        this.getExtraFiles.removeAt(id);
    }
}
VendorPreComponent.ɵfac = function VendorPreComponent_Factory(t) { return new (t || VendorPreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_vendor_form_service__WEBPACK_IMPORTED_MODULE_1__.VendorFormService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService)); };
VendorPreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: VendorPreComponent, selectors: [["app-vendor-pre"]], inputs: { forApproval: "forApproval", files_json: "files_json", forDatabase: "forDatabase" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], decls: 90, vars: 92, consts: [[1, "vendor-prequalification"], [1, "flex", "subcontractor-header"], [1, "w-[150px]", "h-[147px]", "grid", "place-content-center", "border-[#F1F1F9]", "border"], ["src", "/assets/logo/logo.png", "alt", "", 1, "h-[70px]", "mx-auto"], [1, "flex", "flex-col", "w-full"], [1, "flex", "items-center", "justify-between", "border-b", "border-[#F1F1F9]", "p-6"], [1, "flex", "gap-3"], ["routerLink", "/vendor", 1, "grid", "place-content-center", "h-10", "w-10", "cursor-pointer", 2, "border-radius", "44px", "background", "#f1f1f9"], ["svgIcon", "back_button"], [1, "text-primary-dark", "text-lg", "font-semibold", "grid", "place-content-center"], [1, "flex", "items-center", "gap-5"], [1, "flex", "items-center", "px-6", "py-4", "gap-1", "border-b", "border-[#F1F1F9]"], ["svgIcon", "solar-user-id"], [1, "text-black", "text-base", "pl-1"], [1, "material-symbols-outlined"], [3, "formGroup"], [1, "py-6", "px-10", "vendor-form"], [1, "px-4", "mt-6", "mb-16"], ["title", "Company Information", 1, "mb-8", 3, "divider"], [1, "flex", "justify-start", "items-center", "gap-11", "form"], ["label", "Legal Name", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "Trade Name", 1, "w-1/3", 3, "disabled", "required", "control"], [1, "w-1/3"], [1, "flex", "flex-col", "gap-8", "form", "mt-8"], ["label", "Address Line 1", 1, "w-full", 3, "disabled", "required", "control"], ["label", "Address Line 2", 1, "w-full", 3, "disabled", "control"], [1, "flex", "justify-start", "items-center", "gap-11", "form", "mt-8"], ["label", "City", 1, "w-1/3", 3, "disabled", "required", "control"], [1, "flex", "justify-start", "items-center", "gap-11", "form", "mt-8", "pb-4"], ["label", "Country (Please select country first)", "field", "country", 1, "w-1/3", 3, "disabled", "required", "options", "control"], ["label", "State/Province", "field", "state", 1, "w-1/3", 3, "disabled", "required", "options", "control"], ["label", "Postal Code", 1, "w-1/3", 3, "disabled", "required", "control"], ["title", "Contact Details", 1, "mb-8", 3, "divider"], ["label", "Contact First Name", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "Contact Last Name", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "Email", "type", "email", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "Phone No.", "type", "tel", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "Fax No", 1, "w-1/3", 3, "disabled", "control"], ["title", "Other Details", 1, "mb-8", 3, "divider"], ["label", "Payment Terms", 1, "w-1/3", 3, "disabled", "options", "control"], ["label", "Payment Terms (Other)", "class", "w-1/3", 3, "disabled", "control", 4, "ngIf"], ["label", "Payment Terms Note", "class", "w-1/3", 3, "disabled", "control", "required", 4, "ngIf"], ["label", "Payment Method", 1, "w-1/3", 3, "disabled", "options", "control"], [1, "flex", "items-center", "gap-8", "w-1/3"], [1, "font-semibold", "text-base"], [3, "disabled", "control"], ["label", "Vendor Category", 1, "w-1/3", 3, "disabled", "required", "options", "control"], ["label", "GST-HST Registration", 1, "w-1/3", 3, "disabled", "required", "control"], ["label", "PST Registration", 1, "w-1/3", 3, "disabled", "control"], ["title", "Bank Details", 1, "mb-8", 3, "divider"], ["label", "Bank Name", 1, "w-1/3", 3, "disabled", "control"], ["label", "Bank Address", 1, "w-1/3", 3, "disabled", "control"], ["label", "Institution", 1, "w-1/3", 3, "disabled", "control"], ["label", "Branch", 1, "w-1/3", 3, "disabled", "control"], ["label", "Account", 1, "w-1/3", 3, "disabled", "control"], ["label", "Account Name", 1, "w-1/3", 3, "disabled", "control"], ["title", "Comments", 1, "mb-8", 3, "divider"], ["label", "Comments", 1, "w-full", 3, "disabled", "control"], ["class", "px-4 mt-6 mb-16", 4, "ngIf"], ["title", "File Upload", 1, "mb-8", 3, "divider"], [4, "ngFor", "ngForOf"], ["class", "text-primary text-sm text-end cursor-pointer mt-5 underline", 4, "ngIf"], ["class", "px-4 pb-16", 4, "ngIf"], ["class", "bg-white flex w-full justify-end px-9 !h-[72px] py-4 gap-3 button-wrapper", 4, "ngIf"], [1, "submitted-dialog", 3, "visible", "visibleChange"], [1, "text-[#49A942]", "text-center", "text-4xl", "mb-5"], [1, "text-[#434343]", "text-lg", "text-center", "mb-6"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], ["label", "Payment Terms (Other)", 1, "w-1/3", 3, "disabled", "control"], ["label", "Payment Terms Note", 1, "w-1/3", 3, "disabled", "control", "required"], ["title", "QM Provided Information", 1, "mb-8", 3, "divider"], [1, "flex", "gap-11", "form"], ["label", "QM Employee Contact", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Division", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Accessor (EHS)", 1, "w-1/3", 3, "required", "disabled", "control"], [1, "flex", "gap-11", "form", "mt-8"], ["label", "Post Job Safety %", "type", "number", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Deadline", "type", "date", 1, "w-1/3", 3, "required", "disabled", "control"], ["label", "Service Provided", 1, "w-1/3", 3, "required", "disabled", "control"], [1, "flex", "gap-11", "field", "mt-6", "!mb-4"], [1, "flex", "justify-between", "items-center", "mt-5", "w-1/3"], [1, "text-base", "font-medium", "text-gray-A3", "mr-4"], [3, "control", "disabled"], ["class", "flex justify-between items-center mt-4", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mt-4"], ["label", "Name", 1, "w-[45%]", 3, "disabled", "control"], ["svgIcon", "back_button", 2, "transform", "rotate(180deg)", "margin-top", "20px"], [1, "w-[45%]", "flex", "flex-col", "justify-end", "mt-5"], [4, "ngIf"], ["class", "w-[100%] ", "text", "Upload file here", 3, "control", 4, "ngIf"], [1, "!w-[18px]", "!h-[18px]", "mt-4", "text-[#E2341D]", "cursor-pointer", 3, "click"], ["text", "Upload file here", 1, "w-[100%]", 3, "control"], [1, "text-primary", "text-sm", "text-end", "cursor-pointer", "mt-5", "underline"], [3, "click"], [1, "mb-4"], ["target", "_blank", "class", "underline text-lg text-primary font-medium", 3, "href", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["target", "_blank", 1, "underline", "text-lg", "text-primary", "font-medium", 3, "href"], [1, "text-sm", "text-gray-A3"], [1, "px-4", "pb-16"], ["color", "primary", 1, "example-margin", 3, "formControl"], [1, "bg-white", "flex", "w-full", "justify-end", "px-9", "!h-[72px]", "py-4", "gap-3", "button-wrapper"], ["mat-button", "", 1, "!rounded-md", "!bg-[#49A942]", "!text-sm", "!text-white", "!font-semibold", "!flex", "!justify-center", "!items-center", "!w-28", 2, "box-shadow", "0px 1px 2px 0px rgba(16, 24, 40, 0.04) !important", 3, "click"]], template: function VendorPreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Vendor Prequalification Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " arrow_drop_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "form", 15)(20, "div", 16)(21, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "qmt-page-heading", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "qmt-new-input", 20)(25, "qmt-new-input", 21)(26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "qmt-new-input", 24)(29, "qmt-new-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "qmt-new-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "qmt-new-autocomplete", 29)(34, "qmt-new-autocomplete", 30)(35, "qmt-new-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "qmt-page-heading", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "qmt-new-input", 33)(40, "qmt-new-input", 34)(41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "qmt-new-input", 35)(44, "qmt-new-input", 36)(45, "qmt-new-input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "qmt-page-heading", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "qmt-new-autocomplete", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, VendorPreComponent_qmt_new_input_50_Template, 1, 2, "qmt-new-input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, VendorPreComponent_qmt_new_input_51_Template, 1, 3, "qmt-new-input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "qmt-new-autocomplete", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 43)(54, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " Tax Liable: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "app-yes-no-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "qmt-new-autocomplete", 46)(59, "qmt-new-input", 47)(60, "qmt-new-input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "qmt-page-heading", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "qmt-new-input", 50)(65, "qmt-new-input", 51)(66, "qmt-new-input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "qmt-new-input", 53)(69, "qmt-new-input", 54)(70, "qmt-new-input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "qmt-page-heading", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "qmt-new-textarea", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, VendorPreComponent_mat_card_75_Template, 18, 21, "mat-card", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "qmt-page-heading", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, VendorPreComponent_div_78_Template, 2, 1, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, VendorPreComponent_div_79_Template, 3, 0, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, VendorPreComponent_div_80_Template, 5, 2, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, VendorPreComponent_div_81_Template, 3, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, VendorPreComponent_div_82_Template, 3, 0, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](83, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "p-dialog", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleChange", function VendorPreComponent_Template_p_dialog_visibleChange_84_listener($event) { return ctx.displayBasic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "SUCCESS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, " You have successfully submitted your request. The request is in our system and we will review it as soon as possible. Thank You! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](89, "p-confirmDialog", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.vendorPrequalificationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("legal_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("trade_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("company_address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("company_address_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("options", ctx.allCountries)("control", ctx.vendorPrequalificationForm.get("country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("options", ctx.allStates)("control", ctx.vendorPrequalificationForm.get("state"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("postal_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("contact_first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("contact_last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("phone_no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("fax_no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](88, _c0))("control", ctx.vendorPrequalificationForm.get("payment_term_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showOtherPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showOtherPaymentNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](89, _c1))("control", ctx.vendorPrequalificationForm.get("payment_method_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("tax_liable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](90, _c2))("control", ctx.vendorPrequalificationForm.get("vendor_category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("required", true)("control", ctx.vendorPrequalificationForm.get("gst_hst_registration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("pst_registration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("bank_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("bank_address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("institution"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("account_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.forApproval)("control", ctx.vendorPrequalificationForm.get("comments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.forDatabase);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("divider", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getExtraFiles.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.getDisplayFiles.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.forApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](91, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.displayBasic);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _shared_components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__.PageHeadingComponent, _shared_components_new_input_input_component__WEBPACK_IMPORTED_MODULE_4__.NewInputComponent, _shared_components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__.NewAutocompleteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_6__.YesNoCheckboxComponent, _shared_components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__.NewTextareaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__.FileUploadComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.Dialog, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__.ConfirmDialog], styles: ["[_nghost-%COMP%]     .form .field p {\n  font-size: 14px !important;\n  font-weight: 400;\n  color: var(--g-2, #5F6D7E);\n  font-family: \"Open Sans\";\n}\n[_nghost-%COMP%]     .form .field input, [_nghost-%COMP%]     .form .field textarea {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]     .form .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n.vendor-prequalification[_ngcontent-%COMP%] {\n  background: white;\n}\n[_nghost-%COMP%]     .submitted-dialog .p-dialog-content {\n  border-top: 4px solid #49A942;\n  padding-top: 1.5rem;\n}\n[_nghost-%COMP%]     .submitted-dialog .p-dialog-header {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci1wcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUZaO0FBS1E7O0VBRUksZ0JBQUE7QUFIWjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUpaO0FBVUE7RUFDSSxpQkFBQTtBQVBKO0FBYUk7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZSTtFQUNJLGFBQUE7QUFWUiIsImZpbGUiOiJ2ZW5kb3ItcHJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5mb3JtIHtcbiAgIFxuICAgIC5maWVsZCB7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZy0yLCAjNUY2RDdFKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4udmVuZG9yLXByZXF1YWxpZmljYXRpb257XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5zdWJtaXR0ZWQtZGlhbG9ne1xuICAgIFxuICAgIC5wLWRpYWxvZy1jb250ZW50e1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzQ5QTk0MjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbSA7XG4gICAgfVxuICAgIC5wLWRpYWxvZy1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 7803:
/*!********************************************************************************************!*\
  !*** ./src/app/features/vendor-prequalification/vendor-prequalification-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorPrequalificationRoutingModule": () => (/* binding */ VendorPrequalificationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/vendor-pre/vendor-pre.component */ 3305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_0__.VendorPreComponent
    },
    {
        path: ':id',
        component: _pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_0__.VendorPreComponent
    }
];
class VendorPrequalificationRoutingModule {
}
VendorPrequalificationRoutingModule.ɵfac = function VendorPrequalificationRoutingModule_Factory(t) { return new (t || VendorPrequalificationRoutingModule)(); };
VendorPrequalificationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VendorPrequalificationRoutingModule });
VendorPrequalificationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VendorPrequalificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 512:
/*!************************************************************************************!*\
  !*** ./src/app/features/vendor-prequalification/vendor-prequalification.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorPrequalificationModule": () => (/* binding */ VendorPrequalificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _vendor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-prequalification-routing.module */ 7803);
/* harmony import */ var _pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vendor-pre/vendor-pre.component */ 3305);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_services_vendor_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vendor-form.service */ 7767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class VendorPrequalificationModule {
}
VendorPrequalificationModule.ɵfac = function VendorPrequalificationModule_Factory(t) { return new (t || VendorPrequalificationModule)(); };
VendorPrequalificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VendorPrequalificationModule });
VendorPrequalificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_services_vendor_form_service__WEBPACK_IMPORTED_MODULE_3__.VendorFormService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _vendor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorPrequalificationRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VendorPrequalificationModule, { declarations: [_pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_1__.VendorPreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _vendor_prequalification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorPrequalificationRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_pages_vendor_pre_vendor_pre_component__WEBPACK_IMPORTED_MODULE_1__.VendorPreComponent] }); })();


/***/ }),

/***/ 2070:
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 4825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class AuthInterceptor {
    intercept(req, next) {
        const options = (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.getHttpOptions)();
        const cloned = req.clone(Object.assign({}, options));
        return next.handle(cloned);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 440:
/*!*************************************************!*\
  !*** ./src/app/services/admin-guard.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuardService": () => (/* binding */ AdminGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AdminGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        var _a;
        const user = localStorage.getItem('user');
        if (((_a = JSON.parse(user)) === null || _a === void 0 ? void 0 : _a.type) == 'admin') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
AdminGuardService.ɵfac = function AdminGuardService_Factory(t) { return new (t || AdminGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AdminGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuardService, factory: AdminGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8236:
/*!****************************************************!*\
  !*** ./src/app/services/approver-guard.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproverGuardService": () => (/* binding */ ApproverGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ApproverGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        var _a, _b;
        const user = localStorage.getItem('user');
        if (((_a = JSON.parse(user)) === null || _a === void 0 ? void 0 : _a.type) == 'approver' || ((_b = JSON.parse(user)) === null || _b === void 0 ? void 0 : _b.type) == 'dbuser') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
ApproverGuardService.ɵfac = function ApproverGuardService_Factory(t) { return new (t || ApproverGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ApproverGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApproverGuardService, factory: ApproverGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);






class AuthService {
    constructor(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.errorHandler = (error) => {
            let errorMessage = 'Something went wrong';
            console.log(error.error.msg);
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/auth/login']);
            }
            if (error.error) {
                if (error.error.msg) {
                    errorMessage = Array.isArray(error.error.msg)
                        ? error.error.msg[0]
                        : error.error.msg;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.msg}`;
            }
            if (error.status == 403) {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Warn',
                    detail: errorMessage,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
            }
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        };
    }
    QmLogin(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/login`, body);
    }
    register(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/register`, body);
    }
    login(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/login`, body);
    }
    update(body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/update-user/${body.id}`, body, {
            headers: {},
        });
    }
    updateCompany(body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/update-company`, body, {
            headers: {},
        });
    }
    transferOwner(body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/transfer-owner`, body, {
            headers: {},
        });
    }
    getOwner(company_name) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/get-owner/${company_name}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    approve(body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/approve-user/${body.id}`, body, {
            headers: {},
        });
    }
    getMe() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/get-me`, {
            headers: {
                Authorization: localStorage.getItem('token')
                    ? `Bearer ${localStorage.getItem('token')}`
                    : null,
            },
        });
    }
    getUserID(email) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/get-user-id/${email}`);
    }
    QmLoginTemp(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/login-temp`, body);
    }
    getForgetPasswordOTP(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/get-forget-password-otp`, body);
    }
    verifyOTP(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/verify-otp`, body);
    }
    changePassword(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/change-password`, body);
    }
    getMFAUrl(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/get-mfa-url`, body);
    }
    verifyQR(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/verify-qr`, body);
    }
    deleteUser(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/delete-user/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8252:
/*!**************************************************!*\
  !*** ./src/app/services/dbuser-guard.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbuserGuardService": () => (/* binding */ DbuserGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class DbuserGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        var _a;
        const user = localStorage.getItem('user');
        if (((_a = JSON.parse(user)) === null || _a === void 0 ? void 0 : _a.type) == 'dbuser') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
DbuserGuardService.ɵfac = function DbuserGuardService_Factory(t) { return new (t || DbuserGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
DbuserGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DbuserGuardService, factory: DbuserGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2904:
/*!********************************************************!*\
  !*** ./src/app/services/subcontractor-form.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcontractorFormService": () => (/* binding */ SubcontractorFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);





class SubcontractorFormService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.errorHandler = (error) => {
            let errorMessage = 'Something went wrong';
            console.log(error.error.msg);
            if (error.error) {
                if (error.error.msg) {
                    errorMessage = Array.isArray(error.error.msg)
                        ? error.error.msg[0]
                        : error.error.msg;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.msg}`;
            }
            if (error.status == 403) {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Warn',
                    detail: errorMessage,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
            }
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        };
    }
    createSubconForm(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/subcontractor`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateSubconForm(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/subcontractor/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateCor(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/cor_file/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateInsuranceCertificate(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/insurance_certificate/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    ack_signatureSubconForm(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/ack_subcontractor/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    wcb_signatureSubconForm(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/wcb_subcontractor_update/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getSubconFormByEmail(param) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/subcontractor/by_email?${param}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getSubconFormByID(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/subcontractor/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getAllSubconForm(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/subcontractor?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getAllApproved(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/approved?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getRequestWorkedByMe(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/worked_by_me?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    fileUpload(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/files_subcontractor/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    assignToteammate(id, body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/assign_to_teammate/${id}`, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
}
SubcontractorFormService.ɵfac = function SubcontractorFormService_Factory(t) { return new (t || SubcontractorFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
SubcontractorFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SubcontractorFormService, factory: SubcontractorFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9112:
/*!*****************************************!*\
  !*** ./src/app/services/token.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenGuard": () => (/* binding */ TokenGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class TokenGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        // const date = new Date().setDate(new Date().getDate() + 30)
        // console.log(date,"dtatata")
        if (!token) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        const userData = localStorage.getItem('user-data');
        if (userData &&
            !userData.active &&
            route.routeConfig.path !== 'inactive-user') {
            this.router.navigate(['/auth/inactive-user']);
            return false;
        }
        if (userData && !route.routeConfig.path.startsWith('vendor')) {
            this.router.navigate(['/vendor']);
            return false;
        }
        return true;
    }
}
TokenGuard.ɵfac = function TokenGuard_Factory(t) { return new (t || TokenGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
TokenGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenGuard, factory: TokenGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8270:
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);





class UtilsService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.errorHandler = (error) => {
            let errorMessage = 'Something went wrong';
            if (error.error) {
                if (error.error.msg) {
                    errorMessage = Array.isArray(error.error.msg)
                        ? error.error.msg[0]
                        : error.error.msg;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.msg}`;
            }
            if (error.status == 403) {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Warn',
                    detail: errorMessage,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
            }
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        };
    }
    getDepartments() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/departments`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getDesignation() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/designations`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getCountry(q) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/countries${q ? `?type=${q}` : ''}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getState(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/states/${id}`);
    }
    getAllState() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/all_states`);
    }
    createDepartment(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/departments`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateDepartment(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/departments/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getOneDepartment(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/departments/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    deleteDepartment(id) {
        return this.http
            .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/departments/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    createDesignation(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/designations`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getOneDesignation(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/designations/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    deleteDesignation(id) {
        return this.http
            .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/designations/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateDesignation(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/admin/designations/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    odooLogin(user, query) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.NODE_BASE_URL}/authenticate?${query}`, user).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    odooLoginForAdmin(user, query) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.NODE_BASE_URL}/authenticate-admin?${query}`, user).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    isApproved(email) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/CheckQualAppData/by_email?email=${email}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getEhsManagers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/ehs_managers`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getVpEhsDir() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vp_ehsdir`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getProjectManagers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/project_managers`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    deleteSubcontractor(id) {
        return this.http
            .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/delete_approved_subcon/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    deleteVendor(id) {
        return this.http
            .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/delete_approved_vendor/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getCompanies() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/companies`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getUsersOfSameCompany(emails) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/companies`, emails).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    deleteBelongsTo(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/belongs-to/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    checkOwner(email) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/check-owner/${email}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateSubVenAckTnC(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/sub-vendor-ack-tnc`, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
UtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7767:
/*!*************************************************!*\
  !*** ./src/app/services/vendor-form.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorFormService": () => (/* binding */ VendorFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);






class VendorFormService {
    constructor(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.errorHandler = (error) => {
            let errorMessage = 'Something went wrong';
            console.log(error.error.msg);
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/auth/login']);
            }
            if (error.error) {
                if (error.error.msg) {
                    errorMessage = Array.isArray(error.error.msg)
                        ? error.error.msg[0]
                        : error.error.msg;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.msg}`;
            }
            if (error.status == 403) {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Warn',
                    detail: errorMessage,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
            }
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        };
    }
    createVendorForm(body) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    updateVendorForm(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getVendorFormByEmail(param) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor/by_email?${param}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
        // .pipe(
        //   catchError((err: any) => {
        //     console.log(err.error.msg,"-----------------")
        //     this.messageService.add({
        //       severity: 'error',
        //       summary: 'Login Error',
        //       detail: err.error.msg,
        //     });
        //     return throwError(err.msg);
        //   })
        // )
    }
    getVendorFormByID(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getAllVendorForm(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getVendorsApprovedByMe(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/for_vendor_worked_by_me?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    getAllApprovedVendors(search) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor_approved?${search}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    approveRejectVendor(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/vendor_approve_reject/${id}`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    responseLogs(id, body) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/request/response-logs`, body)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
}
VendorFormService.ɵfac = function VendorFormService_Factory(t) { return new (t || VendorFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
VendorFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VendorFormService, factory: VendorFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7415:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/accordion/accordion.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionComponent": () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function AccordionComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-red-500", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.accordionNumber, " ");
} }
function AccordionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionComponent_ng_template_1_div_1_Template, 2, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.accordionNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.accordionHeader, " ");
} }
const _c0 = ["*"];
class AccordionComponent {
    constructor() {
        this.accordionNumber = null;
        this.selected = false;
        this.error = false;
        this.accordionHeader = '';
    }
    ngOnInit() { }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["qmt-accordion"]], inputs: { accordionNumber: "accordionNumber", selected: "selected", error: "error", accordionHeader: "accordionHeader" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "selected"], ["pTemplate", "header"], [1, "flex", "justify-start", "items-center", "gap-4"], ["class", "bg-primary-dark w-[26px] h-[26px] flex justify-center items-center rounded-full !text-white", 3, "bg-red-500", 4, "ngIf"], [1, "bg-primary-dark", "w-[26px]", "h-[26px]", "flex", "justify-center", "items-center", "rounded-full", "!text-white"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-accordionTab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionComponent_ng_template_1_Template, 3, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected);
    } }, directives: [primeng_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["[_nghost-%COMP%]     .p-accordion-tab {\n  box-shadow: none;\n  margin: 10px 0px;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {\n  background: #E6ECF5 !important;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):has(.invalid):hover .p-accordion-header-link {\n  background: #fee2e2 !important;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header .p-accordion-header-link:has(.invalid) {\n  background: #fef2f2;\n  padding: 12px !important;\n  border-radius: 10px !important;\n  border-bottom: 1px solid #ef4444 !important;\n  color: #ef4444 !important;\n  font-weight: 500 !important;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header .p-accordion-header-link {\n  background: #f7f7f8;\n  padding: 12px !important;\n  border-radius: 10px !important;\n  border-bottom: 1px solid #0D3875 !important;\n  color: #0D3875 !important;\n  font-weight: 500 !important;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {\n  background: #E6ECF5 !important;\n}\n[_nghost-%COMP%]     .p-accordion-tab .p-accordion-header:not(.p-disabled):has(.invalid).p-highlight .p-accordion-header-link {\n  background: #fef2f2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUVFO0VBRUUsOEJBQUE7QUFESjtBQUdFO0VBRUUsOEJBQUE7QUFGSjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBRko7QUFJRTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUZKO0FBSUU7RUFDRSw4QkFBQTtBQUZKO0FBS0U7RUFFRSw4QkFBQTtBQUpKIiwiZmlsZSI6ImFjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAYW5ndWxhci9tYXRlcmlhbFwiIGFzIG1hdDtcblxuOmhvc3QgOjpuZy1kZWVwIC5wLWFjY29yZGlvbi10YWIge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICAucC1hY2NvcmRpb24taGVhZGVyOm5vdCgucC1oaWdobGlnaHQpOm5vdCgucC1kaXNhYmxlZCk6aG92ZXJcbiAgICAucC1hY2NvcmRpb24taGVhZGVyLWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lKFwiY29sb3JzLnByaW1hcnktbGlnaHRcIikgIWltcG9ydGFudDtcbiAgfVxuICAucC1hY2NvcmRpb24taGVhZGVyOm5vdCgucC1oaWdobGlnaHQpOm5vdCgucC1kaXNhYmxlZCk6aGFzKC5pbnZhbGlkKTpob3ZlclxuICAgIC5wLWFjY29yZGlvbi1oZWFkZXItbGluayB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUoXCJjb2xvcnMucmVkLjEwMFwiKSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWFjY29yZGlvbi1oZWFkZXIgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rOmhhcyguaW52YWxpZCkge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lKFwiY29sb3JzLnJlZC41MFwiKTtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0aGVtZShcImNvbG9ycy5yZWQuNTAwXCIpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHRoZW1lKFwiY29sb3JzLnJlZC41MDBcIikgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtYWNjb3JkaW9uLWhlYWRlciAucC1hY2NvcmRpb24taGVhZGVyLWxpbmsge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjg7XG4gICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdGhlbWUoXCJjb2xvcnMucHJpbWFyeS1kYXJrXCIpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHRoZW1lKFwiY29sb3JzLnByaW1hcnktZGFya1wiKSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgfVxuICAucC1hY2NvcmRpb24taGVhZGVyOm5vdCgucC1kaXNhYmxlZCkucC1oaWdobGlnaHQgLnAtYWNjb3JkaW9uLWhlYWRlci1saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZShcImNvbG9ycy5wcmltYXJ5LWxpZ2h0XCIpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1hY2NvcmRpb24taGVhZGVyOm5vdCgucC1kaXNhYmxlZCk6aGFzKC5pbnZhbGlkKS5wLWhpZ2hsaWdodFxuICAgIC5wLWFjY29yZGlvbi1oZWFkZXItbGluayB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUoXCJjb2xvcnMucmVkLjUwXCIpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7690:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete-input/autocomplete-input.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteInputComponent": () => (/* binding */ AutocompleteInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);









function AutocompleteInputComponent_mat_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AutocompleteInputComponent_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteInputComponent_mat_label_1_span_2_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched && ctx_r0.required);
} }
function AutocompleteInputComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6, " ");
} }
function AutocompleteInputComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.name, " field is required");
} }
class AutocompleteInputComponent {
    constructor() {
        this.name = '';
        this.type = 'text';
        this.icon = '';
        this.options = [];
        this.placeholder = '';
        this.value = undefined;
        this.required = true;
        this.disabled = false;
        // filteredOptions!: Observable<string[]>;
        this.filteredOptions = [];
        this.onChange = () => { };
    }
    ngOnInit() {
        this.filteredOptions = this.options;
        // this.filteredOptions = this.myControl.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(<any>value)),
        // );
    }
    filterArray(value) {
        this.filteredOptions = this._filter(value);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter((option) => option.toLowerCase().includes(filterValue));
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        if (this.disabled) {
            return;
        }
        this.value = val;
        this.onChange(this.value);
        this.onTouched();
        this.filterArray(this.value);
    }
}
AutocompleteInputComponent.ɵfac = function AutocompleteInputComponent_Factory(t) { return new (t || AutocompleteInputComponent)(); };
AutocompleteInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteInputComponent, selectors: [["qmt-autocomplete-input"]], inputs: { name: "name", type: "type", icon: "icon", options: "options", placeholder: "placeholder", value: "value", required: "required" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: AutocompleteInputComponent,
                multi: true,
            },
        ])], decls: 11, vars: 9, consts: [[1, "w-full"], ["for", "name", "class", "block capitalize text-[#525252] text-base font-normal", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width", "!pb-0", "!mt-0"], ["name", "name", "type", "text", "matInput", "", 1, "text-sm", "text-[#91919180]", "font-medium", 3, "matAutocomplete", "id", "ngModel", "required", "placeholder", "type", "ngModelChange", "input"], ["data", "ngModel"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matSuffix", ""], ["for", "name", 1, "block", "capitalize", "text-[#525252]", "text-base", "font-normal"], ["class", "text-red-500", 4, "ngIf"], [1, "text-red-500"], [3, "value"]], template: function AutocompleteInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteInputComponent_mat_label_1_Template, 3, 2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteInputComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("input", function AutocompleteInputComponent_Template_input_input_3_listener() { return ctx.filterArray(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function AutocompleteInputComponent_Template_mat_autocomplete_optionSelected_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.setValue(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteInputComponent_mat_option_7_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AutocompleteInputComponent_mat_error_8_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2)("id", ctx.name)("ngModel", ctx.value)("required", ctx.required)("placeholder", ctx.placeholder)("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched && ctx.required);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding: 0px;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: 0;\n}\n\n[_nghost-%COMP%]     input.mat-input-element::placeholder {\n  font-weight: 500;\n  font-size: 13px;\n  color: rgba(145, 145, 145, 0.5);\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.15em;\n}\n\n[_nghost-%COMP%]     .mat-button-wrapper > svg {\n  fill: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix > mat-icon, [_nghost-%COMP%]     .mat-form-field-suffix > mat-icon {\n  color: #5f6d7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUtFO0VBQ0UsU0FBQTtBQUhKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFISjs7QUFLRTtFQUNFLG1CQUFBO0FBSEo7O0FBS0U7O0VBRUUsV0FBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUpKOztBQVFJOztFQUNFLGNBQUE7QUFMTiIsImZpbGUiOiJhdXRvY29tcGxldGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC8vIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLy8gICBwYWRkaW5nOiAwO1xuICAvLyB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjUpO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIHRvcDogMC4xNWVtO1xuICB9XG5cbiAgLm1hdC1idXR0b24td3JhcHBlciA+IHN2ZyB7XG4gICAgZmlsbDogIzVmNmQ3ZTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtaW5maXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgICYgPiBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogIzVmNmQ3ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5994:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/checkbox/checkbox.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);


const _c0 = ["*"];
class CheckboxComponent {
    constructor() {
        this.color = 'primary';
        this.value = '';
    }
    ngOnInit() { }
    onChange(event) {
        if (event.checked) {
            this.control.setValue(this.value);
        }
        else {
            this.control.setValue('');
        }
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["qmt-checkbox"]], inputs: { color: "color", value: "value", control: "control" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "text-black", "text-sm", 3, "color", "checked", "change"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("checked", ctx.control && ctx.control.value === ctx.value);
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8337:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/datagrid/datagrid.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatagridComponent": () => (/* binding */ DatagridComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_generic_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/generic-api.service */ 7686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pagination/pagination.component */ 3556);










const _c0 = ["pTable"];
function DatagridComponent_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatagridComponent_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.downloadExcelData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Download Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DatagridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function DatagridComponent_div_1_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return _r1.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DatagridComponent_div_1_button_6_Template, 4, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.downloadExcel);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 32);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 33);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 34);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 35);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 36);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 37);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 38);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 39);
} }
function DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-columnFilter", 40);
} if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", column_r14.field);
} }
function DatagridComponent_ng_template_4_th_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_2_Template, 1, 0, "p-columnFilter", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_3_Template, 1, 0, "p-columnFilter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_4_Template, 1, 0, "p-columnFilter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_5_Template, 1, 0, "p-columnFilter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_6_Template, 1, 0, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_7_Template, 1, 0, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_8_Template, 1, 0, "p-columnFilter", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_9_Template, 1, 0, "p-columnFilter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DatagridComponent_ng_template_4_th_1_div_3_p_columnFilter_10_Template, 1, 1, "p-columnFilter", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", column_r14.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "created_at");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "submission_date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "last_to_portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "response_provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "is_vp_ehs_approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "company_operation_province");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "requestForm");
} }
function DatagridComponent_ng_template_4_th_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 41);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "more");
} }
function DatagridComponent_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DatagridComponent_ng_template_4_th_1_div_3_Template, 11, 9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DatagridComponent_ng_template_4_th_1_mat_icon_4_Template, 1, 1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("min-width", column_r14.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", column_r14.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.isFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.isFilter);
} }
function DatagridComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DatagridComponent_ng_template_4_th_1_Template, 5, 5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function DatagridComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 42);
} if (rf & 2) {
    const rowData_r28 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.bodyRef ? ctx_r3.bodyRef : _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, rowData_r28));
} }
function DatagridComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 45)(3, "g", 46)(4, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ellipse", 48)(6, "path", 49)(7, "path", 50)(8, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "g", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ellipse", 54)(12, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " No Data to Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function DatagridComponent_qmt_pagination_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "qmt-pagination", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function DatagridComponent_qmt_pagination_7_Template_qmt_pagination_onNext_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.onNext(); })("onPrevious", function DatagridComponent_qmt_pagination_7_Template_qmt_pagination_onPrevious_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.onPrevious(); })("onRowsChange", function DatagridComponent_qmt_pagination_7_Template_qmt_pagination_onRowsChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.onRowsChange($event); })("onGoToPage", function DatagridComponent_qmt_pagination_7_Template_qmt_pagination_onGoToPage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.onGoToPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("totalRecords", ctx_r5.totalRecords)("rows", ctx_r5.rows)("first", ctx_r5.first);
} }
function DatagridComponent_ng_template_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r36 = ctx.$implicit;
    const rowData_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r34[column_r36.field], " ");
} }
function DatagridComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DatagridComponent_ng_template_8_td_1_Template, 3, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.columns);
} }
const _c2 = [[["", "extraButtons", ""]]];
const _c3 = function () { return [1, 5, 10, 25, 50]; };
const _c4 = ["[extraButtons]"];
class DatagridComponent {
    constructor(genericApiService) {
        this.genericApiService = genericApiService;
        this.columnsTemplate = null;
        this.serverSide = false;
        this.searchPagination = true;
        this.isFilter = false;
        this.downloadExcel = false;
        this.log = console.log;
        this.totalRecords = 0;
        this.data = [];
        this.first = 0;
        this.rows = 25;
        this.isLoading = false;
        this.filters = {};
        this.globalFilters = [];
        this.loadData = (event) => {
            var _a, _b, _c, _d, _e;
            this.savedEvent = event;
            if (!event) {
                event = {
                    first: this.pTable._first,
                    rows: this.pTable._rows,
                    globalFilter: (_c = (_b = (_a = this.pTable) === null || _a === void 0 ? void 0 : _a.filters) === null || _b === void 0 ? void 0 : _b.global) === null || _c === void 0 ? void 0 : _c.value,
                    filters: (_d = this.pTable) === null || _d === void 0 ? void 0 : _d.filters,
                    // search: this.pTable?.globalFilter
                };
            }
            let filterObj = {};
            let filters = [];
            for (const key in event.filters) {
                let value = event.filters[key];
                if ((_e = value === null || value === void 0 ? void 0 : value[0]) === null || _e === void 0 ? void 0 : _e['value']) {
                    filterObj[key] = event.filters[key];
                    for (const ele of filterObj[key]) {
                        if (ele['value']) {
                            filters.push({
                                column: key,
                                operator: ele['matchMode'],
                                value: ele['value'],
                            });
                        }
                    }
                }
            }
            if (this.serverSide && this.url) {
                this.isLoading = true;
                if ((event === null || event === void 0 ? void 0 : event.first) !== undefined && (event === null || event === void 0 ? void 0 : event.first) !== null && event.rows) {
                    this.first = event.first;
                    this.rows = event.rows;
                    const search = (event === null || event === void 0 ? void 0 : event.globalFilter) ? event === null || event === void 0 ? void 0 : event.globalFilter : '';
                    this.genericApiService
                        .getAll({
                        params: {
                            page: event.first / event.rows || 0,
                            limit: event.rows,
                            filters: event.filters ? JSON.stringify(filters) : null,
                            search,
                        },
                    })
                        .subscribe((res) => {
                        if (res.data) {
                            this.data = res.data.rows;
                            this.totalRecords = res.data.count;
                        }
                        this.isLoading = false;
                    });
                }
            }
            else {
                this.data = this.value;
                this.totalRecords = this.data.length;
            }
        };
    }
    // recallApi = () => {
    //   this.loadData()
    // };
    // statuses = [
    //   { label: "Unqualified", value: "unqualified" },
    //   { label: "Qualified", value: "qualified" },
    //   { label: "New", value: "new" },
    //   { label: "Negotiation", value: "negotiation" },
    //   { label: "Renewal", value: "renewal" },
    //   { label: "Proposal", value: "proposal" }
    // ];
    downloadExcelData() {
        this.genericApiService
            .getAll({
            params: {
                download: true,
            },
        })
            .subscribe((res) => {
            if (res.data) {
                const link = document.createElement('a');
                link.href = [
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BE_BASE_URL,
                    res.data.split('./public')[1],
                ].join('/');
                link.click();
            }
        });
    }
    onGoToPage(page) {
        var _a, _b, _c;
        this.first = page * this.rows;
        this.loadData({
            first: this.first,
            rows: this.rows,
            globalFilter: (_c = (_b = (_a = this.pTable) === null || _a === void 0 ? void 0 : _a.filters) === null || _b === void 0 ? void 0 : _b.global) === null || _c === void 0 ? void 0 : _c.value,
        });
    }
    onNext() {
        var _a, _b, _c;
        this.first = this.first + this.rows;
        this.loadData({
            first: this.first,
            rows: this.rows,
            globalFilter: (_c = (_b = (_a = this.pTable) === null || _a === void 0 ? void 0 : _a.filters) === null || _b === void 0 ? void 0 : _b.global) === null || _c === void 0 ? void 0 : _c.value,
        });
    }
    onPrevious() {
        var _a, _b, _c;
        this.first = this.first - this.rows;
        this.loadData({
            first: this.first,
            rows: this.rows,
            globalFilter: (_c = (_b = (_a = this.pTable) === null || _a === void 0 ? void 0 : _a.filters) === null || _b === void 0 ? void 0 : _b.global) === null || _c === void 0 ? void 0 : _c.value,
        });
    }
    onRowsChange(rows) {
        var _a, _b, _c;
        this.rows = rows;
        this.loadData({
            first: this.first,
            rows: this.rows,
            globalFilter: (_c = (_b = (_a = this.pTable) === null || _a === void 0 ? void 0 : _a.filters) === null || _b === void 0 ? void 0 : _b.global) === null || _c === void 0 ? void 0 : _c.value,
        });
    }
    ngOnInit() {
        if (this.url) {
            this.genericApiService.setEndPoint(this.url);
        }
        this.globalFilters = this.columns.map((item) => item.field);
    }
    ngAfterViewInit() { }
    ngOnChanges(changes) {
        if (!changes['serverSide'] && !changes['url']) {
            this.data = changes['value'].currentValue;
            this.totalRecords = changes['value'].currentValue.length;
        }
        if (changes['url'] && changes['url'].currentValue) {
            this.genericApiService.setEndPoint(changes['url'].currentValue);
            if (changes['url'].previousValue) {
                this.first = 0;
                this.rows = 25;
                this.filters = {};
                this.loadData({
                    first: 0,
                    rows: this.rows,
                    globalFilter: '',
                });
            }
        }
    }
    onFilter($event) {
        console.log($event);
    }
}
DatagridComponent.ɵfac = function DatagridComponent_Factory(t) { return new (t || DatagridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_generic_api_service__WEBPACK_IMPORTED_MODULE_1__.GenericApiService)); };
DatagridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DatagridComponent, selectors: [["qmt-datagrid"]], viewQuery: function DatagridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pTable = _t.first);
    } }, inputs: { value: "value", columns: "columns", columnsTemplate: "columnsTemplate", serverSide: "serverSide", url: "url", bodyRef: "bodyRef", searchPagination: "searchPagination", isFilter: "isFilter", downloadExcel: "downloadExcel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 10, vars: 13, consts: [[1, "border", "border-gray-A1", "border-solid", "my-10", "rounded-lg"], ["class", "p-5 flex justify-between items-center datagrid-search", 4, "ngIf"], ["dataKey", "_id", "scrollDirection", "both", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "scrollable", "lazy", "totalRecords", "filters", "rows", "first", "loading", "rowsPerPageOptions", "showCurrentPageReport", "onLazyLoad", "onFilter"], ["pTable", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "totalRecords", "rows", "first", "onNext", "onPrevious", "onRowsChange", "onGoToPage", 4, "ngIf"], ["defaultBody", ""], [1, "p-5", "flex", "justify-between", "items-center", "datagrid-search"], [1, "p-d-flex"], [1, "p-input-icon-left", "p-ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 3, "input"], [1, "flex", "justify-end", "items-center"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["class", "!py-[14px] !flex-1 !bg-gray-A2 border-solid !border-r-2 !border-r-white !border-b !border-b-gray-A3 !text-gray-A3 !font-semibold !text-[13px]", 3, "min-width", 4, "ngFor", "ngForOf"], [1, "!py-[14px]", "!flex-1", "!bg-gray-A2", "border-solid", "!border-r-2", "!border-r-white", "!border-b", "!border-b-gray-A3", "!text-gray-A3", "!font-semibold", "!text-[13px]"], [1, "!flex", "!justify-between", "!items-center", "!h-full", "!w-full"], [4, "ngIf"], ["class", "!w-[20px] !h-[30px]", 3, "svgIcon", 4, "ngIf"], [3, "ngSwitch"], ["type", "date", "field", "created_at", "display", "menu", 4, "ngSwitchCase"], ["type", "date", "field", "submission_date", "display", "menu", 4, "ngSwitchCase"], ["type", "date", "field", "last_to_portal", "display", "menu", 4, "ngSwitchCase"], ["type", "boolean", "field", "response_provided", "display", "menu", 4, "ngSwitchCase"], ["type", "boolean", "field", "is_vp_ehs_approved", "display", "menu", 4, "ngSwitchCase"], ["field", "action", "display", "none", "class", "hidden", 4, "ngSwitchCase"], ["field", "company_operation_province", "display", "none", "class", "hidden", 4, "ngSwitchCase"], ["field", "requestForm", "display", "none", "class", "hidden", 4, "ngSwitchCase"], ["type", "text", "display", "menu", "hideOnClear", "true", 3, "field", 4, "ngSwitchDefault"], ["type", "date", "field", "created_at", "display", "menu"], ["type", "date", "field", "submission_date", "display", "menu"], ["type", "date", "field", "last_to_portal", "display", "menu"], ["type", "boolean", "field", "response_provided", "display", "menu"], ["type", "boolean", "field", "is_vp_ehs_approved", "display", "menu"], ["field", "action", "display", "none", 1, "hidden"], ["field", "company_operation_province", "display", "none", 1, "hidden"], ["field", "requestForm", "display", "none", 1, "hidden"], ["type", "text", "display", "menu", "hideOnClear", "true", 3, "field"], [1, "!w-[20px]", "!h-[30px]", 3, "svgIcon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "justify-center", "items-center", "h-96", "w-full"], [1, "flex", "justify-center", "items-center", "h-full", "w-full", "flex-col"], ["width", "120", "height", "100", "viewBox", "0 0 184 152", "aria-hidden", "", "focusable", "false"], ["fill", "none", "fillRule", "evenodd"], ["transform", "translate(24 31.67)"], ["fill", "#f5f5f5", "fill-opacity", "0.8", "cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668"], ["fill", "#aeb8c2", "d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"], ["fill", "#f5f5f7", "d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"], ["fill", "#dce0e6", "d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"], ["fill", "#dce0e6", "d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"], ["fill", "#fff", "transform", "translate(149.65 15.383)"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"], [1, "mt-3", "text-lg", "text-neutral-500", "font-medium"], [3, "totalRecords", "rows", "first", "onNext", "onPrevious", "onRowsChange", "onGoToPage"], ["class", "!border-b-gray-A1 !p-4 text-gray-A3", 4, "ngFor", "ngForOf"], [1, "!border-b-gray-A1", "!p-4", "text-gray-A3"], [1, "flex", "justify-start", "items-center", "h-full", "w-full"]], template: function DatagridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DatagridComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLazyLoad", function DatagridComponent_Template_p_table_onLazyLoad_2_listener($event) { return ctx.loadData($event); })("onFilter", function DatagridComponent_Template_p_table_onFilter_2_listener() { return ctx.onFilter; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DatagridComponent_ng_template_4_Template, 2, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DatagridComponent_ng_template_5_Template, 1, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DatagridComponent_ng_template_6_Template, 15, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DatagridComponent_qmt_pagination_7_Template, 1, 3, "qmt-pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DatagridComponent_ng_template_8_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchPagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.data)("scrollable", true)("lazy", true)("totalRecords", ctx.totalRecords)("filters", ctx.filters)("rows", ctx.rows)("first", ctx.first)("loading", ctx.isLoading)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c3))("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchPagination);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ColumnFilter, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6634:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/date-input/date-input.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputComponent": () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);







function DateInputComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DateInputComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.name, " field is required");
} }
class DateInputComponent {
    constructor() {
        this.name = '';
        this.placeholder = '';
        this.value = new Date();
        this.disabled = false;
        this.onChange = () => { };
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        if (this.disabled) {
            return;
        }
        let formattedDate = val.toISOString().split('T')[0];
        this.value = val;
        this.onChange(formattedDate);
        this.onTouched();
    }
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(); };
DateInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateInputComponent, selectors: [["qmt-date-input"]], inputs: { name: "name", placeholder: "placeholder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: DateInputComponent,
                multi: true,
            },
        ])], decls: 11, vars: 9, consts: [[1, "w-full"], ["for", "name", 1, "block", "capitalize", "mb-2", "text-[#525252]", "text-base", "font-normal"], ["class", "text-red-500", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "required", "", "readonly", "", 1, "text-sm", "text-[#91919180]", "font-medium", 3, "id", "value", "ngModel", "placeholder", "matDatepicker", "ngModelChange", "dateInput"], ["data", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "text-red-500"]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateInputComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3)(5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateInputComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; })("dateInput", function DateInputComponent_Template_input_dateInput_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.setValue(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 6)(8, "mat-datepicker", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DateInputComponent_mat_error_10_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.name)("value", ctx.value ? ctx.value : "DD/MM/YYY")("ngModel", ctx.value)("placeholder", ctx.placeholder)("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: 0;\n}\n\n[_nghost-%COMP%]     input.mat-input-element::placeholder {\n  font-weight: 500;\n  font-size: 13px;\n  color: rgba(145, 145, 145, 0.5);\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.15em;\n}\n\n[_nghost-%COMP%]     .mat-button-wrapper > svg {\n  fill: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix > mat-icon, [_nghost-%COMP%]     .mat-form-field-suffix > mat-icon {\n  color: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFPRTtFQUNFLFNBQUE7QUFKSjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBSko7O0FBTUU7RUFDRSxtQkFBQTtBQUpKOztBQU1FOztFQUVFLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7QUFMSjs7QUFRSTtFQUNFLGNBQUE7QUFOTjs7QUFnQkU7RUFDRSxXQUFBO0FBZEoiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAvLyBjb2xvcjogIzkxOTE5MTgwO1xuICB9XG4gIC8vIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLy8gICBwYWRkaW5nOiAwO1xuICAvLyB9XG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC41KTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICB0b3A6IDAuMTVlbTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXdyYXBwZXIgPiBzdmcge1xuICAgIGZpbGw6ICM1ZjZkN2U7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4LCAubWF0LWZvcm0tZmllbGQtc3VmZml4e1xuICAgICYgPiBtYXQtaWNvbntcbiAgICAgIGNvbG9yOiAjNWY2ZDdlO1xuICAgIH1cbiAgfVxuICAvLyBmb3IgZGF0ZSBpbnB1dCBvbmx5XG4gIC5tYXQtZm9ybS1maWVsZDpub3QoLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5KVxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4XG4gIC5tYXQtaWNvbi1idXR0b24ge1xuICAgIC8vIHdpZHRoOiBhdXRvO1xuICB9XG4gIC8vIGZvciBkYXRlIGlucHV0IG9ubHlcbiAgLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 456:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/file-input/file-input.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileInputComponent": () => (/* binding */ FileInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);




function FileInputComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.icon);
} }
class FileInputComponent {
    constructor() {
        this.name = '';
        this.placeholder = '';
        this.icon = 'publish';
        this.allowedFileTypes = '.jpg, .png, .pdf';
        this.value = '';
        this.disabled = false;
        this.onTouched = () => { };
        this.onChange = () => { };
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        if (this.disabled) {
            return;
        }
        this.value = val;
        this.onChange(this.value);
        this.onTouched();
    }
    onSelectFile(val, e) {
        this.setValue(val.files);
    }
    clickFileInput(e) {
        e.click();
    }
}
FileInputComponent.ɵfac = function FileInputComponent_Factory(t) { return new (t || FileInputComponent)(); };
FileInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileInputComponent, selectors: [["qmt-file-input"]], inputs: { name: "name", placeholder: "placeholder", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: FileInputComponent,
                multi: true,
            },
        ])], decls: 9, vars: 6, consts: [[1, "w-full"], ["for", "name", 1, "block", "w-full", "capitalize", "mb-6", "text-[#525252]", "text-base", "font-normal"], [1, "example-full-width", "w-full", "rounded-lg", "border", "border-[#91919180]", "border-dotted", "p-[7px]", "flex", "items-center", "gap-3", 3, "click"], ["class", "text-[#4D4D4D]", "matPreffix", "", 4, "ngIf"], [1, "block", "text-sm", "text-[#91919180]", "font-medium", "cursor-pointer"], ["type", "file", 1, "hidden", 3, "accept", "name", "id", "change"], ["file", ""], ["matPreffix", "", 1, "text-[#4D4D4D]"]], template: function FileInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileInputComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.clickFileInput(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileInputComponent_mat_icon_4_Template, 2, 1, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileInputComponent_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onSelectFile($event.target, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.placeholder, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx.allowedFileTypes)("name", ctx.name)("id", ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: 0;\n}\n\n[_nghost-%COMP%]     input.mat-input-element::placeholder {\n  font-weight: 500;\n  font-size: 13px;\n  color: rgba(145, 145, 145, 0.5);\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.15em;\n}\n\n[_nghost-%COMP%]     .mat-button-wrapper > svg {\n  fill: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix > mat-icon, [_nghost-%COMP%]     .mat-form-field-suffix > mat-icon {\n  color: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n  display: flex;\n  gap: 10px;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: transparent;\n  border: 1px dotted #91919180;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFPRTtFQUNFLFNBQUE7QUFKSjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBSko7O0FBTUU7RUFDRSxtQkFBQTtBQUpKOztBQU1FOztFQUVFLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7QUFMSjs7QUFTSTs7RUFDRSxjQUFBO0FBTk47O0FBVUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQVJKOztBQVVFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBUkoiLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAvLyBjb2xvcjogIzkxOTE5MTgwO1xuICB9XG4gIC8vIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLy8gICBwYWRkaW5nOiAwO1xuICAvLyB9XG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC41KTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICB0b3A6IDAuMTVlbTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXdyYXBwZXIgPiBzdmcge1xuICAgIGZpbGw6ICM1ZjZkN2U7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAmID4gbWF0LWljb24ge1xuICAgICAgY29sb3I6ICM1ZjZkN2U7XG4gICAgfVxuICB9XG4gIC8vIG9ubHkgZm9yIGZpbGUgaW5wdXRcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjOTE5MTkxODA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC8vIG9ubHkgZm9yIGZpbGUgaW5wdXQgZW5kXG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6253:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-heading/form-heading.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormHeadingComponent": () => (/* binding */ FormHeadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ 9975);


const _c0 = ["*"];
class FormHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormHeadingComponent.ɵfac = function FormHeadingComponent_Factory(t) { return new (t || FormHeadingComponent)(); };
FormHeadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormHeadingComponent, selectors: [["qmt-form-heading"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "!m-0", "text-[#262626]", "!font-semibold", "!text-base", "pb-3"], [1, "w-full", "mt-3"]], template: function FormHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 1);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__.MatDivider], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taGVhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImZvcm0taGVhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5476:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/heading/heading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadingComponent": () => (/* binding */ HeadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class HeadingComponent {
    constructor() {
        this.class = '';
    }
    ngOnInit() { }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(); };
HeadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingComponent, selectors: [["qmt-heading"]], inputs: { class: "class" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "border-b", "border-solid", "border-[#A8A8A84A]", "font-semibold", "text-base", "pb-3"]], template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2371:
/*!************************************************************!*\
  !*** ./src/app/shared/components/input/input.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);






function InputComponent_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.label, " ");
} }
function InputComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.icon);
} }
class InputComponent {
    constructor() {
        this.label = '';
        this.type = 'text';
        this.icon = '';
        this.placeholder = '';
        this.step = '';
        this.required = true;
        this.value = '';
        this.disabled = false;
        this.formControlName = '';
        this.onTouched = () => { };
        this.onChange = () => { };
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        if (this.disabled) {
            return;
        }
        if (this.type == 'number') {
            val = parseInt(val);
        }
        this.value = val;
        this.onChange(this.value);
        this.onTouched();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["qmt-input"]], inputs: { label: "label", type: "type", icon: "icon", placeholder: "placeholder", step: "step", required: "required", value: "value", disabled: "disabled", formControlName: "formControlName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: InputComponent,
                multi: true,
            },
        ])], decls: 5, vars: 7, consts: [[1, "w-full"], ["for", "name", "class", "block capitalize text-[#525252] text-base font-normal", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", 1, "text-sm", "text-[#91919180]", "font-medium", 3, "id", "placeholder", "type", "required", "disabled"], ["matSuffix", "", 4, "ngIf"], ["for", "name", 1, "block", "capitalize", "text-[#525252]", "text-base", "font-normal"], [1, "text-red-500"], ["matSuffix", ""]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_mat_label_1_Template, 4, 1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_mat_icon_4_Template, 2, 1, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.label)("placeholder", ctx.placeholder)("type", ctx.type)("required", ctx.required)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .mat-form-field {\n  margin-top: 0px;\n}\n\n[_nghost-%COMP%]     .mat-form-field-disabled .mat-form-field-flex .mat-form-field-outline {\n  background: #f7f7f8;\n  border-radius: 4px;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: 0;\n}\n\n[_nghost-%COMP%]     input.mat-input-element::placeholder {\n  font-weight: 500;\n  font-size: 13px;\n  color: rgba(145, 145, 145, 0.5);\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.15em;\n}\n\n[_nghost-%COMP%]     .mat-button-wrapper > svg {\n  fill: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix > mat-icon, [_nghost-%COMP%]     .mat-form-field-suffix > mat-icon {\n  color: #5f6d7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBSUU7RUFDRSxTQUFBO0FBRko7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFJRTs7RUFFRSxXQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0FBSEo7O0FBT0k7O0VBQ0UsY0FBQTtBQUpOIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC41KTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICB0b3A6IDAuMTVlbTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXdyYXBwZXIgPiBzdmcge1xuICAgIGZpbGw6ICM1ZjZkN2U7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAmID4gbWF0LWljb24ge1xuICAgICAgY29sb3I6ICM1ZjZkN2U7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 7827:
/*!************************************************************!*\
  !*** ./src/app/shared/components/label/label.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelComponent": () => (/* binding */ LabelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function LabelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class LabelComponent {
    constructor() {
        this.required = false;
    }
    ngOnInit() { }
}
LabelComponent.ɵfac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(); };
LabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelComponent, selectors: [["qmt-label"]], inputs: { required: "required" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "text-[#525252]", "text-base", "!mb-0"], ["class", "text-red-500 ml-1", 4, "ngIf"], [1, "text-red-500", "ml-1"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LabelComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWJlbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8424:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["qmt-loading"]], decls: 2, vars: 0, consts: [[1, "absolute", "z-[11000]", "w-full", "h-full", "flex", "justify-center", "items-center", "bg-[#00000020]"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3181:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/new/autocomplete/autocomplete.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAutocompleteComponent": () => (/* binding */ NewAutocompleteComponent),
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../label/label.component */ 7827);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autocomplete */ 1338);






function NewAutocompleteComponent_qmt_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "qmt-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r0.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function NewAutocompleteComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getErrorMessages());
} }
function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
class NewAutocompleteComponent {
    constructor() {
        this.required = false;
        this.multiple = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
        this.options = [];
        this.disabled = false;
        this.filterdOptions = [];
        this.errorMessageObject = {
            required: (field) => {
                return `${field ? field : 'This field'} is required`;
            },
        };
        this.getErrorMessages = () => {
            let messages = [];
            if (this.control.errors) {
                for (const key of Object.keys(this.control.errors)) {
                    messages.push(this.errorMessageObject[key]
                        ? this.errorMessageObject[key](this.label, this.control.errors[key])
                        : '');
                }
            }
            return messages[0] ? messages[0] : null;
        };
    }
    ngOnInit() {
        this.filterdOptions = this.options;
    }
    filterOptions(event) {
        if (this.field) {
            const filtered = [];
            const searchRegex = new RegExp(escapeRegExp(event.query.trim()), 'i');
            // console.log(this.options)
            for (const option of this.options) {
                if (option[this.field] && searchRegex.test(option[this.field])) {
                    filtered.push(option);
                }
            }
            this.filterdOptions = filtered;
        }
        else {
            const filtered = [];
            const searchRegex = new RegExp(escapeRegExp(event.query.trim()), 'i');
            for (const option of this.options) {
                if (option && searchRegex.test(option)) {
                    filtered.push(option);
                }
            }
            this.filterdOptions = filtered;
        }
    }
    isError() {
        return (this.control &&
            this.control.touched &&
            this.control.errors &&
            Object.keys(this.control.errors).length);
    }
    clearItem(autocomplete) {
        autocomplete.value = '';
        autocomplete.handleDropdownClick();
    }
}
NewAutocompleteComponent.ɵfac = function NewAutocompleteComponent_Factory(t) { return new (t || NewAutocompleteComponent)(); };
NewAutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewAutocompleteComponent, selectors: [["qmt-new-autocomplete"]], inputs: { label: "label", field: "field", required: "required", multiple: "multiple", control: "control", options: "options", disabled: "disabled" }, decls: 5, vars: 12, consts: [[1, "field"], [3, "required", 4, "ngIf"], ["appendTo", "body", 1, "w-full", 3, "suggestions", "formControl", "field", "dropdown", "multiple", "disabled", "completeMethod", "onFocus", "onClear"], ["autocomplete", ""], ["id", "name", "class", "p-error block", 4, "ngIf"], [3, "required"], ["id", "name", 1, "p-error", "block"]], template: function NewAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewAutocompleteComponent_qmt_label_1_Template, 2, 2, "qmt-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-autoComplete", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("completeMethod", function NewAutocompleteComponent_Template_p_autoComplete_completeMethod_2_listener($event) { return ctx.filterOptions($event); })("onFocus", function NewAutocompleteComponent_Template_p_autoComplete_onFocus_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r1.handleDropdownClick(); })("onClear", function NewAutocompleteComponent_Template_p_autoComplete_onClear_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.clearItem(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NewAutocompleteComponent_small_4_Template, 2, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-invalid", ctx.isError())("ng-dirty", ctx.isError());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("suggestions", ctx.filterdOptions)("formControl", ctx.control)("field", ctx.field)("dropdown", true)("multiple", ctx.multiple)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _label_label_component__WEBPACK_IMPORTED_MODULE_0__.LabelComponent, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoComplete, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["[_nghost-%COMP%]     .p-autocomplete.p-component {\n  width: 100% !important;\n  display: block !important;\n  position: relative;\n}\n[_nghost-%COMP%]     p-autocomplete.ng-dirty.ng-invalid > .p-autocomplete > .p-inputtext {\n  border-color: #ef4444 !important;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  width: 100% !important;\n  padding: 0.6rem 0.857rem !important;\n  border-radius: 8px !important;\n  border-color: #dae0e6;\n}\n[_nghost-%COMP%]     .p-element.p-ripple.p-autocomplete-dropdown {\n  position: absolute !important;\n  top: 61%;\n  right: 0px;\n  border-radius: 8px !important;\n  transform: translateY(-50%);\n  background: none !important;\n  color: #5F6D7E !important;\n}\n[_nghost-%COMP%]     .p-autocomplete-token {\n  font-size: 12px !important;\n  padding: 5px 7.7px !important;\n  color: #272d37 !important;\n  background: #f7f7f8 !important;\n}\n[_nghost-%COMP%]     .p-autocomplete-multiple-container {\n  padding: 5px 10px !important;\n}\n[_nghost-%COMP%]     .p-autocomplete-token-icon {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxnQ0FBQTtBQUFKO0FBRUU7RUFDRSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUU7RUFDRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVFO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVFO0VBQ0UsNEJBQUE7QUFBSjtBQUVFO0VBQ0UsMEJBQUE7QUFBSiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAucC1hdXRvY29tcGxldGUucC1jb21wb25lbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgcC1hdXRvY29tcGxldGUubmctZGlydHkubmctaW52YWxpZCA+IC5wLWF1dG9jb21wbGV0ZSA+IC5wLWlucHV0dGV4dCB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtZShcImNvbG9ycy5yZWQuNTAwXCIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtaW5wdXR0ZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjg1N3JlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWUoXCJjb2xvcnMuZ3JheS1BMVwiKTtcbiAgfVxuICAucC1lbGVtZW50LnAtcmlwcGxlLnAtYXV0b2NvbXBsZXRlLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDYxJTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHRoZW1lKFwiY29sb3JzLmdyYXktQTNcIikgIWltcG9ydGFudDtcbiAgfVxuICAucC1hdXRvY29tcGxldGUtdG9rZW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCA3LjdweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMjcyZDM3ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWF1dG9jb21wbGV0ZS1tdWx0aXBsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtYXV0b2NvbXBsZXRlLXRva2VuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 7903:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/new/file-upload/file-upload.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/config */ 4659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../label/label.component */ 7827);
/* harmony import */ var _file_upload_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.directive */ 4477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);







function FileUploadComponent_qmt_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "qmt-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx_r0.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function FileUploadComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.control.value.length, " file selected ");
} }
function FileUploadComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.text);
} }
function FileUploadComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.getSrc(image_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FileUploadComponent_div_8_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.images);
} }
function FileUploadComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.getErrorMessages());
} }
class FileUploadComponent {
    constructor() {
        this.files = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.label = '';
        this.required = false;
        this.multiple = false;
        this.preview = false;
        this.accept = '';
        this.text = 'Upload your photo';
        this.images = [];
        this.errorMessageObject = {
            required: (field) => {
                return `${field ? field : 'This field'} is required`;
            },
        };
        this.getErrorMessages = () => {
            let messages = [];
            if (this.control.errors) {
                for (const key of Object.keys(this.control.errors)) {
                    messages.push(this.errorMessageObject[key]
                        ? this.errorMessageObject[key](this.label, this.control.errors[key])
                        : '');
                }
            }
            return messages[0] ? messages[0] : null;
        };
    }
    /**
     * on file drop handler
     */
    onFileDropped($event) {
        var _a;
        let files = [];
        Object.values($event).forEach((file) => files.push(file));
        this.files = files;
        (_a = this.control) === null || _a === void 0 ? void 0 : _a.setValue(this.files);
    }
    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        var _a;
        this.files = files;
        (_a = this.control) === null || _a === void 0 ? void 0 : _a.setValue(this.files);
    }
    ngOnInit() {
        var _a;
        (_a = this.control) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((values) => {
            if (this.preview) {
                for (const file of values) {
                    if (typeof file === 'string' && file.startsWith('/uploads')) {
                        this.images.push(src_app_shared_constants_config__WEBPACK_IMPORTED_MODULE_0__.BACKEND_URL + file);
                    }
                    else {
                        const reader = new FileReader();
                        reader.onload = () => {
                            this.images.push(reader.result);
                        };
                        reader.readAsDataURL(file);
                    }
                }
            }
        });
    }
    isError() {
        return (this.control &&
            this.control.touched &&
            this.control.errors &&
            Object.keys(this.control.errors).length);
    }
    getSrc(image) {
        if (image.startsWith('/uploads')) {
            return src_app_shared_constants_config__WEBPACK_IMPORTED_MODULE_0__.BACKEND_URL + image;
        }
        else {
            return image;
        }
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["qmt-file-upload"]], inputs: { control: "control", label: "label", required: "required", multiple: "multiple", preview: "preview", accept: "accept", text: "text" }, decls: 10, vars: 10, consts: [[3, "required", 4, "ngIf"], ["fileDragDrop", "", 1, "container", "mt-2", 3, "fileDropped"], ["type", "file", "id", "fileDropRef", 3, "multiple", "accept", "change"], ["fileDropRef", ""], [1, "text-gray-A3", "text-base", "flex", "justify-center", "items-center", "gap-4", "cursor-pointer"], [1, "!w-[15px]", "!h-[15px]", 3, "svgIcon"], [4, "ngIf"], ["class", "!mb-0", 4, "ngIf"], ["class", "grid gap-4 grid-cols-3", 4, "ngIf"], ["id", "name", "class", "p-error block", 4, "ngIf"], [3, "required"], [1, "!mb-0"], [1, "grid", "gap-4", "grid-cols-3"], [4, "ngFor", "ngForOf"], [3, "src"], ["id", "name", 1, "p-error", "block"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FileUploadComponent_qmt_label_0_Template, 2, 2, "qmt-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileDropped", function FileUploadComponent_Template_div_fileDropped_1_listener($event) { return ctx.onFileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_2_listener($event) { return ctx.fileBrowseHandler($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FileUploadComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FileUploadComponent_p_7_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FileUploadComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FileUploadComponent_small_9_Template, 2, 1, "small", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invalid", ctx.isError());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", ctx.multiple)("accept", ctx.accept);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!(ctx.control == null ? null : ctx.control.value == null ? null : ctx.control.value.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.control == null ? null : ctx.control.value == null ? null : ctx.control.value.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isError());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _label_label_component__WEBPACK_IMPORTED_MODULE_1__.LabelComponent, _file_upload_directive__WEBPACK_IMPORTED_MODULE_2__.DragDropFileUploadDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".container[_ngcontent-%COMP%] {\n  padding: 5px 18px;\n  text-align: center;\n  border: dashed 2px #dae0e6;\n  position: relative;\n  border-radius: 8px;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n.container.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n}\n.fileover[_ngcontent-%COMP%] {\n  background: #F1F2F3;\n  border-color: #5F6D7E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0UsZ0NBQUE7QUFERjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0Esb0JBQUEiLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMnB4IHRoZW1lKFwiY29sb3JzLmdyYXktQTFcIik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcblxuICBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTgzcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzg0MjRjO1xuICB9XG59XG4uY29udGFpbmVyLmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNlZjQ0NDQgIWltcG9ydGFudDtcbn1cbi5maWxlb3ZlciB7XG4gIGJhY2tncm91bmQ6IHRoZW1lKFwiY29sb3JzLmdyYXktQTJcIik7XG4gIGJvcmRlci1jb2xvcjogdGhlbWUoXCJjb2xvcnMuZ3JheS1BM1wiKTtcbn1cblxuLyogU2hha2UgYW5pbWF0aW9uICovXG4iXX0= */"] });


/***/ }),

/***/ 4477:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/new/file-upload/file-upload.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropFileUploadDirective": () => (/* binding */ DragDropFileUploadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class DragDropFileUploadDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
DragDropFileUploadDirective.ɵfac = function DragDropFileUploadDirective_Factory(t) { return new (t || DragDropFileUploadDirective)(); };
DragDropFileUploadDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropFileUploadDirective, selectors: [["", "fileDragDrop", ""]], hostVars: 2, hostBindings: function DragDropFileUploadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropFileUploadDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropFileUploadDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropFileUploadDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fileover", ctx.fileOver);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ 4758:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/new/input/input.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInputComponent": () => (/* binding */ NewInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../label/label.component */ 7827);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ 4409);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputmask */ 307);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);









function NewInputComponent_qmt_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "qmt-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r0.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function NewInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-invalid", ctx_r1.isError())("ng-dirty", ctx_r1.isError());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.type)("formControl", ctx_r1.control)("mask", ctx_r1.type == "tel" ? "(000) 000-0000" : "")("patterns", ctx_r1.customPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx_r1.disabled ? true : null);
} }
function NewInputComponent_p_inputMask_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-inputMask", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-invalid", ctx_r2.isError())("ng-dirty", ctx_r2.isError());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mask", ctx_r2.mask)("placeholder", ctx_r2.placeholder ? ctx_r2.placeholder : ctx_r2.mask)("formControl", ctx_r2.control)("autocomplete", "off")("type", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("inputmode", ctx_r2.type === "number" ? "numeric" : "");
} }
function NewInputComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx_r3.svgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.iconName);
} }
function NewInputComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.getErrorMessages());
} }
class NewInputComponent {
    constructor() {
        this.required = false;
        this.disabled = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
        this.type = 'text';
        this.wrapperClasses = '';
        this.errorMessageObject = {
            required: (field) => {
                return `${field ? field : 'This field'} is required`;
            },
            email: (field) => {
                return `${field ? field : 'This field'} must be a valid email`;
            },
            minlength: (field, errorObj) => {
                return `${field ? field : 'This field'} must be greater then or equals to ${errorObj.requiredLength} characters long`;
            },
            maxlength: (field, errorObj) => {
                return `${field ? field : 'This field'} must be less then or equals to ${errorObj.requiredLength} characters long`;
            },
            pattern: (field, errorObj) => {
                return `${field ? field : 'This field'} is not in valid format`;
            },
            passwordNotMatch: (field, errorObj) => {
                return `Passwords do not match`;
            },
            qmEmailNotValid: (field, errorObj) => {
                return `The Email Address you entered does not belong to QM Environmental.`;
            },
            passwordInvalid: (field, errorObj) => {
                return `*Password should be at least 8 characters length with special character, upper case, lower case and number.`;
            },
        };
        this.getErrorMessages = () => {
            let messages = [];
            if (this.control.errors) {
                for (const key of Object.keys(this.control.errors)) {
                    messages.push(this.errorMessageObject[key]
                        ? this.errorMessageObject[key](this.label, this.control.errors[key])
                        : '');
                }
            }
            return messages[0] ? messages[0] : null;
        };
    }
    ngOnInit() {
    }
    isError() {
        return (this.control &&
            this.control.touched &&
            this.control.errors &&
            Object.keys(this.control.errors).length);
    }
}
NewInputComponent.ɵfac = function NewInputComponent_Factory(t) { return new (t || NewInputComponent)(); };
NewInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewInputComponent, selectors: [["qmt-new-input"]], inputs: { label: "label", required: "required", disabled: "disabled", control: "control", type: "type", wrapperClasses: "wrapperClasses", iconName: "iconName", svgName: "svgName", customPattern: "customPattern", mask: "mask" }, decls: 7, vars: 5, consts: [[1, "field", "relative"], [3, "required", 4, "ngIf"], [1, "input-icon-group", "relative"], ["class", "!w-full p-inputtext-sm", "pInputText", "", 3, "type", "formControl", "ng-invalid", "ng-dirty", "mask", "patterns", 4, "ngIf"], ["pInputText", "", "class", "!w-full inline-block", "styleClass", "p-inputtext-sm", 3, "mask", "placeholder", "formControl", "autocomplete", "type", "ng-invalid", "ng-dirty", 4, "ngIf"], ["class", "material-symbols-outlined", 3, "svgIcon", 4, "ngIf"], ["id", "name", "class", "p-error block", 4, "ngIf"], [3, "required"], ["pInputText", "", 1, "!w-full", "p-inputtext-sm", 3, "type", "formControl", "mask", "patterns"], ["pInputText", "", "styleClass", "p-inputtext-sm", 1, "!w-full", "inline-block", 3, "mask", "placeholder", "formControl", "autocomplete", "type"], [1, "material-symbols-outlined", 3, "svgIcon"], ["id", "name", 1, "p-error", "block"]], template: function NewInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewInputComponent_qmt_label_1_Template, 2, 2, "qmt-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NewInputComponent_input_3_Template, 1, 9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NewInputComponent_p_inputMask_4_Template, 1, 10, "p-inputMask", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NewInputComponent_mat_icon_5_Template, 2, 2, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NewInputComponent_small_6_Template, 2, 1, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.svgName || ctx.iconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _label_label_component__WEBPACK_IMPORTED_MODULE_0__.LabelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, ngx_mask__WEBPACK_IMPORTED_MODULE_4__.MaskDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__.InputMask, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["[_nghost-%COMP%]     .field mat-icon {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n[_nghost-%COMP%]     .p-inputtext:has(.p-inputmask) {\n  border: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]     .p-inputtext:has(.p-inputmask) .p-inputmask {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUhKO0FBT0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUxGO0FBT0U7RUFDRSxXQUFBO0FBTEoiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICBcbiAgXG4gIC5maWVsZCB7XG4gIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAyMHB4O1xuICB9XG59XG5cbi5wLWlucHV0dGV4dDpoYXMoLnAtaW5wdXRtYXNrKSB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcblxuICAucC1pbnB1dG1hc2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG59Il19 */"] });


/***/ }),

/***/ 3185:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/new/textarea/textarea.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTextareaComponent": () => (/* binding */ NewTextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../label/label.component */ 7827);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);







function NewTextareaComponent_qmt_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "qmt-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r0.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function NewTextareaComponent_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getErrorMessages());
} }
class NewTextareaComponent {
    constructor() {
        this.required = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
        this.wrapperClasses = '';
        this.rows = 3;
        this.cols = 100;
        this.disabled = false;
        this.autoResize = false;
        this.errorMessageObject = {
            required: (field) => {
                return `${field ? field : 'This field'} is required`;
            },
            email: (field) => {
                return `${field ? field : 'This field'} must be a valid email`;
            },
            minlength: (field, errorObj) => {
                return `${field ? field : 'This field'} must be greater then or equals to ${errorObj.requiredLength} characters long`;
            },
            maxlength: (field, errorObj) => {
                return `${field ? field : 'This field'} must be less then or equals to ${errorObj.requiredLength} characters long`;
            },
        };
        this.getErrorMessages = () => {
            let messages = [];
            if (this.control.errors) {
                for (const key of Object.keys(this.control.errors)) {
                    messages.push(this.errorMessageObject[key]
                        ? this.errorMessageObject[key](this.label, this.control.errors[key])
                        : '');
                }
            }
            return messages[0] ? messages[0] : null;
        };
    }
    ngOnInit() { }
    isError() {
        return (this.control &&
            this.control.touched &&
            this.control.errors &&
            Object.keys(this.control.errors).length);
    }
}
NewTextareaComponent.ɵfac = function NewTextareaComponent_Factory(t) { return new (t || NewTextareaComponent)(); };
NewTextareaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewTextareaComponent, selectors: [["qmt-new-textarea"]], inputs: { label: "label", required: "required", control: "control", wrapperClasses: "wrapperClasses", rows: "rows", cols: "cols", disabled: "disabled", autoResize: "autoResize" }, decls: 4, vars: 11, consts: [[1, "field"], [3, "required", 4, "ngIf"], ["pInputText", "", "pInputTextarea", "", 1, "!w-full", "p-inputtext-sm", 3, "formControl", "rows", "cols", "autoResize"], ["id", "name", "class", "p-error block", 4, "ngIf"], [3, "required"], ["id", "name", 1, "p-error", "block"]], template: function NewTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewTextareaComponent_qmt_label_1_Template, 2, 2, "qmt-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NewTextareaComponent_small_3_Template, 2, 1, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-invalid", ctx.isError())("ng-dirty", ctx.isError());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("rows", ctx.rows)("cols", ctx.cols)("autoResize", ctx.autoResize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _label_label_component__WEBPACK_IMPORTED_MODULE_0__.LabelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7291:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-heading/page-heading.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeadingComponent": () => (/* binding */ PageHeadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 9975);



function PageHeadingComponent_mat_divider_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 5);
} }
const _c0 = ["*"];
class PageHeadingComponent {
    constructor() {
        this.title = '';
        this.divider = true;
    }
    ngOnInit() { }
}
PageHeadingComponent.ɵfac = function PageHeadingComponent_Factory(t) { return new (t || PageHeadingComponent)(); };
PageHeadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeadingComponent, selectors: [["qmt-page-heading"]], inputs: { title: "title", divider: "divider" }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "w-full", "flex", "items-center", "justify-between", "gap-3"], [1, "font-semibold", "text-base", "text-[#262626]", "py-1", "px-4", "relative"], [1, "bg-primary-dark", "w-1", "rounded-tr", "rounded-br", "absolute", "h-full", "top-0", "left-0"], [1, "flex", "gap-4", "justify-end", "items-center"], ["class", "w-full !mt-4", 4, "ngIf"], [1, "w-full", "!mt-4"]], template: function PageHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageHeadingComponent_mat_divider_6_Template, 1, 0, "mat-divider", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.divider);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJwYWdlLWhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ 3556:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);








function PaginationComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
const _c0 = function (a1) { return { "!text-[#5f6d7e] !min-w-[40px]": true, "!text-primary !bg-primary-light": a1 }; };
function PaginationComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_button_16_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToPage(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r3 * ctx_r1.rows === ctx_r1.first));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3 + 1, " ");
} }
const _c1 = function () { return [1, 5, 25, 50, 100]; };
class PaginationComponent {
    constructor() {
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onRowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onGoToPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    getPages() {
        let arr = Array(Math.ceil(this.totalRecords / this.rows))
            .fill(1)
            .map((_, index) => index);
        if (arr.length <= 5) {
            return arr;
        }
        const currentIndex = arr.indexOf(Math.ceil(this.first / this.rows));
        if (currentIndex <= 2) {
            return arr.slice(0, 5);
        }
        if (arr[currentIndex + 1] && arr[currentIndex + 2]) {
            return arr.slice(currentIndex - 2, currentIndex + 3);
        }
        return arr.slice(arr.length - 5, arr.length);
    }
    onChange(values) {
        this.selectRows(values.value);
    }
    goToPage(page) {
        this.onGoToPage.emit(page);
    }
    next() {
        this.onNext.emit();
    }
    previous() {
        this.onPrevious.emit();
    }
    selectRows(rows) {
        this.onRowsChange.emit(rows);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["qmt-pagination"]], inputs: { totalRecords: "totalRecords", rows: "rows", first: "first" }, outputs: { onNext: "onNext", onPrevious: "onPrevious", onRowsChange: "onRowsChange", onGoToPage: "onGoToPage" }, decls: 21, vars: 13, consts: [[1, "flex", "justify-between", "items-center", "py-3", "px-5"], [1, "flex", "justify-start", "items-center"], [1, "text-sm", "text-neutral-400", "font-medium"], [1, "h-5", "m-3", "w-[1px]", "bg-gray-300"], [1, "flex", "justify-start", "items-center", "gap-3", "text-[#5F6D7E]", "font-semibold"], ["appearance", "outline", 1, "!mt-0", "w-20"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "gap-4", "min-w-[20%]", "max-w-[50%]"], ["mat-button", "", 1, "!text-[#5F6D7E]", 3, "disabled", "click"], [1, "material-symbols-outlined", "text-base"], ["mat-button", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-button", "", 3, "ngClass", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function PaginationComponent_Template_mat_select_selectionChange_8_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PaginationComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_12_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " arrow_back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Prev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaginationComponent_button_16_Template, 2, 4, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_17_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " arrow_forward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Showing ", ctx.first + 1, " to ", ctx.first + ctx.rows >= ctx.totalRecords ? ctx.totalRecords : ctx.first + ctx.rows, " of ", ctx.totalRecords, " entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity-30", ctx.first === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.first === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getPages());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity-30", ctx.first + ctx.rows >= ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.first + ctx.rows >= ctx.totalRecords);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9611:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/search-box/search-box.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBoxComponent": () => (/* binding */ SearchBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





class SearchBoxComponent {
    constructor() {
        this.value = '';
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl();
        this.disabled = false;
        this.onChange = () => { };
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        var _a;
        if (this.disabled) {
            return;
        }
        if (val) {
            console.log(this.searchText);
            (_a = this.searchText) === null || _a === void 0 ? void 0 : _a.patchValue(val);
        }
        this.value = val;
        this === null || this === void 0 ? void 0 : this.onChange(this.value);
    }
}
SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
SearchBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBoxComponent, selectors: [["qmt-search-box"]], inputs: { searchText: "searchText" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
                useExisting: SearchBoxComponent,
                multi: true,
            },
        ])], decls: 5, vars: 0, consts: [["appearance", "outline", 1, "example-full-width"], ["type", "search", "matInput", "", "placeholder", "Search", 3, "input"], ["data", ""], ["matPrefix", "", "inline", "", 1, "mat-icon-rtl-mirror", "!w-5", "!h-5", "text-[#A8A8A8]", 2, "font-size", "20px"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchBoxComponent_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.setValue(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatPrefix], styles: ["[_nghost-%COMP%]     .mat-form-field {\n  font-size: 16px;\n  min-width: 350px;\n  margin-top: 0;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-subscript-wrapper {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 5px;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding: 0px 13px !important;\n}\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: none;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  padding-block: 7px;\n  align-items: center;\n}\n[_nghost-%COMP%]     input.mat-input-element {\n  line-height: 1;\n  margin-top: 1px;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBREo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBR0U7RUFDRSw0QkFBQTtBQURKO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFISjtBQUtFOztFQUVFLE1BQUE7QUFISiIsImZpbGUiOiJzZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBwYWRkaW5nOiAwcHggMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZy1ibG9jazogN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4762:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);







function StepperComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Employee Details");
} }
function StepperComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Work Details");
} }
function StepperComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "HR Settings");
} }
/**
 * @title Stepper with editable steps
 */
class StepperComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
StepperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepperComponent, selectors: [["qmt-stepper"]], decls: 33, vars: 7, consts: [["linear", "", 3, "disableRipple"], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], [1, "flex", "justify-end", "gap-2"], ["mat-flat-button", "", "matStepperNext", "", "color", "primary"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-stroked-button", "", "matStepperPrevious", "", "color", "primary"], ["mat-flat-button", "", "matStepperNext", "", "color", "primary", 3, "click"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-stepper", 0, 1)(2, "mat-step", 2)(3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepperComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 2)(13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StepperComponent_ng_template_14_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StepperComponent_ng_template_25_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "You are now done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__.MatStepperPrevious], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6709:
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function TableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function TableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*", [["", "options", ""]], [["", "customHeader", ""]]];
const _c1 = ["*", "[options]", "[customHeader]"];
class TableComponent {
    constructor() {
        this.title = '';
        this.filter = false;
        this.customHeader = false;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.filterValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.displayedColumns = [
            'Type Name',
            'Role/Department',
            'Employment Type',
            'Reporting Manager',
            'Pay Level',
            'Pay Frequency',
            'Salary/Hourly Wages',
            'Projects Overview',
            'Timesheet',
        ];
        this.columnsMap = {
            'Type Name': 'typeName',
            'Role/Department': 'role',
            'Employment Type': 'employmentType',
            'Reporting Manager': 'manager',
            'Pay Level': 'payLevel',
            'Pay Frequency': 'payFrequency',
            'Salary/Hourly Wages': 'wage',
            'Projects Overview': 'projects',
            Timesheet: 'timesheet',
        };
        this.columnsToDisplay = this.displayedColumns.slice();
    }
    ngOnInit() {
        this.filterValue.valueChanges.subscribe((val) => {
            this.onFilter.emit(val);
        });
    }
    addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["qmt-table"]], inputs: { title: "title", filter: "filter", customHeader: "customHeader" }, outputs: { onFilter: "onFilter" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "w-full", "border-[#EAEBF0]", "border-solid", "border", "rounded-[10px]", 2, "box-shadow", "0px 1px 2px rgba(16, 24, 40, 0.04)", "overflow", "hidden"], ["class", "w-full flex justify-between py-[22px] px-6", 4, "ngIf"], ["class", "w-full", 4, "ngIf"], [1, "w-full", "flex", "justify-between", "py-[22px]", "px-6"], [1, "capitalize", "font-medium", "text-base", "text-[#272D37]"], [1, "options"], [1, "w-full"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n[_nghost-%COMP%]     td, [_nghost-%COMP%]     th {\n  vertical-align: middle;\n}\n\n[_nghost-%COMP%]     tr.mat-header-row {\n  height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUU7O0VBRUUsc0JBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFDSiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCB7XG4gIHRkLFxuICB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICB0ci5tYXQtaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5131:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/textarea-input/textarea-input.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaInputComponent": () => (/* binding */ TextareaInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);






function TextareaInputComponent_mat_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextareaInputComponent_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextareaInputComponent_mat_label_1_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched && ctx_r0.required);
} }
class TextareaInputComponent {
    constructor() {
        this.name = '';
        this.placeholder = '';
        this.required = true;
        this.value = '';
        this.disabled = false;
        this.onChange = () => { };
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setValue(val) {
        if (this.disabled) {
            return;
        }
        this.value = val;
        this.onChange(this.value);
        this.onTouched();
    }
}
TextareaInputComponent.ɵfac = function TextareaInputComponent_Factory(t) { return new (t || TextareaInputComponent)(); };
TextareaInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextareaInputComponent, selectors: [["qmt-textarea-input"]], inputs: { name: "name", placeholder: "placeholder", required: "required" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: TextareaInputComponent,
                multi: true,
            },
        ])], decls: 5, vars: 5, consts: [[1, "w-full"], ["for", "name", "class", "block capitalize mb-2 text-[#525252] text-base font-normal", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width", "!mt-0"], ["matInput", "", 1, "text-sm", "text-[#91919180]", "font-medium", 3, "id", "ngModel", "required", "placeholder", "ngModelChange", "input"], ["data", "ngModel"], ["for", "name", 1, "block", "capitalize", "mb-2", "text-[#525252]", "text-base", "font-normal"], ["class", "text-red-500", 4, "ngIf"], [1, "text-red-500"]], template: function TextareaInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextareaInputComponent_mat_label_1_Template, 3, 2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "textarea", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextareaInputComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.value = $event; })("input", function TextareaInputComponent_Template_textarea_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.setValue(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.name)("ngModel", ctx.value)("required", ctx.required)("placeholder", ctx.placeholder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border: 0;\n}\n\n[_nghost-%COMP%]     input.mat-input-element::placeholder {\n  font-weight: 500;\n  font-size: 13px;\n  color: rgba(145, 145, 145, 0.5);\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-flex {\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-suffix {\n  top: 0.15em;\n}\n\n[_nghost-%COMP%]     .mat-button-wrapper > svg {\n  fill: #5f6d7e;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix > mat-icon, [_nghost-%COMP%]     .mat-form-field-suffix > mat-icon {\n  color: #5f6d7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBT0U7RUFDRSxTQUFBO0FBSko7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUpKOztBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFNRTs7RUFFRSxXQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0FBTEo7O0FBU0k7O0VBQ0UsY0FBQTtBQU5OIiwiZmlsZSI6InRleHRhcmVhLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgIC8vIGNvbG9yOiAjOTE5MTkxODA7XG4gIH1cbiAgLy8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAvLyAgIHBhZGRpbmc6IDA7XG4gIC8vIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjUpO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIHRvcDogMC4xNWVtO1xuICB9XG5cbiAgLm1hdC1idXR0b24td3JhcHBlciA+IHN2ZyB7XG4gICAgZmlsbDogIzVmNmQ3ZTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtaW5maXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgICYgPiBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogIzVmNmQ3ZTtcbiAgICB9XG4gIH1cblxufVxuIl19 */"] });


/***/ }),

/***/ 9837:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeComponent": () => (/* binding */ TreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);








const _c0 = function () { return { "mat-icon-rtl-mirror !w-[18px] !h-[18px] flex justify-center items-center": true }; };
function TreeComponent_mat_tree_0_mat_tree_node_1_a_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 10);
} if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx_r7.treeControl.isExpanded(node_r3) ? node_r3 == null ? null : node_r3.icon2 : node_r3 == null ? null : node_r3.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function () { return { "capitalize text-[#5F6D7E] text-base font-semibold tracking-[-0.0923077px] !flex !items-center gap-2 !h-full !w-full": true }; };
function TreeComponent_mat_tree_0_mat_tree_node_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_mat_tree_0_mat_tree_node_1_a_2_mat_icon_1_Template, 1, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, node_r3.link))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r3 == null ? null : node_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.name, " ");
} }
const _c3 = function (a1) { return { "capitalize text-[#5F6D7E] text-base font-semibold tracking-[-0.0923077px]": true, "text-primary-dark": a1 }; };
function TreeComponent_mat_tree_0_mat_tree_node_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r6.treeControl.isExpanded(node_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.name, " ");
} }
function TreeComponent_mat_tree_0_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeComponent_mat_tree_0_mat_tree_node_1_a_2_Template, 3, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeComponent_mat_tree_0_mat_tree_node_1_ng_template_3_Template, 2, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r3 == null ? null : node_r3.link)("ngIfElse", _r5);
} }
const _c4 = function (a1) { return { "mat-icon-rtl-mirror !w-[19px] !h-[19px] text-[#5F6D7E]": true, "text-primary-dark": a1 }; };
function TreeComponent_mat_tree_0_mat_nested_tree_node_2_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 22);
} if (rf & 2) {
    const node_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx_r13.treeControl.isExpanded(node_r11) ? node_r11 == null ? null : node_r11.icon2 : node_r11 == null ? null : node_r11.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r13.treeControl.isExpanded(node_r11)));
} }
const _c5 = function (a1) { return { "mat-tree-node py-3 cursor-pointer": true, "border-solid border-primary border-l-4 bg-neutral-200": a1 }; };
function TreeComponent_mat_tree_0_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nested-tree-node")(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_mat_tree_0_mat_nested_tree_node_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.toggle(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13, 14)(4, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeComponent_mat_tree_0_mat_nested_tree_node_2_mat_icon_7_Template, 1, 4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18)(11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](12, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, ctx_r2.treeControl.isExpanded(node_r11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (node_r11 == null ? null : node_r11.hideButton) ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, ctx_r2.treeControl.isExpanded(node_r11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.treeControl.isExpanded(node_r11) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r11 == null ? null : node_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx_r2.treeControl.isExpanded(node_r11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-tree-invisible", !ctx_r2.treeControl.isExpanded(node_r11));
} }
function TreeComponent_mat_tree_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_mat_tree_0_mat_tree_node_1_Template, 5, 2, "mat-tree-node", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeComponent_mat_tree_0_mat_nested_tree_node_2_Template, 14, 17, "mat-nested-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx_r0.hasChild);
} }
const MOCK_DATA = [
    {
        name: 'dashboard',
        icon: 'space_dashboard',
    },
    {
        name: 'Company Profile',
        icon: 'corporate_fare',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
    {
        name: 'Employee',
        icon: 'person',
    },
    {
        name: 'Projects & Task',
        icon: 'checklist',
        notification: 11,
    },
];
class TreeComponent {
    constructor() {
        this.data = [];
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.NestedTreeControl((node) => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNestedDataSource();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
    }
    ngOnInit() {
        this.dataSource.data = this.data;
    }
    toggle(e) {
        e._elementRef.nativeElement.click();
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(); };
TreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["qmt-tree"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "example-tree", 3, "dataSource", "treeControl", 4, "ngIf"], [1, "example-tree", 3, "dataSource", "treeControl"], ["class", "capitalize text-[#5F6D7E] text-4 font-medium tracking-[-0.0923077px]", "matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", 1, "capitalize", "text-[#5F6D7E]", "text-4", "font-medium", "tracking-[-0.0923077px]"], [1, "flex", "!items-center", "gap-2", "py-3", "h-full", "w-full"], ["routerLinkActive", "text-primary-dark", 3, "routerLink", "ngClass", 4, "ngIf", "ngIfElse"], ["withoutLink", ""], ["routerLinkActive", "text-primary-dark", 3, "routerLink", "ngClass"], ["style", "color: inherit;transform: scale(0.8);", 3, "svgIcon", "ngClass", 4, "ngIf"], [2, "color", "inherit", "transform", "scale(0.8)", 3, "svgIcon", "ngClass"], [3, "ngClass"], [3, "ngClass", "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], ["toggleBtn", ""], ["inline", "false", 3, "ngClass"], [1, "flex", "items-center", "gap-2"], ["inline", "", "style", "font-size: 20px", 3, "svgIcon", "ngClass", 4, "ngIf"], ["role", "group", 1, "!p-0"], [1, "pl-4"], ["matTreeNodeOutlet", ""], [1, "border-solid", "border-b", "mx-auto", "w-[90%]", "opacity-10"], ["inline", "", 2, "font-size", "20px", 3, "svgIcon", "ngClass"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_mat_tree_0_Template, 3, 3, "mat-tree", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTree, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeDef, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeToggle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatNestedTreeNode, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n\n.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-left: 24px;\n}\n\n\n\n.mat-tree-node[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  min-height: 36px;\n  color: #5F6D7E;\n  padding-inline: 28px;\n}\n\n.mat-tree-node[_ngcontent-%COMP%]    > .mat-icon-button[_ngcontent-%COMP%] {\n  order: 1;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBR0E7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7RUFBQTs7QUFHQTtFQUNFLGVBQUE7RUFFQSxrQkFBQTtBQUFGOztBQUdBOzs7O0VBQUE7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVBGOztBQVFFO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTkoiLCJmaWxlIjoidHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5leGFtcGxlLXRyZWV7XG59XG4uZXhhbXBsZS10cmVlIHVsLFxuLmV4YW1wbGUtdHJlZSBsaSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLypcbiAqIFRoaXMgcGFkZGluZyBzZXRzIGFsaWdubWVudCBvZiB0aGUgbmVzdGVkIG5vZGVzLlxuICovXG4uZXhhbXBsZS10cmVlIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSBkaXZbcm9sZT1cImdyb3VwXCJdIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDUycHg7XG4gIHBhZGRpbmctbGVmdDogY2FsYyg1MnB4IC0gMjhweCk7XG59XG5cbi8qXG4gKiBQYWRkaW5nIGZvciBsZWFmIG5vZGVzLlxuICogTGVhZiBub2RlcyBuZWVkIHRvIGhhdmUgcGFkZGluZyBzbyBhcyB0byBhbGlnbiB3aXRoIG90aGVyIG5vbi1sZWFmIG5vZGVzXG4gKiB1bmRlciB0aGUgc2FtZSBwYXJlbnQuXG4gKi9cbi5leGFtcGxlLXRyZWUgZGl2W3JvbGU9XCJncm91cFwiXSA+IC5tYXQtdHJlZS1ub2RlIHtcbiAgLy8gcGFkZGluZy1sZWZ0OiA1MnB4O1xufVxuXG4vLyBjaGFuZ2luZyBwb3NpdGlvbiBvZiBidXR0b24gdG9wIG9wZW4gbmVzdGVkIGxpc3RcblxuLm1hdC10cmVlLW5vZGUge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjNUY2RDdFO1xuICBwYWRkaW5nLWlubGluZTogMjhweDtcbiAgJiA+IC5tYXQtaWNvbi1idXR0b24ge1xuICAgIG9yZGVyOiAxO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 5801:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/upload-files/upload-files.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFilesComponent": () => (/* binding */ UploadFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);






class UploadFilesComponent {
    constructor() {
        this.modelName = '';
        this.label = '';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl();
        this.uploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.fileName = '';
    }
    // uploadSubscription!: Subscription;
    // url: string = environment.baseUrl + '/portal/excel-download';
    // constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
    ngOnInit() { }
    ngOnDestroy() {
        // this.uploadSubscription.unsubscribe();
    }
    uploadExcel() { }
    onFileSelected(event) {
        const file = event.target.files[0];
        console.log(event);
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append('excel', file);
            // const upload$ = this.http.post(
            //   this.url + '/' + this.modelName + '/',
            //   formData
            // );
            // this.uploadSubscription = upload$.subscribe(
            //   () => {
            //     this.uploaded.emit({
            //       upload: true,
            //       msg: 'File Uploaded Successfully!',
            //     });
            //     this._snackBar.open('File Uploaded Successfully!', 'Dismiss', {
            //       duration: 5000,
            //     });
            //   },
            //   () => {
            //     this.uploaded.emit({ upload: true, msg: 'File Uploaded Error' });
            //     this._snackBar.open('File Uploaded Error', 'Dismiss', {
            //       duration: 5000,
            //     });
            //   }
            // );
        }
    }
}
UploadFilesComponent.ɵfac = function UploadFilesComponent_Factory(t) { return new (t || UploadFilesComponent)(); };
UploadFilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadFilesComponent, selectors: [["app-upload-files"]], inputs: { modelName: "modelName", label: "label", control: "control" }, outputs: { uploaded: "uploaded" }, decls: 7, vars: 2, consts: [[1, "flex", "gap-2", "upload"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["matPreffix", "", 1, "cursor-pointer", "mat-icon-rtl-mirror", "!w-3", "!h-3", "mr-1", 2, "font-size", "15px"], ["type", "file", 1, "hidden", 3, "formControl", "change"], ["fileUpload", ""]], template: function UploadFilesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFilesComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadFilesComponent_Template_input_change_5_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8273:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/yes-no-checkbox/yes-no-checkbox.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoCheckboxComponent": () => (/* binding */ YesNoCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 9975);






function YesNoCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 1)(2, "mat-radio-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control)("disabled", ctx_r0.disabled ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
} }
function YesNoCheckboxComponent_ng_container_1_mat_divider_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 7);
} }
function YesNoCheckboxComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 4)(2, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subcontractor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, YesNoCheckboxComponent_ng_container_1_mat_divider_4_Template, 1, 0, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.requestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDivider);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
} }
class YesNoCheckboxComponent {
    constructor() {
        this.labelPosition = 'after';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
        this.requestType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true);
        this.tableOption = false;
        this.showDivider = true;
    }
    ngOnInit() {
    }
    changeVal(value) {
        this.control.setValue(value);
    }
}
YesNoCheckboxComponent.ɵfac = function YesNoCheckboxComponent_Factory(t) { return new (t || YesNoCheckboxComponent)(); };
YesNoCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YesNoCheckboxComponent, selectors: [["app-yes-no-checkbox"]], inputs: { control: "control", requestType: "requestType", width: "width", tableOption: "tableOption", showDivider: "showDivider", disabled: "disabled" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "flex", "items-center", "justify-between", 3, "formControl", "disabled"], ["color", "primary", 1, "example-margin", "pr-3", 3, "value"], ["color", "primary", 1, "example-margin", "border-l-[3px]", "border-solid", "border-gray-A2", "pl-3", 3, "value"], [1, "flex", "items-center", "justify-between", "gap-5", 3, "formControl"], ["color", "primary", 1, "example-margin", 3, "value"], ["class", "rotate-90 w-5 max-h-[20px]", 4, "ngIf"], [1, "rotate-90", "w-5", "max-h-[20px]"]], template: function YesNoCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YesNoCheckboxComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YesNoCheckboxComponent_ng_container_1_Template, 7, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableOption);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5ZXMtbm8tY2hlY2tib3guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4659:
/*!**************************************************!*\
  !*** ./src/app/shared/constants/config/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "BACKEND_URL": () => (/* binding */ BACKEND_URL)
/* harmony export */ });
// export const API_URL = 'http://159.203.25.179:5000/api/v1';
// export const BACKEND_URL = 'http://159.203.25.179:5000';
const API_URL = 'http://localhost:5000/api/v1';
const BACKEND_URL = 'http://localhost:5000';


/***/ }),

/***/ 7448:
/*!*********************************************************!*\
  !*** ./src/app/shared/helpers/getHttpOptions.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHttpOptions": () => (/* binding */ getHttpOptions)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

const getHttpOptions = () => {
    var _a, _b;
    let options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({}),
    };
    if (localStorage.getItem('token')) {
        options.headers = options.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
    if (localStorage.getItem('user-data') && ((_a = JSON.parse(localStorage.getItem('user-data'))) === null || _a === void 0 ? void 0 : _a.email)) {
        options.headers = options.headers.set('user-email', (_b = JSON.parse(localStorage.getItem('user-data'))) === null || _b === void 0 ? void 0 : _b.email);
    }
    return options;
};


/***/ }),

/***/ 9397:
/*!****************************************************!*\
  !*** ./src/app/shared/helpers/getRegion.helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegion": () => (/* binding */ getRegion)
/* harmony export */ });
const getRegion = (regions) => {
    let east = false;
    let west = false;
    let central = false;
    let regionMap = {
        East: [
            'Ontario',
            'New Brunswick',
            'Newfoundland',
            'Nova Scotia',
            'Prince Edward Island',
        ],
        West: ['British Columbia', 'Yukon'],
        Central: [
            'Alberta',
            'Manitoba',
            'Northwest Territories',
            'Nunavut',
            'Saskatchewan',
        ],
    };
    for (const state of regions) {
        if (east === false)
            east = regionMap['East'].includes(state === null || state === void 0 ? void 0 : state.state);
        if (west === false)
            west = regionMap['West'].includes(state === null || state === void 0 ? void 0 : state.state);
        if (central === false)
            central = regionMap['Central'].includes(state === null || state === void 0 ? void 0 : state.state);
    }
    return { east, central, west };
};


/***/ }),

/***/ 4825:
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHttpOptions": () => (/* reexport safe */ _getHttpOptions_helper__WEBPACK_IMPORTED_MODULE_1__.getHttpOptions),
/* harmony export */   "getRegion": () => (/* reexport safe */ _getRegion_helper__WEBPACK_IMPORTED_MODULE_2__.getRegion),
/* harmony export */   "registerIocns": () => (/* reexport safe */ _registerIocns_helper__WEBPACK_IMPORTED_MODULE_0__.registerIocns)
/* harmony export */ });
/* harmony import */ var _registerIocns_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerIocns.helper */ 9907);
/* harmony import */ var _getHttpOptions_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHttpOptions.helper */ 7448);
/* harmony import */ var _getRegion_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRegion.helper */ 9397);





/***/ }),

/***/ 9907:
/*!********************************************************!*\
  !*** ./src/app/shared/helpers/registerIocns.helper.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerIocns": () => (/* binding */ registerIocns)
/* harmony export */ });
const registerIocns = (paths, matIconRegistry, domSanitizer) => {
    for (const path of paths) {
        matIconRegistry.addSvgIcon(path, domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${path}.svg`));
    }
};


/***/ }),

/***/ 2785:
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/angular-material/angular-material.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMaterialModule": () => (/* binding */ AngularMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
































class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__.MatTreeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__.ClipboardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__.MatTreeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__.ClipboardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule] }); })();


/***/ }),

/***/ 3657:
/*!************************************************************!*\
  !*** ./src/app/shared/modules/primg-ng/primg-ng.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimgNgModule": () => (/* binding */ PrimgNgModule)
/* harmony export */ });
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/divider */ 9026);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/avatargroup */ 2348);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/chips */ 111);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmpopup */ 4296);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/multiselect */ 2460);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputmask */ 307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





















class PrimgNgModule {
}
PrimgNgModule.ɵfac = function PrimgNgModule_Factory(t) { return new (t || PrimgNgModule)(); };
PrimgNgModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimgNgModule });
PrimgNgModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_3__.DividerModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextareaModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__.AvatarGroupModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_14__.ChipsModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinnerModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_16__.CardModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__.ConfirmPopupModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__.MultiSelectModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__.InputMaskModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimgNgModule, { exports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_3__.DividerModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextareaModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__.AvatarGroupModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_14__.ChipsModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinnerModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_16__.CardModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__.ConfirmPopupModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__.MultiSelectModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__.InputMaskModule] }); })();


/***/ }),

/***/ 7686:
/*!********************************************************!*\
  !*** ./src/app/shared/services/generic-api.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericApiService": () => (/* binding */ GenericApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);






class GenericApiService {
    constructor(httpClient, messageService) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.errorHandler = (error) => {
            let errorMessage = 'Something went wrong';
            console.log(error);
            if (error.error) {
                if (error.error.message) {
                    errorMessage = Array.isArray(error.error.message)
                        ? error.error.message[0]
                        : error.error.message;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
        };
    }
    setEndPoint(endPointValue) {
        this.endPoint = endPointValue;
    }
    getHttpOptions(options) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        });
        return { headers: httpHeaders };
    }
    getAll(options) {
        if (!this.endPoint) {
            throw new Error('Please Add End Point');
        }
        const httpOptions = this.getHttpOptions(options);
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + this.endPoint, {
            headers: httpOptions.headers,
            params: options ? options.params : {},
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
    }
    getOne(id) {
        if (!this.endPoint) {
            throw new Error('Please Add End Point');
        }
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + this.endPoint + `/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
    }
    create(paymentType) {
        if (!this.endPoint) {
            throw new Error('Please Add End Point');
        }
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + this.endPoint, paymentType)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
    }
    update(paymentType, id) {
        if (!this.endPoint) {
            throw new Error('Please Add End Point');
        }
        return this.httpClient
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + `${this.endPoint}/${id}`, paymentType)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
    }
    delete(url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        });
        return this.httpClient
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + url, {
            headers,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
    }
}
GenericApiService.ɵfac = function GenericApiService_Factory(t) { return new (t || GenericApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
GenericApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GenericApiService, factory: GenericApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/angular-material/angular-material.module */ 2785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tree/tree.component */ 9837);
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-box/search-box.component */ 9611);
/* harmony import */ var _components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-heading/page-heading.component */ 7291);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input/input.component */ 2371);
/* harmony import */ var _components_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/date-input/date-input.component */ 6634);
/* harmony import */ var _components_autocomplete_input_autocomplete_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/autocomplete-input/autocomplete-input.component */ 7690);
/* harmony import */ var _components_form_heading_form_heading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-heading/form-heading.component */ 6253);
/* harmony import */ var _components_textarea_input_textarea_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/textarea-input/textarea-input.component */ 5131);
/* harmony import */ var _components_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/file-input/file-input.component */ 456);
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stepper/stepper.component */ 4762);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table/table.component */ 6709);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 3556);
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/label/label.component */ 7827);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/heading/heading.component */ 5476);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ 5994);
/* harmony import */ var _modules_primg_ng_primg_ng_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/primg-ng/primg-ng.module */ 3657);
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/accordion/accordion.component */ 7415);
/* harmony import */ var _components_datagrid_datagrid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/datagrid/datagrid.component */ 8337);
/* harmony import */ var _components_new_input_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/new/input/input.component */ 4758);
/* harmony import */ var _components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/new/autocomplete/autocomplete.component */ 3181);
/* harmony import */ var _components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/new/textarea/textarea.component */ 3185);
/* harmony import */ var _components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/new/file-upload/file-upload.component */ 7903);
/* harmony import */ var _components_new_file_upload_file_upload_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/new/file-upload/file-upload.directive */ 4477);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/loading/loading.component */ 8424);
/* harmony import */ var _components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/yes-no-checkbox/yes-no-checkbox.component */ 8273);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/upload-files/upload-files.component */ 5801);
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../interceptor/auth.interceptor */ 2070);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-mask */ 4409);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dynamicdialog */ 7018);
/* harmony import */ var _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../directive/uppercase.directive */ 1789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);







































const maskConfig = {
    validation: false,
};
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_30__.MessageService,
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__.DialogService,
        primeng_api__WEBPACK_IMPORTED_MODULE_30__.ConfirmationService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HTTP_INTERCEPTORS,
            useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__.AuthInterceptor,
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule,
            _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
            _modules_primg_ng_primg_ng_module__WEBPACK_IMPORTED_MODULE_16__.PrimgNgModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_36__.NgxMaskModule.forRoot(maskConfig),
        ], _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
        _modules_primg_ng_primg_ng_module__WEBPACK_IMPORTED_MODULE_16__.PrimgNgModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__.DynamicDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__.TreeComponent,
        _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__.SearchBoxComponent,
        _components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__.PageHeadingComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent,
        _components_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_5__.DateInputComponent,
        _components_autocomplete_input_autocomplete_input_component__WEBPACK_IMPORTED_MODULE_6__.AutocompleteInputComponent,
        _components_form_heading_form_heading_component__WEBPACK_IMPORTED_MODULE_7__.FormHeadingComponent,
        _components_textarea_input_textarea_input_component__WEBPACK_IMPORTED_MODULE_8__.TextareaInputComponent,
        _components_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_9__.FileInputComponent,
        _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__.StepperComponent,
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__.TableComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__.PaginationComponent,
        _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__.LabelComponent,
        _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__.HeadingComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.CheckboxComponent,
        _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_17__.AccordionComponent,
        _components_datagrid_datagrid_component__WEBPACK_IMPORTED_MODULE_18__.DatagridComponent,
        _components_new_input_input_component__WEBPACK_IMPORTED_MODULE_19__.NewInputComponent,
        _components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__.NewAutocompleteComponent,
        _components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_21__.NewTextareaComponent,
        _components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_22__.FileUploadComponent,
        _components_new_file_upload_file_upload_directive__WEBPACK_IMPORTED_MODULE_23__.DragDropFileUploadDirective,
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__.LoadingComponent,
        _components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_25__.YesNoCheckboxComponent,
        _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_26__.UploadFilesComponent,
        _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_28__.UppercaseDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule,
        _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
        _modules_primg_ng_primg_ng_module__WEBPACK_IMPORTED_MODULE_16__.PrimgNgModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule, ngx_mask__WEBPACK_IMPORTED_MODULE_36__.NgxMaskModule], exports: [_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
        _modules_primg_ng_primg_ng_module__WEBPACK_IMPORTED_MODULE_16__.PrimgNgModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule,
        _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_1__.TreeComponent,
        _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__.SearchBoxComponent,
        _components_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_3__.PageHeadingComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        _components_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_5__.DateInputComponent,
        _components_autocomplete_input_autocomplete_input_component__WEBPACK_IMPORTED_MODULE_6__.AutocompleteInputComponent,
        _components_form_heading_form_heading_component__WEBPACK_IMPORTED_MODULE_7__.FormHeadingComponent,
        _components_textarea_input_textarea_input_component__WEBPACK_IMPORTED_MODULE_8__.TextareaInputComponent,
        _components_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_9__.FileInputComponent,
        _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__.StepperComponent,
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__.TableComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__.PaginationComponent,
        _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__.LabelComponent,
        _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__.HeadingComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.CheckboxComponent,
        _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_17__.AccordionComponent,
        _components_datagrid_datagrid_component__WEBPACK_IMPORTED_MODULE_18__.DatagridComponent,
        _components_new_input_input_component__WEBPACK_IMPORTED_MODULE_19__.NewInputComponent,
        _components_new_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__.NewAutocompleteComponent,
        _components_new_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_21__.NewTextareaComponent,
        _components_new_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_22__.FileUploadComponent,
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__.LoadingComponent,
        _components_yes_no_checkbox_yes_no_checkbox_component__WEBPACK_IMPORTED_MODULE_25__.YesNoCheckboxComponent,
        _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_26__.UploadFilesComponent,
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__.DynamicDialogModule,
        _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_28__.UppercaseDirective] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    googleClientID: '835731772370-c8ug9v6639iq6f49o8pt0gd77b7e6c0i.apps.googleusercontent.com',
    // googleClientID:'851271416129-10ksl6rtord0rsg744v9kfvqipns0nan.apps.googleusercontent.com',
    API_URL: 'http://localhost:5000/api',
    BE_BASE_URL: 'http://localhost:5000',
    microsoftClientID: 'f3858431-3091-4dbe-ac26-5403d51946bb',
    redirectUri: "http://localhost:4200/auth/login",
    // Vendor Portal credentials //
    NODE_BASE_URL: 'http://localhost:8000',
    REACT_BASE_URL: 'http://localhost:3000',
    QM_USER_PASSWORD: 'WgNc!8W+Gt\\/4Ni4Aq3ZzkM95"Mha',
    TEMP_UATUSER_PASSWORD: 'Abcd1234@'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8202), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map