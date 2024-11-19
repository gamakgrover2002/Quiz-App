import Timer from "../components/Timer";
import { useQuestions } from "../hooks/useQuestions";
import { useTimer } from "../hooks/useTimer";
import { Box, Button, Typography } from "@mui/material";
import { data } from "../data.ts";
import { useEffect, useState } from "react";

type FormValues = {
  category: string;
  numberOfQuestions: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface QuizProps {
  quizData: FormValues;
}
function Quiz({ quizData }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [score, setScore] = useState(0);

  const validateAnswer = (option: string, answer: string) => {
    if (option === answer) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setTestOver(true);
    }
  };

  const { questions } = useQuestions({
    category: quizData.category,
    data: data,
    numberOfQuestions: quizData.numberOfQuestions,
  });

  const { timeLeft } = useTimer({
    hours: quizData.hours,
    minutes: quizData.minutes,
    seconds: quizData.seconds,
  });

  useEffect(() => {
    if (questions.length > 0) setCurrentQuestion(0);
  }, [questions]);

  return (
    <>
      {testOver ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            width: "100vw",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography variant="h1">Test Over! Your Score is {score}</Typography>
          <Button
            onClick={() => {
              location.reload();
            }}
            variant="contained"
          >
            Retake Test
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            margin: "0px 30px",
            justifyContent: "center",
            height: "auto",
            padding: "10px 30px",
          }}
        >
          <Timer time={timeLeft} />
          {questions[currentQuestion] && (
            <Box>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                }}
              >
                {questions[currentQuestion].question}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  mt: 2,
                  gap: 5,
                }}
              >
                {questions[currentQuestion].options.map((e) => (
                  <Button
                    sx={{
                      variant: "contained",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      flexBasis: "44%",
                    }}
                    onClick={() =>
                      validateAnswer(e, questions[currentQuestion].answer)
                    }
                    key={e}
                  >
                    {e}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Quiz;
