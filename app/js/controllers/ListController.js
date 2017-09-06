mainApp
.controller('ListController', function($scope, $mdDialog) {

    this.openMenu = function($mdMenu, ev) {
      $mdMenu.open(ev);
    };

    var imagePath = '/img/profile.jpg';
    
    $scope.listEntries = [
      {
        face : imagePath,
        what: 'Something\'s Happening',
        who: 'Person 1',
        when: '3:08PM',
        notes: "asdljkfhaluisefhalsejhflksuajhdf"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Billy Bob Joe',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'I\'m dead',
        who: 'Jane Doe',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'My album is the best',
        who: 'Frank Ocean',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Still sitting on the toilet',
        who: 'Poopy Poop Boy',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];


});