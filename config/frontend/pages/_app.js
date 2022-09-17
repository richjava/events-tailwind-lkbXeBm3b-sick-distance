import { useEffect } from "react";
import "../styles/index.css";
// import Aos from "aos";

// import "aos/dist/aos.css";

function App({ Component, pageProps }) {
  // useEffect(() => {
  //   Aos.init({
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);
  return <Component {...pageProps} />
}

export default App;
