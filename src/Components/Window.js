import { useMemo, useState } from "react";
import Draggable from "react-draggable";

function Window({ size, title, children, onToggleWindow }) {
  const positionOffset = useMemo(() => {
    return {
      x: Math.floor(Math.random() * 100) + "%",
      y: Math.floor(Math.random() * 100) + "%",
    };
  }, [size]);

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const onResize = (event, { element, size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Draggable positionOffset={positionOffset}>
      <div className={`Window Window-${size}`}>
        <div className="Window-header">
          <button className="Window-close" onClick={onToggleWindow}>
            <i className="material-icons f5">check_box_outline_blank</i>
          </button>
          <div className="Window-title">
            <div>{title}</div>
            <span className="spacer">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
        <div className="Window-body">
          <div className="Window-inner">{children}</div>
        </div>
      </div>
    </Draggable>
  );
}

export default Window;


