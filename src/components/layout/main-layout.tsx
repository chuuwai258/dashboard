import { Outlet } from '@tanstack/react-router'
import { SidebarProvider } from '../ui/sidebar'
import AppSidebar from './app-sidebar'

const MainLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}

export default MainLayout
