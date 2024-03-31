import React, { useEffect, useState } from "react";

const Carousel = () => {
    const img = [
        "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1711843250811-a7d0bb485a42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1710170601257-242514895755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1669381260444-4f8e2e2948e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      ];
   console.log("length",img.length);
  const [show, setShow] = useState(0);
  console.log("show",show);
  const handleNext = () => {
    if (show < img.length - 1) {
      setShow(show + 1);
    } else {
      // Reset show to 0 when reaching the end of the images
      setShow(0);
    }
  };
  const handlePrevious = () => {
    if (show > 0) {
      setShow(show - 1);
    } else {
      // Reset show to 0 when reaching the end of the images
      setShow(img.length-1);
    }
  };
  const handleIndex = (index) =>{
    setShow(index)
  }
  
 
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {/* {img.map((src, index) => {
        console.log(src);
        return <img className="h-40 w-[300px]" key={index} src={src} />;
      })} */}
      <img className="w-[300px] h-[200px]" src={img[show]} />
      <div>
      
      <button onClick={handlePrevious} className="text-white bg-black p-1 px-3 m-1 rounded-md">Previous</button>
      <button onClick={handleNext} className="text-white bg-black p-1 px-6  m-1 rounded-md">Next</button>
      <div>
      {Array(img.length).fill("").map((_,key)=><span onClick={()=>handleIndex(key)} className="cursor-pointer m-4 bg-black text-white px-2  rounded-full" key={key}>{key}</span>)}
      </div>
      
      </div>
      
    </div>
  );
};

export default Carousel;
