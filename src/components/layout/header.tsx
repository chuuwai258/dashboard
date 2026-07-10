import { ModeToggle } from "../features/mode-toggle"
import '#/styles.css'
import { SidebarTrigger } from "../ui/sidebar"
import { Link } from "@tanstack/react-router"


const Header = () => {
  return (
    <div className="flex items-center  border-b p-2 gap-2 px-7 ">
        <SidebarTrigger />
        <div className="flex justify-between items-center w-full px-4 py-2 ">
            <Link to='/document'>Document
            </Link>
            <Link to='/github'>GitHub
            </Link>

        </div>
        <ModeToggle/>
      
    </div>
  )
}

export default Header
