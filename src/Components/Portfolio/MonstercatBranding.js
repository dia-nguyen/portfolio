import WindowResize from "../Window-resize";
import monstercatMusic from "../../assets/player-preview.png";

function MonstercatBranding({ onToggleWindow }) {
  return (
    <WindowResize
      size="medium"
      title="Monstercat.com"
      onToggleWindow={onToggleWindow}
    >
      <img src={monstercatMusic} alt="music" />
      <h3>Monstercat.com</h3>
      <p>
        Monstercat is an electronic music record label company based in
        Vancouver, BC Canada.
      </p>
      <p>
        I was extremely fortunate to work with an amazing team to completely
        overhaul the design and infrastructure of the Monstercat website from
        scratch.
      </p>
      <a
        href="https://monstercat.com"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Visit Website
      </a>
    </WindowResize>
  );
}

export default MonstercatBranding;
