import "./Portfolio.css";

function PortfolioItem({ image, title, url, togglePortfolio, extra }) {
  return (
    <div className="PortfolioItem" onClick={extra}>
      <div className="img-wrapper" onClick={togglePortfolio}>
        <img src={image} alt={title} className="preview" />
      </div>
        <p className="ma-0 normal">{title}</p>
    </div>
  );
}

export default PortfolioItem;
