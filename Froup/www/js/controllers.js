angular.module('starter.controllers', ['ngOpenFB'])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $ionicModal, $timeout, ngFB) {
    $scope.data = {};

     $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('main.cards');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Invalid credentials!'
            });
        });
    }

    $scope.fbLogin = function () {
    ngFB.login({scope: 'email,user_photos'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $state.go('main.cards');
            } else {
                alert('Facebook login failed');
            }
        });
    
  };
})

.controller('ProfileCtrl', function ($scope, ngFB) {
    ngFB.api({
        path: '/me',
        params: {fields: 'id,name'}
    }).then(
        function (user) {
            $scope.user = user;
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });
})

.controller('MainCtrl', function($scope) {
})
;