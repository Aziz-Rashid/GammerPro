import Image from "next/image";

const IndustrySection = () => {
    return (
        <section className="w-full bg-quinary">
            <div className="flex items-center justify-center mx-auto px-20px sm:px-50px xl:w-1076px">
                <div className="z-20 text-center text-white md:text-left md:-mr-5 md:w-465px">
                    <h3 className="font-semibold font-jost text-40px 2xl:text-70px">Industry</h3>
                    <p className="text-16px 2xl:text-25px mt-30px">Esport industry is about $1.0842 Billion dollars. The industry is on a growth trajectory for the next two years.</p>
                    <button className="font-medium text-16px 2xl:text-20px bg-tertiary rounded-5px mt-31px 2xl:w-178px w-150px h-50px 2xl:h-60px">Buy Token</button>
                </div>
                <div className="relative hidden md:block">
                    <Image
                        className="rounded-t-10px"
                        src="/89492-protective-outerwear-equipment-personal-royale-game-fortnite 1.png"
                        width={638}
                        height={638}
                        objectFit="contain"
                        alt="89492-protective-outerwear-equipment-personal-royale-game-fortnite 1"
                    />
                    <div className="absolute top-0 z-10 xl:w-638px xl:h-638px bg-gradient-to-b from-transparent via-senary to-quinary"></div>
                </div>
            </div>
        </section>
    )
}

export default IndustrySection;