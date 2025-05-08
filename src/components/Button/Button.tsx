import { forwardRef, type ForwardedRef, type PropsWithChildren } from "react";
import type { ButtonProps } from "./ButtonProps";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, active, ...rest } = props;
    return (
      <button {...rest} className={active ? "active-btn" : ""} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
