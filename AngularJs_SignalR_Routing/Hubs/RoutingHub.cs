using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace AngularJs_SignalR_Routing.Hubs
{
    public class RoutingHub : Hub
    {
        private static Timer routingTimer = new Timer();
        private static string[] states = { "state1", "state2", "state3" };
        private static int currState = 0;

        public static object GlobalHos { get; private set; }

        static RoutingHub()
        {
            routingTimer.Elapsed += RoutingTimer_Elapsed;
            routingTimer.Interval = 2000;
            routingTimer.Enabled = true;
            routingTimer.Start();

        }

        private static void RoutingTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            currState++;
            currState = currState % states.Length;
            GlobalHost.ConnectionManager.GetHubContext<RoutingHub>().Clients.All.changeState(states[currState]);

        }
    }
}