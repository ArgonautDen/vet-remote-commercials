import { useMemo, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";
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
  /** Adds a slow, elegant light sweep across the button (see .btn-shimmer in index.css). */
  shimmer?: boolean;
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
  "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl font-display font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "right",
    shimmer = false,
    ...rest
  } = props;

  const classes = cn(base, variantClasses[variant], sizeClasses[size], shimmer && "btn-shimmer", className);
  // Randomized per-instance so multiple shimmering buttons on the same page
  // never sweep in sync — each one drifts on its own clock.
  const shimmerStyle = useMemo<CSSProperties | undefined>(
    () => (shimmer ? ({ "--shimmer-delay": `-${(Math.random() * 9).toFixed(2)}s` } as CSSProperties) : undefined),
    [shimmer],
  );
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
      <Link to={to} onClick={onClick} className={classes} style={shimmerStyle}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = rest as ButtonAsAnchor;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
        style={shimmerStyle}
      >
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonRest.type ?? "button"}
      className={classes}
      style={shimmerStyle}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
