angular.module('rtfmApp')
.controller('threadPageController', function($scope, $location, $routeParams, threadService, userService){
    var threadId = parseInt($routeParams.threadId);

    $scope.thread = threadService.getThread(threadId);

    $scope.addComment= function(){
        var newComment = {
            text: $scope.threadComment,
            author: userService.getUser().name,
            id: parseInt(Math.random()*100000000000)
        };

        threadService.addNewCommentToThread(threadId, newComment);
        $scope.thread = threadService.getThread(threadId);

        $scope.threadComment= '';
    }


});