angular.module('app', ['smart-table'])
    .controller('partsController', function($scope, $http) {
        $scope.parts = [];
        $scope.indexOffset = 0;
        $scope.itemsByPage = 10;
        $scope.getParts = function(tableState){
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            var ret = {
                sort: tableState.sort.predicate,
                page: (start / number),
                size: number
            };
            $http.get('/all', {params: ret}).then(function(response) {
                $scope.parts = response.data;
                $scope.indexOffset = ret.page * ret.size;
            });
        };

    });