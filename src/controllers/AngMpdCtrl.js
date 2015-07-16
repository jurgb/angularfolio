app.controller("AngMpdController", function($scope, $mdSidenav, $http, $mdUtil, $log, user){
    
    
    
    $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-right'
      };
    
    
    
    
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
    
$scope.loggedinuser = user.getPeopleResponse();    
//user.savePeopleResponse(data);
    $scope.checkifloggedin = function(){
        if ($scope.loggedinuser.loggedin == false) {
            window.location = "#/login";
        }
    };
    $scope.adduser = function(add){
        $http.post("./views/php/newuser.php",{'firstname': $scope.newuser.firstName, 'lastname': $scope.newuser.lastName, 'email':$scope.newuser.email, 'password':$scope.newuser.password})
        .success(function(data, status, headers, config){
            console.log(data);
            console.log("inserted Successfully");
        });
    };
    $scope.login = function(){
        $http.post("./views/php/login.php", {'username':$scope.loginuser.username,'password':$scope.loginuser.password})
        .success(function(data){
            console.log("login uitgevoerd, wachten op resultaat...");
            console.log(data);
            if (data == 0) {
                    $scope.loggedinuser = null;
                    user.savePeopleResponse($scope.loggedinuser);
                    $scope.loginuser.username = null;
                    $scope.loginuser.password = null;
                    $scope.error = "Username or password is incorrect!";
                    $scope.showerror = true;
            }else{
                    $scope.loggedinuser = null;
                    $scope.loggedinuser = {Firstname: "Jurgen"};
                    user.savePeopleResponse($scope.loggedinuser);
                    window.location = "#/home";
            }
        })
    };
    $scope.logout = function(){
        $scope.loggedinuser.loggedin = false;
        user.savePeopleResponse($scope.loggedinuser);
        window.location = "#/";
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