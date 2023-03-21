import PortfolioItem from "./PortfolioItem";
import WindowResize from "./Window-resize";

function Portfolio({ onToggleWindow, music, monstercat, friender,jobly }) {
  const portfolioItems = [
    {
      title: "Music Player",
      img: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/monstercat-player-icon.svg",
      url: "https://player.monstercat.app/",
      openWindow: music
    },
    {
      title: "Monstercat",
      img: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/monstercat-icon.svg",
      url: "https://monstercat.com",
      openWindow: monstercat

    },
    {
      title: "Friender",
      img: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/friender-icon.svg",
      url: "https://friendliest.surge.sh/",
      openWindow: friender
    },
    {
      title: "Jobly",
      img: "https://lixy-portfolio.s3.us-west-1.amazonaws.com/portfolio-preview/jobly-icon.svg",
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
