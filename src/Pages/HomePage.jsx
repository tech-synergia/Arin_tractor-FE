
import Banners from '../Components/Banners'
import '../scss/HomePage.scss'
import Figures from '../Components/Figures'
import Industries from '../Components/Industries'
import WhyUs from '../Components/WhyUs'
import KnowMore from '../Components/KnowMore'

function HomePage() {
  return (
    <div>
      <Banners/>
      <div className="homeInfo">
        <h1>Welcome to ArinTractorwala: Your Premier USA Import and Export Service Provider</h1>
        <p>Welcome to the best expert and import service provider in the USA, ArinTractorwala. We have a dedicated team to make the world of international trade simpler for you. As the best export and import service provider, we are proud to deliver quality solutions to our clients so they can meet their business needs. We have huge years of experience and are committed to delivering excellence to our clients. This is a factor that makes us a leading partner for your trade business. </p>
      </div>
      <WhyUs/>
      <Figures/>
      <Industries/>
      <KnowMore/>
     
    </div>
  )
}

export default HomePage
