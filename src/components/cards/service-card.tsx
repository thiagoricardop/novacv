import type { ServiceItem } from "@/data/content";

import { Reveal } from "@/components/ui/reveal";

type ServiceCardProps = ServiceItem & {
	delay?: number;
};

export function ServiceCard({ title, description, bullets, icon: Icon, delay = 0 }: ServiceCardProps) {
	return (
		<Reveal delay={delay}>
			<article className="h-full rounded-4xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1">
				<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
					<Icon className="h-6 w-6" />
				</div>
				<h3 className="mt-5 font-display text-2xl font-bold text-brand-dark">{title}</h3>
				<p className="mt-3 text-sm leading-7 text-brand-dark">{description}</p>
				<ul className="mt-5 space-y-2">
					{bullets.map((item) => (
						<li key={item} className="rounded-2xl bg-brand-light px-3 py-2 text-xs font-semibold text-brand-blue">
							{item}
						</li>
					))}
				</ul>
			</article>
		</Reveal>
	);
}
