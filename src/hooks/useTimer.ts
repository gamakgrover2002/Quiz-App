import { useState, useEffect } from "react";

export type UseTimerProps = {
  minutes: number;
  seconds: number;
  hours: number;
};

export const useTimer = (initialTime: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<UseTimerProps>(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const countDown = (time: UseTimerProps): UseTimerProps => {
    let totalSeconds = 3600 * time.hours + 60 * time.minutes + time.seconds;
    if (totalSeconds <= 0) {
      setIsRunning(true);
    }
    if (totalSeconds > 0) totalSeconds--;
    return {
      hours: Math.floor(totalSeconds / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => countDown(prevTime));
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft.seconds]);

  return { timeLeft, setTimeLeft, isRunning };
};
