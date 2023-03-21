import PortfolioItem from "./PortfolioItem";
import WindowResize from "./Window-resize";
import monstercatWebsiteImg from "../assets/monstercat-icon.svg"
import monstercatMusicImg from "../assets/monstercat-player-icon.svg"
import frienderImg from "../assets/friender-icon.svg"
import joblyImg from "../assets/jobly-icon.svg"

function Portfolio({ onToggleWindow, music, monstercat, friender,jobly }) {
  const portfolioItems = [
    {
      title: "Music Player",
      img: monstercatMusicImg,
      url: "https://player.monstercat.app/",
      openWindow: music
    },
    {
      title: "Monstercat",
      img: monstercatWebsiteImg,
      url: "https://monstercat.com",
      openWindow: monstercat

    },
    {
      title: "Friender",
      img: frienderImg,
      url: "https://friendliest.surge.sh/",
      openWindow: friender
    },
    {
      title: "Jobly",
      img: joblyImg,
      url: "https://jobliest.surge.sh/",
      openWindow: jobly
    },
  ]
  return (
    <>
      <WindowResize size="small" title="Projects" onToggleWindow={onToggleWindow}>
        <div className="PortfolioCollection">
          {portfolioItems.map((item, i) => (
            <PortfolioItem key={i} title={item.title} image={item.img} url={item.url} extra={item.openWindow}/>
          ))}
        </div>
      </WindowResize>
    </>
  );
}

export default Portfolio;
