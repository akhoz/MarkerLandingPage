import './App.css'
import TitleMobile from './components/TitleMobile';
import Title from './components/Title';
function App() {
  const assetsPath: string = 'maker-pre-launch-landing-page-figma/maker-pre-launch-landing-page/starter-code/assets/';

  return (
    <div className='flex flex-col'>
      <div className='flex mt-12 justify-center md:justify-start md:ml-12 lg:mt-20 lg:ml-40'>
        <img 
          src={`${assetsPath}logo.svg`}
          alt='logo'/>
      </div>
      <TitleMobile/>
      <Title/>
    </div>
  )
}

export default App
