import {Link, Outlet} from "react-router-dom"
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div>
                <header  className="flex justify-between items-center border-b border-gray-500">
                    <Link to = "/"  className="flex items-center mt-[20px] mb-[20px]"> {/* Navigate without triggering effect */}
                        <img src = "/logo.avif" alt="" className="ml-[10px] w-20 h-20 rounded-full object-cover"/>
                        <span  className="text-sm ml-[10px] font-medium">Therapy Chatbot</span>
                    </Link>
                    <div className = "mr-[40px]">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet /> {/* Acting as child place holder */}
                </main>
            </div>
        </ClerkProvider>
    )
}

export default RootLayout