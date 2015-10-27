// John_papa, IIFE, $inject, namespace
(function () {
    'use strict';

    angular.module('bullsfirst.controller', [])
        .controller('scripts/accounts.ctrl', AccountsCtrl);

    AccountsCtrl.$inject = ['$scope', 'scripts/accounts.factory', 'scripts/accounts.service'];

    function AccountsCtrl($scope, accountsFactory, accountsService) {

        accountsFactory.setRows();

        $scope.rows = accountsFactory.getRows();

        $scope.totals = accountsService.initTotal();


        //for (var i = 0; i < $scope.rows.length; i++) {
        //    $scope.totals.marketValue += $scope.rows[i].marketValue;
        //    $scope.totals.cash += $scope.rows[i].cash;
        //}

        $scope.addAccount = function () {
            $scope.rows = accountsFactory.updateRows();
        };

        $scope.$watchCollection('rows', function(newRows, oldRows) {
            if(newRows.length !== oldRows.length) {

                var accumulative = accountsService.getTotal(newRows);
                $scope.totals.marketValue = accumulative[0];
                $scope.totals.cash = accumulative[1];

                /**
                 * or another option:
                $scope.totals.marketValue = newRows.reduce(function(a, b) {
                    return a += b.marketValue;
                }, 0);

                $scope.totals.cash = newRows.reduce(function(a, b) {
                    return a += b.cash;
                }, 0);
                 */
            }
        });
    }

})();

