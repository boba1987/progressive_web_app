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
       * @requires tamedia.factory:ApiFactory
       * @requires tamedia.controller:MainController
       * @requires tamedia.factory:Storage
       */
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          productList: /** @ngInject */
            function (ApiFactory, Storage, $rootScope) {
              var config = {
                params:{
                  nbArticles: 20
                }
              };

              if($rootScope.offline){
                return {
                  data: Storage.get('items')
                }
              }

              return ApiFactory.getProductList(config).then(function(res){
                Storage.save('items', res.data.articles);
                return res;
              });
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
