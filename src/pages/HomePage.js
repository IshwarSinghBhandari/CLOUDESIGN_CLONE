import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomeSection1 from '../components/home/HomeSection1';
import HomeSection2 from '../components/home/HomeSection2';
import HomeSection3 from '../components/home/HomeSection3';
import HomeSection4 from '../components/home/HomeSection4';
import HomeSection5 from '../components/home/HomeSection5';
import HomeSection6 from '../components/home/HomeSection6';
import TalkToUs from '../components/common/TalkToUs';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <TalkToUs />
      <Footer />
    </div>
  );
};

export default HomePage;
