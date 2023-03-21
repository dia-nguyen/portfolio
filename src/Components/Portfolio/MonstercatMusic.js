import WindowResize from "../Window-resize";
import monstercatPlayer from "../../assets/monstercat-preview.png";

function MonstercatMusic({ onToggleWindow }) {
  return (
    <WindowResize
      size="medium"
      title="Monstercat Player"
      onToggleWindow={onToggleWindow}
    >
      <img src={monstercatPlayer} alt="music" />
      <h3>Monstercat Player</h3>
      <p>
        A web-based music player for Monstercat fans I had the opportunity to
        work on during my time at Monstercat.
      </p>
      <p>
        For this project, my responsibility was to design a player that could be
        used on both mobile and desktop devices while ensuring that the fun
        essence of Monstercat was captured. After designing the player, I
        collaborated with my team to implement the designs using ReactJS.
      </p>
      <a
        href="https://player.monstercat.app"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Visit Player
      </a>
    </WindowResize>
  );
}

export default MonstercatMusic;
