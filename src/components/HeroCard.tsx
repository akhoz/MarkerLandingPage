interface HeroCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

function HeroCard(props: HeroCardProps) {

    return (
        <div className='flex flex-col items-center justify-center md:flex-row lg:flex-col max-w-xs'>
            <div className='flex items-center justify-center bg-myBlue rounded-3xl h-28 w-28'>
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    className='w-3/5'/>
            </div>
            <p className='text-white text-lg font-bold mt-6 mb-2'>
                {props.title}
            </p>
            <p className='text-myGray text-center'>
                {props.description}
            </p>
        </div>
    );
}


export default HeroCard;