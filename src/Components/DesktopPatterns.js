import WindowResize from "./Window-resize";
import themeContext from "../Theme/themeContext";
import { useContext, useState } from "react";
import "./DesktopPatterns.css";

function DesktopPatterns({ onToggleWindow }) {
  const { setCurrentTheme, availThemes, currTheme } = useContext(themeContext);
  const [previewTheme, setPreviewTheme] = useState(currTheme);

  function next(evt) {
    evt.preventDefault();
    const currIndex = availThemes.findIndex(
      (theme) => theme.theme === previewTheme.theme
    );
    const nextIndex = (currIndex + 1) % availThemes.length;
    setPreviewTheme(availThemes[nextIndex]);
  }

  function prev(evt) {
    evt.preventDefault();
    const currIndex = availThemes.findIndex(
      (theme) => theme.theme === previewTheme.theme
    );
    const prevIndex = (currIndex - 1 + availThemes.length) % availThemes.length;
    setPreviewTheme(availThemes[prevIndex]);
  }

  return (
    <WindowResize
      size="small"
      title="themes"
      onToggleWindow={onToggleWindow}
      type="themes"
    >
      <div
        className="theme-preview"
        style={{ backgroundImage: `url(${previewTheme.img})` }}
      ></div>
      <div className="action-btns">
        <button className="theme-btn theme-action chicago" onClick={prev}>
          Prev
        </button>
        <button
          className="theme-btn chicago"
          onClick={() => setCurrentTheme(previewTheme)}
        >
          Set Desktop Pattern
        </button>
        <button className="theme-btn theme-action chicago" onClick={next}>
          Next
        </button>
      </div>
    </WindowResize>
  );
}

export default DesktopPatterns;
