import { useState, useEffect } from "react";
import { QuestionsData } from "../data";

export type useQuestionProps = {
  data: QuestionsData[];
  category: string;
  numberOfQuestions: number;
};

export const useQuestions = ({
  data,
  category,
  numberOfQuestions,
}: useQuestionProps) => {
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  function getRandomValues(array: QuestionsData[], n: number) {
    if (n > array.length) {
      return array;
    }
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, n);
  }

  useEffect(() => {
    const generateQuestions = () => {
      if (category === "all") {
        setQuestions(getRandomValues(data, numberOfQuestions));
      } else {
        const filteredData = data.filter((item) => item.category === category);
        setQuestions(filteredData);
        setQuestions(getRandomValues(filteredData, numberOfQuestions));
      }
    };
    generateQuestions();
  }, [data, category, numberOfQuestions]);

  return { questions };
};
