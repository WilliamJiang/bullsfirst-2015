describe('Bullsfirst 2015 test Routes - ', function () {

    var $scope;

    beforeEach(function() {
        module('bullsfirst');

        inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('scripts/accounts.ctrl', {
                $scope: $scope
            });
        });
    });

    it('should scripts/accounts.ctrl controller has rows property', function () {
        expect($scope.rows).toBeDefined();
    });

    it('should scripts/accounts.ctrl controller has rows length is 10', function () {
        expect($scope.rows.length).toBe(10);
    });

    it('should scripts/accounts.ctrl controller has totals property', function () {
        expect($scope.totals).toBeDefined();
    });

    it('should scripts/accounts.ctrl controller totals name is empty', function () {
        expect($scope.totals.name).toBe('');
    });

    it('should scripts/accounts.ctrl controller has addAccount method', function () {
        expect($scope.addAccount).toBeDefined();
    });

});