angular.module('furryInnApp', ['ui.router', 'mwl.calendar', 'ngAnimate', 'ui.bootstrap']);


angular.module('furryInnApp')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'mapController'
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
  templateUrl: '/templates/reservations.html'
})

.state('contactUs', {
url: '/contactUs',
templateUrl: '/templates/contactUs.html'
});
	$urlRouterProvider.otherwise('/');

});
