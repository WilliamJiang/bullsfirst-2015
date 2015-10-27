//https://github.com/johnpapa/angular-styleguide
(function () {
    'use strict';

    angular.module('bullsfirst.directive', [])
        .directive('bullsfirstHeader', HeaderDirective)
        .directive('bullsfirstFooter', FooterDirective);

    HeaderDirective.$inject = [];
    function HeaderDirective() {
        var directive = {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {title: '@'},
            link: link,
            template: '<div style="border: 1px solid black;">' +
            '<ng-transclude></ng-transclude>' +
            '</div>'
        };
        return directive;
        function link(scope, element, attrs) {
            var today = moment().format('YYYY-MM-DD');
            angular.element(element).find('h1').append('&nbsp;&nbsp;(' + today + ')');
        }
    }

    FooterDirective.$inject = [];
    function FooterDirective() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                author: '@',
                defaultDate: '@'
            },
            template: '<footer>' +
                '<p class="author">{{author}}, {{defaultDate}}</p>' +
                '</footer>'
        };
    }

})();