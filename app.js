var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'view/Main.html',
// controller : 'FirstController'
})
 
.when('/elements', {
templateUrl : 'view/elements.html',
// controller : 'SecondController'
})
 
.when('/generic', {
templateUrl : 'view/generic.html',
// controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

// app.controller('FirstController', function($scope) {
// $scope.message = 'Hello from FirstController';
// });
 
// app.controller('SecondController', function($scope) {
// $scope.message = 'Hello from SecondController';
// });
 
// app.controller('ThirdController', function($scope) {
// $scope.message = 'Hello from ThirdController';
// });