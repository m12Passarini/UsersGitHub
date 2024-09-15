import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./mainPage/App";
import Developer from "./repositoriesPage/developer";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<Developer />}/>
        <Route path="/" element={<App />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
