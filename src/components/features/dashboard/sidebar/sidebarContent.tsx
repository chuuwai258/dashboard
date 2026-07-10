import { SidebarContent, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../../ui/sidebar'
import { BarChart3, Bot, CircleGaugeIcon, CircleHelp, CirclePlus, ClipboardClock, Database, Folder, ListTodo, Mail, MoreHorizontal, Search, Settings, Users } from 'lucide-react'
const dashboardItems = [
  { name: 'Dashboard', url: '/dashboard', icon: CircleGaugeIcon },
  { name: 'Lifecycle', url: '/lifecycle', icon: ListTodo },
  { name: 'Analytics', url: '/analytics', icon: BarChart3 },
  { name: 'Projects', url: '/projects', icon: Folder },
  { name: 'Team', url: '/team', icon: Users },
]

const documentItems = [
  { name: 'Data Library', url: '/data-library', icon: Database },
  { name: 'Reports', url: '/reports', icon: ClipboardClock },
  { name: 'Word Assistant', url: '/word-assistant', icon: Bot },
  { name: 'More', url: '/more', icon: MoreHorizontal },
]

const bottomItems = [
  { name: 'Settings', url: '/settings', icon: Settings },
  { name: 'Get Help', url: '/help', icon: CircleHelp },
  { name: 'Search', url: '/search', icon: Search },
]
const AppSidebarContent = () => {
  return (
    <>
    <SidebarContent>
        <SidebarGroup >
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-black text-white px-3 py-1.5 hover:bg-black/80">
              <CirclePlus className="size-6" />
              <h1>Quick Create</h1>
            </div>
            <Mail className="border border-slate-400 size-9 px-1.5 rounded-lg" />
          </div>

          <SidebarGroupAction></SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className=" mt-3">
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Document  */}
        <SidebarGroup>
          <SidebarGroupLabel>Documents</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {documentItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* buttom */}
        <SidebarGroup className="mt-auto ">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}

export default AppSidebarContent
