(function() {
  'use strict';

  angular.module('app')
  .factory('homeFactory', homeFactory);

  homeFactory.$inject = [];

  function homeFactory() {
    var services = {
      init: init,
    };

    return services;

    function init() {

    }
  }

})();
