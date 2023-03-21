import WindowResize from "./Window-resize";

function ContactMe({ onToggleWindow }) {
  return (
    <WindowResize
      size="small"
      title="contact me"
      onToggleWindow={onToggleWindow}
    >
      <div className="bio-info">
        <p>Looking to work with me or just wanna have a coffee chat?</p>
        <p>You can reach me here at my email: <a href="mailto:hello@dianenguyen.ca">hello [at] dianenguyen.ca</a></p>
      </div>
    </WindowResize>
  );
}

export default ContactMe;
