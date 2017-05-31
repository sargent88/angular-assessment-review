angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

        $stateProvider
          .state('home', {
                url: '/',
                templateUrl: '/views/home.html',
                controller: 'homeCtrl'
            })
            .state('details', {
                url: '/details',
                templateUrl: '/views/details.html',
                controller: 'detailsCtrl'
            })
  })