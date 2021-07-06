import Image from "next/image";

const Card = ({ src, alt, name, firstText, rank, lastText, kills, ratio, winrate }) => {
    return (
        <div>
            <Image
                className="rounded-t-10px"
                src={src}
                width={370}
                height={268}
                objectFit="contain"
                alt={alt}
            />
            <div className="-mt-2 text-center text-white rounded-b-10px pt-26px pb-33px px-20px bg-gradient-to-b from-septenary to-octonary">
                <h4 className="font-medium text-20px 2xl:text-30px">{name}</h4>
                <hr className="w-7/12 mx-auto mt-8px" />
                <h5 className="mt-5px text-18px 2xl:text-20pxl">{firstText} <span className="font-medium text-20pxl 2xl:text-25px">{rank}</span> {lastText}</h5>
                <p className="mt-6px text-14px 2xl:text-16px"><span className="font-medium text-18px 2xl:text-25pxl">{kills}</span> Kills | <span className="font-medium text-20px 2xl:text-28px">{ratio}</span> K/D ratio | <span className="font-medium text-18px 2xl:text-25pxl">{winrate}</span> Winrate</p>
                <button className="py-2 font-medium border-2 border-white px-14 text-14px 2xl:text-20px hover:bg-tertiary hover:border-tertiary rounded-5px mt-30px 2xl:w-249px 2xl:h-60px 2xl:p-0">Select</button>
            </div>
        </div>
    )
}

export default Card;