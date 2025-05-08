import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  active: boolean;
  icon?: React.ReactNode;
}
