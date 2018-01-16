myApp.factory('membersService', function ($http) {
    return {
        memberRegister: function (addMembers, success, error) {
            console.log(addMembers)
            $http({              
                url: '/members/addMembers',
                method: "POST",
                data: addMembers
            }).then(success, error)
        },

        getMembers: function (success, error) {
          $http({
                url:'/members/getMembers',
                method: "GET"
                 }).then(success,error)
        },
        updateMember: function (body, success, error) {
            console.log("entered the update member service");
            $http({
                url:'/members/updateMember',
                method: "PUT",
                data: body
            }).then(success,error)
        },
        deleteMember: function (deleteInfo, success, error) {
            console.log("entered the get all members service")
            $http({
                url: '/members/deleteMember/'+deleteInfo,
            method:"DELETE",
            data: deleteInfo
            }).then(success, error)
        },
        findMember: function (Id, success, error) {
            console.log("entered the get member service")
            $http({
                url: '/members/getMemberById/'+Id,
                method: "GET",
                data: Id
            }).then(success, error)
        }
    }
})

myApp.controller('membersAddEditCtrl', function ($scope, $log, $http, membersService, $location, $routeParams) {
    $scope.user = {
        "name": '',
        "lastname": '',
        "age": '',
        "email": '',
        "education": ''
    }

    var updateId = $routeParams.Id;
    console.log(updateId)

    if (updateId === ":Id") {

        console.log("add new member")
    } else if (updateId == null) {
        console.log("wrong route")
    } else {
        membersService.findMember(updateId, function (success) {
            $scope.user = success.data
            console.log(success.data);
        })
    }
    // function for the update icon            

    $scope.onSubmit = function (users) {
        if (updateId === ":Id") {

            console.log("entered the submit")
            console.log(users)
            membersService.memberRegister(users);
            $location.path('/getMembers')       

        }
        else {
            console.log(updateId)
            membersService.updateMember( users, function (success) {
                console.log(users);
                $location.path('/getMembers')

            }, function (error) {
                console.log("error occured");
                $location.path('/getMembers')
            })    

    }
}
        
      
    $scope.onCancel = function () {
        $location.path('/getMembers')
    }
        
    // this is for the home page button to get the members ----redericted after clicking on members
   

  



    })

myApp.controller('membersListCtrl', function ($scope, $log, $http, membersService, $location,$routeParams) {
    $scope.members = []; 

    // get all members and display  them from this 
    membersService.getMembers(function (success) {
        $scope.members = success.data;
       // console.log($scope.members);
        //console.log(success.data);
    })
    $scope.updateMember1 = function (Id) {
       // console.log(Id)
        $location.path('/member/'+Id);       
    }

    // add member button in list page  
        $scope.addMemberOrUpdatemember = function () {
               $location.path('/member/:Id');
           }    

    $scope.deleteMember = function (Id) {
        console.log("Enterd the delete loop");
        membersService.deleteMember(Id);
      //  console.log(Id);
        location.reload();     
      
    }
})








        //$scope.updateMember1 = function (Id) {
        //    $location.path('/member/:id');
        //    console.log(Id)
        //    membersService.findMember($routeParams.Id, function (success) {
        //        if (success.data.status) {
        //            $scope.user = success.data
        //            console.log(success.data);

        //}
