import NftCard from "./NftCard";

const NftCreationSection = () => {
    return (
        <section className="w-full bg-quinary">
            <div className="flex flex-col items-center w-full h-full px-20px sm:px-50px pt-127px pb-95px">
                <h3 className="font-semibold text-center text-white font-jost text-30px md:text-50px">NFT Creation</h3>
                <p className="text-center text-white mt-21px text-14px lg:text-18px md:w-594px">Battle against the rest of the world with your favorite crypto projects and characters in this blockchain is -enabled kart racing</p>
                <div className="grid grid-cols-1 text-center text-white sm:grid-cols-2 lg:grid-cols-4 mt-81px gap-46px 2xl:px-160px">
                    <NftCard src="/coin 1.svg" alt="coin 1" title="Every tournament leads to a NFT from Player Play" gradient="bg-gradient-to-b from-denary to-duodenary" />
                    <NftCard src="/tokens 1.svg" alt="tokens 1" title="NFT for character" gradient="bg-gradient-to-b to-denary from-duodenary" />
                    <NftCard src="/gamer 1.svg" alt="gamer 1" title="NFT for coaches and amaeture gamers" bg="bg-denary" />
                    <NftCard src="/live-streaming 1.svg" alt="live-streaming 1" title="Each Live stream turns into NFT to transact on our marketplace" gradient="bg-gradient-to-b from-denary to-duodenary" paddingSmall={true} />
                </div>
            </div>
        </section>
    )
}

export default NftCreationSection;