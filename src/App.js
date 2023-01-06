import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./JavaScriptStuff/DefaultPage.jsx";
import JavaScriptTips from "./JavaScriptStuff/JavaScriptTips.jsx";
import JavaScriptsTopics from "./JavaScriptTopics/JavaScriptsTopics.jsx";
import LessCodeTips from "./JavaScriptStuff/LessCodeTips.jsx";
import InterviewTypeQuestions from "./JavaScriptStuff/InterviewTypeQuestions.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JavaScriptTips" element={<JavaScriptTips />} />
        <Route path="/LessCodeTips" element={<LessCodeTips />} />
        <Route path="/InterviewTypeQuestions" element={<InterviewTypeQuestions />} />
        <Route path="/JavaScriptsTopics" element={<JavaScriptsTopics />} />
      </Routes>
    </Router>
  );
}

export default App;
