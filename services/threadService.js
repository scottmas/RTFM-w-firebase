angular.module("rtfmApp").service("threadService", function($firebaseArray, $firebaseObject, fb){

    this.getAllThreads = function(){
        var ref = new Firebase(fb.url + '/threads');
        return $firebaseArray(ref);
    };

    this.getThread = function(threadId){
        var ref = new Firebase(fb.url + '/threads/' + threadId);
        return $firebaseObject(ref);
    };
});