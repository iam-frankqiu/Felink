/**
 * Created by Administrator on 2016/9/26.
 */
'use strict';

angular.module('app')
    .controller('WechatCtrl', function ($scope, $rootScope ) {
        $scope.back = function () {

            $rootScope.back();

        };

    });