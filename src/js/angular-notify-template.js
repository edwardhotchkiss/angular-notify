angular.module("AngularNotifyModule").run(["$templateCache", function($templateCache) {$templateCache.put("angular-notify.html","\n<div class=\'angular-notify\'>\n  <h3>Notifications: <span ng-bind=\'notifications.length\'></span></h3>\n  <ul>\n    <li ng-repeat=\'notification in notifications\'>\n      <div class=\'notification\'>\n        <p class=\'notification-message\' ng-class=\'notification-{{notification.level}}\' ng-bind=\'notification.message\'></p>\n        <p class=\'notification-dismiss\'><a ng-click=\'dismiss($index)\' title=\'Dismiss\'>Dismiss</a></p>\n      </div>\n    </li>\n  </ul>\n</div>\n");}]);