!function(){"use strict";angular.module("tamedia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){}var e={restrict:"E",templateUrl:"app/components/single_product/single.product.html",scope:{product:"=product"},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("tamedia").directive("singleProduct",t)}(),function(){"use strict";function t(t){function e(e){l&&t.localStorage.removeItem(c+e),o[e]=null}function n(e,n){return n&&l?angular.fromJson(t.localStorage.getItem(c+e)):o[e]}function a(){try{return t.localStorage.setItem("tamedia.checkLocalStorage","1"),t.localStorage.removeItem("tamedia.checkLocalStorage"),!0}catch(e){return!1}}function i(){for(var t in o)if(o.hasOwnProperty(t)){var e=n(t,!0);o[t]=e}}function r(e,n,a){o[e]=n,a||l&&t.localStorage.setItem(c+e,angular.toJson(n))}var o={items:null},c="tamedia-",l=a(),s={save:r,remove:e,get:n,bootstrap:i};return s}t.$inject=["$window"],angular.module("tamedia").factory("Storage",t)}(),function(){"use strict";function t(t,e){function n(n){return t.get(e.proxy+"/articles",n)}/**
         * @ngdoc
         * @name tamedia.factory:apiFactory#getSingleProduct
         * @methodOf tamedia.factory:apiFactory
         *
         * @description
         * GET method of the Account API, get single product details
         *
         * @param {object} paramsObject Accepts params object in this format:
         * <pre>
         * params:{
         *  url: "https://www.ricardo.ch/kaufen/haushalt-und-wohnen/badezimmer/wc/automatischer-wc-sitz-mit/v/an855739648/"
         * }
         * </pre>
        */
function a(n){return t.get(e.proxy+"/getSingleArticle",n)}var i={getProductList:n,getSingleProduct:a};return i}t.$inject=["$http","apiEndpoint"],angular.module("tamedia").factory("apiFactory",t)}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{title:"=",backButton:"=",backCallback:"="}};return t}angular.module("tamedia").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,e){var n=this;n.pageTitle="Latest products",n.productList=t.data.articles,n.showSingleProd=function(t){var a={params:{url:t.Url}};n.singleProductOpen=!0,n.pageTitle="Product overview",e.getSingleProduct(a)},n.backCallback=function(){n.singleProductOpen=!1,n.pageTitle="Latest products"}}t.$inject=["productList","apiFactory"],angular.module("tamedia").controller("MainController",t)}(),function(){"use strict";function t(t,e,n){n.bootstrap();var a=e;a.$on("$stateChangeStart",function(){a.stateIsLoading=!0}),t.debug("runBlock end")}t.$inject=["$log","$rootScope","Storage"],angular.module("tamedia").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",resolve:{productList:["apiFactory","Storage",function(t,e){var n,a={params:{nbArticles:20}};return window.addEventListener("offline",function(t){n=!0},!1),n?{data:e.get("items")}:t.getProductList(a).then(function(t){return e.save("items",t.data.articles),t})}]}}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tamedia").config(t)}(),function(){"use strict";angular.module("tamedia").constant("moment",moment).constant("apiEndpoint",{host:"https://www.ricardo.ch",proxy:"http://localhost:8090"})}(),function(){"use strict";function t(t){t.debugEnabled(!0)}t.$inject=["$logProvider"],angular.module("tamedia").config(t)}(),angular.module("tamedia").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="product-list" ng-class="{\'open\': main.singleProductOpen}"><acme-navbar title="main.pageTitle" back-button="main.singleProductOpen" back-callback="main.backCallback"></acme-navbar><div class="container main-view-holder"><single-product ng-class="{opened: main.singleProductOpen}"></single-product><div class="row"><ul class="container-list"><li ng-repeat="item in main.productList" ng-click="main.showSingleProd(item)" class="clearfix"><div class="col-sm-6"><img ng-src="{{item.PictureUrl}}" src="./assets/images/loading_spinner.gif" alt="" class="img-center-xs"></div><div class="col-sm-6 text-left text-center-xs">{{item.Title}}<br><b>Price:&nbsp;</b>{{item.Price}}<br><b>Buy Now Price:&nbsp;</b>{{item.BuyNowPrice}}</div><div class="col-lg-2 col-sm-2"></div><div class="col-lg-10 col-sm-10"></div></li></ul></div></div></div>'),t.put("app/components/navbar/navbar.html",'<div class="head-stripe"><div class="container"><h2 ng-class="{backShow: backButton}" ng-click="backCallback()"><span ng-if="backButton"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></span> {{title}}</h2></div></div>'),t.put("app/components/single_product/single.product.html",'<div class="single-product text-center"><h1>Product details</h1></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d527864428.js.map
