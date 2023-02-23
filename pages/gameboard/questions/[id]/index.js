import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion as m, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useGame } from "../../../../context/GameContext";
import getTimerDuration from "../../../../utils/getTimerDuration";
import PageContainer from "../../../../components/PageContainer";
import Timer from "../../../../components/Timer";
import QuestionText from "../../../../components/QuestionText";
import AnswerSubmission from "../../../../components/AnswerSubmission";
import styles from "./styles.module.css";
import IncorrectGraphic from "../../../../components/IncorrectGraphic";
import QuestionHeading from "../../../../components/QuestionHeading";
import getQuestion from "../../../../utils/getQuestion";

export default function Question({ questionResponse }) {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const { selectedDifficulty, singleCategories } = useGame();
  const router = useRouter();

  const { question, category } = questionResponse;
  const {
    query: { value },
  } = router;

  useEffect(() => {
    if (!singleCategories.length) {
      router.push("/");
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      alert("Cannot use back button on question pages. You lose!");
      router.push("/gameboard");
    };
  }, []);

  const handleSubmit = () => {
    setCorrect(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setTimeout(() => {
      router.push("/gameboard");
    }, 5000);
  };

  const seconds = getTimerDuration(selectedDifficulty);

  return (
    <PageContainer>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <AnimatePresence>
        {isVisible && (
          <m.div
            key="question"
            className={styles.container}
            initial={{ rotateY: 180, scale: 0.05 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{
              rotateY: 180,
              scale: 0,
              transition: { duration: 1, delay: 3 },
            }}
          >
            {correct === false && <IncorrectGraphic />}
            <QuestionHeading category={category} value={value} />
            <QuestionText question={question} />
            <Timer
              seconds={seconds}
              correct={correct}
              setCorrect={setCorrect}
              setIsVisible={setIsVisible}
            />
            <AnswerSubmission handleSubmit={handleSubmit} correct={correct} />
          </m.div>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const questionResponse = await getQuestion(id);

  return {
    props: { questionResponse },
  };
}
