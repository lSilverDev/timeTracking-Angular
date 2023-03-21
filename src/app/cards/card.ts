type timeFrame = {
  time: string;
  current: number;
  previous: number;
}

export interface card{
  title: string,
  timeframes: timeFrame[]
}
