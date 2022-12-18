import "./App.css";
import MensPage from "./Pages/MensPage/MensPage";
import WomensPage from "./Pages/WomensPage/WomensPage";
import MainRoutes from "./RouterPages/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <MainRoutes /> */}
      {/* <WomensPage/> */}
      {/* <MensPage /> */}

      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
