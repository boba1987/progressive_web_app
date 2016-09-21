(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('tamedia'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.productList)).toBeTruthy();
      expect(vm.productList.length === 20).toBeTruthy();
    });
  });
})();
