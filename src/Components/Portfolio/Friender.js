import WindowResize from "../Window-resize";

function Friender({ onToggleWindow }) {
  const friender = "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/friender-preview.png";
  return (
    <WindowResize size="medium" title="Friender" onToggleWindow={onToggleWindow}>
      <img src={friender} alt="friender" />
      <h3>Friender</h3>
      <p>
        A Tinder clone full-stack app rebranded as a Friend finding app that
        allows for matching with potential friends in your preferred radius.
      </p>

      <p>Tech: ReactJS, Flask, Bcrypt, JWT, Boto3, SQAlchemy, Postgreql</p>
      <p>Guest account: guest@email.com/password</p>
      <p>The app may need a moment to wake up!</p>
      <a
        href="https://frontend-friender.vercel.app"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Visit App
      </a>
      <a
        href="https://github.com/dia-nguyen/frontend-friender"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Github Repo
      </a>
    </WindowResize>
  );
}

export default Friender;
