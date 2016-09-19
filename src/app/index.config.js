(function() {
  'use strict';

  angular
    .module('tamediaChalenge')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
