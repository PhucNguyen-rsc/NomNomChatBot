import { Outlet, useNavigate } from "react-router-dom" 
import { TypeAnimation } from 'react-type-animation';

const Homepage = () =>{
    const navigate = useNavigate()
    return (
        <div className="flex flex-col md:flex-row text-center items-center justify-between bg-[#A9CCE3] text-white p-10 min-h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-t from-white to-yellow-500 bg-clip-text text-transparent">
            Nom Nom
          </h1>
          <p className="text-lg font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">Let Us Keep You Company</p>
          <p className="text-white">
            An App Made By: Khatira Kazemi, Sophie Lin, Yanlin Wu, Phuc Nguyen
          </p>
          <button onClick = {() => navigate("/dashboard")} className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="user_profile.jpeg"
            alt="User Profile"
            className="w-60 h-60 object-contain rounded-full border-8 border-white animate-[tiltRotate_3s_ease-in-out_infinite]"
          />
          <style>
            {`
              @keyframes tiltRotate {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(10deg); }
                100% { transform: rotate(0deg); }
              }
            `}
          </style>
          <div className="absolute bottom-90 right-40 flex items-center gap-2 px-4 py-2 bg-[#2c2937] text-white rounded-xl shadow-md">
            {/* User Profile Image */}
            {/* <img
              src="user_profile.jpeg"
              alt="User"
              className="w-8 h-8 rounded-full border border-white object-cover"
            /> */}

            {/* Typing Animation */}
            <div className="text-m font-medium">
              <TypeAnimation
                sequence={[
                  "How are you doing today?",
                  2000,
                  "Anything you want to share?",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>

      </div>
    )
}

export default Homepage