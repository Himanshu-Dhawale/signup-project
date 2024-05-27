import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';

const App = () => {
  
  //  function delay(ms) {
  //   setTimeout(() => {
      
  //   }, ms)
  // }
  
  // delay(3000).then(() => alert('runs after 3 seconds'));

  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // delay(3000).then(() => alert('runs after 3 seconds'));
  
  return (
    <div className='app flex flex-col items-center'>
      <LandingPage/>
    </div>
  );
};

export default App;