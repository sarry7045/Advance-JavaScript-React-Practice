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
// import HTMLCSSTips from "./HTML-CSS Tips/HTMLCSSTips.jsx";
const HTMLCSSTips = React.lazy(() => import("./HTML-CSS Tips/HTMLCSSTips.jsx"))

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
      </Routes>
    </Router>
  );
}

export default App;

//  Topics Need to Learn Properly

// React-Window



// Function for Finoacci and Factorial
// StoryBook, Jest-Testing Library, Strong TypeScript

// Social Media App
// E - Commerce App
// Booking App
// Messaging App
// Video Streaming
