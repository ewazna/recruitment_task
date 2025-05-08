import { useRef } from "react";
import type { ContextMenuProps } from "./ContextMenuProps";
import Button from "../Button/Button";

function ContextMenu({ name, icon, children }: ContextMenuProps) {
  const contextMenuTrigger = useRef<HTMLButtonElement>(null);
  const contextMenuPanel = useRef<HTMLDivElement>(null);

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const trigger = contextMenuTrigger.current;
    const panel = contextMenuPanel.current;
    if (trigger && panel) {
      panel.style.top = trigger.getBoundingClientRect().bottom + "px";
      panel.style.left = trigger.getBoundingClientRect().right - 130 + "px";
    }
  };

  return (
    <div className="d-flex container-sm justify-content-end sort-container">
      <Button
        ref={contextMenuTrigger}
        type="button"
        onClick={handleMenuClick}
        popoverTarget="contextMenu"
        popoverTargetAction="toggle"
      >
        {name} {icon}
      </Button>

      <div
        popover="auto"
        id="contextMenu"
        ref={contextMenuPanel}
        className="ps-3 pe-3 m-0 p-0 border-0 rounded-3 shadow"
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ContextMenu;
