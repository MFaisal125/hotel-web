import ImageSlider from "../../components/Home/Cousoral"
import Date from "../../components/Home/Filter"
import Hero from "../../components/Home/hero"
import Home1 from "../../components/Home/Home"
import Example from "../../components/Home/Pricing"



function Home() {
  return (
    <div>
    <Hero/>
      <Home1/>
     <Example/>
     <Date/>
     <ImageSlider/>
    </div>
  )
}

export default Home
