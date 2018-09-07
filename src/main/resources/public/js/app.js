angular.module('app', ['smart-table'])
    .controller('partsController', function($scope, $http) {
        $scope.parts = [];
        $scope.indexOffset = 0;
        $scope.itemsByPage = 10;
        $scope.option = 'all';
        $scope.getParts = function(tableState){
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            var ret = {
                sort: tableState.sort.predicate,
                page: (start / number),
                size: number
            };
            if (!!tableState.search.predicateObject) {
                ret.name = tableState.search.predicateObject.name;
            }
            if ($scope.option !== 'all' && $scope.option !== undefined) {
                ret.compulsory = $scope.option;
            }
            $http.get('/all', {params: ret}).then(function(response) {
                tableState.pagination.numberOfPages = response.totalPages;
                $scope.parts = response.data;
                $scope.indexOffset = ret.page * ret.size;
            });
        };

    });