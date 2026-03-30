import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-4">
        Sidebar
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;