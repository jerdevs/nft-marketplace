import React from "react";
import {
  EndDateContainerStyled,
  EndingInStyled,
  TimeStyled,
} from "./EndDate.styled";
import { getSeconds, secondsToTime } from "./EndDate.utils";

interface EndDateProps {
  endTime: string;
}

const EndDate: React.FC<EndDateProps> = (
  props: EndDateProps
): React.ReactElement => {
  const { endTime } = props;
  const [secondsLeft, setSecondsLeft] = React.useState(0);

  React.useEffect((): void => {
    setSecondsLeft(getSeconds(endTime));
  }, []);

  React.useEffect((): (() => void) => {
    let interval = setInterval((): void => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
      if (secondsLeft === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return (): void => {
      clearInterval(interval);
    };
  }, [secondsLeft]);

  return (
    <EndDateContainerStyled>
      <EndingInStyled>Ending in</EndingInStyled>
      <TimeStyled>{secondsToTime(secondsLeft)}</TimeStyled>
    </EndDateContainerStyled>
  );
};

export default EndDate;
