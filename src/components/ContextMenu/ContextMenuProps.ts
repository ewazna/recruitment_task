import type { PropsWithChildren } from "react";

export type ContextMenuProps = PropsWithChildren<ContextMenuSpecificProps>;

interface ContextMenuSpecificProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}
