import WindowResize from "./Window-resize";
import profile from "../assets/me.jpeg";
import "./AboutMe.css";

function AboutMe({ onToggleWindow }) {
  return (
    <WindowResize size="medium" title="About Me" onToggleWindow={onToggleWindow} type="about">
      <div className="bio">
        <img src={profile} className="bio-img" alt="Diane" />
        <div className="bio-info">
          <h2 className="lilac chicago f4 ttu">Hello, I'm Diane!</h2>
          <p>
            A software engineer, designer, and streamer originally from <a href="https://goo.gl/maps/NjUdCquaSP2ByNw19">Vancouver</a> and now living in <a href="https://goo.gl/maps/rqRREhRRbJF9i7dh7">San Francisco</a>. My goal is to enhance the experience of the things I love so that others can fall in love with them too.
          </p>
          <p>I've been a designer for the past 7 years in the gaming and music space, creating UI for brand websites, music web apps, admin dashboards, internal software, and more!</p>
        </div>
      </div>
    </WindowResize>
  );
}

export default AboutMe;
