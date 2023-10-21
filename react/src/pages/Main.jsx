import React, { useEffect, useState } from 'react';


import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Students from './Students';
import Teachers from './Teachers';
import Error from './Error';



export default function Main() {
  const [overlayActive, setOverlayActive] = useState(false);

  // useEffect(() => {
  //   const mainElement = document.querySelector('.main');
  //   mainElement.addEventListener('mouseenter', () => {
  //     setOverlayActive(true);
  //   });
  //   mainElement.addEventListener('mouseleave', () => {
  //     setOverlayActive(false);
  //   });

  //   return () => {
  //     mainElement.removeEventListener('mouseenter', () => {
        // setOverlayActive(true);
  //     });
  //     mainElement.removeEventListener('mouseleave', () => {
  //       setOverlayActive(false);
  //     });
  //   };
  // }, []);


  


  return (
    <div  className='main'>      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

