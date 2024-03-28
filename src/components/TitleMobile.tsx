function TitleMobile() {
    const assetsPath: string = './images/';
    
    return (
        <div className='flex flex-col justify-center items-center md:hidden'>
            <img 
                src={`${assetsPath}illustration-hero-mobile.png`}
                alt='hero mobile'
                className='mt-16 mb-12'/>
            <p className='text-3xl font-extrabold text-white text-center mx-10'>
                Get paid for the work you <span className='text-myAquamarine'>love</span> to do.
            </p>
            <p className='text-myGray text-center mx-8 my-8'>
                The 9-5 grind is so last century. We believe in 
                living life on your own terms. Whether you're 
                looking to escape the rat race or set up a side
                hustle, we've got you covered.
            </p>
            <img
                src={`${assetsPath}icon-scroll.svg`}
                alt='icon scroll'
                className='w-1/12'/>
      </div>
    );
}

export default TitleMobile;