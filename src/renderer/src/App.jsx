import { useState } from "react";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";


function App() {
  const questions = [
    {
      text: "What is ReactJS?",
      options: ["A backend framework", "A JavaScript library for building UI", "A database management system", "A styling preprocessor"],
      correctOption: 1,
    },
    {
      text: "Explain the Virtual DOM in React.",
      options: ["It's the same as the real DOM", "A lightweight copy of the real DOM in memory", "A server-side rendering technique", "An API for DOM manipulation"],
      correctOption: 1,
    },
    {
      text: "What is JSX in React?",
      options: ["A programming language", "A file extension", "A JavaScript library", "A syntax extension for JavaScript"],
      correctOption: 3,
    },
    {
      text: "What are components in React?",
      options: ["External CSS files", "Reusable and independent UI pieces", "JavaScript libraries", "Database tables"],
      correctOption: 1,
    },
    {
      text: "What is the difference between state and props in React?",
      options: ["They are the same", "State is internal, props are external", "Props are for class components, state for functional components", "State is for functional components, props for class components"],
      correctOption: 1,
    },
    {
      text: "Explain the lifecycle methods of a React component.",
      options: ["Methods executed at different stages of a component's life", "Methods related to CSS animations", "Methods for handling AJAX requests", "Methods for handling state updates"],
      correctOption: 0,
    },
    {
      text: "What is the purpose of setState in React?",
      options: ["To define a constant state", "To update the state of a component", "To set initial state", "To create a new component"],
      correctOption: 1,
    },
    {
      text: "What is React Router?",
      options: ["A styling library for React", "A navigation library for React applications", "A form handling library", "A state management library"],
      correctOption: 1,
    },
    {
      text: "What is the purpose of the key attribute in React lists?",
      options: ["To style list items", "To provide a unique identifier to list elements", "To define the order of list items", "To set the font size of list items"],
      correctOption: 1,
    },
    {
      text: "Explain the concept of lifting state up in React.",
      options: ["Moving state from a parent component to a child component", "Moving state from a child component to a parent component", "Creating a new state in a component", "Sharing state between sibling components"],
      correctOption: 1,
    },
  ];
  const [questionNo,setQuestionNo] = useState(0)

  return (
    <>
      <div className="flex flex-col gap-6">
          <Navbar/>
        <div className="flex gap-10">
          <div className="w-[25%]">
            <LeftBar setQuestionNo = {setQuestionNo}/>
          </div>
          <div className="w-[70%]">
            <RightBar question={questions[questionNo]} setQuestionNo={setQuestionNo} questionNo={questionNo}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;