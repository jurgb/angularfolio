app.factory('booking', function($filter) {
    var peopleResponse = {
        
    };
        return {
            savePeopleResponse:function (data) {
                peopleResponse = data;
            },
            getPeopleResponse:function () {
                return peopleResponse;
            }
        };
});