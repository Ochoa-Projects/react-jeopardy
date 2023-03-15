import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FlipAnimation from "../FlipAnimation";

const FinalMissed = () => {
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setTimeout(() => {
      router.push("/gameboard/final/results");
    }, 5000);
  }, []);

  return (
    <FlipAnimation
      isVisible={isVisible}
      background={"var(--light-blue-gradient)"}
    >
      <p>Final Missed</p>;
    </FlipAnimation>
  );
};

export default FinalMissed;
