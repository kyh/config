import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className="inline-flex"
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
