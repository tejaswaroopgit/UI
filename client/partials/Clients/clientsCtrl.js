myApp.factory('clientsService', function ($http) {
    return {
        addClients: function (clientsData, success, error) {
          
            $http({
                url:'/clients/addClients',
                method:"POST",
                data:clientsData
            }).then(success,error)
        },

        getClients: function (success,error) {
           
            $http({
                url: '/clients/getClients',
                method:"GET"
            }).then(success,error)
        },
        getClientNames: function (success, error) {
            $http({
                url: '/clientsNames/getClientName',
                method: "GET",
            }).then(success, error)
        },

        addClientName: function (clientnameInfo,success,error) {
            $http({
                url: '/clientsNames/addClientName',
                method: "POST",
                data:clientnameInfo
            })
        }

    }

     
})





myApp.controller('clientsCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService) {
    $scope.addClient = function (details) {
        $location.path('/addClients')
       
    }
    $scope.clientDetails = function () {
        console.log("entered the clients ctrl");
        clientsService.getClients(function (success) {
            $scope.result = success.data
            console.log($scope.result)
            $scope.count = $scope.result.length;
        });      

    }
    $scope.clientDetails();

    $scope.clientNames = function () {
        clientsService.getClientNames(function (success) {
            $scope.clientsNames = success.data
            console.log(success.data)
        })
        
    }
    $scope.clientNames();

    $scope.addClientname = function () {
        $location.path('/addClientsNames')
    }


    })

myApp.controller('addEditClientsCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService) {

    $scope.client = {
        "clientName": "",
        "clentLocation": "",
        "clentEmail": "",
        "clientAdress": "",
        "clientJob": "",
        "noOfParts": "",
        "pricePerPart": "",       
        "clientStartDate": "",
        "clientJobExpiry": "",
        "clientComments": "" 

    }

    $scope.clientName = {
        "clientsName": "",
        "clentsLocation": "",
        "clentsEmail": "",
        "clientsAdress": "",
        "clientsAddedDate": "",
        "clientsComments": ""
    }

    $scope.clientNames = function () {
        clientsService.getClientNames(function (success) {
            $scope.clientsNames = success.data
            console.log(success.data)
        })

    }

    $scope.clientNames();
   
  
    $scope.goToClientsPage = function (client) {
        $location.path('/clientsList')
        console.log(client)
        clientsService.addClients(client);
    }
    $scope.onCancel = function () {
        $location.path('/clientsList')

    }

    $scope.addClientName = function (addClientNameInfo) {
        clientsService.addClientName(addClientNameInfo, function (success) {
            console.log("post call successfull..!!")

        })
    }

 

   
});

myApp.controller('addEditClientsNameCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService) {

    $scope.addClientName = function (clientName) {
        $location.path('/clientsList')
        clientsService.addClientName(clientName, function (success) {
            console.log("post call successfull..!!")

        })
    }

    $scope.cancel = function () {
        $location.path ('/clientsList')
    }

})
