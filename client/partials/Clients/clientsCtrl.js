myApp.controller('clientsCtrl', function ($scope, $log, $http, $location, $routeParams) {
    $scope.addClient = function () {
        $location.path('/addClients')
    }

});
myApp.controller('addEditClientsCtrl', function ($scope, $log, $http, $location, $routeParams) {

    $scope.client = {
        "clientName": "",
        "clentLocation": "",
        "clientAdress": "",
        "clentEmail": "",
        "noOfParts": "",
        "pricePerPart":"",
        "clientJob": "",
        "clientStartDate": "",
        "clientJobExpiry":"",
        "clientComments": ""      

    }
  
    $scope.goToClientsPage = function (Client) {
        $location.path('/clientsList')
        console.log(Client)
    }
    $scope.onCancel = function () {
        $location.path('/clientsList')

    }

   
});
