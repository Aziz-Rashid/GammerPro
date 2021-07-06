import Image from "next/image";
import GameCard from "./GameCard";

const TournamentSection = ({ screenWidth }) => {
    return (
        <section>
            <Image
                className="z-20"
                src="/TK_Splash_1_2560x1440 1 2.png"
                width={1920}
                height={812}
                objectFit="contain"
                alt="TK_Splash_1_2560x1440 1 2"
            />
            <div className="text-white px-20px sm:px-50px 2xl:pl-281px 2xl:pr-218px bg-quinary">
                <div className="relative z-30 flex flex-col items-center justify-center h-full mx-auto -mt-2 md:w-638px lg:w-full lg:flex-row pt-71px lg:px-20px xl:px-54px pb-74px 2xl:pl-94px 2xl:pr-54px lg:-mt-320px bg-senary lg:space-x-47px">
                    <div className="w-full text-center lg:text-left lg:w-4/12 mb-34px">
                        <h3 className="font-semibold font-jost text-40px 2xl:text-50px">Tournament Play</h3>
                        <p className="text-14px mt-16px 2xl:text-18px">Battle against the rest of the world with your favorite crypto projects and characters in this blockchain is -enabled kart racing game that available characters in this</p>
                        <button className="py-3 font-medium text-16px 2xl:text-20px bg-tertiary rounded-5px mt-31px px-14 2xl:p-0 2xl:w-178px 2xl:h-60px">Select</button>
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:w-8/12 gap-x-40px gap-y-30px">
                        <GameCard src="/play-station 1.svg" width="64" height="64" alt="play-station 1" text="How to start tournament play" screenWidth={screenWidth} />
                        <GameCard src="/tournament 1.svg" width="64" height="64" alt="tournament 1" text="How to create a pool" screenWidth={screenWidth} />
                        <GameCard src="/video-game 1.svg" width="58.76" height="58.76" alt="video-game 1.svg" text="How to get compensated from tournament play" screenWidth={screenWidth} />
                        <GameCard src="/stake 1.svg" width="58.76" height="58.12" alt="stake 1.svg" text="Staking" screenWidth={screenWidth} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TournamentSection;