import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/anniversary/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;