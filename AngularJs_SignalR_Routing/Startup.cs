using Owin;

namespace AngularJs_SignalR_Routing
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}