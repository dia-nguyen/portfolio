import { useState, useEffect } from "react";
import "./Nav.css";

/**
 * Navbar
 */
function Nav({darkMode}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <nav className="Nav">
      <div className="Nav-wrapper">
        <i className="Nav-icon fa fa-moon white" onClick={darkMode}></i>
      </div>
      <ul className="Nav-social">
        <li>
          <a href="https://twitter.com/hellolixy" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-twitter" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/hellolixy" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-instagram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/dia-nguyen" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dianenguyenca/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" />
          </a>
        </li>
        <li className="pl3 time">{formattedTime}</li>
      </ul>
    </nav>
  );
}

export default Nav;
