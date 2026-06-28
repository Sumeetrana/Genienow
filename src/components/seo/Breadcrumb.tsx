import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const all = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className="flex items-center gap-1.5 flex-wrap"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {all.map((item, index) => {
          const isLast = index === all.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 ? (
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Home"
                  itemProp="item"
                >
                  <Home size={14} />
                  <span className="sr-only" itemProp="name">{item.name}</span>
                </Link>
              ) : isLast ? (
                <span
                  className="text-slate-600 text-sm font-medium"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              {!isLast && (
                <ChevronRight size={13} className="text-slate-300 shrink-0" />
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
