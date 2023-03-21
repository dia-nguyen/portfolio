// import folder from "../assets/purple-folder.png"
import about from "../assets/icons/finder.png"
import dev from "../assets/icons/developer.png"
import mail from "../assets/icons/mail.png"
import terminal from "../assets/icons/terminal.png"
import DockItem from "./DockItem";

import "./Dock.css"

function Dock({onToggleWindow}) {
  return(
    <div className="Dock fixed b b--pink bottom-0 w-100">
      <div className="flex flex-row justify-center">
        <DockItem onToggleWindow={() => onToggleWindow("aboutMe")} title="about me" icon={about}/>
        <DockItem onToggleWindow={() => onToggleWindow("portfolio")}  title="projects" icon={dev}/>
        <DockItem onToggleWindow={() => onToggleWindow("terminal")}  title="terminal" icon={terminal}/>
        <DockItem onToggleWindow={() => onToggleWindow("contactMe")}  title="contact me" icon={mail}/>
        <DockItem onToggleWindow={() => onToggleWindow("patterns")}  title="themes" icon={about}/>
      </div>
    </div>
  )
}

export default Dock