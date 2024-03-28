import './App.css'
import TitleMobile from './components/TitleMobile';
import Title from './components/Title';
import HeroCard from './components/HeroCard';

function App() {
  const assetsPath: string = 'src/assets/';

  return (
    <div className='flex flex-col'>
      <div className='flex mt-12 justify-center md:justify-start md:ml-12 lg:mt-20 lg:ml-40'>
        <img 
          src={`${assetsPath}logo.svg`}
          alt='logo'/>
      </div>
      <TitleMobile/>
      <Title/>
      <div className='flex flex-col items-center justify-center mt-40 space-y-14'>
        <HeroCard
          imgSrc={`${assetsPath}illustration-passions.svg`}
          imgAlt='illustration passions'
          title='Indulge your passions'
          description="Your passions shouldn't be just for a weekend. Earn a living doing what you love."/>
        <HeroCard
          imgSrc={`${assetsPath}illustration-financial-freedom.svg`}
          imgAlt='illustration financial freedom'
          title='Gain financial freedom'
          description="Start making money for you. There's nothing quite like earning while you sleep."/>
        <HeroCard
          imgSrc={`${assetsPath}illustration-lifestyle.svg`}
          imgAlt='illustration lifestyle'
          title='Choose your lifestyle'
          description='Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.'/>
        <HeroCard
          imgSrc={`${assetsPath}illustration-work-anywhere.svg`}
          imgAlt='illustration work anywhere'
          title='Work from anywhere'
          description='Selling online means not being pinned down. Want to work AND travel? Go for it!'/>
      </div>
    </div>
  )
}

export default App
