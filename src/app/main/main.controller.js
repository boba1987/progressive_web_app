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
   * @requires apiFactory
   * @requires $rootScope
   * @requires $timeout
   * @requires $rootScope
   *
   */

  angular
    .module('tamedia')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $timeout, $log, productList, apiFactory) {
    var vm = this;
    vm.pageTitle = "Latest products";
    vm.productList = productList.data.articles;

    // Handles click on a product
    vm.showSingleProd = function(item){
      var config = {
        params: {
          url: item.Url
        }
      };

      // Show loader
      $rootScope.loading = true;

      // API call
      apiFactory.getSingleProduct(config).then(function(res){
        $rootScope.loading = false; // Hide loader
        vm.singleProductOpen = true; // Slide in product details
        vm.pageTitle = "Product overview"; // Set page title

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
      vm.singleProductOpen = false;
      vm.pageTitle = "Latest products";
    }
  }
})();
