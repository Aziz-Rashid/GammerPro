import Image from "next/image";

const NftCard = ({ src, alt, title, gradient, bg, paddingSmall }) => {
    return (
        <div className={`${gradient && gradient} ${bg && bg} ${paddingSmall ? "2xl:pl-16px 2xl:pr-17px" : "2xl:pl-41px 2xl:pr-42px"} 2xl:pb-47px 2xl:pt-43px p-20px text-center rounded-10px`}>
            <Image
                src={src}
                width={76}
                height={76}
                objectFit="contain"
                alt={alt}
            />
            <p className="mt-20px text-16px xl:text-18px 2xl:text-28pxl">{title}</p>
        </div>
    )
}

export default NftCard;