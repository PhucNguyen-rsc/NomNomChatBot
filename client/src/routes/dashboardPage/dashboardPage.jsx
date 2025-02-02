import ChatList from "../../components/chatList/chatList"
import ChatPage from "../chatPage/chatPage"
import { useState} from 'react'; 
  
  const MainContent = () => {
    let [message, setMessage] = useState(null)
    // const [conversation, setConversation] = useState([])

    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#101026] text-white">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-purple-500 opacity-30">Nom Nom</h1>
        <div className="mt-6 flex space-x-4">
          <div onClick={()=>{navigate("/dashboard/chats/1")}} className="flex flex-col items-center justify-center w-40 h-40 bg-[#1a1a3d] rounded-lg p-4 text-center cursor-pointer">
            <img src="/chat.png" alt="Chat" className="w-12 h-12 mb-2" />
            <span>Create a New Chat</span>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-[#1a1a3d] p-4 rounded-lg flex p-2.5">
            <input
                type="text"
                className="flex-1 p-2 bg-gray-800 text-white rounded-l-lg"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="p-2 bg-blue-500 rounded-r-lg">
                <img className="w-6 h-8" src = "arrow.png" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const DashboardPage = () => {
    return ( 
        <MainContent />
    );
  };

export default DashboardPage