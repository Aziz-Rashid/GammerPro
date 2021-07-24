import Image from "next/image";

const Footer = () => {
    return (
        <section className="w-full bg-quinary md:pt-0 pt-30px">
            <div className="w-full text-center bg-top bg-no-repeat bg-contain px-20px sm:px-50px md:h-675px pt-70px md:pt-230px pb-53px" style={{ backgroundImage: 'url("/Vector Footer.png")' }}>
                <h3 className="font-semibold text-center text-white font-jost text-30px lg:text-50px border-primary">Upcoming Partners</h3>
                <hr className="mx-auto border-0 rounded text-primary w-266px lg:w-430px h-6px bg-primary mt-5px" />
                <div className="grid items-center justify-center w-full grid-cols-2 mx-auto xl:w-1170px md:flex gap-63px mt-58px lg:space-x-63px md:space-x-8px">
                    <div>
                        <Image
                            src="/EA_games.png"
                            width={85}
                            height={56}
                            objectFit="contain"
                            alt="EA_games"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Uniswep.png"
                            width={315}
                            height={66}
                            objectFit="contain"
                            alt="Uniswep"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Binance_logo 1.png"
                            width={276}
                            height={56}
                            objectFit="contain"
                            alt="Binance_logo 1.png"
                        />
                    </div>
                    <div>
                        <Image
                            src="/pancake_white 1.png"
                            width={305}
                            height={46}
                            objectFit="contain"
                            alt="pancake_white 1"
                        />
                    </div>
                </div>
                <hr className="md:mt-116.02px mt-50px xl:w-1170px mx-auto border-white" />
                <footer className="font-medium text-white text-14px 2xl:text-20pxl2 mt-34px">Copyright © 2021 Hello Danish Bhai</footer>
            </div>
        </section>
    )
}

export default Footer;
