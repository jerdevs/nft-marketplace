export const secondsToTime = (sec: number): string => {
  let hours = Math.floor(sec / (60 * 60));

  let divisorForMinutes = sec % (60 * 60);
  let minutes = Math.floor(divisorForMinutes / 60);

  let divisorForSeconds = divisorForMinutes % 60;
  let seconds = Math.ceil(divisorForSeconds);

  return `${hours}h ${minutes}m ${seconds}s`;
};

export const getSeconds = (endTime: string): number => {
  const time: string[] = endTime.split(" ");
  let seconds = 0;
  if (time.length === 2) {
    const hours = parseInt(time[0].replace("h", ""));
    const mins = parseInt(time[1].replace("min", ""));
    seconds = hours * 60 * 60 + mins * 60;
  }
  return seconds;
};
