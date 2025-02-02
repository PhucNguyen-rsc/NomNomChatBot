import React, { useState, useRef, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
console.log(BACKEND_URL)

const ChatPage = () => {
    const endRef = useRef()
    const [messages, setMessages] = useState([
      { text: "Welcome to Nom Nom! How are you feeling today?", sender: "ai" },
    ]);

    async function sendMessage (e) {
      e.preventDefault()

      const userInput = e.target.elements.messageInput.value
      if (!userInput.trim()) return

      const message = { text: userInput, sender: "user" }
      setMessages(prevMessages => [...prevMessages, message]);

      try {
        const response = await fetch(BACKEND_URL + '/answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({message: message.text}),
          });      


        const data = await response.json();

        const chatResponse = { text: data.response, sender: "ai" }

        setMessages(prevMessages => [...prevMessages, chatResponse]);
      }
      catch {
        console.log("Error on backend")
      }
    }

    useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

  
    return (
      <div className="flex-1 flex flex-col bg-[#101026] text-white p-6 relative items-center">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 text-center opacity-30">
          NOM NOM
      </h1>
      <div
          className="flex-1 overflow-y-auto p-4 mt-6 rounded-lg w-full max-w-3xl flex flex-col gap-5"
          style={{ scrollbarWidth: "none" }}
      >
          {messages.map((msg, index) => (
              <div
                  key={index}
                  className={`p-4 rounded-2xl max-w-[80%] ${
                      msg.sender === "ai" ? "self-start bg-gray-800" : "self-end bg-gray-700"
                  }`}
              >
                  {msg.text}
              </div>
          ))}

          <div ref = {endRef} />

          <form onSubmit={sendMessage} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-[#101026] p-4 rounded-lg flex">
            <input
                type="text"
                className="flex-1 p-2 bg-gray-800 text-white rounded-l-lg"
                placeholder="Type a message..."
                name="messageInput"
            />
            <button className="p-2 bg-blue-500 rounded-r-lg" type="submit">
                <img className="w-6 h-6 rounded" src = "/arrow.png" />
            </button>
          </form>
        </div>
      </div>
    );
  };


export default ChatPage