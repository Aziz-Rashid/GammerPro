import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const GameLogo = () => {

    return (
        <section className="flex items-center justify-between bg-quinary px-20px sm:px-50px 2xl:px-90px pt-60px pb-50px lg:pt-150px lg:pb-73px space-x-34px lg:space-x-50px 2xl:space-x-62.4px">
            <ChevronLeftIcon className="text-white w-90px h-90px" />
            <div className="flex items-center justify-between flex-grow space-x-34px lg:space-x-50px">
                <div>
                    <Image
                        src="/pubg-1 1.png"
                        width={130}
                        height={76}
                        objectFit="contain"
                        alt="pubg"
                    />
                </div>
                <div>
                    <Image
                        src="/download-destiny-logo-3400 1.png"
                        width={316}
                        height={73}
                        objectFit="contain"
                        alt="download-destiny-logo-3400 1"
                    />
                </div>
                <div>
                    <Image
                        src="/escape_from_tarkov_PNG17 1.png"
                        width={210}
                        height={94}
                        objectFit="contain"
                        alt="escape_from_tarkov_PNG17 1"
                    />
                </div>
                <div>
                    <Image
                        src="/apex-legends-logo 1.png"
                        width={122}
                        height={92}
                        objectFit="contain"
                        alt="apex-legends-logo 1"
                    />
                </div>
                <div>
                    <Image
                        src="/call-of-duty 1.png"
                        width={255}
                        height={50}
                        objectFit="contain"
                        alt="call_of_duty"
                    />
                </div>
            </div>
            <ChevronRightIcon className="w-90px h-90px text-tertiary" />
        </section>
    )
}

export default GameLogo;