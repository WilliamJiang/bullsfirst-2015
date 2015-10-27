(function (window, document, undefined) {
    'use strict';

    /**
     * @ngdoc overview
     * @type {*|module}
     */
    var app = angular.module('bullsfirst', [
        'ngRoute',
        'bullsfirst.service',
        'bullsfirst.directive',
        'bullsfirst.controller'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/accounts.html',
                controller: 'scripts/accounts.ctrl',
                controllerAs: 'accounts'
            })
            //.when('/view', {
            //    templateUrl: 'views/',
            //    controller: ''
            //})
            .otherwise({redirectTo: '/'});
    }]);

}(window, document));