app.factory("APIservice", function($http){

    var APIservice = {};
    
    APIservice.activitycat = function(){
        return $http.get('http://api.uxplr.com/api/activity/categories', {
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    APIservice.departures = function(){
        return $http.get('http://api.uxplr.com/api/departures', {
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    APIservice.destinations = function(data){
        return $http.get('http://api.uxplr.com/api/destinations', {
            params:data,
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    return  APIservice;
});