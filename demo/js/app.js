'use strict';

var notifyDemoApp = angular.module('notifyDemoApp',[
  'AngularNotifyModule'
])

.config(function($routeProvider, $locationProvider) {        
    
  $locationProvider.html5Mode(false);
  $routeProvider.when('/', {
      controller  : 'IndexController',
      templateUrl : 'partials/main.html',
  });
  $routeProvider.otherwise({ redirectTo: '/' });

})

.controller('IndexController', function ($scope, $rootScope, notificationService) {

  notificationService.add('This is a notification from IndexController with the warning level set to "info"!', 'info');

  $scope.dismiss = function(index) {
    return notificationService.dismiss(index);
  };

  $scope.addNotification = function () {
    if ($scope.message === undefined || $scope.message === '') {
      notificationService.add('Your Notification Message cannot be blank!', 'error');
    } else {
      notificationService.add($scope.message, 'info');
    }
  }

});

/* EOF */