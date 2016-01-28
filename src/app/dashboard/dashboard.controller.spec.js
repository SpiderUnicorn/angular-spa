describe('DashboardController', function () {
    var dashboardController;

    beforeEach(angular.mock.module('app.dashboard'));

    beforeEach(inject(function($controller) {
        dashboardController = $controller('DashboardController', {});
    }));

    it('should be created successfully', function() {
        expect(dashboardController).toBeUndefined();
    });
});
