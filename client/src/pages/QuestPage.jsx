// src/pages/QuestPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { quests } from "../data/quests";
import CodeEditor from "../components/CodeEditor";

function QuestPage() {
  const { id } = useParams();
  const questId = parseInt(id, 10);
  const currentQuest = quests.find((q) => q.id === questId);

  if (!currentQuest) {
    return (
      <div className="p-8 bg-primary-bg rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center text-text-primary">
          Квест не найден
        </h2>
        <p className="text-text-primary mt-2 text-center">
          Вернитесь на страницу Lessons.
        </p>
      </div>
    );
  }

  const [stepIndex, setStepIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const currentStep = currentQuest.steps[stepIndex];

  const handleCheckCode = (userQuery) => {
    setChatMessages([]);
    if (userQuery.includes("WHERE")) {
      const successMsg = {
        type: "success",
        text: `Запрос "${userQuery}" отработал успешно!`,
      };
      setChatMessages([successMsg]);
      if (stepIndex < currentQuest.steps.length - 1) {
        setStepIndex(stepIndex + 1);
      } else {
        const completeMsg = {
          type: "info",
          text: "Все этапы квеста пройдены!",
        };
        setChatMessages([completeMsg]);
      }
    } else {
      const errorMsg = {
        type: "error",
        text: `Запрос неверный или не полностью корректен: "${userQuery}"`,
      };
      setChatMessages([errorMsg]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-primary-bg space-y-4">
      <h1 className="text-2xl font-bold text-center text-text-primary mb-1">
        {currentQuest.title}
      </h1>
      <p className="text-text-primary text-center">
        {currentQuest.description}
      </p>

      <div className="bg-secondary-bg p-4 rounded-lg shadow-md border border-border-primary">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Этапы</h3>
        <div className="flex items-center space-x-2 overflow-x-auto">
          {currentQuest.steps.map((step, idx) => (
            <div
              key={step.stepId}
              className={`px-3 py-1 border rounded cursor-pointer transition-all duration-300 ${
                idx === stepIndex
                  ? "bg-accent border-accent text-text-pr imary"
                  : "bg-secondary-bg border-border-primary text-text-primary hover:bg-accent-hover"
              }`}
              onClick={() => setStepIndex(idx)}
            >
              Этап {step.stepId}
            </div>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">
          {currentStep.title}
        </h2>
        <p className="text-text-primary">{currentStep.description}</p>
      </div>
      <div className="bg-secondary-bg p-4 rounded-lg shadow-md border border-border-primary min-h-[120px]">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Результаты / Лог
        </h3>
        <div className="space-y-2 break-words whitespace-pre-wrap">
          {chatMessages.map((msg, i) => {
            if (msg.type === "success") {
              return (
                <div
                  key={i}
                  className="bg-green-100 p-2 rounded text-green-800"
                >
                  {msg.text}
                </div>
              );
            } else if (msg.type === "error") {
              return (
                <div key={i} className="bg-red-100 p-2 rounded text-red-800">
                  {msg.text}
                </div>
              );
            } else {
              return (
                <div key={i} className="bg-blue-100 p-2 rounded text-blue-800">
                  {msg.text}
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="bg-secondary-bg p-4 rounded-lg shadow-md border border-border-primary">
        <CodeEditor onExecute={handleCheckCode} editorHeight="120px" />
      </div>
    </div>
  );
}

export default QuestPage;
