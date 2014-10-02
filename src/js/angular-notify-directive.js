
/**
 * @directive ngNotify
 * @description Notification Service using either just sessions or also a backend
 * @author Edward Hotchkiss <edward@edwardhotchkiss.com>
 *
 * @html:
 * <ng-notify></ng-notify>
 *
 * @license MIT
 *
 */

angularNotifyModule.directive('ngNotify', function($rootScope, $compile, notificationService) {

  return {

    restrict: 'EA',
    replace: false,
    transclude: false,
    templateUrl: 'angular-notify.html',
    link : function($scope, element, attrs) {
      $scope.notifications = notificationService.all();
      $compile(element.contents())($scope);
    }

  };

});
