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
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
