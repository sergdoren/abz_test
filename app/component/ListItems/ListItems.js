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
    }])




    .directive('listpeople', function () {
        return{
            restrict : "A",
            controller: 'listitemspeopleCntr',
            templateUrl: '/component/ListItems/ListItemsPeople.html'
        }
    })
    .controller('listitemspeopleCntr', ['$scope', 'Peoples', function ($scope,Peoples) {

    }])


    .directive('listproduct', function () {
        return{
            restrict : "A",
            controller: 'listproductCntr',
            templateUrl: '/component/ListItems/ListItemsProduct.html'
        }
    })
    .controller('listproductCntr', ['$scope', 'Products', function ($scope,Products) {

    }]);
