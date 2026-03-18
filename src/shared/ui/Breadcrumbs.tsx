import { Link } from 'react-router';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav className="flex items-center gap-2">
    {items.map((item, index) => {
      const isLast = index === items.length - 1;

      return (
        <div key={index} className="flex items-center gap-2">
          {isLast ? (
            <span className="text-body text-primary font-medium">{item.label}</span>
          ) : (
            <Link
              to={item.path ?? '/'}
              className="text-body text-neutral-300 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}

          {!isLast && <span className="text-neutral-300">/</span>}
        </div>
      );
    })}
  </nav>
);
