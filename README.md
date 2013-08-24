
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

  $scope.addNotification = function () {
    if ($scope.message === undefined || $scope.message === '') {
      notificationService.add('Your Notification Message cannot be blank!', 'error');
    } else {
      notificationService.add($scope.message, 'info');
    }
  }

});

```

**/partials/main.html**

```html

<ng-notify use-endpoint="false"></ng-notify>

<div class="control-group">
  <h4>Add Notification:</h4>
  <label>Message:</label>
  <div class="controls">
    <input type="text" name="message" ng-model="message" />
    <button type="button" ng-click="addNotification()">Add Notification</button>
  </div>
</div>

```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/edwardhotchkiss/angular-notify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

