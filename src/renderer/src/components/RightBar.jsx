import React from "react";

const RightBar = ({ question, setQuestionNo, questionNo }) => {
  return (
    <div className="mr-8 flex flex-col gap-8 items-start w-full">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="text-xl font-semibold">Question:</h1>
        <p className="text-lg">{question.text}</p>
      </div>
      <div className="flex flex-col justify-start gap-3">
        <h1 className="text-xl font-semibold">Answer:</h1>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-lg">{question.options[0]}</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-lg">{question.options[1]}</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-lg">{question.options[2]}</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-lg">{question.options[3]}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">

      <button
        className="px-5 py-1 bg-rose-600 text-white text-lg font-semibold rounded-lg disabled:bg-gray-500"
        onClick={() => 
            setQuestionNo((prev) => prev - 1)}
        disabled={(questionNo===0)?true:false}
      >
        Prev
      </button>
      <button
        className="px-5 py-1 bg-rose-600 text-white text-lg font-semibold rounded-lg disabled:bg-gray-500"
        onClick={() => 
            setQuestionNo((prev) => prev + 1)}
        disabled={(questionNo===9)?true:false}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default RightBar;
