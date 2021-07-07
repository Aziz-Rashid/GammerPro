import Link from "next/link";
import { Web3Context } from "../../context/Web3ContexT";
import { useEffect,useContext } from "react";
const BannerSection = () => {

    const [web3State, setWeb3State] = useContext(Web3Context);
console.log(web3State)
    const loadMetaMaskData = async () => {
        if (!web3State.authenticated) {
            const web3StateObj = {};
            if (typeof (window).ethereum) {
              const ethWindow = (window).ethereum;
              await ethWindow.send("eth_requestAccounts");
              const web3 = new Web3(ethWindow);
              web3StateObj.web3 = web3;
              const chain_id = await web3.eth.net.getId();
              web3StateObj.chain_id = chain_id;
              const accounts = await web3.eth.getAccounts();
              // If the investor has an account on his MetaMask, then proceeds
              if (typeof accounts[0] !== "undefined") {
                web3StateObj.authenticated = true;
                web3StateObj.account = accounts[0];
                router.push("/");
                const balance = await web3.eth.getBalance(accounts[0]);
                // console.log(web3.utils.fromWei(balance));
              } else {
                web3StateObj.authenticated = false;
              }
            } else {
              window.alert("Get MetaMask !");
            }
            setWeb3State(web3StateObj);
            return setLoading(false);
        }
    };
    return (
        <section className="w-full overflow-x-hidden bg-center bg-no-repeat bg-cover 2xl:h-959px" style={{ backgroundImage: 'url("/TK_Splash_1_2560x1440 1.jpg")' }}>
            <div className="flex flex-col items-center w-full h-full text-center bg-black pt-140px pb-95px px-50px bg-opacity-70">
                <div className="hidden font-semibold text-light-yellow md:block font-jost text-40px lg:text-70pxl 2xl:text-80px">
                    Play with Coaches<br />
                    <span className="text-light-blue">Earn from Live Tournament</span><br />
                    <span className="text-light-green">Collect Free NFT</span>
                </div>
                <p className="hidden text-white text-14px lg:text-16px md:block 2xl:text-30px w-520px lg:w-735px 2xl:w-957px mt-20px lg:mt-38px mb-32px lg:mb-46px">Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                <Link href="/" onClick={() => loadMetaMaskData()}>
                    <a style={{background:'#f8ac30'}} className="items-center justify-center hidden font-medium text-white md:flex h-50px w-150px 2xl:h-70px 2xl:w-232px 2xl:text-20px  rounded-5px">Buy Tokens</a>
                </Link>
            </div>
        </section>
    )
}

export default BannerSection;