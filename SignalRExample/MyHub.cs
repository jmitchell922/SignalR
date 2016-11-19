using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRExample
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        [HubMethodName("announceToAll")]
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}