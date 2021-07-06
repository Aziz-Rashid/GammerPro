import Image from "next/image";

const RoadMapSection = () => {
    return (
        <section className="w-full sm:px-50px px-20px bg-quinary pb-101px">
            <h3 className="font-semibold text-center text-white font-jost text-30px md:text-50px">Road Map</h3>
            <div className="flex flex-col items-start justify-center text-white space-y-70px lg:space-y-0 w-100 lg:flex-row mt-77px">
                <div className="w-full lg:pr-57px lg:w-1/3">
                    <h4 className="font-bold text-30px 2xl:text-40px">Q2</h4>
                    <ul className="mt-32px space-y-19px">
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-pink-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-320px 2xl:w-380px">Launching of new Professional Coaches</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-pink-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-320px 2xl:w-380px">Adding trending games (Dota2, Valorant, League of Legends, Apex Legends, Coaster Strike: Global Offense, Fortnite)</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-pink-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-320px 2xl:w-380px">Redesign of the main website</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-pink-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-320px 2xl:w-380px">Support Team Availability</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full pb-10 lg:border-l-6 lg:border-r-6 lg:px-57px lg:w-1/3" style={{ borderImage: "linear-gradient(to bottom, #02C4F2, #05022F) 1 100%" }}>
                    <h4 className="font-bold text-30px 2xl:text-40px">Q3</h4>
                    <ul className="mt-32px space-y-19px">
                        <li className="flex items-start space-x-17.79px">
                            <div className="border-2 rounded-full bg-dark-violet mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-281px 2xl:w-348.25px">Website enhancement and staking</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="border-2 rounded-full bg-dark-violet mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-281px 2xl:w-348.25px">10% Token burn and 3% redistribution</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="border-2 rounded-full bg-dark-violet mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-281px 2xl:w-348.25px">Will be available in 3 exchanges</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="border-2 rounded-full bg-dark-violet mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-281px 2xl:w-348.25px">Banner ads on New York Taxi</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="border-2 rounded-full bg-dark-violet mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-281px 2xl:w-348.25px">Introducing NFT collectibles</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:pl-57px lg:w-1/3">
                    <h4 className="font-bold text-30px 2xl:text-40px">Q4</h4>
                    <ul className="mt-32px space-y-19px">
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-yellow-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-266px 2xl:w-302px">Improvement of Coaches and player’s gameplay</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-yellow-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-266px 2xl:w-302px">Team play now availabe (one or more Coaches/ one or more Players)</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-yellow-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-266px 2xl:w-302px">Website redesign and unification from Mobile, PC, and Web</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-yellow-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-266px 2xl:w-302px">Adding new trading pairs on 5 Exchanges</span>
                        </li>
                        <li className="flex items-start space-x-17.79px">
                            <div className="bg-yellow-500 border-2 rounded-full mt-5px w-16px h-16px" />
                            <span className="text-16px 2xl:text-20px3 lg:w-266px 2xl:w-302px">8% token burn and 5% redistribution for the month of December</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RoadMapSection;