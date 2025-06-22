import NavLink from '@/components/widgets/NavLink';
import { routerName } from '@/lib/router/router';

export type RoutingProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  slug?: string;
};

export function HomeLink({
  className,
  onClick,
  children,
}: RoutingProps) {
  return (
    <NavLink href={routerName.home} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function AnPortfolioLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName['nguyen-hoang-an']} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function AnhPortfolioLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName['hoang-truong-kieu-anh']} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function BlogsLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink
      href={routerName.blogs}
      className={className}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export function DocumentsLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink
      href={routerName.documents}
      className={className}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export function PrivacyLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName.privacy} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function TermsLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName.terms} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function CoursesLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName.courses} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function AboutLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName.about} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export function WeddingInvitationLink({ className, onClick, children }: RoutingProps) {
  return (
    <NavLink href={routerName['wedding-invitation']} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}
