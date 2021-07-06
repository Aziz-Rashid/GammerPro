import Link from "next/link";

const BannerSection = () => {
    return (
        <section className="w-full overflow-x-hidden bg-center bg-no-repeat bg-cover 2xl:h-959px" style={{ backgroundImage: 'url("/TK_Splash_1_2560x1440 1.jpg")' }}>
            <div className="flex flex-col items-center w-full h-full text-center bg-black pt-140px pb-95px px-50px bg-opacity-70">
                <div className="hidden font-semibold text-light-yellow md:block font-jost text-40px lg:text-70pxl 2xl:text-80px">
                    Play with Coaches<br />
                    <span className="text-light-blue">Earn from Live Tournament</span><br />
                    <span className="text-light-green">Collect Free NFT</span>
                </div>
                <p className="hidden text-white text-14px lg:text-16px md:block 2xl:text-30px w-520px lg:w-735px 2xl:w-957px mt-20px lg:mt-38px mb-32px lg:mb-46px">Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                <Link href="/">
                    <a className="items-center justify-center hidden font-medium text-white md:flex h-50px w-150px 2xl:h-70px 2xl:w-232px 2xl:text-20px bg-primary rounded-5px">Get Started</a>
                </Link>
            </div>
        </section>
    )
}

export default BannerSection;