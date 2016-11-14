/**
 * Created by Administrator on 2016/9/30.
 */
'use strict';


angular.module('app')
    .controller('NavbarCtrl', function ($scope, $timeout) {

        console.log('load data!');

        $scope.product = false;

        $scope.pro = function () {

            $scope.product = false;
            console.log($scope.product+'@@@@@@@@@profunction');
        };


        $scope.hover = function () {
            $scope.product = true;

            console.log($scope.product + '%%%%%%hover');

        };

        $scope.leave = function () {
            //$scope.product =
            $timeout($scope.pro,1000);
        }



    });