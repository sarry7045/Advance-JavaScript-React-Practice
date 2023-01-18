import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./DefaultPage.jsx";
import JavaScriptTips from "./JavaScriptStuff/JavaScriptTips.jsx";
import JavaScriptsTopics from "./JavaScriptTopics/JavaScriptsTopics.jsx";
import LessCodeTips from "./JavaScriptStuff/LessCodeTips.jsx";
import InterviewTypeQuestions from "./JavaScriptStuff/InterviewTypeQuestions.jsx";
import EventBublingCapturing from "./JavaScriptTopics/EventBublingCapturing.jsx";
import ReactHooks from "./ReactHooks/ReactHooks.jsx";
import Search from "./ComponentsFunctionality/Search.jsx";
import JavaScriptEvents from "./JavaScriptTopics/JavaScriptEvents.jsx";

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
        <Route
          path="/EventBublingCapturing"
          element={<EventBublingCapturing />}
        />
        <Route path="/ReactHooks" element={<ReactHooks />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/JavaScriptEvents" element={<JavaScriptEvents />} />
      </Routes>
    </Router>
  );
}

export default App;

// Jitne bhi windows k properteis hote hai wo sabse pehle WEB APIS me jate hai then waha se
// Like Example :- setTimeout, setInterval

// Rest Operator and Spread Operator, Window and Document

// StoryBook, Jest-Testing Library
