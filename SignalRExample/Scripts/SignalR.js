(function () {
    $.connection.hub.start()
       .done(function () {
           console.log("Connection Established");
           $.connection.myHub.server.announce("Connected!");
       })
       .fail(function () {
           alert('Connection Failed');
       });

    $.connection.myHub.client.announce = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }

})()