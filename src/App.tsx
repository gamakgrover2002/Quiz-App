import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import "./App.css";
import Layout from "./Layout";
import { useState } from "react";
type FormValues = {
  category: string;
  numberOfQuestions: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function App() {
  const [quizStart, setQuizStart] = useState(false);
  const [quizData, setQuizData] = useState<FormValues>({
    category: "all",
    numberOfQuestions: 10,
    hours: 0,
    minutes: 10,
    seconds: 0,
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                quizStart ? (
                  <Quiz quizData={quizData} />
                ) : (
                  <Home setQuizStart={setQuizStart} setQuizData={setQuizData} />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
