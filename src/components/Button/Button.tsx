import type { PropsWithChildren } from "react";
import type { ButtonProps } from "./ButtonProps";

function Button({
  children,
  icon,
  active,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button {...rest} className={active ? "active-btn" : ""}>
      {icon} {children}
    </button>
  );
}

export default Button;
