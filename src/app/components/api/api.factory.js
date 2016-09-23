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
            getProductList: getProductList,
            getSingleProduct: getSingleProduct
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

        /**
         * @ngdoc
         * @name tamedia.factory:apiFactory#getSingleProduct
         * @methodOf tamedia.factory:apiFactory
         *
         * @description
         * GET method of the Account API, get single product details
         *
         * @param {object} paramsObject Accepts params object in this format:
         * <pre>
         * params:{
         *  url: "https://www.ricardo.ch/kaufen/haushalt-und-wohnen/badezimmer/wc/automatischer-wc-sitz-mit/v/an855739648/"
         * }
         * </pre>
        */
        function getSingleProduct(params) {
          return $http.get(apiEndpoint.proxy + '/getSingleArticle', params);
        }

    }
}());
