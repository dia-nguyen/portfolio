import WindowResize from "../Window-resize";

function Pomogarden({ onToggleWindow }) {
  const pomogarden = "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/pomo-preview-1.png";
  return (
    <WindowResize size="medium" title="Pomo Garden" onToggleWindow={onToggleWindow}>
      <img src={pomogarden} alt="Pomogarden" />
      <h3>Pomo Garden</h3>
      <p>Pomogarden-- a pomodoro app that combines productivity with virtual gardening. With every completed focus interval, your virtual veggies will grow. You can sell your harvested produce for coins to purchase more seeds to grow!</p>
      <p>Tech: ReactJS, TailwindCSS, Sass, Flask</p>
      <a
        href="https://github.com/dia-nguyen/pomogarden-UI"
        target="_blank"
        className="btn "
        rel="noreferrer"
      >
        Frontend Repo
      </a>
      <a
        href="https://github.com/dia-nguyen/pomogarden"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        API Repo
      </a>
    </WindowResize>
  );
}

export default Pomogarden;
