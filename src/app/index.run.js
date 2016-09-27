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
  function runBlock($log, $rootScope, $window, Storage) {
    Storage.bootstrap();

    $window.addEventListener('offline', function() {
        // Queue up events for server.
        $rootScope.offline = true;
        console.log('you are offline');
    }, false);

    var scope = $rootScope;
    scope.$on('$stateChangeStart',function(){
      scope.stateIsLoading = true;
    });

    $log.debug('runBlock end');
  }

})();
