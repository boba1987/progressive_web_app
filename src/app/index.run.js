(function() {
  'use strict';

  /**
  * @ngdoc overview
  * @name tamedia.run
  *
  * @description
  * Front-end application run block.
  * Runs only once, right after application bootstrap!
  */

  angular
    .module('tamedia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, Storage) {
    Storage.bootstrap();

    var scope = $rootScope;
    scope.$on('$stateChangeStart',function(){
      scope.stateIsLoading = true;
    });

    $log.debug('runBlock end');
  }

})();
