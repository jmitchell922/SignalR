(function () {
    var myHub = $.connection.myHub;

    $.connection.hub.start()
       .done(function () {
            writeToPage("Successfully Connected!");
            myHub.server.announce("Connected!");
            myHub.server.getServerDateTime()
                .done(function(data) {
                    writeToPage(data);
                })
                .fail(function(e) {
                    writeToPage(e);
                });
        })
       .fail(function () {
            writeToPage("Error: Connection Failed");
        });

    myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function(message) {
        $("#welcome-messages").append(message + "<br />");
    }
})()