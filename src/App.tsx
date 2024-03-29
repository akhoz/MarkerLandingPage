import './App.css'
import TitleMobile from './components/TitleMobile';
import Title from './components/Title';
import HeroCard from './components/HeroCard';
import FreeCard from './components/FreeCard';

function App() {
  const assetsPath: string = './images/';

  return (
    <div className='flex flex-col'>
      <div className='flex mt-12 justify-center md:justify-start md:ml-12 lg:mt-20 lg:ml-40'>
        <img 
          src={`${assetsPath}logo.svg`}
          alt='logo'/>
      </div>
      <TitleMobile/>
      <Title/>
      <div className='flex flex-col items-center justify-center my-40 space-y-14 lg:flex-row lg:space-y-0 lg:mx-10'>
        <div className='md:ml-20 lg:ml-0'>
          <HeroCard
            imgSrc={`${assetsPath}illustration-passions.svg`}
            imgAlt='illustration passions'
            title='Indulge your passions'
            description="Your passions shouldn't be just for a weekend. Earn a living doing what you love."/>
        </div>
        <div className='lg:pt-20'>
          <HeroCard
            imgSrc={`${assetsPath}illustration-financial-freedom.svg`}
            imgAlt='illustration financial freedom'
            title='Gain financial freedom'
            description="Start making money for you. There's nothing quite like earning while you sleep."/>
        </div>
        <div className='md:ml-20 lg:ml-0'>
          <HeroCard
            imgSrc={`${assetsPath}illustration-lifestyle.svg`}
            imgAlt='illustration lifestyle'
            title='Choose your lifestyle'
            description='Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.'/>
        </div>
        <div className='lg:pt-20'>
          <HeroCard
            imgSrc={`${assetsPath}illustration-work-anywhere.svg`}
            imgAlt='illustration work anywhere'
            title='Work from anywhere'
            description='Selling online means not being pinned down. Want to work AND travel? Go for it!'/>
        </div>
      </div>
      <div className='flex flex-col text-center justify-center items-center mx-5 md:mx-20'>
        <p className='text-2xl text-white font-extrabold mb-8'>
          Our pricing plans
        </p>
        <p className='text-myGray lg:mx-96'>
          We only make money when our creators make money. Our plans are always affordable and it's completly free to get started
        </p>
      </div>
      <FreeCard/>
      <FreeCard/>
    </div>
  )
}

export default App
