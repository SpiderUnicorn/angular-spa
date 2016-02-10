 describe('ControllerForTest', function () {
    var $controller;
    var ControllerForTest;

    beforeEach(function () {
        module('app.dashboard');
    });

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('is defined', function () {
        // This line can also be in the beforeEach.
        // Saves having to repetitively instantiate the controller.
        ControllerForTest = $controller('DashboardController');

        expect(ControllerForTest).toBeDefined();
    });
});
