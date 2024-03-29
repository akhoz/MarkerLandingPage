import CardDescription from "./CardDescription";

interface FreeCardProps {
    icon: string;
    bgColor: string;
    checkColor: string;
    semiTitle: string;
    text: string;
    title: string;
}


function FreeCard() {
    const assetsPath: string = './images/';
    const checkColor: string = '#3EE9E5'
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
                    <CardDescription svgColor={checkColor} description='Unlimited products'/>
                    <CardDescription svgColor={checkColor} description='Basic analytics'/>
                    <CardDescription svgColor={checkColor} description='Limited marketplace exposure'/>
                    <CardDescription svgColor={checkColor} description='10% fee per transaction'/>
                </div>
            </div>
        </div>
    );
}

export default FreeCard;