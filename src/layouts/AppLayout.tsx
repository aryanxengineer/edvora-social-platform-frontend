import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Home, Settings, User } from "lucide-react";

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="xl:w-3/4 md:w-full mx-auto h-full">
          <SidebarProvider>
            <div className="hidden md:block">
              <AppSidebar />
            </div>
            <main className="w-full h-screen lg:grid lg:grid-cols-[65%_35%]">
              <Outlet />
              <section className="hidden lg:block">
                Activity bar
              </section>
            </main>
            {/* MOBILE BOTTOM NAV */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
              <div className="flex justify-around items-center h-14">
                <button className="flex flex-col items-center text-xs">
                  <Home size={20} />
                  Home
                </button>
                <button className="flex flex-col items-center text-xs">
                  <User size={20} />
                  Profile
                </button>
                <button className="flex flex-col items-center text-xs">
                  <Settings size={20} />
                  Settings
                </button>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
