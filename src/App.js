import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./DefaultPage.jsx";
import JavaScriptTips from "./JavaScriptStuff/JavaScriptTips.jsx";
import JavaScriptsTopics from "./JavaScriptTopics/JavaScriptsTopics.js";
import LessCodeTips from "./JavaScriptStuff/LessCodeTips.jsx";
import InterviewTypeQuestions from "./JavaScriptStuff/InterviewTypeQuestions.jsx";
// import EventBublingCapturing from "./JavaScriptTopics/EventBublingCapturing.jsx";
import ReactHooks from "./ReactHooks/ReactHooks.js";
import SEO from "./SEO/SEO.jsx";
import ReactInterviewTasks from "./ReactInterviewTasks/ReactInterviewTasks.jsx";
// import ReactFunctionality from "./ReactFunctionality/ReactFunctionality.jsx";
// import HTMLCSSTips from "./HTML-CSS Tips/HTMLCSSTips.jsx";
// import MUIWebsite from "./MUI-Responsive-Website/MUIWebsite.jsx";
import Reduxx from "./Redux/Reduxx.js";
const HTMLCSSTips = React.lazy(() => import("./HTML-CSS Tips/HTMLCSSTips.jsx"));
const ReactFunctionality = React.lazy(() =>
  import("./ReactFunctionalities/ReactFunctionality.jsx")
);
const MUIComponents = React.lazy(() =>
  import("./MUI-Components/MUIComponentss.jsx")
);

// use React.lazy for fast rendering

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/JavaScriptTips" element={<JavaScriptTips />} />
        <Route path="/LessCodeTips" element={<LessCodeTips />} />
        <Route
          path="/InterviewTypeQuestions"
          element={<InterviewTypeQuestions />}
        />
        <Route path="/JavaScriptsTopics" element={<JavaScriptsTopics />} />
        {/* <Route
          path="/EventBublingCapturing"
          element={<EventBublingCapturing />}
        /> */}
        <Route path="/ReactHooks" element={<ReactHooks />} />
        <Route path="/SEO" element={<SEO />} />
        <Route path="/HTMLCSSTips" element={<HTMLCSSTips />} />
        <Route path="/ReactInterviewTasks" element={<ReactInterviewTasks />} />
        <Route path="/ReactFunctionality" element={<ReactFunctionality />} />
        <Route path="/MUIComponents" element={<MUIComponents />} />
        <Route path="/Redux" element={<Reduxx />} />
      </Routes>
    </Router>
  );
}

export default App;

// Topics Need to Learn Properly

// React-Window

// Social Media App
// E - Commerce App
// Booking App
// Messaging App
// Video Streaming
