import { Box, Typography } from "@mui/material";
import { UseTimerProps } from "../hooks/useTimer";

type TimerProps = {
  time: UseTimerProps;
};
function Timer({ time }: TimerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "200px",
      }}
    >
      <Box>
        <Typography>Hours</Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "50px",
            height: "50px",
            fontSize: "2rem",
          }}
        >
          {time.hours}
        </Typography>
      </Box>
      <Box>
        <Typography>Minutes</Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "50px",
            height: "50px",
            fontSize: "2rem",
          }}
        >
          {time.minutes}
        </Typography>
      </Box>
      <Box>
        <Typography>Seconds</Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "50px",
            height: "50px",
            fontSize: "2rem",
          }}
        >
          {time.seconds}
        </Typography>
      </Box>
    </Box>
  );
}

export default Timer;
