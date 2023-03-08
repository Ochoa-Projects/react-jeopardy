import styles from "./styles.module.css";
import { useAudio } from "../../context/AudioContext";

const MuteButton = () => {
  const { isMuted, setIsMuted } = useAudio();

  const handleClick = () => {
    setIsMuted(isMuted ? false : true);
  };

  return (
    <div className={styles.menuButtonContainer}>
      <div
        onClick={handleClick}
        className={isMuted ? styles.muted : styles.notMuted}
      />
    </div>
  );
};

export default MuteButton;
