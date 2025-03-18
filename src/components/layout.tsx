 
import React from 'react';
import Navbar from './nav';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        {/* This is where the content of each page will be displayed */}
        <Outlet />
      </main>
       <Footer/>
     </div>
  );
};

export default Layout;
