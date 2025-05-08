import { useRef } from "react";
import type { ContextMenuProps } from "./ContextMenuProps";
import Button from "../Button/Button";

function ContextMenu({ name, children }: ContextMenuProps) {
  const contextMenuTrigger = useRef<HTMLButtonElement>(null);
  const contextMenuPanel = useRef<HTMLDivElement>(null);

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const trigger = contextMenuTrigger.current;
    const panel = contextMenuPanel.current;
    if (trigger && panel) {
      panel.style.top = trigger.getBoundingClientRect().bottom + "px";
      panel.style.left = trigger.getBoundingClientRect().left + "px";
    }
  };

  return (
    <>
      <Button
        ref={contextMenuTrigger}
        type="button"
        onClick={handleMenuClick}
        popoverTarget="contextMenu"
        popoverTargetAction="toggle"
        className="trigger-btn"
      >
        {name}
      </Button>

      <div popover="auto" id="contextMenu" ref={contextMenuPanel}>
        <div className="context-menu">{children}</div>
      </div>
    </>
  );
}

export default ContextMenu;
