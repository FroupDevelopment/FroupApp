// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'starter.controllers', 'starter.services', 'starter.directives', 'ngOpenFB'])

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '1066470846740922'});
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('main.profile', {
    url: "/profile",
    views: {
        'mainContent': {
            templateUrl: "views/profile/profile.html",
            controller: "ProfileCtrl"
        }
    }
})

  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })

  .state('main.cards', {
      url: '/cards',
      views: {
        'mainContent': {
          templateUrl: 'views/cards/cards.html',
          directive: 'noScroll',
          controller: 'CardsCtrl'
        }
      }
  })

  .state('main.settings',{
    url: '/settings',
    views: {
        'mainContent': {
          templateUrl: 'views/settings/settings.html',
          directive: 'noScroll',
          controller: 'MainCtrl'
        }
    }
  })
  .state('main.helpandsupport',{
    url: '/helpandsupport',
    views: {
        'mainContent': {
          templateUrl: 'views/helpandsupport/helpandsupport.html',
          directive: 'noScroll',
          controller: 'MainCtrl'
        }
    }
  })
  .state('main.upgrade',{
    url: '/upgrade',
    views: {
        'mainContent': {
          templateUrl: 'views/upgrade/upgrade.html',
          directive: 'noScroll',
          controller: 'MainCtrl'
        }
    }
  })
  .state('main.share',{
    url: '/share',
    views: {
        'mainContent': {
          templateUrl: 'views/share/share.html',
          directive: 'noScroll',
          controller: 'MainCtrl'
        }
    }
  })
  .state('main.about',{
    url: '/about',
    views: {
        'mainContent': {
          templateUrl: 'views/about/about.html',
          directive: 'noScroll',
          controller: 'MainCtrl'
        }
    }
  })
  $urlRouterProvider.otherwise('/login');
});

// angular.module('froup',['backand'])

// app.config(function (BackandProvider) {
//       BackandProvider.setAppName('froup');
//       BackandProvider.setSignUpToken('559d411b-58c8-4c57-a514-7828b4ef2fba');
//       BackandProvider.setAnonymousToken('fdd40dc4-aaae-4e88-9a20-274a5acf5703');
//   })


