
import "./Dock.css"

function DockItem({title, icon, onToggleWindow}) {
  return(
    <div className="DockItem flex items-center ma2">
      <button className="Dock-btn" onClick={onToggleWindow}>
        {/* <i className={`fa fa-${icon} fa-3x`}></i> */}
        <img src={icon} alt={title} className="Dock-icon" />
        <h4 className="ma0 normal">{title}</h4>
      </button>
    </div>
  )
}

export default DockItem