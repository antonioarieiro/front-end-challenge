import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";


const RouterComponent = () => {

  return (
    <>
      <Router>
      
              <Routes>
                <Route exact path="/" element={<Pages.Home />} />
           
              </Routes>
           
      </Router>
    </>
  )
}

export default RouterComponent;