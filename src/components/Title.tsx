function Title() {
    const assetsPath: string = './src/assets/';
    return (
        <div className='hidden md:block mt-20 lg:mt-24'>
            <div className='flex flex-row items-center justify-center overflow-hidden'>
                <img
                    src={`${assetsPath}illustration-hero-left.svg`}
                    alt='illustration hero left'/>
                <div className='flex flex-col items-center justify-center bg-hero bg-center bg-no-repeat bg-contain lg:px-0 lg:py-14 lg:mx-10'>
                    <p className='text-3xl font-bold text-white text-center w-96 lg:w-fill lg:text-5xl'>
                        Get paid for the work you <span className='text-myAquamarine'>love</span> to do.
                    </p>
                    <p className='text-myGray text-center my-8 lg:mb-14'>
                        The 9-5 grind is so last century. We believe in 
                        living life on your own terms. Whether you're 
                        looking to escape the rat race or set up a side
                        hustle, we've got you covered.
                    </p>
                <img
                    src={`${assetsPath}icon-scroll.svg`}
                    alt='icon scroll'
                    className='w-6'/>
                </div>
                <img
                    src={`${assetsPath}illustration-hero-right.svg`}
                    alt='illustration hero right'/>
            </div>
        </div>
    );
}

export default Title;