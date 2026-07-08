
import AppSidebarHeader from '../features/dashboard/sidebar/sidebarHeader'
import AppSidebarContent from '../features/dashboard/sidebar/sidebarContent'
import AppSidebarFooter from '../features/dashboard/sidebar/sidebarFooter'
import { Sidebar } from '../ui/sidebar'

export default function AppSidebar() {
  return (
    <Sidebar collapsible='icon'>
      {/* header */}
      <AppSidebarHeader />

      {/* Content */}
      <AppSidebarContent/>

      {/* footer */}
      <AppSidebarFooter/>
    </Sidebar>
  )
}
