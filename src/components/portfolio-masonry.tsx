"use client";

import { useMemo, useState } from "react";

import { PortfolioCard } from "@/components/cards/portfolio-card";
import type { PortfolioItem } from "@/data/content";
import { cn } from "@/lib/utils";

type PortfolioMasonryProps = {
  items: PortfolioItem[];
};

export function PortfolioMasonry({ items }: PortfolioMasonryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return ["Todos", ...unique];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todos") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-brand-dark">Filtrar por categoria</p>
        <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              activeCategory === category
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-slate-300 bg-white text-brand-dark hover:border-brand-pink hover:text-brand-pink",
            )}
          >
            {category}
          </button>
        ))}
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          {filteredItems.length} projeto(s) exibido(s)
        </p>
      </div>

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {filteredItems.map((item, index) => (
          <div key={`${item.title}-${activeCategory}`} className="mb-6 break-inside-avoid">
            <PortfolioCard {...item} delay={index * 0.03} />
          </div>
        ))}
      </div>
    </div>
  );
}
