import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";
import { Components } from "../_components/Components";

const RouterComponent = () => {

  return (
    <>
      <Components.NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Pages.Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterComponent;