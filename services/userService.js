angular.module('rtfmApp').service('userService', function(){

    //Todo: don't hardcode this
    var user = {
        name: 'Scott'
    };

    this.getLoggedInUser = function(){
        return user;
    }

});