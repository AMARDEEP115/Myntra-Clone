
import "./App.css";
import MensPage from "./Pages/MensPage/MensPage";
import WomensPage from "./Pages/WomensPage/WomensPage";
import MainRoutes from "./RouterPages/MainRoutes";

import './App.css';
import AllRoutes from './RouterPages/MainRoutes';



function App() {
  return (
    <div className="App">

      {/* <MainRoutes /> */}
      {/* <WomensPage/> */}
      <MensPage />

   <AllRoutes/>

    </div>
  );
}

export default App;
