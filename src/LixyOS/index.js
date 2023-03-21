import "./style.css";
import Nav from "../Components/Nav";
import Dock from "../Components/Dock";
import { useState, useEffect } from "react";
import Portfolio from "../Components/Portfolio";
import AboutMe from "../Components/AboutMe";
import Journal from "../Components/Journal";
import Loader from "../Components/Loader";
import Term from "../Components/Terminal";
import ContactMe from "../Components/ContactMe";
import DesktopPatterns from "../Components/DesktopPatterns";
import MonstercatBranding from "../Components/Portfolio/MonstercatBranding";
import MonstercatMusic from "../Components/Portfolio/MonstercatMusic";
import Friender from "../Components/Portfolio/Friender";
import Jobly from "../Components/Portfolio/Jobly";
import themeContext from "../Theme/themeContext";
import hello from "../assets/bg/hellox3.png";
import grid from "../assets/bg/grid.png";
import dots from "../assets/bg/dots.png";
import stripes from "../assets/bg/stripes.png";

/**
 * LixyOS
 *
 */

function LixyOS() {
  const [showWindows, setShowWindows] = useState({
    aboutMe: true,
    portfolio: false,
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    journal: false,
    terminal: false,
    contactMe: false,
    patterns: false,
    monstercatMusic: false,
    monstercatBranding: false,
    friender: false,
    jobly: false,
  });

  const toggleWindow = (windowName) => {
    setShowWindows({
      ...showWindows,
      [windowName]: !showWindows[windowName],
    });
  };

  const themes = [
    {
      theme: "hello",
      img: hello,
    },
    {
      theme: "grid",
      img: grid,
    },
    {
      theme: "dots",
      img: dots,
    },
    {
      theme: "stripes",
      img: stripes,
    },
  ];

  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("currentTheme")) || themes[0]
  );

  const [toggleDarkMode, setToggleDarkMode] = useState(
    JSON.parse(localStorage.getItem("toggleDarkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("toggleDarkMode", JSON.stringify(toggleDarkMode));
    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }, [toggleDarkMode, currentTheme]);

  const backgroundImage = `url(${currentTheme.img})`;

  return (
    <themeContext.Provider
      value={{ availThemes: themes, currTheme: currentTheme, setCurrentTheme }}
    >
      <div
        className={`LixyOS ${toggleDarkMode ? " dark-mode" : ""}`}
        style={{backgroundImage}}
      >
        <Nav darkMode={() => setToggleDarkMode(!toggleDarkMode)} />
        <Loader bg={{backgroundImage}} />

        <div className="Window-container">
          {showWindows.aboutMe && (
            <AboutMe onToggleWindow={() => toggleWindow("aboutMe")} />
          )}
          {showWindows.portfolio && (
            <Portfolio
              onToggleWindow={() => toggleWindow("portfolio")}
              music={() => toggleWindow("monstercatMusic")}
              monstercat={() => toggleWindow("monstercatBranding")}
              friender={() => toggleWindow("friender")}
              jobly={() => toggleWindow("jobly")}
            />
          )}
          {showWindows.journal && (
            <Journal onToggleWindow={() => toggleWindow("journal")} />
          )}
          {showWindows.terminal && (
            <Term onToggleWindow={() => toggleWindow("terminal")} />
          )}
          {showWindows.contactMe && (
            <ContactMe onToggleWindow={() => toggleWindow("contactMe")} />
          )}
          {showWindows.patterns && (
            <DesktopPatterns onToggleWindow={() => toggleWindow("patterns")} />
          )}
          {showWindows.monstercatBranding && (
            <MonstercatBranding
              onToggleWindow={() => toggleWindow("monstercatBranding")}
            />
          )}
          {showWindows.monstercatMusic && (
            <MonstercatMusic
              onToggleWindow={() => toggleWindow("monstercatMusic")}
            />
          )}
          {showWindows.friender && (
            <Friender onToggleWindow={() => toggleWindow("friender")} />
          )}
          {showWindows.jobly && (
            <Jobly onToggleWindow={() => toggleWindow("jobly")} />
          )}
        </div>

        <Dock onToggleWindow={toggleWindow} />
      </div>
    </themeContext.Provider>
  );
}

export default LixyOS;
