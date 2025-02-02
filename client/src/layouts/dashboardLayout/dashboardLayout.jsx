import { Outlet, useNavigate } from "react-router-dom"
import {useAuth} from "@clerk/clerk-react"
import {useEffect} from "react"

const Sidebar = () => {
    const navigate = useNavigate()
    return (
      <div className="w-64 h-screen bg-[#0a0a1a] text-white p-4">
        <h2 className="text-lg font-bold">Nom Nom</h2>
        <nav className="mt-4">
          <ul>
            <li className="mb-2 hover:bg-[#1a1a2a] cursor-pointer" onClick={(e)=>{navigate("/dashboard/chats/1")}}>Create a new Chat</li>
            <li className="mb-2 hover:bg-[#1a1a2a] cursor-pointer">Explore Nom Nom</li>
          </ul>
        </nav>
        <h3 className="mt-6 text-sm font-bold">Recent Chats</h3>
        <ul className="mt-2 text-sm space-y-1" onClick={()=>{navigate("/dashboard/chats/1")}}>
          <li className="cursor-pointer hover:bg-[#1a1a2a]">Day 1</li>
        </ul>
      </div>
    );
  };

const DashboardLayout = () => {
    const {userId, isLoaded} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && !userId) { {/* Loaded and not logged in */}
            navigate("/sign-in")
        }
    })

    if (!isLoaded){
        console.log("Loading")
    }
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout