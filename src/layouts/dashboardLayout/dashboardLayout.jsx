import { Outlet, useNavigate } from "react-router-dom"
import {useAuth} from "@clerk/clerk-react"
import {useEffect} from "react"


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
        <div>
            MENU
            <Outlet />
        </div>
    )
}

export default DashboardLayout