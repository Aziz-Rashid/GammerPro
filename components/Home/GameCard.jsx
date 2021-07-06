import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const GameCard = ({ src, width, height, alt, text, screenWidth }) => {
    return (
        <div className={`flex items-center justify-between mx-auto cursor-pointer ${screenWidth < 260 ? "w-100" : "w-249px"} space-x-20px px-14px sm:px-30px xl:px-40px sm:w-302px lg:w-281px xl:w-330px lg:h-161px h-127px bg-nonary hover:bg-primary rounded-10px`}>
            <div className="w-1/5 sm:w-auto">
                <Image
                    src={src}
                    width={width}
                    height={height}
                    objectFit="contain"
                    alt={alt}
                />
            </div>
            <p className="w-3/5 2xl:text-18pxl text-14px sm:w-170px">{text}</p>
            <div className="w-1/5">
                <ArrowNarrowRightIcon className="sm:w-47px w-30px" />
            </div>
        </div>
    )
}

export default GameCard;