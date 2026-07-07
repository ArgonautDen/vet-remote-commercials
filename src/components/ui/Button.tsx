import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  to: string;
  href?: undefined;
  onClick?: () => void;
};

type ButtonAsAnchor = BaseProps & {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cta-gradient text-white shadow-card hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary: "bg-surface text-indigo-700 shadow-soft border border-ink-200 hover:border-indigo-300 hover:text-indigo-800",
  outline: "bg-transparent text-white border border-white/40 hover:bg-white/10",
  ghost: "bg-transparent text-ink-600 hover:text-indigo-700",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-[15px] gap-2",
  lg: "h-14 px-7 text-base gap-2.5",
};

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-xl font-display font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "right",
    ...rest
  } = props;

  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ("to" in props && props.to) {
    const { to, onClick } = rest as ButtonAsLink;
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = rest as ButtonAsAnchor;
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
