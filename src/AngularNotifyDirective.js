
/*!
 * @directive ngNotify
 * @description Notification Service using either just sessions or also a backend
 * @author Edward Hotchkiss <edwardhotchkiss@me.com>
 *
 * @html:
 * <ng-notify></ng-notify>
 *
 * @license MIT
 *
 */

angularNotifyModule.directive('ngNotify', function($rootScope, $compile, notificationService) {

  return {

    restrict: 'E',
    replace: true,
    transclude: true,
    template: 
      '<div class="angular-notify">' +
        '<h3>Notifications: <span ng-bind="notifications.length"></span></h3>' +
        '<ul>' +
          '<li ng-repeat="notification in notifications">' +
            '<div class="notification">' +
              '<p class="notification-message" ng-class="notification-{{notification.level}}" ng-bind="notification.message"></p>' +
              '<p class="notification-dismiss"><a ng-click="dismiss($index)" title="Dismiss">Dismiss</a></p>' +
            '</div>' +
          '</li>' +
        '</ul>' +
      '</div>',
    link : function($scope, element, attrs) {
      $scope.notifications = notificationService.all();
      $compile(element.contents())($scope);
    }

  }

});
