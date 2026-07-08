import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar"
import { Button } from "#/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "#/components/ui/dropdown-menu"
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "#/components/ui/sidebar"
import { EllipsisVertical, LogOut, MessageSquareDot, PanelTop, UserRound } from "lucide-react"

const AppSidebarFooter = () => {
  return (
    <>
    <SidebarFooter className="my-1 flex justify-between gap-2 border-t px-2 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-medium">shadcn</h1>
                <p className="text-sm text-muted-foreground">m@example.com</p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <EllipsisVertical className="size-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" side="right">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="border-b w-full">
                      <div className="flex items-center gap-2  ">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h1 className=" text-sm">shadcn</h1>
                          <p className="text-xs text-muted-foreground">
                            m@example.com
                          </p>
                        </div>
                      </div>
                    </DropdownMenuLabel>

                    <DropdownMenuItem>
                      <UserRound />
                      Account
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <PanelTop />
                      Billing
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <MessageSquareDot />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}

export default AppSidebarFooter
