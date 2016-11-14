'use strict';


angular.module('app', [
  'ngRoute',
  'myApp.version',
  'ngDialog'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {


  $routeProvider
      .when('/', {
        templateUrl: 'app/views/partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/partials/about.html',
        controller: 'AboutCtrl'
      })
      .when('/support', {
        templateUrl: "app/views/partials/support.html",
        controller: 'SupportCtrl'
      })
      .when('/contact', {
          templateUrl: 'app/views/partials/contact.html'
      })
      .when('/faq', {
          templateUrl: 'app/views/partials/faq.html'
      })
      .when('/disclaimer', {
        templateUrl: 'app/views/partials/disclaimer.html',
        controller: 'DisclaimerCtrl'
      })
      .when('/join', {
        templateUrl : 'app/views/partials/join.html',
        controller: 'JoinCtrl'
      })
      .when('/privacy', {
        templateUrl: 'app/views/partials/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .when('/problem', {
        templateUrl: 'app/views/partials/problem.html',
        controller: 'ProblemCtrl'
      })
      .when('/indulged', {
        templateUrl: 'app/views/partials/indulged.html',
        controller: 'IndulgedCtrl'
      })
      .when('/404', {
        templateUrl: 'app/views/404.html'
      })
      .otherwise({redirectTo: '/'});


}]);
