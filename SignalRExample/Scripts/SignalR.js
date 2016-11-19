(function () {
    var myHub = $.connection.chat;

    $("#click-me")
        .on("click",
            function() {
                myHub.server.getServerDateTime()
                .done(function (data) {
                    writeToPage(data);
                })
                .fail(function (e) {
                    writeToPage(e);
                });
            });

    

    $.connection.hub.start()
       .done(function () {
            writeToPage("Successfully Connected!");
            myHub.server.announceToAll("Connected!");
            
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