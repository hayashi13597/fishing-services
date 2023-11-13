"use client";
export const revalidate = 1000;
import React, { memo } from "react";

import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "../../../../hooks/useCountdown";

interface Props {
  targetDate: number;
}
const DiscountFlipCountdown: React.FC<Props> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default memo(DiscountFlipCountdown);
