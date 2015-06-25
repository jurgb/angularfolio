app.factory('user', function() {
    var peopleResponse = {firstname: "jurgen"};
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