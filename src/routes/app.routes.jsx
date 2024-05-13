import { Routes, Route, Outlet } from "react-router-dom";

import { Home } from "../pages/Home";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        
      </Route>
    </Routes>
  )
}