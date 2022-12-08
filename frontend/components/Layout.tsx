import React from 'react';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
// import { initGA, logPageView } from '../utils/GoogleAnalytics';

const Layout = ({ children }: any) => {
  // useEffect(() => {
  //   if (!window.GA_INITIALIZED) {
  //     initGA();
  //     window.GA_INITIALIZED = true;
  //   }
  //   logPageView();
  // }, []);

  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
