angular.module('furryInnApp', ['ui.router']);


angular.module('furryInnApp')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html'
	})
  .state('reservations', {
  url: '/reservations',
  templateUrl: '/templates/reservations.html'
});
	$urlRouterProvider.otherwise('/');

});
