app.factory('trip', function($filter) {
    var peopleResponse = {
        budget: 0,
        departurestring:"2015-07-07",
        returnstring:"2015-07-14",
        departure:null,
        return:null
    };
        return {
            savePeopleResponse:function (data) {
                peopleResponse.departure = data.departure;
                peopleResponse.budget = data.budget;
                peopleResponse.return = data.return;
                peopleResponse.departurestring = $filter('date')(data.departure, "yyyy-MM-dd");
                peopleResponse.returnstring = $filter('date')(data.return, "yyyy-MM-dd");
            },
            getPeopleResponse:function () {
                return peopleResponse;
            }
        };
});