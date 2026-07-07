import type { ReactNode, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToHash } from "@/lib/scrollToHash";

interface HashLinkProps {
  hash: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}

/**
 * Anchor-style link that smooth-scrolls when already on the home page,
 * or navigates to the home page and lets <ScrollRestorer> handle the scroll.
 */
export function HashLink({ hash, children, className, onNavigate }: HashLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();
    if (isHome) {
      event.preventDefault();
      scrollToHash(hash);
    } else {
      event.preventDefault();
      navigate(`/${hash}`);
    }
  }

  return (
    <Link to={`/${hash}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
