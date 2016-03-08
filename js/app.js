angular.module('furryInnApp', ['ui.router', 'firebase']);


angular.module('furryInnApp')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		// controller: 'mapController'
		// resolve: {
		// 	test: function() {
		// 		setTimeout(function(){
		// 			console.log("test");
		// 		}, 500)
		// 	}
		// }
	})
  .state('reservations', {
  url: '/reservations',
  templateUrl: '/templates/reservations.html',
	controller: 'bookNowCtrl'
})

.state('contactUs', {
url: '/contactUs',
templateUrl: '/templates/contactUs.html',
controller: 'inputController'
});
	$urlRouterProvider.otherwise('/');

});
