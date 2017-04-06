angular.module('testApp.ListItems',[])

    .directive('listcompany', function () {
        return{
            restrict : "A",
            controller: 'listitemscompanyCntr',
            templateUrl: '/component/ListItems/ListItems.html'
        }
    })

    .controller('listitemscompanyCntr', ['$scope', 'Companies', function ($scope,Companies) {
        Companies.getCompanies().then(function (companies) {
            $scope.items = companies;
        });
        $scope.header = 'Featured Companies';
        $scope.lim = 3;
    }]);
