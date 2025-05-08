import type { PropsWithChildren } from "react";

export type ContextMenuProps = PropsWithChildren<ContextMenuSpecificProps>;

interface ContextMenuSpecificProps {
  name: string;
  className?: string;
}
