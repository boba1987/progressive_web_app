(function() {
  'use strict';

  /**
   * @ngdoc configuration
   * @name tamedia.config
   * @methodOf tamedia.config
   *
   * @description
   * tamedia application configuration
   *
   */
  angular
    .module('tamedia')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
