import Card from "./Card";

const AboutSection = ({ screenWidth }) => {
    return (
        <section className="w-full bg-quinary">
            <div className="flex flex-col items-center w-full h-full bg-center bg-no-repeat bg-cover lg:bg-left-top px-20px sm:px-50px lg:pt-106px lg:pb-214px pb-95px" style={screenWidth > 1024 ? { backgroundImage: 'url("/favpng_heroes-of-the-storm-character 1.png")' } : { backgroundImage: 'none' }}>
                <h3 className="font-semibold text-center text-white font-jost text-30px md:text-50px md:w-735px">Professional Marketplace For Coaches and Gamers</h3>
                <p className="text-center text-white mt-15px text-14px lg:text-18px md:w-728px">Battle against the rest of the world with your favorite crypto projects and characters in this blockchain is -enabled kart racing game available</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-81px gap-40px">
                    <Card src="/destiny-2-story-heroic-e3-2017-05.png" alt="destiny-2-story-heroic-e3-2017-05" name="Kudrot Haldar" firstText="World" rank="#1" lastText="Pro Player" kills="125" ratio="25" winrate="95%" />
                    <Card src="/pubg.png" alt="pubg" name="Halda Joseph" firstText="World" rank="#1" lastText="Pro Player" kills="200" ratio="25" winrate="95%" />
                    <Card src="/NBA-Live-2004-PC.png" alt="NBA-Live-2004-PC" name="Unadkat Kuti" firstText="World" rank="#1" lastText="Pro Player" kills="175" ratio="25" winrate="95%" />
                    <Card src="/cod-warzone-system-requirements-900x506.png" alt="cod-warzone-system-requirements-900x506" name="Disa Patani" firstText="World" rank="#1" lastText="Pro Player" kills="111" ratio="25" winrate="95%" />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;