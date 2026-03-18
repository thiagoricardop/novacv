"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { PortfolioItem } from "@/data/content";

import { Reveal } from "@/components/ui/reveal";

type PortfolioCardProps = PortfolioItem & {
	delay?: number;
};

const mediaHeights: Record<PortfolioItem["size"], string> = {
	sm: "h-56",
	md: "h-64",
	lg: "h-80",
};

export function PortfolioCard({ title, category, description, imageHint, images, gradient, size, delay = 0 }: PortfolioCardProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const hasImages = (images?.length ?? 0) > 0;
	const hasManyImages = (images?.length ?? 0) > 1;

	const currentImage = useMemo(() => {
		if (!hasImages || !images) {
			return "";
		}

		return images[currentIndex % images.length];
	}, [currentIndex, hasImages, images]);

	function handlePrevious() {
		if (!images?.length) {
			return;
		}

		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}

	function handleNext() {
		if (!images?.length) {
			return;
		}

		setCurrentIndex((prev) => (prev + 1) % images.length);
	}

	return (
		<Reveal delay={delay}>
			<article className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
				{hasImages ? (
					<div className={`relative ${mediaHeights[size]} overflow-hidden bg-slate-100`}>
						<Image
							src={currentImage}
							alt={imageHint}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
							className="object-contain p-4"
						/>
						<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_65%,rgba(17,20,45,.56))]" />

						{hasManyImages ? (
							<>
								<button
									type="button"
									onClick={handlePrevious}
									className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/45"
									aria-label="Imagem anterior"
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<button
									type="button"
									onClick={handleNext}
									className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/45"
									aria-label="Próxima imagem"
								>
									<ChevronRight className="h-5 w-5" />
								</button>
							</>
						) : null}

						{hasManyImages ? (
							<div className="absolute bottom-3 right-4 rounded-full bg-black/40 px-2 py-1 text-[11px] font-semibold text-white">
								{currentIndex + 1}/{images?.length}
							</div>
						) : null}
					</div>
				) : (
					<div className={`relative ${mediaHeights[size]} bg-gradient-to-br ${gradient}`}>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.28),transparent_35%)]" />
						<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,20,45,.38))]" />
					</div>
				)}
				<div className="space-y-3 p-6">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">{category}</p>
					<h3 className="font-display text-xl font-bold text-brand-dark">{title}</h3>
					<p className="text-sm leading-7 text-brand-dark">{description}</p>
				</div>
			</article>
		</Reveal>
	);
}
