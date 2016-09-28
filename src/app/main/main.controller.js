(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name tamedia.controller:MainController
   *
   * @description
   * Home view controller
   *
   * @requires productList
   * @requires ApiFactory
   * @requires $rootScope
   * @requires $timeout
   * @requires $rootScope
   * @requires $window
   *
   */

  angular
    .module('tamedia')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $timeout, $log, $window, productList, ApiFactory) {
    var vm = this;
    vm.pageTitle = "Latest products";
    vm.productList = productList.data.articles;

    // Handles click on a product
    vm.showSingleProd = function(item){
      if($rootScope.offline){
        alert('You are offline, try later!');
        return;
      }

      var config = {
        params: {
          url: item.Url
        }
      };

      // Show loader
      $rootScope.loading = true;

      // API call
      ApiFactory.getSingleProduct(config).then(function(res){
        $rootScope.loading = false; // Hide loader
        vm.singleProductOpenStart = true; // Slide in product details
        vm.pageTitle = "Product overview"; // Set page title

        $timeout(function(){
          vm.singleProductOpenDone = true;
        }, 400);

        // Bind product details to view
        vm.prodDetails = {
          details: res.data.trim(),
          img: item.PictureUrl,
          price: item.Price
        };
      },function error(err){
        $log.error(err);
      });
    }

    vm.backCallback = function(){
      vm.singleProductOpenDone = false;
      vm.singleProductOpenStart = false;
      vm.pageTitle = "Latest products";
    }
  }
})();
