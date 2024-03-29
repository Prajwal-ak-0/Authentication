import { LoginForm } from "@/components/Auth/LoginForm"
import Navbar from "@/components/Navbar"

const LoginPage = () => {
    return (
        <>
            <Navbar isLogin />
            <div className="h-full  items-center  justify-center flex">
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage
