import React from "react";
import useTheme from "../custom/useTheme";



const Blogs = () => {

  const [theme,isblack,isWhite,uboy] = useTheme(false)
  
  return (
    
    <div className={`h-90 gap-3  w-full flex flex-col items-center justify-center ${theme ? "bg-red-500 text-white": "border-2 border-pink-500"}`}>
      
    <p>handel custom hooks</p>
      <p onClick={uboy} className="border px-2 bg-purple-600 text-green-500 rounded">toggle theme</p>

      <button onClick={isblack} className="bg-yellow-400 px-3 py-1 rounded ">red Theme</button>

      <p>hello this is blog page</p>
      <button onClick={isWhite} className=" bg-white text-black border px-3 py-1 rounded ">white Theme</button>
    </div>
  );
};

export default Blogs;
