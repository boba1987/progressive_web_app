(function() {
  'use strict';

  angular
    .module('tamedia')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope:{
        title: '=',
        backButton: '=',
        backCallback: '='
      }
    };

    return directive;
  }

})();
