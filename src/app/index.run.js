(function() {
  'use strict';

  angular
    .module('tamedia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
