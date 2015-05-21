angular.module('rtfmApp').service('threadService', function(){
    var threads = [
        {
            text: "A new thread!",
            author: "Scott",
            id: 1,
            comments: [
                {
                    text: 'This is the best title I have ever seen for a thread',
                    author: 'Phil',
                    id: 1000
                },
                {
                    text: 'I know right?',
                    author: 'Joe Somebody',
                    id: 1001
                }
            ]
        },
        {
            text: "Another thread",
            author: "Joe Somebody",
            id: 2,
            comments: []
        },
        {
            text: "Yet another thread",
            author: "Phil",
            id: 3,
            comments: []
        }
    ];

    this.getAllThreads = function(){
        return threads;
    };

    this.getThread = function(threadId){
         for(var i = 0; i < threads.length; i++){
             if(threads[i].id === threadId){
                 return threads[i]
             }
         }
    };

    this.addNewThread = function(newThread){
        threads.push(newThread);
    };

    this.addNewCommentToThread = function(threadId, newComment){
        for(var i = 0; i < threads.length; i++){
            if(threads[i].id === threadId){
                threads[i].comments.push(newComment);
                return;
            }
        }
    }
});