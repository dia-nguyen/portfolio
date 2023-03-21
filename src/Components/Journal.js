import WindowResize from "./Window-resize";

function Journal({ onToggleWindow }) {
  return (
    <WindowResize size="small" title="Journal" onToggleWindow={onToggleWindow}>
      MyJournal
    </WindowResize>
  );
}

export default Journal;
