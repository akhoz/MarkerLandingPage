interface HeroCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

function HeroCard(props: HeroCardProps) {

    return (
        <div className='flex flex-col items-center justify-center md:flex-row lg:flex-col max-w-xs md:max-w-xl'>
            <div className='flex items-center justify-center bg-myBlue rounded-3xl h-32 w-32 md:w-44 md:mr-16 '>
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    className='w-16'/>
            </div>
            <div className='text-center md:flex md:flex-col md:justify-center md:h-full md:text-start'>
                <p className='text-white text-lg font-bold mt-6 mb-2 md:mt-0'>
                    {props.title}
                </p>
                <p className='text-myGray'>
                    {props.description}
                </p>
            </div>
        </div>
    );
}


export default HeroCard;