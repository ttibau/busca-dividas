import React from 'react';
import FreeResultComponent from './components/FreeResultComponent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function page() {
  return (
    <div>
      <Header />
      <FreeResultComponent />
      {/* <Footer /> */}
    </div>
  );
}

export default page;
