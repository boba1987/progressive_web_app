!function(){"use strict";angular.module("tamedia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){}var n={restrict:"E",templateUrl:"app/components/single_product/single.product.html",scope:{product:"=product"},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("tamedia").directive("singleProduct",t)}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{title:"=",backButton:"=",backCallback:"="}};return t}angular.module("tamedia").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,n){function i(i){return t.get(n.proxy+"/articles",i)}var e={getProductList:i};return e}t.$inject=["$http","apiEndpoint"],angular.module("tamedia").factory("apiFactory",t)}(),function(){"use strict";function t(t){var n=this;n.pageTitle="Latest products",n.productList=t.data.articles,n.showSingleProd=function(t){n.singleProductOpen=!0,n.pageTitle="Product overview"},n.backCallback=function(){n.singleProductOpen=!1,n.pageTitle="Latest products"}}t.$inject=["productList"],angular.module("tamedia").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("tamedia").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",resolve:{productList:["apiFactory",function(t){var n={nbArticles:20};return t.getProductList(n)}]}}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tamedia").config(t)}(),function(){"use strict";angular.module("tamedia").constant("moment",moment).constant("apiEndpoint",{host:"https://www.ricardo.ch",proxy:"http://localhost:8090"})}(),function(){"use strict";function t(t){t.debugEnabled(!0)}t.$inject=["$logProvider"],angular.module("tamedia").config(t)}(),angular.module("tamedia").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="product-list" ng-class="{\'open\': main.singleProductOpen}"><acme-navbar title="main.pageTitle" back-button="main.singleProductOpen" back-callback="main.backCallback"></acme-navbar><div class="container main-view-holder"><single-product ng-class="{opened: main.singleProductOpen}"></single-product><div class="row"><ul class="container-list"><li ng-repeat="item in main.productList" ng-click="main.showSingleProd(item)" class="clearfix"><div class="col-sm-6"><img ng-src="{{item.PictureUrl}}" src="./assets/images/loading_spinner.gif" alt="" class="img-center-xs"></div><div class="col-sm-6 text-left text-center-xs">{{item.Title}}<br><b>Price:&nbsp;</b>{{item.Price}}<br><b>Buy Now Price:&nbsp;</b>{{item.BuyNowPrice}}</div><div class="col-lg-2 col-sm-2"></div><div class="col-lg-10 col-sm-10"></div></li></ul></div></div></div>'),t.put("app/components/navbar/navbar.html",'<div class="head-stripe"><div class="container"><h1 ng-class="{backShow: backButton}" ng-click="backCallback()"><span ng-if="backButton"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></span> {{title}}</h1></div></div>'),t.put("app/components/single_product/single.product.html",'<div class="single-product"></div>')}]);
//# sourceMappingURL=../maps/scripts/app-e5e2a0f89e.js.map
