import React, { useState } from 'react';
import Preview from './Components/Previews';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Carousel from './Components/Hero';
//import { ClassNames } from '@emotion/react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSession = (session) => {
    if (session?.user) {
      setIsLoggedIn('startPhase');
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      {/* {isLoggedIn === "signUpPhase" && <Login />}
      {isLoggedIn ==  'startPhase' &&  */}

        <div>
          <nav>
            <Navbar />
          </nav>
          <Carousel />
          <Preview />
        </div>
      
    </div>
    
  );
  
};

export default App;















