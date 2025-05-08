import { forwardRef, type ForwardedRef, type PropsWithChildren } from "react";
import type { ButtonProps } from "./ButtonProps";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, active, ...rest } = props;
    return (
      <button
        {...rest}
        className={
          `btn mt-1 mb-1 ` + (active ? "active " : "") + rest.className
        }
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
