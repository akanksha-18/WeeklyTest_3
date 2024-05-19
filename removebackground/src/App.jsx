// import React from 'react'
// import Navbar from './components/navbar/Navbar'
// import RemoveBackground from './components/removeBackground/RemoveBackground'
// import Footer from './components/footer/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className='h-screen'>
//       <RemoveBackground/>
//       </div>
      
//       <Footer/>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import RemoveBackground from './components/removeBackground/RemoveBackground';
import Footer from './components/footer/Footer';
import FrontPage from './components/FrontPage'; 

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleGetStarted = () => {
    setShowMainContent(true);
  };

  return (
    <div>
      {showMainContent ? (
        <>
          <Navbar />
          <div className='h-screen'>
            <RemoveBackground />
          </div>
          <Footer />
        </>
      ) : (
        <FrontPage onGetStarted={handleGetStarted} />
      )}
    </div>
  );
};

export default App;
