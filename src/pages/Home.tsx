import { Box, Button, Typography } from "@mui/material";
import Input from "../components/Input";
import Select from "../components/Select";
import { categories } from "../data";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import React from "react";
import heroImage from "../assets/heroImage.jpg";

type FormValues = {
  category: string;
  numberOfQuestions: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type HomeProps = {
  setQuizStart: React.Dispatch<React.SetStateAction<boolean>>;
  setQuizData: React.Dispatch<React.SetStateAction<FormValues>>;
};

function Home({ setQuizStart, setQuizData }: HomeProps) {
  const methods = useForm<FormValues>({
    defaultValues: {
      category: "all",
      numberOfQuestions: 10,
      hours: 0,
      minutes: 10,
      seconds: 0,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setQuizData(data);
    setQuizStart(true);
  };

  return (
    <Box
      className="Quiz-form"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid black",
        margin: "0px 30px",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
      }}
    >
      <Box>
        <img
          src={heroImage}
          alt="hero-img"
          width={200}
          height={200}
          loading="lazy"
        />
      </Box>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h3">Ultimate Trivia</Typography>
          <hr />
          <Select name="category" categories={categories} label="Categories" />
          <Input
            type="number"
            placeholder="Select Number Of Questions"
            name="numberOfQuestions"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: 2,
              gap: 5,
            }}
          >
            <Input type="number" placeholder="Hours" name="hours" />
            <Input type="number" placeholder="Minutes" name="minutes" />
            <Input type="number" placeholder="Seconds" name="seconds" />
          </Box>
          <Button type="submit" variant="contained">
            Take Quiz
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
}

export default Home;
