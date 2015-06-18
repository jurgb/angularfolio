app.controller("AngMpdController", function($scope, APIservice, $mdSidenav, $mdDialog, $http, user, trip, $filter,booking){
    
//*******************
// INIT LOADING
//*******************
$scope.loading = false;
$scope.showerror = false;
$scope.error = null;
$scope.noresultsfound = false;
//*******************
// INIT ALL ARRAYS
//******************* 
$scope.activitycategories = [];
$scope.departurepoints = [];
$scope.cardestinations = [];
$scope.skidestinations = [];
$scope.flydestinations = [];
$scope.sundestinations = [];

$scope.selectedUsertab = null;
$scope.selectedVacType = null;

$scope.tripsettings = trip.getPeopleResponse();
$scope.booktrip = booking.getPeopleResponse();
    
// ALL ACTIVITIES
    
$scope.naturechoices = [
    {id: 23, name:'Caverns/caves'},
    {id: 48, name:'Forests'},
    {id: 51, name:'Gardens'},
    {id: 53, name:'Geologic Formations'},
    {id: 64, name:'Hot Springs/Geysers'},
    {id: 65, name:'Islands'},
    {id: 80, name:'Mountains'},
    {id: 86, name:'Nature/wildlife Areas'},
    {id: 102, name:'Reefs'},
    {id: 106, name:'Scenic Drives'},
    {id: 107, name:'Scenic Railroads'},
    {id: 131, name:'Waterfalls'}
];
$scope.historychoices = [
    {id: 2, name:'Ancient Ruins'},
    {id: 24, name:'Cemeteries'},
    {id: 59, name:'Historic Sites'},
    {id: 60, name:'Historic Walking Areas'}
];
$scope.museumchoices = [
    {id: 8, name:'Art Museums'},
    {id: 25, name:"Children's Museums"},
    {id: 61, name:'History museums'},
    {id: 75, name:'Military museums'},
    {id: 82, name:'Museums'},
    {id: 89, name:'Planetariums'},
    {id: 109, name:'Science Museums'},
    {id: 114, name:'Specialty museums'}
];
$scope.activitieschoices = [
    {id: 1, name:'Theme Parks'},
    {id: 6, name:'Arenas/Stadiums'},
    {id: 10, name:'Bar/clubs'},
    {id: 16, name:'Bodies of water'},
    {id: 21, name:"Casino's"},
    {id: 37, name:'Dinner Theaters'},
    {id: 41, name:'Educational Sites'},
    {id: 45, name:'Farms'},
    {id: 50, name:'Entertainement Centers'},
    {id: 81, name:'Movie Theaters'},
    {id: 103, name:'Religious Sites'},
    {id: 121, name:'Theaters'},
    {id: 123, name:'Trails'},
    {id: 129, name:'Water Parks'},
    {id: 133, name:'Wineries'},
    {id: 134, name:'Zoos'}
];
$scope.buildingschoices = [
    {id: 5 , name:'Architectural Buildings'},
    {id: 19, name:'Bridges'},
    {id: 22, name:'Castles'},
    {id: 26, name:'Churches/cathedrals'},
    {id: 49, name:'Fountains'},
    {id: 69, name:'Libraries'}
]
$scope.sportschoices = [
    {id: 13, name:'Biking Trails'},
    {id: 55, name:'Golf Courses'},
    {id: 57, name:'Health Clubs'},
    {id: 58, name:'Hiking Trails'},
    {id: 63, name:'Horseback Riding'},
    {id: 116, name:'Sport Camps'},
    {id: 117, name:'Sport Complexes'}
];
$scope.touristschoices = [
    {id: 12, name:'Beaches'},
    {id: 68, name:'Landmarks'},
    {id: 71, name:'Lookouts'},
    {id: 72, name:'Malls'},
    {id: 78, name:'Monuments/Statues'},
    {id: 84, name:'National Parks'},
    {id: 88, name:'Observation Decks'},
    {id: 95, name:'Parks'},
    {id: 98, name:'Playgrounds'},
    {id: 110, name:'Ships'},
    {id: 111, name:'Shops'},
    {id: 115, name:'Specialty Shops'},
    {id: 118, name:'State Parks'},
    {id: 132, name:'Piers/Boardwalks'}
];
$scope.eventschoices = [
    {id: 7, name:'Art Galleries'},
    {id: 31, name:'Concerts'},
    {id: 44, name:'Factory Tours'},
    {id: 92, name:'Operas'},
    {id: 96, name:'Performances'},
    {id: 122, name:'Tours'},
];
    
// USER
$scope.user = user.getPeopleResponse();


//*******************
// USERTABS
//******************* 
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

//*******************
// VACATION TYPES
//*******************     
$scope.vacationtypes = [{
      id:'1',
      name: 'Select your vacationtype',
    selector:true
  },{
      id:'2',
      name: 'Car vacations',
      iconurl: './assets/images/icons/car.svg'
  }, {
      id:'3',
      name: 'Ski vacations',
      iconurl: './assets/images/icons/ski.svg'
  }, {
      id:'4',
      name: 'Sun vacations',
      iconurl: './assets/images/icons/sun.svg'
  }, {
      id:'5',
      name: 'Fly vacations',
      iconurl: './assets/images/icons/plane.svg'
  }];
$scope.selectedVacType = $scope.vacationtypes[0];
$scope.selectVacType = selectVacType;
function selectVacType(muppet) {
    $scope.selectedVacType = angular.isNumber(muppet) ? $scope.vacationtypes[muppet] : muppet;
    $scope.loading = "true";
    $scope.toggleSidenav('left');
}
    
//*******************
// Basic trip settings
//*******************    
$scope.plantrip = function(add){
        trip.savePeopleResponse($scope.tripsettings);
        window.location = "#/results";
    };
//*******************
// SIDENAV TOGGLE
//******************* 
    
$scope.toggleSidenav = toggleSidenav;
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
}
    
//*******************
// CUSTOM FILTERS
//******************* 
    $scope.carVacationFilter = function(dest)
    {
    // Do some tests

    if(dest.distance.miles < 900)
    {
        return true; // this will be listed in the results
    }

    return false; // otherwise it won't be within the results
    };
    
//*******************
// API CALLS
//*******************    
$scope.activitycat = function(){
      //Alle notifications binnehalen en in scope stoppen
		APIservice.activitycat()
			.success(function(data){
                
				$scope.activitycategories = data;
                $scope.loading = "false";
                console.log(data);
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
            });
};
    $scope.departures = function(){
      //Alle notifications binnehalen en in scope stoppen
		APIservice.departures()
			.success(function(data){
                
				$scope.departurepoints = data;
                console.log(data);
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
            });
};

    $scope.cardestinations = function(){
        console.log($scope.tripsettings);
        $scope.noresultsfound = false;
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':$scope.user.selectedActivities, 'UxplrSearch[budget]': $scope.tripsettings.budget, 'UxplrSearch[sort]':'matchrate','UxplrSearch[sortOrder]':'desc', 'UxplrSearch[currency]':'EUR'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.cardestinations = data;
                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                $scope.noresultsfound = true;
                console.log("fail");
                $scope.loading = false;
        });
    };
    
    $scope.skidestinations = function(){
        $scope.noresultsfound = false;
      //Alle notifications binnehalen en in scope stoppen
        params =
{'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':$scope.user.selectedActivities, 'UxplrSearch[budget]': $scope.tripsettings.budget, 'UxplrSearch[sort]':'matchrate','UxplrSearch[sortOrder]':'desc','UxplrSearch[temperature]':'{"0":{"min":"cold","max":"cool"}}','UxplrSearch[requiredActivities]':'112', 'UxplrSearch[currency]':'EUR'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.skidestinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                $scope.noresultsfound = true;
                console.log("fail");
                $scope.loading = false;
            });
    };
    $scope.sundestinations = function(){
        $scope.noresultsfound = false;
      //Alle notifications binnehalen en in scope stoppen
        params =
{'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':$scope.user.selectedActivities, 'UxplrSearch[budget]': $scope.tripsettings.budget, 'UxplrSearch[sort]':'matchrate','UxplrSearch[sortOrder]':'desc','UxplrSearch[temperature]':'{"0":{"min":"warm","max":"hot"}}', 'UxplrSearch[currency]':'EUR'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.sundestinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                $scope.noresultsfound = true;
                console.log("fail");
                $scope.loading = false;
        });
    };
        $scope.flydestinations = function(){
            $scope.noresultsfound = false;
      //Alle notifications binnehalen en in scope stoppen
        params =
{'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':$scope.user.selectedActivities, 'UxplrSearch[budget]': $scope.tripsettings.budget, 'UxplrSearch[sort]':'matchrate','UxplrSearch[sortOrder]':'desc', 'UxplrSearch[currency]':'EUR'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.flydestinations = data;

                console.log(data);
            $scope.loading = false;
                
			})
            .error(function(){
                $scope.noresultsfound = true;
                console.log("fail");
                $scope.loading = false;
        });
    };
//*******************
// DIALOG MESSAGES
//******************* 

$scope.showAdvanced = function(data) {
    $mdDialog.show({
        parent: angular.element(document.body),
        controller: DialogController,
        templateUrl: './views/dialog/dialog.html',
        disableParentScroll: true,
        locals: {
            item: data
        }
    })
    .then(function(answer) {
        booking.savePeopleResponse(answer);
        window.location = "#/book";
    });
};
function DialogController($scope, $mdDialog, item) {
    $scope.item = item;
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}

    
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
//    $scope.login = function(add){
//        $http.get("./views/php/login.php",{'email':$scope.loginuser.email, 'password':$scope.loginuser.password})
//        .success(function(data, status, headers, config){
//            console.log(data);
//            console.log("collected succesfully");
//            console.log($scope.loginuser);
//            user.savePeopleResponse($scope.loginuser);
//            console.log(user.getPeopleResponse);
//            window.location = "#/app";
//        });
//    };
    $scope.login = function(add){
        $scope.showerror = false;
            if ($scope.loginuser.username == "jurgb") {
                if ($scope.loginuser.password == "3imda") {
                    window.location = "#/profile";
                }else{
                    $scope.loginuser.username = null;
                    $scope.loginuser.password = null;
                    $scope.error = "Please provide a valid password ";
                    $scope.showerror = true;
                }
            }else{
                if ($scope.loginuser.username == "Jurgb") {
                    if ($scope.loginuser.password == "3imda") {
                        window.location = "#/profile";
                    }else{
                        $scope.loginuser.username = null;
                        $scope.loginuser.password = null;
                        $scope.error = "Please provide a valid password ";
                        $scope.showerror = true;
                    }
                }else{
                    $scope.loginuser.username = null;
                    $scope.loginuser.password = null;
                    $scope.error = "Please get an autorised username";
                    $scope.showerror = true;
                }
            }
    };
});