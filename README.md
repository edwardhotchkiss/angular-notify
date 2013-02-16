
# angular-notify

> Angular.js Notifications Module. Includes Service for broadcasting, and a directive for the view.

### Demo & Usage:

**app.js:**

```javascript

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

});

```

**/partials/main.html**

```html

<ng-notify></ng-notify>

```
