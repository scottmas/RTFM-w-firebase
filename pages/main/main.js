angular.module('rtfmApp')
.controller('mainPageController', function($scope, $location, userService, threadService){

    $scope.newThread = '';

    $scope.threads = threadService.getAllThreads();

    $scope.addThread = function(){
        var newThread = {
            text: $scope.newThreadTitle,
            author: userService.getUser().name,
            id: parseInt(Math.random()*100000000000),
            comments: []
        };

        threadService.addNewThread(newThread);
        $scope.newThreadTitle = '';
    }

    $scope.logout = function($event){
        $event.preventDefault();
        //Todo: actually log out;
        $location.path('login');
    }

});