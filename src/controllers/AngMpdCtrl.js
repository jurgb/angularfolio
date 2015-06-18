app.controller("AngMpdController", function($scope, $mdSidenav, $http, $mdUtil, $log){
    
    $scope.onSwipeLeft = function(ev) {
      $scope.toggleRight();
    };
function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);
      return debounceFn;
    }
    $scope.toggleRight = buildToggler('right');    
$scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
//***********************
// User related functions
//***********************
    $scope.adduser = function(add){
        $http.post("./views/php/newuser.php",{'firstname': $scope.newuser.firstName, 'lastname': $scope.newuser.lastName, 'email':$scope.newuser.email, 'password':$scope.newuser.password})
        .success(function(data, status, headers, config){
            console.log(data);
            console.log("inserted Successfully");
        });
    };
    $scope.login = function(add){
        $http.post("./views/php/login.php",{'email': $scope.loginuser.email, 'password': $scope.loginuser.password})
        .success(function(data, status, headers, config){
            console.log(data);
            console.log("inserted Successfully");
        });
    };
//    $scope.login = function(add){
//        $scope.showerror = false;
//            if ($scope.loginuser.username == "jurgb") {
//                if ($scope.loginuser.password == "3imda") {
//                    window.location = "#/profile";
//                }else{
//                    $scope.loginuser.username = null;
//                    $scope.loginuser.password = null;
//                    $scope.error = "Please provide a valid password ";
//                    $scope.showerror = true;
//                }
//            }else{
//                if ($scope.loginuser.username == "Jurgb") {
//                    if ($scope.loginuser.password == "3imda") {
//                        window.location = "#/profile";
//                    }else{
//                        $scope.loginuser.username = null;
//                        $scope.loginuser.password = null;
//                        $scope.error = "Please provide a valid password ";
//                        $scope.showerror = true;
//                    }
//                }else{
//                    $scope.loginuser.username = null;
//                    $scope.loginuser.password = null;
//                    $scope.error = "Please get an autorised username";
//                    $scope.showerror = true;
//                }
//            }
//    };
});