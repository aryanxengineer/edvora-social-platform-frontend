import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="w-3/4 mx-auto h-full">
          <SidebarProvider >
            <AppSidebar />
            <main className="w-full h-screen lg:grid lg:grid-cols-[65%_35%]">
              <Outlet />
            </main>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
