describe('Bullsfirst 2015 test Routes - ', function () {

    var $route, $rootScope, $location, $httpBackend;

    beforeEach(module('bullsfirst'));

    beforeEach(inject(function ($injector) {
        $route = $injector.get('$route');
        $rootScope = $injector.get('$rootScope');
        $location = $injector.get('$location');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', 'views/accounts.html').respond('/');
    }));

    it("should navigate to root", function () {
        $rootScope.$apply(function () {
            $location.path('/');
        });

        expect($location.path()).toBe('/');
        expect($route.current.templateUrl).toBe('views/accounts.html');
        expect($route.current.controller).toBe('scripts/accounts.ctrl');
    });

    it('should redirect not registered urls to home', function () {
        $rootScope.$apply(function () {
            $location.path('/others');
        });

        expect($location.path()).toBe('/');
        expect($route.current.templateUrl).toBe('views/accounts.html');
        expect($route.current.controller).toBe('scripts/accounts.ctrl');
    });
});