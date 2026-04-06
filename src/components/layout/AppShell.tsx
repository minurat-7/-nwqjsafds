import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export function AppShell() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopBar onMenuClick={() => setMobileSidebarOpen((o) => !o)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile sidebar overlay */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative z-10">
              <Sidebar onSelect={() => setMobileSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
