
import { useEffect } from 'react'
import Addition from '../Addition/Addition'
import Banner from '../Banner/Banner'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Features from '../Features/Features'
import NewArrival from '../New Arrival/NewArrival'
import Hero from './Hero/Hero'

export default function Home() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Scroll to top when the component mounts
    scrollToTop();
  }, []); 
  return (
    <>
     <Hero/>
     <Features/>
     <FeaturedProducts/>
     <Banner/>

     <NewArrival/>

    <Addition/>

      
    </>
  )
}
