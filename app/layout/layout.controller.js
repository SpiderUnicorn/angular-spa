(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = [];

    /* @ngInject */
    function LayoutController(){
        var vm = this;
        vm.property = 'LayoutController';


        activate();

        ////////////////

        function activate() {
        }
    }
})();
