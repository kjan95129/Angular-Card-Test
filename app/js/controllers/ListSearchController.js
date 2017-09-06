'use strict';

mainApp
.filter('searchList', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.what.toLowerCase().indexOf(searchString) !== -1 ||
                item.who.toLowerCase().indexOf(searchString) !== -1 ||
                item.when.toLowerCase().indexOf(searchString) !== -1 ||
                item.notes.toLowerCase().indexOf(searchString) !== -1){
                    
                result.push(item);
            }

        });

        return result;
    };
});