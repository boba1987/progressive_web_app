(function() {
  'use strict';

  angular
    .module('tamediaChalenge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
