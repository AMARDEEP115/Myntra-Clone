import "./App.css";
import MainRoutes from "./RouterPages/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const user=JSON.parse(localStorage.getItem("user"))
  console.log('user:', user)
  return (
    <div className="App">
      {user.status==="user" && <Navbar/>}
      {user.status==="" && <Navbar/>}
      {/* <MainRoutes /> */}
      {/* <WomensPage/> */}
      {/* <MensPage /> */}

      <MainRoutes />
      {user.status==="" && <Footer/>}
      {user.status==="user" && <Footer/>}

    </div>
  );
}

export default App;
