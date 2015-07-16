app.factory('user', function() {
    var peopleResponse = {
        userID: '1',
        email: 'Jurgenbarbier@gmail.com',
        firstName: 'Jurgen',
        lastName: 'Barbier' ,
        address: 'Randomstreet 123' ,
        city: 'Antwerpen' ,
        biography: 'For more info about this application tweet me @jurg_b',
        postalCode : '2000',
        hotelmin: "0",
        hotelmax: "5",
        departurepoint:'BRU',
        food:"7",
        loggedin: false
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