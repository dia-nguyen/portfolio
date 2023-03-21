import WindowResize from "../Window-resize";

function Jobly({ onToggleWindow }) {
  const jobly = "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/jobly-preview.png";
  return (
    <WindowResize size="medium" title="Jobly" onToggleWindow={onToggleWindow}>
      <img src={jobly} alt="Jobly" />
      <h3>Jobly</h3>
      <p>A full-stack virtual job application board that allows for applying to a list of available jobs.</p>
      <p>Tech: ReactJS, Axios, Bootstrap, Express, Bcrypt, JWT</p>
      <p>Guest account: guest/password</p>
      <p>The app may need a moment to wake up!</p>
      <a
        href="https://jobliest.surge.sh/jobs"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Visit App
      </a>
    </WindowResize>
  );
}

export default Jobly;
