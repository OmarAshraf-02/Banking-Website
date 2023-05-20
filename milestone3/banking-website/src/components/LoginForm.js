import { useState } from "react";
import logo from '../assets/logo.png';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
function LoginForm(){
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [visible , setVisibility] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
        console.log(userName);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password);
    };
    const handleVisibility = () => {
        setVisibility(!visible);
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-800 ">
            <div className='hidden sm:block'>
                <img className="w-full h-full object-cover p-24" src={logo} alt='logo'/>
            </div>
            <div className="flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h1 className="text-4xl dark:text-white font-bold text-center">Welcome to GUC Bank!</h1>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Bank ID</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeHolder = "Please Enter your BankID" name="name" value={userName} onChange={handleUserNameChange}/>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Password</label>
                            <div className="relative flex">
                                <input className="flex-grow rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type = {visible ? 'text' : 'password'} placeholder="Please Enter Your Password" name="password" value={password} onChange={handlePasswordChange}/>
                                <div className="p-2 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer " onClick={handleVisibility}>
                                    {
                                        visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between text-gray-400 py-2">
                            <p className="flex items-center"><input className=",r-2" type = 'checkbox' /> Remember Me</p>
                            <p>Forgot Password?</p>
                        </div>
                        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Sign In</button>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;