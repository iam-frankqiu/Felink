/**
 * Created by Administrator on 2016/9/26.
 */

'use strict';

angular.module('app')
    .controller('FooterCtrl', function ($scope, $window, ngDialog) {

        console.log('Good  begun ia  half done!');
        $scope.openWindow = function () {
            $window.open('http://weibo.com/u/2960813802?is_hot=1');
        };

        $scope.openWechat = function () {

            console.log('open  wechat  success!');

            ngDialog.open({
                //templateUrl: 'app/views/partials/wechat.html'
                template: '<p>there is  some  job.</p>',
                //template: 'app/views/partials/wechat.html',
                width: '80%',
                height: '80%'

                //controller: 'app/scripts/controllers/wechat.js'
            });

            //ngDialog.confirm('some things  happened!');

            console.log('what  happened  really!');
        };


    });
