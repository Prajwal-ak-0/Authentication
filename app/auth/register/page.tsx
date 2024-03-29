import { RegisterForm } from "@/components/Auth/RegisterForm"
import Navbar from "@/components/Navbar"

const LoginPage = () => {
    return (
        <>
            <Navbar isRegister />
            <div className="h-full items-center justify-center  flex">
                <RegisterForm />
            </div>
        </>
    )
}

export default LoginPage
