import * as React from "react";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return <button className="inline-flex" ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button };
