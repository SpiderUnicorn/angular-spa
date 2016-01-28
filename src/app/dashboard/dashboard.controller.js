(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [''];

    /* @ngInject */
    function DashboardController(){
        var vm = this;
        vm.property = 'DashboardController';


        activate();

        ////////////////

        function activate() {
        }
    }
})();
