(function() {
  'use strict';

  angular
    .module('tamedia')
    .directive('singleProduct', SingleProduct);

  /** @ngInject */
  function SingleProduct() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/single_product/single.product.html',
      scope: {
          product: '=product'
      },
      controller: SingleProductController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SingleProductController() {

    }
  }

})();
