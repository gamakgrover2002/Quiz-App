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
type Response = Record<
  string,
  {
    options: string;
    answer: string;
  }
>;
interface QuizProps {
  quizData: FormValues;
}
function Quiz({ quizData }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState<Response>({});

  const validateAnswer = (option: string, correctAnswer: string) => {
    const isCorrect = option === correctAnswer;
    setResponse((prev) => ({
      ...prev,
      [currentQuestion + 1]: { options: option, answer: correctAnswer },
    }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setTestOver(true);
    }
    console.log("Updated Response:", {
      ...response,
      [currentQuestion + 1]: { options: option, answer: correctAnswer },
    });
  };

  useEffect(() => {});

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
                      color:
                        response[currentQuestion + 1]?.options === e
                          ? "white"
                          : "blue",
                      backgroundColor:
                        response[currentQuestion + 1]?.options === e
                          ? "blue"
                          : "primary",
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
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                flexBasis: {
                  sx: "100%",
                  md: "45%",
                },
                width: "100%",
              }}
              onClick={() => {
                setCurrentQuestion((prev) => prev - 1);
              }}
              disabled={currentQuestion === 0}
            >
              Prev
            </Button>
            <Button
              sx={{
                flexBasis: {
                  sx: "100%",
                  md: "45%",
                },
                width: "100%",
              }}
              disabled={currentQuestion === questions.length - 1}
              onClick={() => {
                setCurrentQuestion((prev) => prev + 1);
              }}
            >
              Next
            </Button>
          </Box>
          <Button
            onClick={() => {
              setTestOver(true);
            }}
            sx={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textTransform: "capitalize",
              opacity: 0.8,
              mt: 2,
              "&:hover": {
                backgroundColor: "red",
                opacity: 1,
              },
            }}
            fullWidth
          >
            End Quiz
          </Button>
        </Box>
      )}
    </>
  );
}

export default Quiz;
