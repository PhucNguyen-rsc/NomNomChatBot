import {Link, Outlet} from "react-router-dom"

const ChatList = () => {
    return (
        <div className="h-full flex flex-col relative">
            <span>Dashboard</span>
            <Link to="/dashboard">Create a new chat</Link>
            <Link to="/dashboard">Explore the chat bot</Link>
            <Link to="/dashboard">Contact</Link>
            <hr/>
            <div>
            <Link to="/">Chat 1</Link>
            <Link to="/">Chat 1</Link>
            <Link to="/">Chat 1</Link>
            <Link to="/">Chat 1</Link>
            </div>
        </div>
    )
}

export default ChatList