angular.module('rtfmApp')
.controller('threadPageController', function($scope, $location, $routeParams, threadService, userService){
    var threadId = parseInt($routeParams.threadId);

    $scope.newComment = '';
    $scope.thread = threadService.getThread(threadId);

    $scope.addComment= function(){ 
        if(!$scope.newComment){
            return false; //Don't do anything if the text box is empty
        }       

        var currentUser = userService.getLoggedInUser();

        var newComment = {
            text: $scope.newComment,
            username: currentUser.name
        };

        $scope.thread.comments.push(newComment);
    
        $scope.newComment = ''; //Clear the input box
    }


});