import {Link} from "react-router-dom";
export default function Header() 
{
    return (
        <div className="w-full h-[75px] bg-accent text-primary px-[20px] flex">
            <div className="w-full h-full flex relative ">
                <img src="/logo.png" className="h-[75%] absolute object-cover mt-2.5 "/>
                <h1 className="text-primary mt-7 ml-25">Capture <span className="text-secondary">Cloud</span></h1>
                <div className="h-full w-[500px] flex absolute justify-center items-center gap-[60px] text-l right-1">
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup ">Sign Up</Link>
                    
                   
                </div>
            </div>
        </div>
    )
}