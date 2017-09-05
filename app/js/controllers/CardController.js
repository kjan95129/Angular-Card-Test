'use strict';

mainApp
.controller('CardController', function CardController($scope){
    $scope.items = [
        {title: 'First', content: 'some link', ref: '/'},
        {title: 'Second', content: 'some link', ref: '/'},
        {title: 'Third', content: 'some link', ref: '/'},
        {title: 'Fourth', content: 'some link', ref: '/'},
        {title: 'Fifth', content: 'some link', ref: '/'},
        {title: 'Sixth', content: 'some link', ref: '/'},
        {title: 'Seventh', content: 'some link', ref: '/'},
        {title: 'Eighth', content: 'some link', ref: '/'},
        {title: 'Ninth', content: 'some link', ref: '/'}
    ];
});