(function() {
    'use strict';
    /**
     * @ngdoc service
     * @name tamedia.factory:apiFactory
     *
     * @description
     * POST method of the Account API
     *
     * @requires $http
     * @requires apiEndpoint
     *
     */
    angular.module('tamedia')
        .factory('apiFactory', apiFactory);

      function apiFactory(
        $http, apiEndpoint
      ){
        var apiFactoryFactory = {
            // GET Methods
            getProductList: getProductList
        };

        return apiFactoryFactory;

        /**
         * @ngdoc
         * @name tamedia.factory:apiFactory#getProductList
         * @methodOf tamedia.factory:apiFactory
         *
         * @description
         * GET method of the Account API
         *
         * @param {object} paramsObject Accepts params object in this format:
         * <pre>
         * params:{
         *  nbArticles: 20
         * }
         * </pre>
        */
        function getProductList(params) {
          return $http.get(apiEndpoint.proxy + '/articles', params);
        }

    }
}());
