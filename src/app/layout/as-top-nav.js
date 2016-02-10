(function () {
    'use strict';

    angular
        .module('app.shell')
        .directive('asTopNav', asTopNav);

    asTopNav.$inject = [];

    /* @ngInject */
    function  asTopNav() {
        var asTopNav = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/layout/top-nav.html'
        };
        return asTopNav;

        function link(scope, element, attrs, controller) {

        }
    }

    TopNavController.$inject = [];

    /* @ngInject */
    function TopNavController() {
    }
})();
