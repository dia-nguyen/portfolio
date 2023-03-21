import WindowResize from "./Window-resize";
import Terminal from "terminal-in-react";

import cats from "./ascii-cats";

function Term({ onToggleWindow }) {
  function cat() {
    const ran = Math.floor(Math.random() * cats.length)
    return cats[ran]
  }
  return (
    <WindowResize
      size="small"
      title="terminal"
      type="terminal"
      onToggleWindow={onToggleWindow}
    >
      <Terminal
        color="#d0c0ff"
        outputColor="white"
        prompt="#d0c0ff"
        hideTopBar
        allowTabs={false}
        style={{ fontSize: "16px", height: "400px", overflow: "hidden" }}
        commands={{
          "CAT": cat,
        }}
        descriptions={{
          "CAT": 'shows cat',
        }}
        msg="Welcome to lixyOS. Type CAT for a surprise."
      />
    </WindowResize>
  );
}

export default Term;
