
/**
 * @service angularNotify
 * @description Notification Service using either just sessions or also a backend
 * @author Edward Hotchkiss <edward@edwardhotchkiss.com>
 *
 * @license MIT
 *
 */

angularNotifyModule

  .factory('notificationService', ['$rootScope', function($rootScope) {

    /**
     * @Object noticationService
     *
     * @attributes
     * - {Array} notifications
     * - {Function} add
     * - {Function} all
     * - {Function} dismiss
     * - {Function} count
     * - {Function} clear
     *
     */

    var notificationService = {

      /**
       * @Array notifications
       * @description Initial notifications container
       */

      notifications: [],

      /**
       * @method add
       * @description $broadcast a message with a level
       *
       * @param {String} message Notification message
       * @optional {String} level Notification level [info, warning, error (defaults to info)]
       *
       */

      add: function(message, level) {
        level = level || 'info';
        var notification = {
          message : message,
          level   : level
        };
        this.notifications.push(notification);
        return $rootScope.$broadcast('notification.add', notification);
      },

      /*!
       * @method all
       * @description Fetch all notifications
       * @return {Array} notifications All current notifications
       */

      all: function () {
        var notifications = this.notifications;
        $rootScope.$broadcast('notifications.all', true);
        return notifications;
      },

      /**
       * @method dismiss
       * @param {Number} index Notification Array index to remove
       */

      dismiss: function (index) {
        this.notifications.splice(index, 1);
        $rootScope.$broadcast('notifications.remove', true);
        return this;
      },

      /**
       * @method count
       * @description Return the current notifications count
       */

      count: function () {
        $rootScope.$broadcast('notifications.count', true);
        return this.notifications.length;
      },

      /**
       * method clear
       * @description Clear all flashes
       */

      clear: function () {
        $rootScope.$broadcast('notifications.clear', true);
        this.notifications = [];
        return this;
      }

    };

    return notificationService;

  }

]);
