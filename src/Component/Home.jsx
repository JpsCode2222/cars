import React from 'react';
import Cars from './Cars.jsx';
import '../style.css';
import Header from './Header.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  React.useEffect(()=>{
    AOS.init({duration:2000})
  });
  return (
  <>
  <Header/>
   <Cars bgimg="model-s.jpg" title="Model-s" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="model-y.jpg" title="Model-y" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="model-3.jpg" title="Model-3" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="model-x.jpg" title="Model-x" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="solar-panel.jpg" title="Solar panel" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="solar-roof.jpg" title="solar-roof" desc="Order Online for Tochless Delevery"/>
   <Cars bgimg="accessories.jpg" title="Accessories" />
  </>
  )
}

export default Home;