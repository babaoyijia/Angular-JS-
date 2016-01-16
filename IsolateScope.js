var myModule = angular.module('MyModule', []);
myModule.directive('hello', function() {
    return {
    	scope:{},
        restrict: 'AE',
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    };
});
