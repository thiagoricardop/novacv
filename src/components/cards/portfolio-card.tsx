import type { PortfolioItem } from "@/data/content";

import { Reveal } from "@/components/ui/reveal";

type PortfolioCardProps = PortfolioItem & {
	delay?: number;
};

const mediaHeights: Record<PortfolioItem["size"], string> = {
	sm: "h-44",
	md: "h-56",
	lg: "h-72",
};

export function PortfolioCard({ title, category, description, imageHint, gradient, size, delay = 0 }: PortfolioCardProps) {
	return (
		<Reveal delay={delay}>
			<article className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
				<div className={`relative ${mediaHeights[size]} bg-gradient-to-br ${gradient}`}>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.28),transparent_35%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,20,45,.38))]" />
					<div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition duration-300 group-hover:bg-white/25">
						{imageHint}
					</div>
				</div>
				<div className="space-y-3 p-6">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">{category}</p>
					<h3 className="font-display text-xl font-bold text-brand-dark">{title}</h3>
					<p className="text-sm leading-7 text-brand-dark">{description}</p>
				</div>
			</article>
		</Reveal>
	);
}
