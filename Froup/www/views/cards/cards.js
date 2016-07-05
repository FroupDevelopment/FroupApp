angular.module('starter')

.controller('CardsCtrl', function($scope, $ionicSideMenuDelegate, TDCardDelegate) {
    console.log('CARDS CTRL');
    $ionicSideMenuDelegate.canDragContent(false);

    var cardTypes = [
    { image: 'img/pic1.png', title: 'Nike Shoe'},
    { image: 'img/pic2.png', title: 'Nike Sport Shirts'},
    { image: 'img/pic3.png', title: 'Addidas Shoe'},
    { image: 'img/pic4.png', title: 'Adidas Leggings'},
    { image: 'img/pic5.png', title: 'Kettle Bells'},
    { image: 'img/pic6.png', title: 'Ozone Bike'},
    ];

    $scope.cards = [];

    $scope.addCard = function(i) {
        
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }

    for(var i = 0; i < 6; i++) $scope.addCard();

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
    }

    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
    }

    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
})