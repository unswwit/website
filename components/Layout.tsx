import React from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Layout = ({ children }: any) => {
  const router = useRouter();
  const isCareersHub = router.pathname.startsWith('/careers-hub');

  return (
    <div>
      {!isCareersHub && <NavigationBar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
