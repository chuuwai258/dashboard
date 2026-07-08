import { SidebarTrigger } from "../ui/sidebar"
import { Link } from "@tanstack/react-router"


const Header = () => {
  return (
    <div className="flex items-center px-4 border-b p-2 gap-2">
        <SidebarTrigger />
        <div className="flex justify-between items-center w-full px-4 py-2 text-black">
            <Link to='/document'>Document
            </Link>
            <Link to='/github'>GitHub
            </Link>

        </div>
      
    </div>
  )
}

export default Header
