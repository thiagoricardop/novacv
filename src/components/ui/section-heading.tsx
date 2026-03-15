import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	theme?: "default" | "inverse";
};

export function SectionHeading({
	eyebrow,
	title,
	description,
	align = "left",
	theme = "default",
}: SectionHeadingProps) {
	const inverse = theme === "inverse";

	return (
		<div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
			{eyebrow ? (
				<p
					className={cn(
						"text-sm font-semibold uppercase tracking-[0.24em]",
						inverse ? "text-[#FFD84D]" : "text-brand-pink",
					)}
				>
					{eyebrow}
				</p>
			) : null}
			<h2
				className={cn(
					"font-display text-3xl font-bold leading-tight sm:text-4xl",
					inverse ? "text-white" : "text-brand-dark",
				)}
			>
				{title}
			</h2>
			{description ? (
				<p className={cn("max-w-3xl text-base leading-8", inverse ? "text-white/82" : "text-brand-dark")}>
					{description}
				</p>
			) : null}
		</div>
	);
}
