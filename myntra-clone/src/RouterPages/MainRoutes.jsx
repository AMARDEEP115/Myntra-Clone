import { Routes,Route } from "react-router-dom";

function MainRoutes(){
    return <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/myntra" element={<h1>Myntra</h1>} />
    </Routes>
}

export default MainRoutes;
