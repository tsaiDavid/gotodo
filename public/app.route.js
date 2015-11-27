(function() {
  'use strict';

  angular.module('app')
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
      });

  }
})();
