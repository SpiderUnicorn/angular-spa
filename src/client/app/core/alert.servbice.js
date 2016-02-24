(function () {
    'use strict';
    angular
        .module('app.core')
        .factory('AlertingService', AlertingService);

    AlertingService.$inject = [];

    /* @ngInject */
    function  AlertingService(){
        var exports = {
            addAlert: addAlert
        };


        return exports;

        ////////////////

        function addAlert(type, message) {
        };
    }
})();
