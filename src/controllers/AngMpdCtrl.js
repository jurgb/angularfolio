app.controller("AngMpdController", function($scope, $mdSidenav, $http, $mdUtil, $log, user){
    
    

    //*******************
// USERTABS
//*******************
$scope.selectedUsertab = null;
$scope.usertabs = [{
      id:'1',
      name: 'Basic Info',
      iconurl: './assets/images/icons/basicinfo.svg'
  }, {
      id:'2',
      name: 'Travel info',
      iconurl: './assets/images/icons/transport.svg'
  }, {
      id:'3',
      name: 'entertainement',
      iconurl: './assets/images/icons/activities.svg'
}];
$scope.selectedUsertab = $scope.usertabs[0];
$scope.selectUsertab = selectUsertab;
function selectUsertab(muppet) {
    $scope.selectedUsertab = angular.isNumber(muppet) ? $scope.usertabs[muppet] : muppet;
    $scope.loading = "true";
    $scope.toggleSidenav('left');
  }
$scope.toggleSidenav = toggleSidenav;
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
}
    
    
    
    
    
    
    
    $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-right'
      };
    $scope.onSwipeLeft = function(ev) {
      $scope.toggleSidenav('right');
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
                    $scope.loggedinuser = data;
                    $scope.loggedinuser.loggedin = true;
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
});