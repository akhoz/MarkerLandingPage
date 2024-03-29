
function FreeCard() {
    const assetsPath: string = './images/';
    return (
        <div className='relative mt-16'>
            <img src={`${assetsPath}icon-free.svg`}
            className='absolute top-0 ml-12'/>
            <div className='bg-myBlue mt-6 pt-3 px-8 mx-5 rounded-lg'>
                <p className='text-white font-bold text-lg pt-10'>
                    Dip your toe
                </p>
                <p className='text-myGray font-semibold mt-3 mb-5'>
                    Just getting started? No problem at all! Our free plan will take you a long the way.
                </p>
                <p className='text-white font-extrabold text-4xl mb-3'>
                    Free
                </p>
                <div className='flex flex-col pb-5'>
                    <div className='flex flex-row items-center mb-5'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="9">
                        <path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/>
                    </svg>
                        <p className='text-white font-semibold ml-4'>
                            Unlimited products
                        </p>
                    </div>
                    <div className='flex flex-row items-center mb-5'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="9">
                        <path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/>
                    </svg>
                        <p className='text-white font-semibold ml-4'>
                            Basic analytics
                        </p>
                    </div>
                    <div className='flex flex-row items-center mb-5'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="9">
                        <path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/>
                    </svg>
                        <p className='text-white font-semibold ml-4'>
                            Limited marketplace exposure
                        </p>
                    </div>
                    <div className='flex flex-row items-center mb-5'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="9">
                        <path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/>
                    </svg>
                        <p className='text-white font-semibold ml-4'>
                            10% fee per transaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreeCard;