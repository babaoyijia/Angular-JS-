var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: "253445528@qq.com",
        password: "253445528",
        autoLogin: true
    };
    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function() {
        $scope.userInfo = {
            email: 'damoqionqiu@126.com',
            password: 'damoqionqiu',
            autoLogin: false
        }
    };
    $scope.restForm = function() {
        $scope.userInfo = {
            email: "253445528@qq.com",
            password: "253445528",
            autoLogin: true
        }
    };
}]);
