angular.module('testApp.ListItems')

    .service('Companies', ['$http', '$q', 'Company',function ($http, $q, Company) {
        var companies = [];
        function Companies() {
            console.log('Companies constr');
        }
        Companies.prototype.getCompanies = function () {
            if(companies.length){
                return $q(function (resolve, reject) {
                    resolve(companies);
                })
            }

            return $http({
                metod: "GET",
                headers: {
                    'Authorization': 'c8ae05d40e1c50a9393223dc4546a306cd1aca27'
                },
                data: {
                  'page': 1
                },
                url: "http://504080.com/api/v1/companies"
            }).then(function (data) {
                companies = data.data.data.data;
                return companies.map(function (item) {
                    return new Company(item);
                });
            }, function (err) {
                console.log(err);
            })

        };
        return new Companies();
    }])
    
    .factory('Company', [function (company) {
        function Company(company) {
            this.company_name        = company.company_name  || 'Company Name',
            this.id                  = company.id            ||  667,
            this.country             = company.country       || 'Belgrade, Serbia',
            this.type                = company.type       || 'Manufactured',
            this.img                 = company.img           || 'Belgrade, Serbia',
            this.alias               = 'cid'+company.id      || '#';
        }
        return Company;
    }]);