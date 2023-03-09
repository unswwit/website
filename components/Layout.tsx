import React from 'react';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
