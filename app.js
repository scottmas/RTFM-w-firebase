angular.module('rtfmApp', ['ngRoute', 'firebase'])
.constant('fb', {
  url: 'https://scotts-cool-rtfm-app.firebaseio.com/'
})
.config(function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login/login.html'
            }).
            when('/main', {
                templateUrl: 'pages/main/main.html'
            }).
            when('/thread/:threadId', {
                templateUrl: 'pages/thread/thread.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
});