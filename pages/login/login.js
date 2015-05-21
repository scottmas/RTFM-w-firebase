angular.module('rtfmApp')
.controller('loginPageController', function($scope, $location){

    $scope.loginWithGoogle = function(){
        //TODO: Actually login with google
        $location.path('main')
    }

});