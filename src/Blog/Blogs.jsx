import React from "react";
import programmingLanguages from "../data/data";



const Blogs = () => {


  
  return (
    <div>
      {programmingLanguages.map((data) => {
        return <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <button>Click</button>
        </div>;
      })}
    </div>
  );
};

export default Blogs;
