import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Despesas from "./pages/Despesas";
import Resumo from "./pages/Resumo";

const MainRoutes = () => {
   return(
       <Routes>
           <Route element = { <Home /> }  path="/"  />
           <Route element = { <Despesas/> }  path="/despesas" />
           <Route element = { <Sobre/> }  path="/sobre" />
           <Route element = { <Resumo/> }  path="/resumo" />
       </Routes>
   )
}

export default MainRoutes;