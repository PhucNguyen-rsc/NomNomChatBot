import {SignUp} from "@clerk/clerk-react"
const SignupPage = () =>{
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUp path="/sign-up" signInUrl = "/sign-in" />
        </div>
    )
}

export default SignupPage