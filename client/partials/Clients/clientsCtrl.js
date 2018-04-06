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
        },
        deleteClient: function (Id,success,error) {
            $http({
                url: '/clients/deleteReqClient/'+Id,
                method: "DELETE",
                
            }).then(success,error)
        },
        findCLientById: function (Id,success,error) {
            $http({
                url: '/clients/getReqClients/' + Id,
                method: "GET"
            }).then(success,error)
        },
        updateClient: function (updateInfo, success, error) {
            $http({
                url: '/clients/updateReqClient/' + updateInfo._id ,
                method: "PUT",
                data: updateInfo
            }).then(success,error)

        }
    }     
})

myApp.controller('clientsCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService, $rootScope) {


    $scope.addAndUpdateClients = function (Id) {
        $location.path('/addClients/'+ Id)
        clientsService.findCLientById(Id, function (success) {
            console.log(success.data);
        })
    }

    $scope.goToClientNameEditPage = function () {
        $location.path('/addClientsNames')
    }


    $scope.addClient = function (Id) {
        $location.path('/addClients/:Id')
       
    }

    $scope.updateClient = function(Id){
        $location.path('/addClients/'+Id)
    }

    // GET Client details
    $scope.clientDetails = function () {
        console.log("entered the clients ctrl");
        clientsService.getClients(function (success) {
            $scope.result = success.data
            console.log($scope.result)
            $scope.count = $scope.result.length;
        });  
    }
    $scope.clientDetails();
    $scope.$on('get clients event', function (e, value) {
        $scope.clientDetails();
    });

    // Get Clients Names Details
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

    // Delete Client transctions
    $scope.deleteClient = function (deleteId) {
        console.log(deleteId)
        console.log("entered the delete f unction..!!" + deleteId);
        clientsService.deleteClient(deleteId);
        $rootScope.$broadcast('get clients event');
    }
    })

myApp.controller('addEditClientsCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService) {

    $scope.client = {};
    var UID = $routeParams.Id;
    console.log(UID)

    $scope.getReqClients = function () {
       clientsService.findCLientById($routeParams.Id, function (success) {
            console.log(success.data);
            $scope.client = success.data;
        }) }
    $scope.getReqClients();

  
    //GET clients names function
    $scope.getClientsNames = function () {
        clientsService.getClientNames(function (success) {
            var result = [];
            var value = [];
            $scope.clientsNames = success.data
            console.log(success.data[2].clientsName)
            //for (var i = 0; i < $scope.clientsNames.length; i++) {

            //    value.push( success.data[i].clientsName);
                      
            //}
            //console.log(value)   
            //result.push(value)
            //console.log(result)
            //$scope.values=result
        })
       
    }
    $scope.getClientsNames();

    // On submit function for adding clients
    $scope.goToClientsPage = function (client) {
        console.log(client)
        if (UID == ":Id") {           
            $scope.client.clientName = $scope.selectedClient.clientsName;
            console.log(client)
            clientsService.addClients(client);
            $location.path('/clientsList')
        } else {
            alert("update fnction entered..!!")
            clientsService.updateClient(client, function (success) {
                console.log(client)
                console.log("update function entered...!!!")
                $location.path('/clientsList')
            }, function (error) {
                console.log("error occurred..!!")
                $location.path('/clientsList')
            })
        }
    }
    $scope.onCancel = function () {
        $location.path('/clientsList')

    } 
});

myApp.controller('addEditClientsNameCtrl', function ($scope, $log, $http, $location, $routeParams, clientsService) {
    $scope.clientName = {};

    //ADD clients names function
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


