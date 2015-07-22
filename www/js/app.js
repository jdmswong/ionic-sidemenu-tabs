// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('rentmee', ['ionic', 'rentmee.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.mainTabs', {
		url: '/mainTabs',
		abstract: true,
		views: {
			'menuContent': {
				templateUrl: 'templates/mainTabs.html'
			}
		}

	})

	.state('app.mainTabs.rentedItems', {
		url: '/rentedItems',
		views: {
			'rentedItems' : {
				templateUrl: 'templates/rentedItems.html'
			}
		}
	})

	.state('app.mainTabs.myStuff', {
		url: '/myStuff',
		views: {
			'myStuff': {
				templateUrl: 'templates/myStuff.html'
			}
		}
	})

	.state('app.mainTabs.messages', {
		url: '/messages',
		views: {
			'messages' : {
				templateUrl: 'templates/messages.html'
			}
		}
	})
	
	.state('app.search', {
		url: '/search',
		views: {
			'menuContent': {
				templateUrl: 'templates/search.html'
			}
		}
	})
	
	.state('app.settings', {
		url: '/settings',
		views: {
			'menuContent': {
				templateUrl: 'templates/settings.html'
			}
		}
	})



	;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/mainTabs/rentedItems');
});

