const Homepage = () =>{
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-10 min-h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold">
            <span className="text-blue-500">Nom Nom</span>
            <span className="bg-green-500 px-2 text-black rounded">AI</span>
          </h1>
          <p className="text-lg text-gray-300">
            An AI for you to be depressed and ranting
          </p>
          <p className="text-gray-400">
            Just spill the tea
          </p>
          <button className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
  
        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/your-image.png"
            alt="AI Robot"
            className="w-80 md:w-96 rounded-xl"
          />
        </div>
      </div>
    )
}

export default Homepage