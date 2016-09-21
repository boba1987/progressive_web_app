(function() {
  'use strict';

  describe('MainController', function(){
    beforeEach(module('tamedia'));

    var $controller;
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
    }));

    describe('vm.productList', function(){
      it('should define more than 5 awesome things', function() {
        var controller = $controller('MainController', { vm: this });
        expect(angular.isArray(controller.vm.productList)).toBeTruthy();
        expect(controller.vm.productList.length === 20).toBeTruthy();
      });
    })
  });
})();
