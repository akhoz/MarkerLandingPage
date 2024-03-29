import CardDescription from "./CardDescription";

interface FreeCardProps {
    icon: string;
    iconSpace: string;
    bgColor: string;
    titleColor: string;
    textColor: string;
    checkColor: string;
    semiTitle: string;
    text: string;
    title: string;
}


function FreeCard(props: FreeCardProps) {

    return (
        <div className='relative mt-16 md:mx-44 lg:mx-0 '>
            <img src={props.icon}
            className='absolute top-0 ml-12'/>
            <div className={`${props.bgColor} ${props.iconSpace} pt-3 px-8 mx-5 rounded-lg`}>
                <p className={`${props.titleColor} font-bold text-lg pt-10`}>
                    {props.semiTitle}
                </p>
                <p className={`${props.textColor} font-semibold mt-3 mb-5 `}>
                    {props.text}
                </p>
                <p className={`${props.titleColor} font-extrabold text-4xl mb-3`}>
                    {props.title}
                </p>
                <div className='flex flex-col pb-5'>
                    <CardDescription svgColor={props.checkColor} description='Unlimited products' textColor={props.titleColor}/>
                    <CardDescription svgColor={props.checkColor} description='Basic analytics' textColor={props.titleColor}/>
                    <CardDescription svgColor={props.checkColor} description='Limited marketplace exposure' textColor={props.titleColor}/>
                    <CardDescription svgColor={props.checkColor} description='10% fee per transaction' textColor={props.titleColor}/>
                </div>
            </div>
        </div>
    );
}

export default FreeCard;