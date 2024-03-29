interface CardDescriptionProps {
    svgColor: string;
    description: string;

}

function CardDescription(props: CardDescriptionProps) {
    return (
        <div className='flex flex-row items-center mb-5'>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="9">
            <path fill={props.svgColor} d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/>
        </svg>
            <p className='text-white font-semibold ml-4'>
                {props.description}
            </p>
        </div>
    );
}

export default CardDescription;