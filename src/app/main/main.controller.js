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
   */

  angular
    .module('tamedia')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(productList) {
    var vm = this;
    vm.pageTitle = "Latest products";
    vm.productList = productList.data.articles;
    
    vm.showSingleProd = function(item){
      vm.singleProductOpen = true;
      vm.pageTitle = "Product overview"
    }

    vm.backCallback = function(){
      vm.singleProductOpen = false;
      vm.pageTitle = "Latest products";
    }
  }
})();
