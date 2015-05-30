angular.module('rtfmApp')
.controller('mainPageController', function($scope, $location, userService, threadService){

    $scope.user = userService.getLoggedInUser();

    $scope.newThreadTitle = '';

    $scope.threads = threadService.getAllThreads();

    $scope.addThread = function(){  
        if(!$scope.newThreadTitle){
            return false; //Don't do anything if the text box is empty
        }
        var newThread = {       
            title: $scope.newThreadTitle,
            username: $scope.user.name,            
            comments: []
        };

        $scope.threads.push(newThread);

        $scope.newThreadTitle = ''; //Clear the text in the input box
    }

    $scope.logout = function(){        
        //Todo: actually log out;
        $location.path('login');
    }

});