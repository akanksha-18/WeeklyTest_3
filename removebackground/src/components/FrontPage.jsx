import React from 'react';

const FrontPage = ({ onGetStarted }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-white text-4xl lg:text-6xl font-medium mb-3">
          Welcome to My Website
        </h1>
        <p className="text-white text-xl lg:text-2xl font-light mb-5">
        Welcome to Background Remover, the ultimate tool for effortlessly removing backgrounds from your images. 
        </p>
        <button 
          onClick={onGetStarted} 
          className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
