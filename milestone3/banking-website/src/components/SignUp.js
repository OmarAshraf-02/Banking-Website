import { useState } from "react";
import logo from '../assets/logo.png';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
function SignUpForm(){
    const [userName , setUserName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [address , setAddress] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');
    const [nationalId, setNationalId] = useState(null);
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
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        console.log(confirmPassword);
    };
    const handleVisibility = () => {
        setVisibility(!visible);
    }
    const handleNationalIdChange = (event) => {
        setNationalId(event.target.files[0]);
      };
    return (
        <div className="bg-gray-50	">
            <div className="flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h1 className="text-4xl dark:text-white font-bold text-center">Sign Up</h1>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Full Name</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeHolder = "Please Enter your Full Name" name="name" value={userName} onChange={handleUserNameChange}/>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Email</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeHolder = "Please Enter your Email" name="name" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Phone Number</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeHolder = "Please Enter your phone number" name="name" value={phoneNumber} onChange={(event) => {setPhoneNumber(event.target.value)}}/>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Password</label>
                            <div className="relative flex">
                                <input className="flex-grow rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type = {visible ? 'text' : 'password'} placeholder="Please Enter Your Password" name="password" value={password} onChange={handlePasswordChange}/>
                                <div className="p-2 absolute right-2 top-1/2 transform -translate-y-1/3 cursor-pointer " onClick={handleVisibility}>
                                    {
                                        visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Confirm Password</label>
                            <div className="relative flex">
                                <input className="flex-grow rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type = {visible ? 'text' : 'password'} placeholder="Please Confirm your Password" name="password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                                <div className="p-2 absolute right-2 top-1/2 transform -translate-y-1/3 cursor-pointer " onClick={handleVisibility}>
                                    {
                                        visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>Address</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeHolder = "Please Enter your Address" name="address" value={address} onChange={(event) => {setAddress(event.target.value)}}/>
                        </div>
                        <div className="flex flex-col text-gray-400 py-2 ">
                            <label>National ID</label>
                            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  placeHolder = "Please Enter your National ID" type="file" onChange={handleNationalIdChange} accept="image/*" />
                        </div>
                        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default SignUpForm;