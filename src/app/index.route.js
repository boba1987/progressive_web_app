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
       * @requires tamedia.factory:Storage
       */
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          productList: /** @ngInject */
            function (apiFactory, Storage, $window) {
              var config = {
                params:{
                  nbArticles: 20
                }
              };

              var offline;

              $window.addEventListener('offline', function() {
                  // Queue up events for server.
                  offline = true;
              }, false);

              if(offline){
                return {
                  data: Storage.get('items')
                }
              }

              return apiFactory.getProductList(config).then(function(res){
                Storage.save('items', res.data.articles);
                return res;
              });
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
