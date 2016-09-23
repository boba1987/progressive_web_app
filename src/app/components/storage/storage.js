(function() {
    'use strict';
    /**
     * @ngdoc service
     * @name tamedia.factory:storage
     *
     * @description
     * Works with a localstorage
     *
     *
     */
    angular.module('tamedia')
        .factory('Storage', Storage);

      function Storage(
        $window
      ){
        var storageObject = {
          // Declare all possible storage objects (they are used for bootstrapping)
          items: null
        };
        var prefix = 'tamedia-';
        var localStorageSupported = checkLocalStorage();

        var storageFactory = {
            save: save,
            remove: remove,
            get: get,
            bootstrap: bootstrap
        };

        return storageFactory;

        function remove(key) {
            if (localStorageSupported) {
                $window.localStorage.removeItem(prefix + key);
            }
            // Don't delete keys since they might be needed for bootstrap
            storageObject[key] = null;
        }

        function get(key, bootstrap) {
          // Only return from localStorage during bootstrap
          // Use in-memory storage instead
          if (bootstrap) {
              if (localStorageSupported) {
                  return angular.fromJson($window.localStorage.getItem(prefix + key));
              }
          }
          return storageObject[key];
        }

        function checkLocalStorage() {
            try {
                $window.localStorage.setItem('tamedia.checkLocalStorage', '1');
                $window.localStorage.removeItem('tamedia.checkLocalStorage');
                return true;
            } catch (e) {
                return false;
            }
        }

        function bootstrap() {
            for (var key in storageObject) {
                if (storageObject.hasOwnProperty(key)) {
                    var value = get(key, true);
                    storageObject[key] = value;
                }
            }
        }

        function save(key, value, noPersistency) {
            storageObject[key] = value;
            if(noPersistency){
                // Use noPersistency if object should only be saved for
                // the duration of the session
                return;
            }
            if (localStorageSupported) {
                $window.localStorage.setItem(prefix + key, angular.toJson(value));
        }
      }
    }
}());
