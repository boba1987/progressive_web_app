/* global moment:false */
(function() {
  'use strict';

  /**
   * @ngdoc configuration
   * @name tamedia.config
   * @methodOf tamedia.config
   *
   * @description
   * tamedia application constans
   *
   */

  angular
    .module('tamedia')
      .constant('moment', moment)
      .constant('apiEndpoint', {
          host: 'https://www.ricardo.ch',
          proxy: 'http://192.168.0.141:8090'
      })
})();
