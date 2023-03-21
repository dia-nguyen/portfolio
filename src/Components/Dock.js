import DockItem from "./DockItem";
import "./Dock.css";

function Dock({ onToggleWindow }) {
  const dockItems = [
    {
      title: "about me",
      icon: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/icons/finder.png",
      window: "aboutMe",
    },
    {
      title: "projects",
      icon: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/icons/developer.png",
      window: "portfolio",
    },
    {
      title: "terminal",
      icon: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/icons/terminal.png",
      window: "terminal",
    },
    {
      title: "contact me",
      icon: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/icons/mail.png",
      window: "contactMe",
    },
    {
      title: "themes",
      icon: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/icons/theme-picker.png",
      window: "patterns",
    },
  ];

  return (
    <div className="Dock fixed b b--pink bottom-0 w-100">
      <div className="flex flex-row justify-center">
        {dockItems.map((item) => (
          <DockItem
            key={item.title}
            onToggleWindow={() => onToggleWindow(item.window)}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Dock;
