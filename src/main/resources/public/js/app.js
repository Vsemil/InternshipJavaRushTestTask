angular.module('app', ['smart-table', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl:'list.html',
                controller:'partsController'
            });
        $routeProvider.when('/edit/:id',
            {
                templateUrl:'edit.html',
                controller:'editController'
            });
        $routeProvider.when('/addNew',
            {
                templateUrl:'edit.html',
                controller:'editController'
            });
        $routeProvider.otherwise({redirectTo: '/'});
    })
    .controller('mainController', function($scope, $location) {
        $scope.location = $location
    })
    .controller('partsController', function($scope, $http) {

        $scope.parts = [];
        $scope.indexOffset = 0;
        $scope.itemsByPage = 10;
        $scope.option = 'all';
        $scope.totalComp = 0;

        $scope.getParts = function(tableState){
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            var ret = {
                sort: tableState.sort.predicate,
                page: (start / number),
                size: number
            };
            if (!!tableState.sort.reverse) {
                ret.sort =ret.sort + ',desc';
            }
            if (tableState.search.predicateObject) {
                ret.name = tableState.search.predicateObject.name;
            }
            if ($scope.option !== 'all' && $scope.option !== undefined) {
                ret.compulsory = $scope.option;
            }
            $http.get('/all', {params: ret}).then(function(response) {
                tableState.pagination.numberOfPages = response.data.totalPages;
                $scope.parts = response.data.content;
                $scope.indexOffset = ret.page * ret.size;
            });
            $http.get('/countGatherComputer').then(function(response) {
                $scope.totalComp = response.data;
            });
        };

        $scope.remove = function (part) {
            $scope.removePart = part;
        };

        $scope.deletePart = function () {
            $http.delete('delete', {params: {id: $scope.removePart.id}}).then(function (value) {
                var index = $scope.parts.indexOf($scope.removePart);
                if (index !== -1) {
                    $scope.parts.splice(index, 1);
                }
                $http.get('/countGatherComputer').then(function(response) {
                    $scope.totalComp = response.data;
                });
            })
        };

    })
    .controller('editController', function($scope, $http, $routeParams, $location) {
        $scope.part = {};

        $scope.$on("$routeChangeSuccess", function () {
            var id = $routeParams["id"];
            if (id !== undefined) {
                $http({method: 'GET', url: '/getPart', params: {'id': id}}).then(function success(response) {
                    $scope.part = response.data;
                });
            }
        });

        $scope.savePart = function () {
            if ($scope.part.compulsory === undefined) {
                $scope.part.compulsory = false;
            }
            $http.post('/savePart', $scope.part).then(function success(response) {
                $location.url('/')
            });
        }
    });