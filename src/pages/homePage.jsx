import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() 
{
  return (
    <div className="w-full h-full bg-primary">
      <Header/>
      <div className="bg-amber-200">
      <Routes path="/">
        <Route path="/" element={<h1>This is home page</h1>}/>
      </Routes>
      </div>
    </div>
  );
}