import "./App.css";
import React from "react";
import Landing from "./pages/landing";
import "../src/font/stylesheet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Policy from "./pages/policy";
import Terms from "./pages/terms";
import Info from "./pages/info";
import Visa from "./pages/visa";
import PerfonalInfo from "./pages/personal";
import Passport from "./component/step/passport";
import Medical from "./component/step/medical";
import Termss from "./component/step/termss";
import Review from "./component/step/review";
import Method from "./component/step/method";
import Formdata from "./pages/formdata";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/formdata" element={<Formdata />} />
          <Route path="/privact-policy" element={<Policy />} />
          <Route path="/termss" element={<Terms />} />
          <Route path="/info" element={<Info />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/personal-info" element={<PerfonalInfo />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/terms" element={<Termss />} />
          <Route path="/review" element={<Review />} />
          <Route path="/method" element={<Method />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
