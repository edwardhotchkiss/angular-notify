
'use strict';

var notifyDemoApp = angular.module('notifyDemoApp',['ngRoute', 'AngularNotifyModule'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller : 'IndexController',
    templateUrl: 'partials/main.html'
  });
})

.controller('IndexController', function ($scope, $rootScope, notificationService) {

  notificationService.add('This is a notification from IndexController with the warning level set to "info"!', 'info');

  $scope.dismiss = function(index) {
    return notificationService.dismiss(index);
  };

  $scope.addNotification = function () {
    if (!$scope.message || $scope.message === '') {
      notificationService.add('Your Notification Message cannot be blank!', 'error');
    } else {
      notificationService.add($scope.message, 'info');
    }
  }

});
