import { Star } from "lucide-react";

import type { TestimonialItem } from "@/data/content";

import { Reveal } from "@/components/ui/reveal";

type TestimonialCardProps = TestimonialItem & {
	delay?: number;
};

export function TestimonialCard({ name, business, city, text, delay = 0 }: TestimonialCardProps) {
	return (
		<Reveal delay={delay}>
			<article className="h-full rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
				<div className="mb-4 flex gap-1 text-[#F59E0B]">
					{Array.from({ length: 5 }).map((_, index) => (
						<Star key={index} className="h-4 w-4 fill-current" />
					))}
				</div>
				<p className="text-sm leading-7 text-brand-dark">“{text}”</p>
				<div className="mt-6 border-t border-slate-200 pt-4">
					<p className="font-display text-lg font-bold text-brand-dark">{name}</p>
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">{business}</p>
					<p className="mt-1 text-xs text-brand-dark/80">{city}</p>
				</div>
			</article>
		</Reveal>
	);
}
