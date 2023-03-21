import WindowResize from "../Window-resize";

function MonstercatBranding({ onToggleWindow }) {
  const monstercat = "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/monstercat-preview.png";
  return (
    <WindowResize
      size="medium"
      title="Monstercat.com"
      onToggleWindow={onToggleWindow}
    >
      <img src={monstercat} alt="music" />
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
