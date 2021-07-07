import "../styles/globals.css";

// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />
// }

// export default MyApp;


import "tailwindcss/tailwind.css";
import { Web3Provider } from "../context/Web3ContexT";
import { AssetsProvider } from "../context/AssetsContext";

function App({ Component, pageProps }) {
  return (
    <Web3Provider>
      <AssetsProvider>
        <Component {...pageProps} />
      </AssetsProvider>
    </Web3Provider>
  )
}
export default App;
