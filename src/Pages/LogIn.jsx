import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const LogIn = () => {
    const { userLogin,userLoginGoogle,userLoginTwitter} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);

    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // user registration
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className=" bg-hero hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left text-black">
                        <h1 className="text-5xl font-bold">Welcome to Aura Tour Hub </h1>
                        <p className="py-6">Please Log In to use your account.</p>
                    </div>
                    <div className="card flex-grow-1 w-full shadow-2xl bg-base-100">
                        <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-white mx-auto">
                            <div className="mb-8 text-center">
                                <h1 className="my-3 text-4xl font-bold">Log In</h1>
                            </div>
                            <form onSubmit={handelLogin} className="space-y-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    </div>
                                    <div className="relative">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                        </div>
                                        <input type={showPass ? "text" : "password"}  name="password" id="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                        <span className="absolute bottom-3 right-4 text-xl" onClick={() => setShowPass(!showPass)}>{showPass ? <IoMdEyeOff /> : <IoMdEye />}</span>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-accent text-white dark:text-black">Register</button>
                                    </div>
                                    <p className="px-6 text-sm text-center"> Do not Have an account?
                                        <Link to={'/register'} className="hover:underline font-bold text-accent">Register</Link>.
                                    </p>
                                </div>
                            </form>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button onClick={userLoginGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>
                                <button onClick={userLoginTwitter} aria-label="Log in with Twitter" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;