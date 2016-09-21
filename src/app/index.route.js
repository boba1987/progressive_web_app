(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name router
   *
   * @description
   * Application routes
   *
   */

  angular
    .module('tamedia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      /**
       * @ngdoc overview
       * @name tamedia.route:home
       *
       * @description
       * Home screen route, showing product list
       *
       * @requires tamedia.factory:apiFactory
       * @requires tamedia.controller:MainController
       */
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          productList: /** @ngInject */
            function (apiFactory) {
              var params = {
                nbArticles: 20
              };

              return apiFactory.getProductList(params);
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
