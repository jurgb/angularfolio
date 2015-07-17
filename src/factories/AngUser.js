app.factory('user', function() {
    var peopleResponse = {
        loggedin: true
    };
        return {
            savePeopleResponse:function (data) {
                peopleResponse = data;
                console.log(data);
            },
            getPeopleResponse:function () {
                return peopleResponse;
            }
        };
});