import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    

    return (
        <div className="w-full h-full bg-[url('/bgimg.jpg')] bg-cover bg-center flex">

            
            <div className="w-[50%] h-full bg-secondary/5 backdrop-blur-sm flex flex-col justify-center items-start p-16 gap-6">
                 <h1 className="text-5xl font-bold tracking-wide text-primary drop-shadow-xl ">
                <span className="text-primary"> Capture</span> <span className="text-accent">Cloud</span>
                </h1>

                <p className="text-primary/90 mt-4 text-lg  leading-relaxed">
                Photography is the art of capturing moments, emotions, and scenes through images. It preserves memories, tells stories, and expresses creativity using light, composition, and perspective.
                </p>
            </div>

            
            <div className="w-[50%] h-full   flex justify-center items-center">
                <div className="w-[480px] h-[550px] bg-primary/10 backdrop-blur-3xl shadow-2xl rounded-2xl flex flex-col justify- items-center p-8 border border-white/20 animate-fadeIn">

                    
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-32 h-32 object-contain mb-2 drop-shadow-xl"
                    />

                    
                    <h1 className="text-3xl font-semibold text-secondary tracking-wide mb-3">
                        Capture Cloud
                    </h1>
                    <p className="text-accent text-sm mb-8">
                        Photography Management System
                    </p>

                    
                    <input
                        onChange={(e)=>
                        {
                            setEmail(e.target.value)
                        }
                        }
                        type="text"
                        placeholder="Email"
                        className="w-[350px] h-[45px] px-4 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all"
                    />

                    <input
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        type="password"
                        placeholder="Password"
                        className="w-[350px] h-[45px] px-4 rounded-xl bg-primary border border-secondary/20 focus:ring-2 focus:ring-accent outline-none transition-all mt-4"
                    />

                    
                    <button
                        className="w-[200px] h-[50px] bg-accent text-primary rounded-xl mt-10 
                                   shadow-md hover:bg-secondary hover:shadow-xl 
                                   transition-all duration-300 active:scale-95"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
