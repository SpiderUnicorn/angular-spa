(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        /* @ngInject */
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/src/app/dashboard/dashboard.html'
        });
    }
})();
