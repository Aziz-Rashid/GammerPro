import Image from "next/image";

const HowDoesItWork = ({ screenWidth }) => {
    return (
        <section className="w-full bg-quinary">
            <div className="flex flex-col items-center w-full bg-top bg-no-repeat bg-contain px-20px sm:px-50px lg:h-1326px pt-230px pb-95px" style={{ backgroundImage: 'url("/Vector 2.png")' }}>
                <h3 className="font-semibold text-center text-white font-jost text-30px md:text-50px">How Does It work</h3>
                <p className="text-center text-white mt-21px text-14px lg:text-18px md:w-594px">Battle against the rest of the world with your favorite crypto projects and characters in this blockchain is -enabled kart racing</p>
                <div className="relative flex flex-col items-center justify-center lg:flex-row lg:w-957px mt-70px py-23px">
                    <div className="absolute hidden lg:block">
                        <Image
                            src="/Vector line.svg"
                            width={screenWidth > 1280 ? 653 : 560}
                            height={screenWidth > 1280 ? 656 : 563}
                            objectFit="cover"
                            alt="Vector line"
                        />
                    </div>
                    <div className="absolute hidden -top-2px mr-47px xl:-top-5 lg:block">
                        <Image
                            src="/Arrow right.svg"
                            width={26}
                            height={24.14}
                            objectFit="cover"
                            alt="Arrow right"
                        />
                    </div>
                    <div className="absolute hidden ml-370px -bottom-2px xl:-bottom-5 lg:block">
                        <Image
                            src="/Arrow right.svg"
                            width={26}
                            height={24.14}
                            objectFit="cover"
                            alt="Arrow right"
                        />
                    </div>
                    <div className="lg:mr-67px">
                        <div className="relative z-30 flex items-center justify-center mx-auto text-white rounded-full text-30px 2xl:text-40pxl bg-primary w-86px h-86px">01</div>
                        <div className="relative overflow-y-hidden text-center text-white -mt-43px xl:w-520px xl:h-556px bg-gradient-to-b from-denary to-duodenary px-20px lg:px-57px pt-63px">
                            <h4 className="font-semibold font-jost text-25px 2xl:text-30pxl">Buy Token Here</h4>
                            <p className="text-14px 2xl:text-18px mt-7.37px">Battle against the rest of the world with your favorite crypto projects and characters</p>
                            <div className="flex justify-center overflow-hidden mt-18px">
                                <Image
                                    src="/avatar.png"
                                    width={199}
                                    height={358}
                                    objectFit="contain"
                                    alt="avatar"
                                />
                                <div className="relative my-auto">
                                    <div className="absolute z-20 top-7 lg:top-5 lg:left-7 xl:left-8 xl:top-7 left-8">
                                        <Image
                                            src="/black_logo.svg"
                                            width={60.17}
                                            height={45.99}
                                            objectFit="cover"
                                            alt="black_logo"
                                        />
                                    </div>
                                    <Image
                                        src="/coin.png"
                                        width={130}
                                        height={120}
                                        objectFit="contain"
                                        alt="coin"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 z-10 w-full h-220px bg-gradient-to-b from-transparent to-vigenary"></div>
                        </div>
                    </div>
                    <div className="lg:ml-67px mt-50px lg:mt-0">
                        <div className="relative overflow-y-hidden text-center text-white bg-gradient-to-b to-denary from-transparent xl:w-520px xl:h-556px pb-60px px-20px lg:px-57px">
                            <div className="overflow-hidden h-281px 2xl:h-330px">
                                <Image
                                    src="/Frame.png"
                                    width={328}
                                    height={434}
                                    objectFit="contain"
                                    alt="Frame"
                                />
                            </div>
                            <div className="mt-15px">
                                <h4 className="relative z-20 font-semibold capitalize font-jost text-25px 2xl:text-30pxl">click to Uniswap the coins</h4>
                                <p className="text-14px 2xl:text-18px z-20 relative mt-7.37px">Battle against the rest of the world with your favorite crypto projects and characters</p>
                            </div>
                        </div>
                        <div className="relative z-30 flex items-center justify-center mx-auto text-white rounded-full -mt-43px text-30px 2xl:text-40pxl bg-primary w-86px h-86px">02</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowDoesItWork;