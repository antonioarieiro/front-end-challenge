import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";
import { Components } from "../_components/Components";

const RouterComponent = () => {

  return (
    <>
      <Router>
      <Components.NavBar />
        <Routes>
          <Route exact path="/" element={<Pages.Home />} />
          <Route exact path="/details/:id" element={<Pages.Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterComponent;