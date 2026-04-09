/**
 * Layout wrapper for section spacing. (Scroll-based fade-in was removed so content
 * is always visible without relying on IntersectionObserver.)
 */
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** @deprecated ignored — kept for call-site compatibility */
  stagger?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  return <div className={className}>{children}</div>;
}
