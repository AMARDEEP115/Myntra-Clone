import { Routes,Route } from "react-router-dom";
import MensPage from "../Pages/MensPage/MensPage";
import WomensPage from "../Pages/WomensPage/WomensPage";

function MainRoutes(){
    return (
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/myntra" element={<h1>Myntra</h1>} />
        <Route path="/womenpage" element={<WomensPage />} />
        {/* <Route path="/womenpage:id" element={<WomenSinglePage />} /> */}
        <Route path="/menpage" element={<MensPage />} />
        {/* <Route path="/menpage:id" element={<MenSinglePage />} /> */}
      </Routes>
    );
}

export default MainRoutes;
