import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./DefaultPage.jsx";
import JavaScriptTips from "./JavaScriptStuff/JavaScriptTips.jsx";
import JavaScriptsTopics from "./JavaScriptTopics/JavaScriptsTopics.js";
import LessCodeTips from "./JavaScriptStuff/LessCodeTips.jsx";
import InterviewTypeQuestions from "./JavaScriptStuff/InterviewTypeQuestions.jsx";
// import EventBublingCapturing from "./JavaScriptTopics/EventBublingCapturing.jsx";
import ReactHooks from "./ReactHooks/ReactHooks.jsx";

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
      </Routes>
    </Router>
  );
}

export default App;

//  Topics Need to Learn Properly

// Rest Operator and Spread Operator
// Recursive Function
// Prototype
// Window - Location, Get Query string parameters, Redirect to a new URL, Navigator, Screen , History,
// JavaScript Load Events, Load Unload , Page Unload
// Javascript IndexDB
// LocalStorage Advanced Tutorial
// FormData
// Drag and Drop API
// FileReader API
// JavaScript Geolocation
// JavaScript Notification
// JavaScript History pushState
// PreventDefault

// StoryBook, Jest-Testing Library
// Strong TypeScript
