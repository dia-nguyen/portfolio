import { useEffect, useRef, useMemo } from "react";
import interact from "interactjs";
import "./Window.css";

function WindowResize({ size, title, children, onToggleWindow, type }) {
  const windowRef = useRef(null);

  const positionOffset = useMemo(() => {
    if (window.innerWidth <= 900) {
      // Do something if window width is less than or equal to 768 pixels
      return {
        x: 20,
        y: 50,
      };
    } else if (type === "about") {
      const windowWidth = window.innerWidth / 2 - 280;
      const windowHeight = window.innerHeight / 2 - 200;
      return {
        x: windowWidth,
        y: windowHeight,
      };
    } else {
      const windowWidth = window.innerWidth - 450; // subtract window width
      const windowHeight = window.innerHeight - 600; // subtract window height
      return {
        x: Math.floor(Math.random() * windowWidth),
        y: Math.floor(Math.random() * windowHeight),
      };
    }
  }, [type]);

  const edges = useMemo(() => {
    let edges = {
      left: false,
      right: true,
      bottom: true,
      top: false,
    };

    if (type === "about") {
      edges = {
        left: false,
        right: false,
        bottom: false,
        top: false,
      };
    }

    return edges;
  }, [type]);

  useEffect(() => {
    if (windowRef.current) {
      interact(windowRef.current)
        .draggable({
          onmove: dragMoveListener,
        })
        .resizable({
          preserveAspectRatio: false,
          edges: edges,
        })
        .on("resizemove", (event) => {
          const target = event.target;
          let x = parseFloat(target.getAttribute("data-x")) || 0;
          let y = parseFloat(target.getAttribute("data-y")) || 0;

          // update the element's style
          target.style.width = event.rect.width + "px";
          target.style.height = event.rect.height + "px";

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.webkitTransform = target.style.transform =
            "translate(" + x + "px," + y + "px)";

          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
          // target.textContent = event.rect.width + '×' + event.rect.height;
        });
    }
  }, [windowRef, edges]);

  function dragMoveListener(event) {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the position attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }

  return (
    <div
      ref={windowRef}
      className={`resize-drag Window Window-${size} Window-${type}`}
      style={{
        transform: `translate(${positionOffset.x}px, ${positionOffset.y}px)`,
      }}
      data-x={positionOffset.x}
      data-y={positionOffset.y}
    >
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
  );
}

export default WindowResize;
