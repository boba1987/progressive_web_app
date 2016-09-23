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
   */

  angular
    .module('tamedia')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(productList, apiFactory) {
    var vm = this;
    vm.pageTitle = "Latest products";
    vm.productList = productList.data.articles;

    vm.showSingleProd = function(item){
      var config = {
        params: {
          url: item.Url
        }
      };

      vm.singleProductOpen = true;
      vm.pageTitle = "Product overview"

      apiFactory.getSingleProduct(config);
    }

    vm.backCallback = function(){
      vm.singleProductOpen = false;
      vm.pageTitle = "Latest products";
    }
  }
})();
