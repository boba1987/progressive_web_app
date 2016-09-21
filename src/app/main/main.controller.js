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

    vm.productList = productList.data.articles;
  }
})();
